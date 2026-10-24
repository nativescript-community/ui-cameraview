package com.nativescript.cameraview

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.*
import android.hardware.camera2.*
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.os.SystemClock
import android.provider.MediaStore
import android.util.AttributeSet
import android.util.Log
import android.view.MotionEvent
import android.view.ScaleGestureDetector
import androidx.annotation.OptIn
import androidx.camera.camera2.interop.Camera2CameraInfo
import androidx.camera.camera2.interop.ExperimentalCamera2Interop
import androidx.camera.core.*
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST
import androidx.camera.core.resolutionselector.AspectRatioStrategy
import androidx.camera.core.resolutionselector.ResolutionSelector
import androidx.camera.core.resolutionselector.ResolutionStrategy
import androidx.camera.extensions.ExtensionsManager
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.video.*
import androidx.camera.view.PreviewView
import androidx.core.content.ContextCompat
import androidx.exifinterface.media.ExifInterface
import androidx.lifecycle.LifecycleOwner
import com.google.common.util.concurrent.ListenableFuture
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.text.ParseException
import java.text.SimpleDateFormat
import java.util.*
import java.util.concurrent.CountDownLatch
import java.util.concurrent.ExecutorService
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean
import kotlin.math.max
import kotlin.math.min


typealias CameraAnalyzerListener = (image: ImageProxy) -> Unit

@Suppress("UNUSED_PARAMETER")
@OptIn(ExperimentalCamera2Interop::class)
public class CameraView
@JvmOverloads
constructor(context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0) :
    CameraBase(context, attrs, defStyleAttr) {

    companion object {
        private const val TAG = "CameraView"

        // how long a `focusAtPoint` focus lock is considered still valid.
        // Mirrors the CameraX default `FocusMeteringAction` auto cancel duration
        private const val MANUAL_FOCUS_VALIDITY_MS = 5000L

        /**
         * One thread that exits when idle. A plain single thread executor keeps its thread for the
         * life of the process, and there is no safe moment to shut it down: the recorder still
         * posts its finalization after the view is released.
         */
        private fun newIdleExecutor(): ExecutorService =
            ThreadPoolExecutor(1, 1, 10, TimeUnit.SECONDS, LinkedBlockingQueue<Runnable>()).apply {
                allowCoreThreadTimeOut(true)
            }

        fun deviceHasCamera(context: Context): Boolean {
            val cameraManager =  context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
            return cameraManager.getCameraIdList().size > 0
        }
    }

    //    private var aspectRatioStrategy: AspectRatioStrategy? =
    // AspectRatioStrategy(AspectRatio.RATIO_4_3, AspectRatioStrategy.FALLBACK_RULE_AUTO)
    private var cameraProvider: ProcessCameraProvider? = null
    private var extensionsManager: ExtensionsManager? = null
    private var imageCapture: ImageCapture? = null
    private var imageAnalysis: ImageAnalysis? = null
    private var videoCapture: VideoCapture<Recorder>? = null
    private var imageAnalysisExecutor = newIdleExecutor()
    private var imageCaptureExecutor = newIdleExecutor()
    private var videoCaptureExecutor = newIdleExecutor()
    private var camera: androidx.camera.core.Camera? = null
    private var preview: Preview? = null
    private var previewView: PreviewView = PreviewView(context, attrs, defStyleAttr)
    private var isStarted = false
    private var bindindProvider = false
    private var isRecording = false
    private var file: File? = null
    private var isForceStopping = false
    private var mLock = Any()
    private var cameraManager: CameraManager? = null
    private var scaleGestureDetector: ScaleGestureDetector? = null
    private var recording: Recording? = null
    private var isZooming = false

    override var allowExifRotation: Boolean = true
    var savePhotoToDisk: Boolean = true
    override var autoSquareCrop: Boolean = false
    override var autoFocus: Boolean = false
    override var saveToGallery: Boolean = false
    override var maxAudioBitRate: Int = -1
    override var maxVideoBitrate: Int = -1
    override var maxVideoFrameRate: Int = -1
    override var disableHEVC: Boolean = false


//    private val cameraController: LifecycleCameraController
//        get() = cameraManager.cameraController

    var analyserCallback: ImageAnalysisCallback? = null
        @SuppressLint("UnsafeOptInUsageError")
        set(value) {
            field = value
            if (!isRecording && hasPermission()) {
                setUpAnalysis()
                if (value == null) {
                    if (imageAnalysis != null && cameraProvider?.isBound(imageAnalysis!!) == true) {
                        cameraProvider?.unbind(imageAnalysis!!)
                    }
                } else {
                    if (cameraProvider?.isBound(imageAnalysis!!) == false) {
                        camera =
                            cameraProvider?.bindToLifecycle(
                                context as LifecycleOwner,
                                selectCamera(),
                                imageAnalysis
                            )
                    }
                }
            }
        }

//    override var retrieveLatestImage: Boolean = false
//        set(value) {
//            field = value
//            if (!value && latestImage != null) {
//                latestImage = null
//            }
//        }

    override var pause: Boolean = false
        set(value) {
            field = value
            if (value) {
                stopPreview()
            } else {
                startPreview()
            }
        }

    var frontMirrored: Boolean = true
        set(value) {
            field = value
            if (!value && position == CameraSelector.LENS_FACING_FRONT) {
                previewView.setImplementationMode(PreviewView.ImplementationMode.COMPATIBLE)
                previewView.scaleX = -1f  // Mirror horizontally
            } else {
                previewView.setImplementationMode(PreviewView.ImplementationMode.PERFORMANCE)
                previewView.scaleX = 1f 
            }
        }

    private fun handleZoom() {
        camera?.cameraControl?.let {
            val future = it.setZoomRatio(zoom.coerceIn(minZoom, maxZoom))
            future?.addListener(
                {
                    try {
                        future.get()
                    } catch (e: Exception) {
                        // e.printStackTrace()
                    }
                },
                ContextCompat.getMainExecutor(context)
            )
        }


    }

    override val previewSurface: Any
        get() {
            return previewView
        }
    private var zoomField: Float = 1.0F
    override var zoom: Float
        get() = zoomField
        set(value) {
            zoomField = value
            handleZoom()
        }

    /** What the camera is actually at: [zoom] is only the last value written, which the control coerces and a pinch moves. */
    val zoomRatio: Float
        get() = camera?.cameraInfo?.zoomState?.value?.zoomRatio ?: zoomField

    var minZoom: Float = 1.0F
        get() {
            val zoomState = camera?.cameraInfo?.zoomState?.value
            if (zoomState != null) {
                return zoomState.minZoomRatio
            }
            return 1.0F
        }
    var maxZoom: Float = 1.0F
        get() {
            val zoomState = camera?.cameraInfo?.zoomState?.value
            if (zoomState != null) {
                return zoomState.maxZoomRatio
            }
            return 1.0F
        }
    override var whiteBalance: WhiteBalance = WhiteBalance.Auto
        set(value) {
            field = value
            clearImageCapture()
        }

    //    override var displayRatio: String? = null
//        set(value) {
//            if (value == field) return
//            field =
//                when (value) {
//                    "16:9" -> {
//                        value
//                    }
//
//                    "4:3" -> value
//                    else -> return
//                }
//            if (!isRecording) {
//                safeUnbindAll()
//                refreshCamera()
//            }
//        }
    override var aspectRatio: String? = null
        set(value) {
            if (value == field) return
            field =
                when (value) {
                    "16:9" -> {
                        value
                    }

                    "4:3" -> value
                    else -> return
                }
            triggerRefreshCamera()

        }
    private val job = SupervisorJob()
    private val scope = CoroutineScope(Dispatchers.Main + job)
    private var refreshCameraJob: Job? = null
    var refreshCameraDelay = 100L
    private var ignoreRefresh = false
    private fun triggerRefreshCamera() {
        if (!isStarted || ignoreRefresh) {
            return;
        }
        if (refreshCameraJob != null) {
            refreshCameraJob!!.cancel()
        }
        refreshCameraJob = scope.launch {
            delay(refreshCameraDelay)
            refreshCameraJob = null
            if (!isRecording) {
                safeUnbindAll()
                refreshCamera()
            }
        }
    }

    override var pictureSize: String? = null
        get() {
//            if (field == "0x0" || field == null) {
//                if (imageCapture != null) {
//                    val resolution = imageCapture!!.resolutionInfo?.resolution
//                    if (resolution !=null ){
//                        return "${resolution.width}x${resolution.height}"
//                    }
//                }
//            }
            return field
        }
        set(value) {
            if (value == field) return
            field = value
            if (value != null) {
                val size = stringSizeToSize(value)
                if (size != null) {
                    aspectRatio = aspectRatio(size.width, size.height)
                } else if (previewView != null) {
                    aspectRatio = aspectRatio(previewView.width, previewView.height)
                }
            }
            triggerRefreshCamera()
        }

    /**
     * The PREVIEW stream's geometry - [getCurrentResolutionInfo] describes the still capture instead.
     * CameraX picks this resolution itself, so an application cannot compute it. Empty object when no
     * camera is bound: reporting zeroes would read as a size.
     */
    fun getPreviewInfo(): String {
        val result = JSONObject()
        val info = preview?.resolutionInfo ?: return result.toString()
        result.put("width", info.resolution.width)
        result.put("height", info.resolution.height)
        result.put("rotation", info.rotationDegrees)
        result.put("cropWidth", info.cropRect.width())
        result.put("cropHeight", info.cropRect.height())
        result.put("scaleType", previewView.scaleType.name)
        result.put("zoomRatio", zoomRatio.toDouble())
        return result.toString()
    }

    fun getCurrentResolutionInfo(): String {
        val result = JSONObject()
        result.put("aspectRatio", aspectRatio)
        var pictureSize = pictureSize
        if ((pictureSize == null || pictureSize == "0x0") && imageCapture != null) {
            val resolution = imageCapture!!.resolutionInfo?.resolution
            if (resolution != null) {
                pictureSize = "${resolution.width}x${resolution.height}"
            }
        }
        if (pictureSize != null && pictureSize != "0x0") {
            val size = stringSizeToSize(pictureSize)
            result.put("width", size!!.width)
            result.put("height", size!!.height)
            result.put("pictureSize", pictureSize)
        }
        return result.toString()
    }

    /**
     * The PreviewView's own value, not a field: a property initialiser assigns the backing field
     * directly, so `= FIT_CENTER` never reached the PreviewView and the getter reported FIT_CENTER
     * while CameraX was still on its FILL_CENTER default.
     */
    override var scaleType: PreviewView.ScaleType
        get() {
            return previewView.scaleType
        }
        set(value) {
            previewView.scaleType = value
        }

    var jpegQuality: Int = 0
        set(value) {
            field = value
            clearImageCapture()
        }
    var captureMode: Int = ImageCapture.CAPTURE_MODE_MINIMIZE_LATENCY
        set(value) {
            field = value
            clearImageCapture()
        }

    // when enabled the shutter waits for the auto focus to converge before taking the photo
    var focusBeforeCapture: Boolean = true
    // max time we wait for the auto focus to converge before taking the photo anyway
    var focusBeforeCaptureTimeout: Long = 1000L
    private var lastManualFocusTime: Long = 0

    override var flashMode: CameraFlashMode = CameraFlashMode.OFF
        get() {
            return field as CameraFlashMode
        }
        set(value) {
            field = value
            updateFlashMode(field)
        }

    private fun getImageCaptureFlashMode(flashMode: CameraFlashMode): Int {
        return when (flashMode) {
            CameraFlashMode.OFF -> ImageCapture.FLASH_MODE_OFF
            CameraFlashMode.ON, CameraFlashMode.RED_EYE -> ImageCapture.FLASH_MODE_ON
            CameraFlashMode.AUTO -> ImageCapture.FLASH_MODE_AUTO
            CameraFlashMode.TORCH -> ImageCapture.FLASH_MODE_OFF
        }
    }

    private fun updateFlashMode(flashMode: CameraFlashMode) {
        camera?.let {
            imageCapture?.flashMode = getImageCaptureFlashMode(flashMode)
            it.cameraControl.enableTorch(flashMode == CameraFlashMode.TORCH)
        }
    }


    fun setFlashMode(value: String?) {
        if (value != null) {
            flashMode = CameraFlashMode.from(value)
        } else {
            flashMode = CameraFlashMode.OFF
        }
    }

    fun setFlashMode(value: Int?) {
        if (value != null) {
            flashMode = CameraFlashMode.from(value)
        } else {
            flashMode = CameraFlashMode.OFF
        }
    }

    private fun handlePinchZoom() {
        if (!enablePinchZoom) {
            return
        }
        val listener: ScaleGestureDetector.SimpleOnScaleGestureListener =
            object : ScaleGestureDetector.SimpleOnScaleGestureListener() {
                override fun onScale(detector: ScaleGestureDetector): Boolean {
                    isZooming = true
                    camera?.cameraInfo?.zoomState?.value?.let { zoomState ->
                        // the control rejects a ratio outside the range, and JS would be told one
                        val zoom = (detector.scaleFactor * zoomState.zoomRatio)
                            .coerceIn(zoomState.minZoomRatio, zoomState.maxZoomRatio)
                        camera?.cameraControl?.setZoomRatio(zoom)
                        // The field, not the setter, which would call setZoomRatio again
                        this@CameraView.zoomField = zoom
                        listener?.onZoom(zoom)
                    }
                    return true
                }
            }
        scaleGestureDetector = ScaleGestureDetector(context, listener)
        previewView.setOnTouchListener { view, event ->
            scaleGestureDetector?.onTouchEvent(event)
            if (event.action == MotionEvent.ACTION_UP) {
                // the end of a pinch is not a click
                if (isZooming) isZooming = false else view.performClick()
            }
            true
        }
    }

    override var enablePinchZoom: Boolean = true
        set(value) {
            field = value
            if (value) {
                handlePinchZoom()
            } else {
                scaleGestureDetector = null
                isZooming = false
            }
        }

    init {
        handlePinchZoom()

        previewView.afterMeasured {
            if (aspectRatio == null) {
                aspectRatio = aspectRatio(previewView.width, previewView.height)
            }
            if (autoFocus) {
                startAutoFocus()
            }
        }
        addView(previewView)
//        previewView.controller = cameraController
    }

    fun focusAtPoint(x: Float, y: Float) {
        try {
            val autoFocusPoint = previewView.meteringPointFactory.createPoint(x, y)
            val focusBuilder = FocusMeteringAction.Builder(autoFocusPoint)
            focusBuilder.disableAutoCancel()
            camera?.cameraControl?.startFocusAndMetering(focusBuilder.build())
            lastManualFocusTime = SystemClock.elapsedRealtime()
        } catch (e: CameraInfoUnavailableException) {
            Log.e("ERROR", "cannot access camera", e)
        }
    }

    /**
     * Runs [action] once the auto focus has converged, or once [focusBeforeCaptureTimeout] is
     * reached. Runs it right away if the focus is disabled or if the user recently focused
     * manually through [focusAtPoint] (in which case we must not override their focus point).
     */
    private fun runAfterFocus(retries: Int = 1, action: () -> Unit) {
        val cameraControl = camera?.cameraControl
        val manualFocusActive =
            SystemClock.elapsedRealtime() - lastManualFocusTime < MANUAL_FOCUS_VALIDITY_MS
        if (!focusBeforeCapture || !autoFocus || cameraControl == null || manualFocusActive) {
            action()
            return
        }
        val done = AtomicBoolean(false)
        val runOnce = { if (done.compareAndSet(false, true)) action() }
        val autoFocusPoint = SurfaceOrientedMeteringPointFactory(1f, 1f).createPoint(.5f, .5f)
        val focusAction = FocusMeteringAction.Builder(autoFocusPoint, FocusMeteringAction.FLAG_AF)
            .disableAutoCancel()
            .build()
        try {
            val future = cameraControl.startFocusAndMetering(focusAction)
            future.addListener({
                // `get` throws when the request was dropped, for example because the capture
                // session was still being reconfigured. In that case focus did not converge
                // so retry instead of taking a blurry photo right away
                val failed = try {
                    future.get()
                    false
                } catch (e: Exception) {
                    true
                }
                if (failed && retries > 0 && !done.get()) {
                    runAfterFocus(retries - 1) { runOnce() }
                } else {
                    runOnce()
                }
            }, ContextCompat.getMainExecutor(context))
            scope.launch {
                delay(focusBeforeCaptureTimeout)
                runOnce()
            }
        } catch (e: Exception) {
            Log.e(TAG, "failed to focus before capture", e)
            runOnce()
        }
    }

    fun startAutoFocus() {
        val autoFocusPoint = SurfaceOrientedMeteringPointFactory(1f, 1f).createPoint(.5f, .5f)
        try {
            val autoFocusAction =
                FocusMeteringAction.Builder(autoFocusPoint, FocusMeteringAction.FLAG_AF)
                    .apply {
                        // start auto-focusing after 2 seconds
                        setAutoCancelDuration(2, TimeUnit.SECONDS)
                    }
                    .build()
            camera?.cameraControl?.startFocusAndMetering(autoFocusAction)
        } catch (e: CameraInfoUnavailableException) {
            Log.e("ERROR", "cannot access camera", e)
        }
    }

    override val numberOfCameras: Int
        get() {
            if (cameraManager == null) {
                cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager?
            }
            var count = 0
            try {
                count = cameraManager?.cameraIdList?.size ?: 0
            } catch (_: CameraAccessException) {
            }
            return count
        }

    val cameras: List<Camera>
        get() = if (cameraProvider != null) cameraProvider!!.availableCameraInfos.map {
            Camera(it, extensionsManager!!)
        }?.sortedBy { it.cameraId }!! else listOf()

    private fun getFlashMode(): Int {
        return when (flashMode) {
            CameraFlashMode.AUTO -> ImageCapture.FLASH_MODE_AUTO
            CameraFlashMode.ON -> ImageCapture.FLASH_MODE_ON
            else -> ImageCapture.FLASH_MODE_OFF
        }
    }

    override var position: Int = CameraSelector.LENS_FACING_BACK
    var cameraId: String? = null
        set(value) {
            field = value
            safeUnbindAll()
            refreshCamera()
        }


    private fun selectCamera(): CameraSelector {
        if (cameraId != null) {
            val availableCameraInfos = cameras
            if (availableCameraInfos != null) {

                val cameraInfo = availableCameraInfos.firstOrNull {
                    it.cameraFacing == position && it.cameraId == cameraId
                }
                if (cameraInfo != null) {
                    return cameraInfo.cameraSelector
                }
            }
        }
        val cam2Infos =
            cameraProvider!!.availableCameraInfos.filter { it.lensFacing == position }.map {
                Camera2CameraInfo.from(it)
            }.sortedByDescending {
                // HARDWARE_LEVEL is Int type, with the order of:
                // LEGACY < LIMITED < FULL < LEVEL_3 < EXTERNAL
                it.getCameraCharacteristic(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL)
            }
        return when {
//            cam2Infos.isNotEmpty() -> {
//                CameraSelector.Builder()
//                    .addCameraFilter {
//                        it.filter { camInfo ->
//                            // cam2Infos[0] is either EXTERNAL or best built-in camera
//                            val thisCamId = Camera2CameraInfo.from(camInfo).cameraId
//                            thisCamId == cam2Infos[0].cameraId
//                        }
//                    }.build()
//            }
            else -> CameraSelector.Builder()
                .apply {
                    requireLensFacing(position)
                }
                .build()
        }
    }


    /**
     * Rotation specified by client (external code) TODO: link this to the code, overriding or
     * affecting targetRotation logic
     */
    override var rotation: CameraOrientation = CameraOrientation.UNKNOWN

    @SuppressLint("RestrictedApi", "UnsafeExperimentalUsageError")
    override fun orientationUpdated() {

        imageCapture?.targetRotation = currentRotation
        videoCapture?.setTargetRotation(currentRotation)
        imageAnalysis?.targetRotation = currentRotation
    }

    private fun safeUnbindAll() {
        try {
            cameraProvider?.unbindAll()
        } catch (_: Exception) {
        } finally {
            if (isStarted) {
                listener?.onCameraClose()
            }
            isStarted = false
        }
    }

    override var quality: Quality = Quality.MAX_480P
        set(value) {
            if (!isRecording && field != value) {
                field = value
                // The recorder bakes the quality in, so the old use case goes. startRecording
                // builds and binds the next one.
                videoCapture?.let { oldVideoCapture ->
                    cameraProvider?.let { provider ->
                        if (provider.isBound(oldVideoCapture)) {
                            provider.unbind(oldVideoCapture)
                        }
                    }
                    videoCapture = null
                }
            }
        }
    override var db: Double
        get() {
            return 0.0
        }
        set(value) {}
    override var amplitude: Double
        get() {
            return 0.0
        }
        set(value) {}
    override var amplitudeEMA: Double
        get() {
            return 0.0
        }
        set(value) {}
    override var isAudioLevelsEnabled: Boolean
        get() {
            return false
        }
        set(value) {}

    /**
     * [androidx.camera.core.ImageAnalysis.Builder] requires enum value of
     * [androidx.camera.core.AspectRatio]. Currently it has values of 4:3 & 16:9.
     *
     * Detecting the most suitable ratio for dimensions provided in @params by counting absolute of
     * preview ratio to one of the provided values.
     *
     * @param width
     * - preview width
     * @param height
     * - preview height
     * @return suitable aspect ratio
     */
    private fun aspectRatio(width: Int, height: Int): String = AspectRatios.nearestSupported(width, height)

    @SuppressLint("UnsafeOptInUsageError")
    private fun setUpAnalysis() {
        if (imageAnalysis != null || analyserCallback == null) {
            return
        }
        val builder =
            ImageAnalysis.Builder().apply {
                setTargetRotation(currentRotation)
                setBackpressureStrategy(STRATEGY_KEEP_ONLY_LATEST)
                setResolutionSelector(
                    ResolutionSelector.Builder()
                        .setAspectRatioStrategy(
                            AspectRatioStrategy(
                                when (aspectRatio) {
                                    "16:9" -> AspectRatio.RATIO_16_9
                                    else -> AspectRatio.RATIO_4_3
                                }, AspectRatioStrategy.FALLBACK_RULE_AUTO
                            )
                        )
                        .build()
                )
//                setTargetAspectRatio(
//                    when (aspectRatio) {
//                        "16:9" -> AspectRatio.RATIO_16_9
//                        else -> AspectRatio.RATIO_4_3
//                    }
//                )
            }
        imageAnalysis = builder.build()
        imageAnalysis?.setAnalyzer(
            imageAnalysisExecutor,
            CameraAnalyzer setAnalyzer@{
                try {
                    if (it.image != null && !isZooming && analyserCallback != null) {
                        val latch = CountDownLatch(1)
                        val processor = ImageAsyncProcessor(latch)
                        analyserCallback!!.process(it!!, it.imageInfo, processor)
                        latch.await()
                    }
                } finally {
                    it.close()
                }
            }
        )
    }

    private var cachedPictureRatioSizeMap: MutableMap<String, MutableSet<Size>> = HashMap()
//    private var cachedPreviewRatioSizeMap: MutableMap<String, MutableSet<Size>> = HashMap()

    @SuppressLint("UnsafeOptInUsageError")
    private fun updateImageCapture(options: PhotoOptions?, force: Boolean? = false) {
        val optionsPictureSize = options?.pictureSize
        val needsNewImageCapture =
            (optionsPictureSize != null && optionsPictureSize != pictureSize) ||
                    (options?.aspectRatio != null && options.aspectRatio != aspectRatio) ||
                    (options?.jpegQuality != null && options.jpegQuality != jpegQuality) ||
                    (options?.captureMode != null && options.captureMode != captureMode)
        if (!needsNewImageCapture && imageCapture != null) {

            return
        }
        val builder =
            ImageCapture.Builder().apply {
                setTargetRotation(options?.targetRotation ?: currentRotation)

                val optionAspectRatio = options?.aspectRatio ?: aspectRatio
                var pictureSize = optionsPictureSize ?: pictureSize

                var resolutionSelectorBuilder = ResolutionSelector.Builder()
                    .setAllowedResolutionMode(
                        ResolutionSelector.PREFER_HIGHER_RESOLUTION_OVER_CAPTURE_RATE
                    )
                if (optionAspectRatio != null) {
                    resolutionSelectorBuilder = resolutionSelectorBuilder.setAspectRatioStrategy(
                        AspectRatioStrategy(
                            when (optionAspectRatio) {
                                "16:9" -> AspectRatio.RATIO_16_9
                                else -> AspectRatio.RATIO_4_3
                            }, AspectRatioStrategy.FALLBACK_RULE_AUTO
                        )
                    )
                } else {
                    resolutionSelectorBuilder.setAspectRatioStrategy(
                        AspectRatioStrategy(
                            AspectRatio.RATIO_4_3,
                            AspectRatioStrategy.FALLBACK_RULE_AUTO
                        )
                    )
                }
                if (pictureSize != null && pictureSize != "0x0") {
                    resolutionSelectorBuilder = resolutionSelectorBuilder.setResolutionStrategy(
                        ResolutionStrategy(
                            android.util.Size.parseSize(pictureSize),
                            ResolutionStrategy.FALLBACK_RULE_CLOSEST_HIGHER_THEN_LOWER
                        )
                    )
                }
                setResolutionSelector(resolutionSelectorBuilder.build())
                setCaptureMode(options?.captureMode ?: captureMode)

                setFlashMode(
                    getImageCaptureFlashMode(
                        options?.flashMode?.let { CameraFlashMode.from(it) } ?: flashMode
                    )
                )
                val quality = options?.jpegQuality ?: jpegQuality
                if (quality > 0) {
                    setJpegQuality(quality)
                }
            }

//        val extender = Camera2Interop.Extender(builder)
//
//        when (whiteBalance) {
//            WhiteBalance.Auto -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_AUTO
//                )
//            }
//            WhiteBalance.Sunny -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_DAYLIGHT
//                )
//            }
//            WhiteBalance.Cloudy -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_CLOUDY_DAYLIGHT
//                )
//            }
//            WhiteBalance.Shadow -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_SHADE
//                )
//            }
//            WhiteBalance.Twilight -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_TWILIGHT
//                )
//            }
//            WhiteBalance.Fluorescent -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_FLUORESCENT
//                )
//            }
//            WhiteBalance.Incandescent -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_INCANDESCENT
//                )
//            }
//            WhiteBalance.WarmFluorescent -> {
//                extender.setCaptureRequestOption(
//                    CaptureRequest.CONTROL_AWB_MODE,
//                    CameraMetadata.CONTROL_AWB_MODE_WARM_FLUORESCENT
//                )
//            }
//        }

        clearImageCapture()
        // remember the size we just configured so that taking another photo with the same
        // `pictureSize` option does not rebuild/rebind the `ImageCapture`.
        // Rebinding recreates the capture session which resets the focus
        if (optionsPictureSize != null && optionsPictureSize != pictureSize) {
            ignoreRefresh = true
            pictureSize = optionsPictureSize
            ignoreRefresh = false
        }
        imageCapture = builder.build()
        cameraProvider?.bindToLifecycle(
            context as LifecycleOwner,
            selectCamera(),
            imageCapture!!
        )
    }

    private fun clearImageCapture() {
        if (imageCapture != null) {
            if (cameraProvider?.isBound(imageCapture!!) ?: false) {
                cameraProvider?.unbind(imageCapture)
                imageCapture = null
            }
        }
    }

    private fun initPreview() {
        preview =
            Preview.Builder()
                .apply {
                    setTargetRotation(currentRotation)
                    setResolutionSelector(
                        ResolutionSelector.Builder().apply {
                            setAspectRatioStrategy(
                                AspectRatioStrategy(
                                    when (aspectRatio) {
                                        "16:9" -> AspectRatio.RATIO_16_9
                                        else -> AspectRatio.RATIO_4_3
                                    }, AspectRatioStrategy.FALLBACK_RULE_AUTO
                                )
                            )
//                            if (pictureSize != null && pictureSize != "0x0") {
//                                setResolutionStrategy(
//                                    ResolutionStrategy(
//                                        android.util.Size.parseSize(pictureSize),
//                                        ResolutionStrategy.FALLBACK_RULE_CLOSEST_HIGHER_THEN_LOWER
//                                    )
//                                )
//                            }
                        }.build()
                    )
                }
                .build()
                .also { it.setSurfaceProvider(previewView.surfaceProvider) }
        // Must unbind the use-cases before rebinding them
        cameraProvider?.unbindAll()
        try {
            camera =
                if (imageAnalysis != null) {

                    cameraProvider?.bindToLifecycle(
                        context as LifecycleOwner,
                        selectCamera(),
                        preview,
                        imageAnalysis
                    )
                } else {
                    cameraProvider?.bindToLifecycle(
                        context as LifecycleOwner,
                        selectCamera(),
                        preview
                    )
                }
        } catch (exc: Exception) {
            Log.e("JS", "Use case binding failed", exc)
        }
        listener?.onReady()
    }

    internal fun getRecorderQuality(quality: Quality): androidx.camera.video.Quality {
        return when (quality) {
            Quality.MAX_480P -> androidx.camera.video.Quality.SD
            Quality.MAX_720P -> androidx.camera.video.Quality.HD
            Quality.MAX_1080P -> androidx.camera.video.Quality.FHD
            Quality.MAX_2160P -> androidx.camera.video.Quality.UHD
            Quality.HIGHEST -> androidx.camera.video.Quality.HIGHEST
            Quality.LOWEST -> androidx.camera.video.Quality.LOWEST
            Quality.QVGA -> androidx.camera.video.Quality.LOWEST
        }
    }

    @SuppressLint("RestrictedApi")
    private fun initVideoCapture() {
        if (pause) {
            return
        }
        if (hasCameraPermission() && hasAudioPermission()) {
            //            val profile = getCamcorderProfile(quality)

            val recorder =
                Recorder.Builder()
                    .setQualitySelector(
                        QualitySelector.from(
                            getRecorderQuality(quality),
                            FallbackStrategy.lowerQualityOrHigherThan(
                                androidx.camera.video.Quality.SD
                            )
                        )
                    )
                    .setExecutor(videoCaptureExecutor)
                    .build()

            videoCapture =
                VideoCapture.withOutput(recorder).apply { targetRotation = currentRotation }
        }
    }

    @SuppressLint("RestrictedApi", "UnsafeOptInUsageError")
    fun refreshCamera() {
        if (pause || !hasCameraPermission() || bindindProvider) {
            return
        }

        if (cameraProvider == null) {
            bindindProvider = true
            val cameraProviderFuture = ProcessCameraProvider.getInstance(context)
            cameraProviderFuture.addListener(
                {
                    CoroutineScope(Dispatchers.IO).launch {
                        try {
                            cameraProvider = cameraProviderFuture.get()
                            extensionsManager =
                                ExtensionsManager.getInstanceAsync(context, cameraProvider!!).get()
                            bindindProvider = false
                            withContext(Dispatchers.Main) {
                                refreshCamera()
                            }
                        } catch (e: Exception) {
                            e.printStackTrace()
                            listener?.onCameraError("Failed to get camera", e)
                            isStarted = false
                        }
                    }
                },
                ContextCompat.getMainExecutor(context)
            )
            return
        }
        cachedPictureRatioSizeMap.clear()
        //        cachedPreviewRatioSizeMap.clear()

        // the camera is fully rebuilt, any manual focus lock is lost
        lastManualFocusTime = 0
        videoCapture = null
        imageCapture = null
        imageAnalysis?.clearAnalyzer()
        imageAnalysis = null
        preview?.setSurfaceProvider(null)
        preview = null
        safeUnbindAll()
        setUpAnalysis()
        initPreview()
        initVideoCapture()
        handleZoom()
        updateImageCapture(null, true)

        if (flashMode == CameraFlashMode.TORCH && camera?.cameraInfo?.hasFlashUnit() == true) {
            camera?.cameraControl?.enableTorch(true)
        }
        if (imageCapture != null && pictureSize == null) {
            val resolution = imageCapture!!.resolutionInfo?.resolution
            if (resolution != null) {
                ignoreRefresh = true
                pictureSize = "${resolution.width}x${resolution.height}"
                ignoreRefresh = false
            }
        }

        isStarted = true
        listener?.onCameraOpen()
    }

    override fun startPreview() {
        if (!isStarted) {
            refreshCamera()
        }
    }

    override fun stopPreview() {
        if (isStarted) {
            safeUnbindAll()
        }
    }

    @SuppressLint("RestrictedApi", "MissingPermission")
    override fun startRecording() {
        if (!hasAudioPermission() || !hasCameraPermission()) {
            return
        }
        deInitListener()
        val df = SimpleDateFormat("yyyyMMddHHmmss", Locale.US)
        val today = Calendar.getInstance().time
        val fileName = "VID_" + df.format(today) + ".mp4"
        file =
            if (saveToGallery && hasStoragePermission()) {
                val externalDir = context.getExternalFilesDir(Environment.DIRECTORY_DCIM)
                if (externalDir == null) {
                    listener?.onCameraError(
                        "Cannot save video to gallery",
                        Exception("Failed to create uri")
                    )
                    return
                } else {
                    if (!externalDir.exists()) {
                        externalDir.mkdirs()
                    }
                    File(externalDir, fileName)
                }
            } else {
                File(context.getExternalFilesDir(null), fileName)
            }

        try {
            if (videoCapture == null) {
                initVideoCapture()
            }
            cameraProvider?.let { provider ->
                imageCapture?.let { if (provider.isBound(it)) provider.unbind(it) }

                videoCapture?.let {
                    if (!provider.isBound(it)) {
                        provider.bindToLifecycle(context as LifecycleOwner, selectCamera(), it)
                    }
                }
            }

            val opts = FileOutputOptions.Builder(file!!).build()

            val pending = videoCapture?.output?.prepareRecording(context, opts)

            if (enableAudio) {
                pending?.withAudioEnabled()
            }

            recording =
                pending?.start(ContextCompat.getMainExecutor(context)) { event ->
                    when (event) {
                        is VideoRecordEvent.Start -> {
                            isRecording = true
                            if (flashMode == CameraFlashMode.ON) {
                                camera?.cameraControl?.enableTorch(true)
                            }
                            startDurationTimer()
                            listener?.onCameraVideoStart()
                        }

                        is VideoRecordEvent.Finalize -> {
                            isRecording = false
                            stopDurationTimer()

                            if (event.hasError()) {
                                file = null
                                val e =
                                    if (event.cause != null) {
                                        Exception(event.cause)
                                    } else {
                                        Exception()
                                    }
                                listener?.onCameraError("${event.error}", e)
                                if (isForceStopping) {
                                    ContextCompat.getMainExecutor(context).execute {
                                        safeUnbindAll()
                                    }

                                    synchronized(mLock) { isForceStopping = false }
                                }
                            } else {
                                if (isForceStopping) {
                                    if (file != null) {
                                        file!!.delete()
                                    }
                                    ContextCompat.getMainExecutor(context).execute {
                                        safeUnbindAll()
                                    }
                                    synchronized(mLock) { isForceStopping = false }
                                } else {
                                    if (saveToGallery && hasStoragePermission()) {
                                        try {
                                            MediaStoreWriter.copyToGallery(
                                                context,
                                                file!!,
                                                MediaStore.Video.Media.EXTERNAL_CONTENT_URI,
                                                fileName,
                                                "video/mp4"
                                            )
                                            listener?.onCameraVideo(file)
                                        } catch (e: Exception) {
                                            listener?.onCameraError("Failed to add video to gallery", e)
                                        }
                                    } else {
                                        listener?.onCameraVideo(file)
                                    }
                                }
                            }
                        }
                    }
                }
        } catch (e: Exception) {
            isRecording = false
            stopDurationTimer()
            if (file != null) {
                file!!.delete()
            }
            cameraProvider?.let { provider ->
                videoCapture?.let { if (provider.isBound(it)) provider.unbind(it) }
                imageCapture?.let { if (provider.isBound(it)) provider.unbind(it) }
            }
            isForceStopping = false
            listener?.onCameraError("Failed to record video.", e)
        }
    }

    @SuppressLint("RestrictedApi")
    override fun stopRecording() {
        if (flashMode == CameraFlashMode.ON) {
            camera?.cameraControl?.enableTorch(false)
        }
        recording?.stop()
    }

    override fun takePhoto(jsonStringOptions: String?) {
        val options = PhotoOptions.parse(jsonStringOptions)
        val autoSquareCrop = options?.autoSquareCrop ?: autoSquareCrop
        val saveToGallery = options?.saveToGallery ?: saveToGallery
        val savePhotoToDisk = options?.savePhotoToDisk ?: savePhotoToDisk
        val allowExifRotation = options?.allowExifRotation ?: allowExifRotation
        val returnImageProxy = options?.returnImageProxy ?: false
        val removeExifAfterCapture = options?.removeExifAfterCapture ?: true
        val storageLocation = options?.storageLocation ?: context.cacheDir.toURI().toString()
        val maxWidth = options?.maxWidth ?: -1
        val maxHeight = options?.maxHeight ?: -1
        val fileName = options?.fileName
            ?: ("PIC_" + SimpleDateFormat("yyyyMMddHHmmss", Locale.US).format(Calendar.getInstance().time))
        if (imageCapture == null || options != null) updateImageCapture(options)
        if (cameraProvider == null || imageCapture == null) {
            listener?.onCameraError(
                "Cannot take photo",
                Exception("imageCapture not set")
            )
            return
        }
        videoCapture?.let { if (cameraProvider!!.isBound(it)) cameraProvider!!.unbind(it) }
        imageCapture?.let { capture ->
            if (!cameraProvider!!.isBound(capture)) {
                cameraProvider!!.bindToLifecycle(
                    context as LifecycleOwner,
                    selectCamera(),
                    capture
                )
            }
        }
        var needsFlashModeReset = false
        var needsTargetRotationReset = false

        if (options?.flashMode != null) {
            val newFlashMode = CameraFlashMode.from(options.flashMode)
            if (newFlashMode != flashMode) {
                needsFlashModeReset = true
                updateFlashMode(newFlashMode)
            }
//            setFlashMode(
//                options.getInt("flashMode")
//            )
        }


        if (options?.targetRotation != null) {
            needsTargetRotationReset = true
            imageCapture!!.apply {
                targetRotation = options.targetRotation
            }
        }

        fun onDone() {
            if (needsFlashModeReset) {
                updateFlashMode(flashMode)
            }
            if (needsTargetRotationReset) {
                imageCapture?.apply {
                    targetRotation = currentRotation
                }
            }
        }


        val useImageProxy = autoSquareCrop || !allowExifRotation || !savePhotoToDisk
//        if (!useImageProxy || savePhotoToDisk) {
//            file =
//                if (saveToGallery && hasStoragePermission()) {
//                    val externalDir = context.getExternalFilesDir(Environment.DIRECTORY_DCIM)
//                    if (externalDir == null) {
//                        listener?.onCameraError(
//                            "Cannot save photo to gallery storage",
//                            Exception("Failed to get external directory")
//                        )
//                        return
//                    } else {
//                        if (!externalDir.exists()) {
//                            externalDir.mkdirs()
//                        }
//                        File(externalDir, fileName)
//                    }
//                } else {
//                    File(context.getExternalFilesDir(null), fileName)
//                }
//        }
        runAfterFocus {
        if (useImageProxy) {
//            var photoTime = System.nanoTime()
            imageCapture?.takePicture(
                imageCaptureExecutor,
                object : ImageCapture.OnImageCapturedCallback() {
                    override fun onCaptureSuccess(image: ImageProxy) {
//                        Log.d("CameraView","onCaptureSuccess: " + ((System.nanoTime()-photoTime)/1000000) + "ms")
                        try {
                            if (!savePhotoToDisk) {
                                // closed whatever the listener does: an ImageProxy that leaks
                                // eventually stalls every following capture
                                try {
                                    if (returnImageProxy) {
                                        val latch = CountDownLatch(1)
                                        val processor = ImageAsyncProcessor(latch)
                                        listener?.onCameraPhotoImageProxy(
                                            image,
                                            processor
                                        )
                                        latch.await()
                                    } else {
                                        val bm = bitmapFromProxy(image, maxWidth, maxHeight, autoSquareCrop)
                                        listener?.onCameraPhotoImage(
                                            bm,
                                            image.imageInfo
                                        )
                                    }
                                } finally {
                                    image.close()
                                }
                            } else {
                                processImageProxy(
                                    image,
                                    photoFile(storageLocation, fileName),
                                    fileName,
                                    autoSquareCrop,
                                    saveToGallery,
                                    maxWidth,
                                    maxHeight
                                )
                            }
                        } catch (exception: java.lang.Exception) {
                            listener?.onCameraError("Failed to take photo image", exception)
                        } finally {
                            onDone()
                        }
                    }

                    //                    override fun onCaptureStarted(){
//                        Log.d("CameraView","onCaptureStarted: " + ((System.nanoTime()-photoTime)/1000000) + "ms")
//                    }
                    override fun onError(exception: ImageCaptureException) {
                        listener?.onCameraError("Failed to take photo image", exception)
                        onDone()
                    }
                }
            )
        } else {
//            var photoTime = System.nanoTime()
            val imageMetadata =
                ImageCapture.Metadata().apply {
                    isReversedHorizontal = position == CameraSelector.LENS_FACING_FRONT
                }
            imageCapture?.takePicture(imageCaptureExecutor, ImageSaver(
                context,
                jpegQuality,
                storageLocation,
                fileName,
                imageMetadata,
                saveToGallery,
                removeExifAfterCapture,
                onCameraSuccess = fun(uri: Uri) {
//                    Log.d("CameraView","onSuccess: $uri ${((System.nanoTime()-photoTime)/1000000)}ms")
                    listener?.onCameraPhoto(uri)
                    onDone()
                },
                onCameraError = fun(exception: Exception) {
                    listener?.onCameraError("Failed to take photo image", exception)
                    onDone()
                }

            ))
//            val options = ImageCapture.OutputFileOptions.Builder(file!!)
//            options.setMetadata(imageMetadata)
//            imageCapture?.takePicture(
//                options.build(),
//                imageCaptureExecutor,
//                object : ImageCapture.OnImageSavedCallback {
//                    override fun onImageSaved(
//                        outputFileResults: ImageCapture.OutputFileResults
//                    ) {
//                        processImageFile(
//                            file!!,
//                            fileName,
//                            saveToGallery
//                        ) // outputFileResults.savedUri.toString() is null
//                        onDone()
//                    }
//
//                    override fun onCaptureStarted(){
//
//                    }
//                    override fun onError(exception: ImageCaptureException) {
//                        listener?.onCameraError("Failed to take photo image", exception)
//                    }
//                }
//            )
        }
        }
    }


    @OptIn(ExperimentalGetImage::class)
    private fun bitmapFromProxy(
        image: ImageProxy,
        maxWidth: Int,
        maxHeight: Int,
        autoSquareCrop: Boolean
    ): Bitmap {
        var bm = BitmapUtils.getBitmap(context, image);
//        var bm = Bitmap.createBitmap(image.width, image.height, Bitmap.Config.ARGB_8888)
//        yuvToRgbConverter.yuvToRgb(image.image!!, bm)
        val matrix = Matrix()

        // Registering image's required rotation, provided by Androidx ImageAnalysis
        var imageTargetRotation = image.imageInfo.rotationDegrees
        matrix.postRotate(imageTargetRotation.toFloat())

        // Flipping over the image in case it is the front camera
        if (position == CameraSelector.LENS_FACING_FRONT) matrix.postScale(-1f, 1f)


        var originalWidth = bm.width
        var originalHeight = bm.height

        if ((maxWidth != -1 && maxWidth < bm.width) || (maxHeight != -1 && maxHeight < bm.height)) {
            var expectedWidth = if (maxWidth != -1 && maxWidth < bm.width) maxWidth else bm.width
            var expectedHeight =
                if (maxHeight != -1 && maxHeight < bm.height) maxHeight else bm.height
            if (expectedWidth < bm.width || expectedHeight < bm.height) {
                var scaleFactor = 1.0
                if (expectedWidth == bm.width) {
                    scaleFactor = bm.height.toDouble() / expectedHeight
                } else if (expectedHeight == bm.height) {
                    scaleFactor = expectedWidth.toDouble() / bm.width
                } else {
                    scaleFactor = Math.min(
                        expectedWidth.toDouble() / bm.width,
                        expectedHeight.toDouble() / bm.height
                    )
                }
                if (scaleFactor < 1) {
                    matrix.postScale(scaleFactor.toFloat(), scaleFactor.toFloat())
                }
            }
        }

        var offsetWidth = 0
        var offsetHeight = 0
        if (autoSquareCrop) {
            if (originalWidth < originalHeight) {
                offsetHeight = (originalHeight - originalWidth) / 2
                originalHeight = originalWidth
            } else {
                offsetWidth = (originalWidth - originalHeight) / 2
                originalWidth = originalHeight
            }
        }
        if (matrix.isIdentity && offsetWidth == 0 && offsetHeight == 0) {
            return bm
        }
        val rotated =
            Bitmap.createBitmap(
                bm,
                offsetWidth,
                offsetHeight,
                originalWidth,
                originalHeight,
                matrix,
                false
            )
        if (rotated != bm) {
            bm.recycle()
        }
        return rotated;
    }

    /**
     * Where the ImageProxy path writes the JPEG: the `storageLocation` folder like the
     * [ImageSaver] path, or the cache folder when that location is not a plain folder (a SAF uri).
     */
    private fun photoFile(storageLocation: String, fileName: String): File {
        val location = Uri.parse(storageLocation)
        val folder =
            if ((location.scheme == null || location.scheme == "file") && location.path != null) File(location.path!!)
            else context.cacheDir
        folder.mkdirs()
        return File(folder, "$fileName.jpg")
    }

    private fun processImageProxy(
        image: ImageProxy,
        file: File,
        fileName: String,
        autoSquareCrop: Boolean,
        saveToGallery: Boolean,
        maxWidth: Int,
        maxHeight: Int
    ) {
        var isError = false
        var outputStream: FileOutputStream? = null
        try {
            val rotated = bitmapFromProxy(image, maxWidth, maxHeight, autoSquareCrop)
            outputStream = FileOutputStream(file!!, false)
//            var override: Bitmap? = null
//            if (overridePhotoHeight > 0 && overridePhotoWidth > 0) {
//                override =
//                    Bitmap.createScaledBitmap(
//                        rotated,
//                        overridePhotoWidth,
//                        overridePhotoHeight,
//                        false
//                    )
//                override.compress(Bitmap.CompressFormat.JPEG, jpegQuality, outputStream)
//            } else {
            rotated.compress(Bitmap.CompressFormat.JPEG, jpegQuality, outputStream)
//            }

            val exif = ExifInterface(file!!.absolutePath)

            val now = System.currentTimeMillis()
            val datetime = convertToExifDateTime(now)

            exif.setAttribute(ExifInterface.TAG_DATETIME_ORIGINAL, datetime)
            exif.setAttribute(ExifInterface.TAG_DATETIME_DIGITIZED, datetime)

            try {
                val subsec = (now - convertFromExifDateTime(datetime).time).toString()
                exif.setAttribute(ExifInterface.TAG_SUBSEC_TIME_ORIGINAL, subsec)
                exif.setAttribute(ExifInterface.TAG_SUBSEC_TIME_DIGITIZED, subsec)
            } catch (e: ParseException) {
            }

            exif.rotate(image.imageInfo.rotationDegrees)

            val meta =
                ImageCapture.Metadata().apply {
                    isReversedHorizontal = position == CameraSelector.LENS_FACING_FRONT
                }
            if (meta.isReversedHorizontal) {
                exif.flipHorizontally()
            }
            if (meta.isReversedVertical) {
                exif.flipVertically()
            }
            if (meta.location != null) {
                exif.setGpsInfo(meta.location!!)
            }
            exif.saveAttributes()

            rotated.recycle()
//            override?.recycle()
        } catch (e: Exception) {
            isError = true
            listener?.onCameraError("Failed to save photo.", e)
        } finally {
            try {
                outputStream?.close()
            } catch (e: IOException) {
                // NOOP
            }
            try {
                image.close()
            } catch (e: Exception) {
            }

            if (!isError) {
                if (saveToGallery && hasStoragePermission()) {
                    try {
                        MediaStoreWriter.copyToGallery(
                            context,
                            file,
                            MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                            "$fileName.jpg",
                            "image/jpeg"
                        )
                        listener?.onCameraPhoto(Uri.parse(file.absolutePath))
                    } catch (e: Exception) {
                        listener?.onCameraError("Failed to add photo to gallery", e)
                    }
                } else {
                    listener?.onCameraPhoto(Uri.parse(file.absolutePath))
                }
            }
        }
    }

//    private fun processImageFile(file: File, fileName: String, saveToGallery: Boolean) {
//        // Saving image to user gallery
//        if (saveToGallery && hasStoragePermission()) {
//            val values =
//                ContentValues().apply {
//                    put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
//                    put(MediaStore.Images.Media.DATE_ADDED, System.currentTimeMillis())
//
//                    put(MediaStore.MediaColumns.MIME_TYPE, "image/*")
//                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) { // this one
//                        put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DCIM)
//                        put(MediaStore.MediaColumns.IS_PENDING, 1)
//                        put(MediaStore.Images.Media.DATE_TAKEN, System.currentTimeMillis())
//                    }
//                }
//
//            val uri =
//                context.contentResolver.insert(
//                    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
//                    values
//                )
//            if (uri == null) {
//                listener?.onCameraError(
//                    "Failed to add photo to gallery",
//                    Exception("Failed to create uri")
//                )
//            } else {
//                val fos = context.contentResolver.openOutputStream(uri)
//                val fis = FileInputStream(file!!)
//                fos.use {
//                    if (it != null) {
//                        fis.copyTo(it)
//                        it.flush()
//                        it.close()
//                        fis.close()
//                    }
//                }
//                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) { // this one
//                    values.clear()
//                    values.put(MediaStore.Images.Media.IS_PENDING, 0)
//                    context.contentResolver.update(uri, values, null, null)
//                }
//                listener?.onCameraPhoto(file)
//            }
//        } else {
//            listener?.onCameraPhoto(file)
//        }
//    }

    override fun hasFlash(): Boolean {
        return camera?.cameraInfo?.hasFlashUnit() ?: false
    }

    override fun cameraRecording(): Boolean {
        return isRecording
    }

    override fun toggleCamera() {
        if (!isRecording) {
            position =
                when (position) {
                    CameraSelector.LENS_FACING_FRONT -> CameraSelector.LENS_FACING_BACK
                    CameraSelector.LENS_FACING_BACK -> CameraSelector.LENS_FACING_FRONT
                    else -> CameraSelector.LENS_FACING_BACK
                }
            safeUnbindAll()
            refreshCamera()
            if (!frontMirrored && position == CameraSelector.LENS_FACING_FRONT) {
                previewView.setImplementationMode(PreviewView.ImplementationMode.COMPATIBLE)
                previewView.scaleX = -1f  // Mirror horizontally
            } else {
                previewView.setImplementationMode(PreviewView.ImplementationMode.PERFORMANCE)
                previewView.scaleX = 1f 
            }
        }
    }

//    override fun getSupportedRatios(): Array<String> {
//        return cachedPreviewRatioSizeMap.keys.toTypedArray()
//    }

    @OptIn(ExperimentalCamera2Interop::class)
    private fun getCachedPictureRatioSizeMap(): MutableMap<String, MutableSet<Size>> {
        if (cachedPictureRatioSizeMap.isEmpty()) {
            camera?.cameraInfo?.let {
                val streamMap =
                    Camera2CameraInfo.from(it)
                        .getCameraCharacteristic(
                            CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP
                        )
                if (streamMap != null) {
                    PictureSizes.byRatio(PictureSizes.outputSizes(streamMap)).forEach { (ratio, sizes) ->
                        cachedPictureRatioSizeMap[ratio] = sizes.toMutableSet()
                    }
                }
            }
        }
        return cachedPictureRatioSizeMap
    }

    override fun getAvailablePictureSizes(ratio: String): Array<Size> {
        return getCachedPictureRatioSizeMap()[ratio]?.toTypedArray() ?: arrayOf()
    }

    override fun getAllAvailablePictureSizes(): Array<Size> {
        return getCachedPictureRatioSizeMap()
            ?.values
            ?.flatten()
            ?.distinct()
            ?.sortedByDescending { it.height * it.width }
            ?.toTypedArray()
            ?: arrayOf()
    }

    fun getAllAvailablePictureSizesJSON(): Array<JSONObject> {
        return getCachedPictureRatioSizeMap()
            ?.entries
            ?.map {
                it.value.map { size ->
                    val result = JSONObject()
                    result.put("pictureSize", "${size.width}x${size.height}")
                    result.put("width", size.width)
                    result.put("height", size.height)
                    result.put("aspectRatio", it.key)
                    result
                }
            }
            ?.flatten()
            ?.distinct()
            ?.sortedByDescending { it.getInt("width") * it.getInt("height") }
            ?.toTypedArray()
            ?: arrayOf()
    }

    fun getAllAvailablePictureSizesJSONString(): String {
        return JSONArray(getAllAvailablePictureSizesJSON()).toString()
    }

    override fun stop() {
        if (!isForceStopping) {
            if (isRecording) {
                isForceStopping = true
                stopRecording()
            } else {
                safeUnbindAll()
            }
        }
    }

    override fun release() {
        if (!isForceStopping) {
            if (isRecording) {
                isForceStopping = true
                stopRecording()
            } else {
                safeUnbindAll()
            }
            preview?.setSurfaceProvider(null)
            preview = null
            imageCapture = null
            videoCapture = null
            imageAnalysis = null
            camera = null
        }
        deInitListener()
        // pending refreshes and focus timeouts would otherwise outlive the view
        job.cancel()
    }

    /**
     * Our custom image analysis class.
     *
     * <p>All we need to do is override the function `analyze` with our desired operations. Here, we
     * compute the average luminosity of the image by looking at the Y plane of the YUV frame.
     */
    private class CameraAnalyzer(listener: CameraAnalyzerListener? = null) :
        ImageAnalysis.Analyzer {
        private val listeners =
            ArrayList<CameraAnalyzerListener>().apply { listener?.let { add(it) } }

        /** Used to add listeners that will be called with each image */
        fun onFrameAnalyzed(listener: CameraAnalyzerListener) = listeners.add(listener)

        @SuppressLint("UnsafeOptInUsageError")
        override fun getDefaultTargetResolution(): android.util.Size? {
            return null
        }

        override fun analyze(image: ImageProxy) {
            // If there are no listeners attached, we don't need to perform analysis
            if (listeners.isEmpty()) {
                image.close()
                return
            }
            listeners.forEach { it(image) }
        }
    }
}
