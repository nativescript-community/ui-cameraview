package com.nativescript.camerademoapp

import android.graphics.BitmapFactory
import android.media.MediaMetadataRetriever
import androidx.camera.core.ImageInfo
import androidx.camera.core.ImageProxy
import androidx.camera.view.PreviewView
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import com.nativescript.cameraview.ImageAnalysisCallback
import com.nativescript.cameraview.ImageAsyncProcessor
import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Assume.assumeTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File
import java.util.concurrent.atomic.AtomicReference
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min

/**
 * By default a photo is the whole sensor frame: not what the preview shows when the preview is
 * cropped to fill the view. `cropToPreview` makes photos, videos and analysis frames cover the
 * same field of view as the preview.
 */
@RunWith(AndroidJUnit4::class)
class CropToPreviewTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    /** Long side over short side: the orientation is compared apart. */
    private fun ratio(w: Int, h: Int) = max(w, h).toDouble() / min(w, h)

    private val viewRatio: Double get() = camera.runOnUi { ratio(camera.view.width, camera.view.height) }
    private val viewIsPortrait: Boolean get() = camera.runOnUi { camera.view.height > camera.view.width }

    private fun assertRatio(what: String, expected: Double, w: Int, h: Int, tolerance: Double = 0.025) {
        assertTrue("$what: ${w}x$h is ${"%.3f".format(ratio(w, h))}, expected ${"%.3f".format(expected)}", abs(ratio(w, h) - expected) <= tolerance)
        assertEquals("$what has the orientation of the view: ${w}x$h", viewIsPortrait, h > w)
    }

    private fun shootFile(): Pair<Int, Int> {
        camera.runOnUi { camera.view.takePhoto(null) }
        val file = File(camera.listener.await<CameraEvent.Photo>().uri!!.path!!)
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }.also { BitmapFactory.decodeFile(file.path, it) }
        // the file has its orientation in EXIF: apply it to compare with the view
        val rotated = when (android.media.ExifInterface(file.path).getAttributeInt(android.media.ExifInterface.TAG_ORIENTATION, 1)) {
            6, 8 -> true
            else -> false
        }
        return if (rotated) bounds.outHeight to bounds.outWidth else bounds.outWidth to bounds.outHeight
    }

    private fun shootBitmap(): Pair<Int, Int> {
        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        val bitmap = camera.listener.await<CameraEvent.PhotoImage>().bitmap!!
        return bitmap.width to bitmap.height
    }

    @Test
    fun byDefaultAPhotoIsTheWholeFrameNotWhatThePreviewShows() {
        camera.startPreview()
        val (w, h) = shootFile()
        assumeTrue("this device's sensor ratio happens to be the view's", abs(ratio(w, h) - viewRatio) > 0.03)

        assertTrue("default is off", !camera.runOnUi { camera.view.cropToPreview })
    }

    @Test
    fun aPhotoFileMatchesTheViewWhenCroppedToPreview() {
        camera.runOnUi { camera.view.cropToPreview = true }
        camera.startPreview()

        val (w, h) = shootFile()

        assertRatio("photo file", viewRatio, w, h)
    }

    @Test
    fun aPhotoBitmapMatchesTheViewWhenCroppedToPreview() {
        camera.runOnUi { camera.view.cropToPreview = true }
        camera.startPreview()

        val (w, h) = shootBitmap()

        assertRatio("photo bitmap", viewRatio, w, h)
    }

    @Test
    fun aPreviewThatShowsTheWholeFrameCropsNothing() {
        camera.runOnUi {
            camera.view.scaleType = PreviewView.ScaleType.FIT_CENTER
            camera.view.cropToPreview = true
        }
        camera.startPreview()
        val info = JSONObject(camera.runOnUi { camera.view.getPreviewInfo() })

        val (w, h) = shootFile()

        assertEquals("the photo keeps the ratio of the preview stream", ratio(info.getInt("width"), info.getInt("height")), ratio(w, h), 0.03)
    }

    @Test
    fun switchingItOnWhilePreviewingAppliesToTheNextPhoto() {
        camera.startPreview()
        camera.runOnUi { camera.view.cropToPreview = true }
        camera.listener.await<CameraEvent.Close>()
        camera.listener.await<CameraEvent.Open>()

        val (w, h) = shootFile()

        assertRatio("photo after switching on", viewRatio, w, h)
    }

    @Test
    fun aVideoMatchesTheViewWhenCroppedToPreview() {
        camera.runOnUi { camera.view.cropToPreview = true }
        camera.startPreview()
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(2_000)
        camera.runOnUi { camera.view.stopRecording() }
        val file = camera.listener.await<CameraEvent.Video>().file!!

        val retriever = MediaMetadataRetriever()
        retriever.setDataSource(file.path)
        val w = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_WIDTH)!!.toInt()
        val h = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_HEIGHT)!!.toInt()
        val rotation = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_ROTATION)!!.toInt()
        retriever.release()
        val (dw, dh) = if (rotation == 90 || rotation == 270) h to w else w to h

        assertRatio("video", viewRatio, dw, dh, tolerance = 0.04)
    }

    @Test
    fun analysisFramesMatchTheViewWhenCroppedToPreview() {
        val crop = AtomicReference<IntArray>()
        camera.runOnUi {
            camera.view.cropToPreview = true
            camera.view.analyserCallback = object : ImageAnalysisCallback {
                override fun process(image: ImageProxy, info: ImageInfo, processor: ImageAsyncProcessor) {
                    crop.set(intArrayOf(image.cropRect.width(), image.cropRect.height(), info.rotationDegrees))
                    processor.finished()
                }
            }
        }
        camera.startPreview()
        val deadline = System.currentTimeMillis() + 8_000
        while (crop.get() == null && System.currentTimeMillis() < deadline) Thread.sleep(50)

        val (w, h, rotation) = crop.get()!!.toList()
        // the crop is in the sensor's orientation
        val (dw, dh) = if (rotation == 90 || rotation == 270) h to w else w to h
        assertRatio("analysis frame", viewRatio, dw, dh)
    }

    @Test
    fun cropToPreviewDoesNotAddBinds() {
        camera.runOnUi { camera.view.cropToPreview = true }
        val before = camera.runOnUi { camera.view.bindCalls }

        camera.startPreview()

        assertEquals(1, camera.runOnUi { camera.view.bindCalls } - before)
    }
}
