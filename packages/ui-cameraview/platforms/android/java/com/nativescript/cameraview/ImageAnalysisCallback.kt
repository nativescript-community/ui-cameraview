package com.nativescript.cameraview

import android.media.Image
import androidx.camera.core.ImageInfo
import androidx.camera.core.ImageProxy

interface ImageAnalysisCallback {
    fun process(image: ImageProxy, info: ImageInfo, processor: ImageAsyncProcessor)
}