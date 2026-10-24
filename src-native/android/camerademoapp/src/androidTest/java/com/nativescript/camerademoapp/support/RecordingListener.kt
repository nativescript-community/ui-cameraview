package com.nativescript.camerademoapp.support

import android.graphics.Bitmap
import android.net.Uri
import androidx.camera.core.ImageInfo
import androidx.camera.core.ImageProxy
import com.nativescript.cameraview.CameraEventListener
import com.nativescript.cameraview.ImageAnalysis
import com.nativescript.cameraview.ImageAsyncProcessor
import java.io.File
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.TimeUnit

sealed class CameraEvent {
    object Ready : CameraEvent()
    object Open : CameraEvent()
    object Close : CameraEvent()
    object VideoStart : CameraEvent()
    data class Zoom(val zoom: Float) : CameraEvent()
    data class Photo(val uri: Uri?) : CameraEvent()
    class PhotoImage(val bitmap: Bitmap?, val info: ImageInfo) : CameraEvent()
    class PhotoImageProxy(val image: ImageProxy, val processor: ImageAsyncProcessor) : CameraEvent()
    data class Video(val file: File?) : CameraEvent()
    data class Error(val message: String, val exception: Exception) : CameraEvent()
}

/**
 * Records every event of a CameraView so a test can wait for the one it expects.
 * Events of another kind that arrive while waiting are kept in [history] and skipped.
 * An [CameraEvent.Error] fails the wait right away, unless the test is waiting for an error.
 */
class RecordingListener : CameraEventListener {
    private val queue = LinkedBlockingQueue<CameraEvent>()
    val history = mutableListOf<CameraEvent>()

    /** Runs when a bitmap photo arrives, before it is recorded. Throw from it to play a misbehaving listener. */
    @Volatile
    var onPhotoImage: (() -> Unit)? = null

    @Synchronized
    private fun record(event: CameraEvent) {
        history.add(event)
        queue.add(event)
    }

    inline fun <reified T : CameraEvent> await(timeoutMs: Long = DEFAULT_TIMEOUT_MS): T =
        await(T::class.java, timeoutMs)

    fun <T : CameraEvent> await(type: Class<T>, timeoutMs: Long): T {
        val deadline = System.currentTimeMillis() + timeoutMs
        while (true) {
            val remaining = deadline - System.currentTimeMillis()
            val event = (if (remaining > 0) queue.poll(remaining, TimeUnit.MILLISECONDS) else null)
                ?: throw AssertionError("timed out after ${timeoutMs}ms waiting for ${type.simpleName}, saw $history")
            if (type.isInstance(event)) {
                @Suppress("UNCHECKED_CAST")
                return event as T
            }
            if (event is CameraEvent.Error) {
                throw AssertionError("camera error while waiting for ${type.simpleName}: ${event.message}", event.exception)
            }
        }
    }

    /** True if no event of [type] shows up within [windowMs]. */
    fun <T : CameraEvent> none(type: Class<T>, windowMs: Long): Boolean {
        val deadline = System.currentTimeMillis() + windowMs
        while (true) {
            val remaining = deadline - System.currentTimeMillis()
            if (remaining <= 0) return true
            val event = queue.poll(remaining, TimeUnit.MILLISECONDS) ?: return true
            if (type.isInstance(event)) return false
        }
    }

    override fun onReady() = record(CameraEvent.Ready)
    override fun onCameraOpen() = record(CameraEvent.Open)
    override fun onCameraClose() = record(CameraEvent.Close)
    override fun onCameraVideoStart() = record(CameraEvent.VideoStart)
    override fun onZoom(zoom: Float) = record(CameraEvent.Zoom(zoom))
    override fun onCameraPhoto(uri: Uri?) = record(CameraEvent.Photo(uri))
    override fun onCameraPhotoImage(image: Bitmap?, info: ImageInfo) {
        record(CameraEvent.PhotoImage(image, info))
        onPhotoImage?.invoke()
    }
    override fun onCameraPhotoImageProxy(image: ImageProxy, processor: ImageAsyncProcessor) =
        record(CameraEvent.PhotoImageProxy(image, processor))
    override fun onCameraVideo(file: File?) = record(CameraEvent.Video(file))
    override fun onCameraAnalysis(analysis: ImageAnalysis) = Unit
    override fun onCameraError(message: String, ex: Exception) = record(CameraEvent.Error(message, ex))

    companion object {
        const val DEFAULT_TIMEOUT_MS = 15_000L
    }
}
