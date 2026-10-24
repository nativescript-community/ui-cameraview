package com.nativescript.camerademoapp

import android.util.Log
import androidx.camera.core.ImageInfo
import androidx.camera.core.ImageProxy
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import com.nativescript.cameraview.ImageAnalysisCallback
import com.nativescript.cameraview.ImageAsyncProcessor
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.util.concurrent.atomic.AtomicInteger

/**
 * How the use cases (preview, still, video, analysis) are bound. Every bind makes CameraX
 * reconfigure the camera session: slow, and the preview flashes.
 */
@RunWith(AndroidJUnit4::class)
class BindingTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun analysisCounting(frames: AtomicInteger) = object : ImageAnalysisCallback {
        override fun process(image: ImageProxy, info: ImageInfo, processor: ImageAsyncProcessor) {
            frames.incrementAndGet()
            processor.finished()
        }
    }

    private fun waitFor(timeoutMs: Long = 8_000, condition: () -> Boolean): Boolean {
        val deadline = System.currentTimeMillis() + timeoutMs
        while (System.currentTimeMillis() < deadline) {
            if (condition()) return true
            Thread.sleep(50)
        }
        return false
    }

    @Test
    fun previewAndStillAreBoundInOneCall() {
        val start = System.nanoTime()
        camera.startPreview()
        Log.i("BindingTest", "open after ${(System.nanoTime() - start) / 1_000_000} ms")

        assertEquals(1, camera.runOnUi { camera.view.bindCalls })
    }

    @Test
    fun previewStillAndAnalysisAreBoundInOneCall() {
        val frames = AtomicInteger()
        camera.runOnUi { camera.view.analyserCallback = analysisCounting(frames) }
        camera.runOnUi { camera.view.bindCalls }.let { before ->
            camera.startPreview()
            assertEquals(1, camera.runOnUi { camera.view.bindCalls } - before)
        }

        assertTrue("no frame analysed", waitFor { frames.get() >= 3 })
    }

    @Test
    fun analysisCanBeSwitchedOnAndOffWhilePreviewing() {
        camera.startPreview()
        val frames = AtomicInteger()

        camera.runOnUi { camera.view.analyserCallback = analysisCounting(frames) }
        assertTrue("no frame analysed", waitFor { frames.get() >= 3 })

        camera.runOnUi { camera.view.analyserCallback = null }
        Thread.sleep(500)
        val stopped = frames.get()
        Thread.sleep(1_000)
        assertEquals("frames kept coming after the callback was removed", stopped, frames.get())
    }

    @Test
    fun aPhotoRightAfterTheCameraOpenedNeedsNoNewBind() {
        camera.startPreview()
        val binds = camera.runOnUi { camera.view.bindCalls }

        camera.runOnUi { camera.view.takePhoto(null) }
        camera.listener.await<CameraEvent.Photo>()

        assertEquals(binds, camera.runOnUi { camera.view.bindCalls })
    }

    @Test
    fun photoThenVideoThenPhotoThenVideoAllWork() {
        camera.startPreview()
        repeat(2) {
            camera.runOnUi { camera.view.takePhoto(null) }
            camera.listener.await<CameraEvent.Photo>()

            camera.runOnUi { camera.view.startRecording() }
            camera.listener.await<CameraEvent.VideoStart>()
            Thread.sleep(1_500)
            camera.runOnUi { camera.view.stopRecording() }
            assertTrue(camera.listener.await<CameraEvent.Video>().file!!.length() > 0)
        }
        camera.runOnUi { camera.view.takePhoto(null) }
        camera.listener.await<CameraEvent.Photo>()
    }

    @Test
    fun theFirstFrameArrives() {
        val streaming = java.util.concurrent.CountDownLatch(1)
        val start = System.nanoTime()
        camera.runOnUi {
            (camera.view.previewSurface as androidx.camera.view.PreviewView).previewStreamState.observeForever {
                if (it == androidx.camera.view.PreviewView.StreamState.STREAMING) streaming.countDown()
            }
            camera.view.startPreview()
        }

        assertTrue("no frame in preview", streaming.await(10, java.util.concurrent.TimeUnit.SECONDS))
        Log.i("BindingTest", "first frame after ${(System.nanoTime() - start) / 1_000_000} ms")
        Log.i("BindingTest", "preview ${camera.runOnUi { camera.view.getPreviewInfo() }}")
    }

    @Test
    fun switchingBetweenVideoAndPhotoIsTimed() {
        camera.startPreview()
        Thread.sleep(1_500)
        camera.runOnUi { camera.view.takePhoto(null) } // first capture warms the pipeline up
        camera.listener.await<CameraEvent.Photo>()

        var recordMs = 0L
        var photoMs = 0L
        repeat(3) {
            var t = System.nanoTime()
            camera.runOnUi { camera.view.startRecording() }
            camera.listener.await<CameraEvent.VideoStart>()
            recordMs += (System.nanoTime() - t) / 1_000_000
            Thread.sleep(1_500)
            camera.runOnUi { camera.view.stopRecording() }
            camera.listener.await<CameraEvent.Video>()

            t = System.nanoTime()
            camera.runOnUi { camera.view.takePhoto(null) }
            camera.listener.await<CameraEvent.Photo>()
            photoMs += (System.nanoTime() - t) / 1_000_000
        }
        Log.i("BindingTest", "switch: start recording ${recordMs / 3} ms, photo after video ${photoMs / 3} ms, binds ${camera.runOnUi { camera.view.bindCalls }}")
    }

    @Test
    fun theStillKeepsItsResolutionWhateverTheVideoDoes() {
        camera.startPreview()
        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        val before = camera.listener.await<CameraEvent.PhotoImage>().bitmap!!
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(1_500)
        camera.runOnUi { camera.view.stopRecording() }
        camera.listener.await<CameraEvent.Video>()

        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        val after = camera.listener.await<CameraEvent.PhotoImage>().bitmap!!

        Log.i("BindingTest", "still ${before.width}x${before.height} then ${after.width}x${after.height}")
        assertEquals(before.width to before.height, after.width to after.height)
    }

    @Test
    fun theStillHasTheSameResolutionAsWithoutAVideoUseCase() {
        // pictureSize is what the application asked for the still; the preview keeps its own
        camera.startPreview()
        val info = org.json.JSONObject(camera.runOnUi { camera.view.getCurrentResolutionInfo() })
        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        val photo = camera.listener.await<CameraEvent.PhotoImage>().bitmap!!

        assertEquals(info.getInt("width") to info.getInt("height"), maxOf(photo.width, photo.height) to minOf(photo.width, photo.height))
    }

    @Test
    fun aShortRecordingTakenRightAfterAPhotoStillHasData() {
        camera.startPreview()
        camera.runOnUi { camera.view.takePhoto(null) }
        camera.listener.await<CameraEvent.Photo>()

        // the video use case was bound just now: the first frames must not be lost to that
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(700)
        camera.runOnUi { camera.view.stopRecording() }

        assertTrue(camera.listener.await<CameraEvent.Video>().file!!.length() > 0)
    }

    @Test
    fun aPhotoCanBeTakenWhileRecording() {
        camera.startPreview()
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(1_000)

        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        val photo = camera.listener.await<CameraEvent.PhotoImage>()

        camera.runOnUi { camera.view.stopRecording() }
        assertTrue(camera.listener.await<CameraEvent.Video>().file!!.length() > 0)
        assertTrue(photo.bitmap!!.width > 0)
    }

    @Test
    fun analysisKeepsRunningThroughARecording() {
        val frames = AtomicInteger()
        camera.runOnUi { camera.view.analyserCallback = analysisCounting(frames) }
        camera.startPreview()
        assertTrue("no frame analysed", waitFor { frames.get() >= 3 })

        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(1_500)
        camera.runOnUi { camera.view.stopRecording() }

        assertTrue(camera.listener.await<CameraEvent.Video>().file!!.length() > 0)
        val after = frames.get()
        assertTrue("analysis stopped for good", waitFor { frames.get() > after + 3 })
    }

    @Test
    fun analysisSwitchedOnAfterTheCameraOpenedStillLetsVideoRecord() {
        camera.startPreview()
        val frames = AtomicInteger()
        camera.runOnUi { camera.view.analyserCallback = analysisCounting(frames) }
        assertTrue("no frame analysed", waitFor { frames.get() >= 3 })

        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(1_500)
        camera.runOnUi { camera.view.stopRecording() }

        assertTrue(camera.listener.await<CameraEvent.Video>().file!!.length() > 0)
    }
}
