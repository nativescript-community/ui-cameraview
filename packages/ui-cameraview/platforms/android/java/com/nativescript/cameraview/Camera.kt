package com.nativescript.cameraview

/*
 * SPDX-FileCopyrightText: 2022-2023 The LineageOS Project
 * SPDX-License-Identifier: Apache-2.0
 */

import android.graphics.ImageFormat
import android.graphics.SurfaceTexture
import android.hardware.camera2.CameraCharacteristics
import android.hardware.camera2.CameraMetadata
import android.os.Build
import android.util.Size
import androidx.annotation.RequiresApi
import androidx.camera.camera2.interop.Camera2CameraInfo
import androidx.camera.core.CameraInfo
import androidx.camera.core.DynamicRange
import androidx.camera.extensions.ExtensionsManager
import androidx.camera.video.Quality
import androidx.camera.video.Recorder
import androidx.camera.video.VideoCapabilities
import com.nativescript.cameraview.ext.getSupportedModes
import com.nativescript.cameraview.ext.physicalCameraIds
import kotlin.reflect.safeCast

/**
 * Class representing a device camera
 */
@androidx.camera.camera2.interop.ExperimentalCamera2Interop
@androidx.camera.core.ExperimentalLensFacing
@androidx.camera.core.ExperimentalZeroShutterLag
class Camera(cameraInfo: CameraInfo, extensionsManager: ExtensionsManager) {
    val cameraSelector = cameraInfo.cameraSelector
    private val camera2CameraInfo = Camera2CameraInfo.from(cameraInfo)
    val cameraId = camera2CameraInfo.cameraId

    val cameraFacing = cameraInfo.lensFacing

    val exposureCompensationRange = cameraInfo.exposureState.exposureCompensationRange
    val hasFlashUnit = cameraInfo.hasFlashUnit()

    val isLogical = camera2CameraInfo.physicalCameraIds.size > 1

    val intrinsicZoomRatio = cameraInfo.intrinsicZoomRatio

    private val supportedVideoFrameRates = cameraInfo.supportedFrameRateRanges.toSet()

    private val videoCapabilities = Recorder.getVideoCapabilities(cameraInfo)

    private val supportedVideoDynamicRanges: Set<DynamicRange>
        get() {
            return videoCapabilities.supportedDynamicRanges
        }

    private val videoQualityForDynamicRanges:
            Map<DynamicRange, List<Quality>>
        get() {
            return supportedVideoDynamicRanges.associateWith {
                videoCapabilities.getSupportedQualities(it)
            }
        }

    val supportedVideoQualities: Set<Quality>
        get() {
            return videoQualityForDynamicRanges.values.flatten().toSet()
        }

    val supportsVideoRecording = supportedVideoQualities.isNotEmpty()

    val supportedExtensionModes = extensionsManager.getSupportedModes(cameraSelector)



    val supportsZsl = cameraInfo.isZslSupported

    val cameraState = cameraInfo.cameraState

    val supportedEdgeModes:  Set<Int>
        get() {
        val availableEdgeModes = camera2CameraInfo.getCameraCharacteristic(
            CameraCharacteristics.EDGE_AVAILABLE_EDGE_MODES
        ) ?: IntArray(0)

        return availableEdgeModes.toSet()
    }

    val supportedNoiseReductionModes:  Set<Int>
        get() {
        val availableNoiseReductionModes = camera2CameraInfo.getCameraCharacteristic(
            CameraCharacteristics.NOISE_REDUCTION_AVAILABLE_NOISE_REDUCTION_MODES
        ) ?: IntArray(0)

        return availableNoiseReductionModes.toSet()
    }

    val resolutions: List<String>?
        get() {
            val streamMap =
                camera2CameraInfo.getCameraCharacteristic(
                    CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP
                )

            if (streamMap != null) {
                var sizes = streamMap.getOutputSizes(ImageFormat.JPEG) + streamMap.getOutputSizes(
                    SurfaceTexture::class.java
                )
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    val highRes = streamMap.getHighResolutionOutputSizes(ImageFormat.JPEG)
                    if (highRes != null) {
                        sizes += highRes
                    }
                }
                return sizes.sortedByDescending { it.height*it.width }.map { it.toString() }
            }
            return null
        }

    val supportedShadingModes:  Set<Int>
        @RequiresApi(Build.VERSION_CODES.M)
        get() {
        val availableShadingModes = camera2CameraInfo.getCameraCharacteristic(
            CameraCharacteristics.SHADING_AVAILABLE_MODES
        ) ?: IntArray(0)
       return  availableShadingModes.toSet()
    }

    val supportedColorCorrectionAberrationModes:  Set<Int>
        get() {
            val availableColorCorrectionAberrationModes = camera2CameraInfo.getCameraCharacteristic(
                CameraCharacteristics.COLOR_CORRECTION_AVAILABLE_ABERRATION_MODES
            ) ?: IntArray(0)

            return availableColorCorrectionAberrationModes.toSet()
        }

    val supportedDistortionCorrectionModes:  Set<Int>
        get() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                val availableDistortionCorrectionModes = camera2CameraInfo.getCameraCharacteristic(
                    CameraCharacteristics.DISTORTION_CORRECTION_AVAILABLE_MODES
                ) ?: IntArray(0)

               return  availableDistortionCorrectionModes.toSet()
            }
            return emptySet()
    }

    val supportedHotPixelModes:  Set<Int>
        get() {
        val availableHotPixelModes = camera2CameraInfo.getCameraCharacteristic(
            CameraCharacteristics.HOT_PIXEL_AVAILABLE_HOT_PIXEL_MODES
        ) ?: IntArray(0)

        return availableHotPixelModes.toSet()
    }

        override fun equals(other: Any?): Boolean {
        val camera = this::class.safeCast(other) ?: return false
        return this.cameraId == camera.cameraId
    }

    override fun hashCode(): Int {
        return this::class.qualifiedName.hashCode() + cameraId.hashCode()
    }

    fun supportsExtensionMode(extensionMode: Int): Boolean {
        return supportedExtensionModes.contains(extensionMode)
    }

}
