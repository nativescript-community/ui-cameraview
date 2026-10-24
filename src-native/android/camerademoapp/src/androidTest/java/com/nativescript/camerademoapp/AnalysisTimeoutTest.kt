package com.nativescript.camerademoapp

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

/** The analysis thread waits for `processor.finished()`; a callback that never calls it must not stop it for good. */
@RunWith(AndroidJUnit4::class)
class AnalysisTimeoutTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun waitFor(timeoutMs: Long = 10_000, condition: () -> Boolean): Boolean {
        val deadline = System.currentTimeMillis() + timeoutMs
        while (System.currentTimeMillis() < deadline) {
            if (condition()) return true
            Thread.sleep(50)
        }
        return false
    }

    private fun callback(frames: AtomicInteger, onFrame: (ImageAsyncProcessor) -> Unit) = object : ImageAnalysisCallback {
        override fun process(image: ImageProxy, info: ImageInfo, processor: ImageAsyncProcessor) {
            frames.incrementAndGet()
            onFrame(processor)
        }
    }

    @Test
    fun aCallbackThatNeverFinishesDoesNotStopTheAnalysisForGood() {
        val frames = AtomicInteger()
        camera.runOnUi {
            camera.view.analysisTimeoutMs = 300
            camera.view.analyserCallback = callback(frames) { /* forgets to call finished() */ }
        }
        camera.startPreview()

        val enough = waitFor { frames.get() >= 4 }
        assertTrue("frames: ${frames.get()}", enough)
        val error = camera.listener.await<CameraEvent.Error>()
        assertTrue(error.message, error.message.contains("finished", ignoreCase = true))
    }

    @Test
    fun aSlowCallbackThatFinishesInTimeIsLeftAlone() {
        val frames = AtomicInteger()
        camera.runOnUi {
            camera.view.analysisTimeoutMs = 3_000
            camera.view.analyserCallback = callback(frames) { Thread.sleep(300); it.finished() }
        }
        camera.startPreview()

        val enough = waitFor { frames.get() >= 3 }
        assertTrue("frames: ${frames.get()}", enough)
        assertTrue("an error was reported for a callback that finished", camera.listener.none(CameraEvent.Error::class.java, 500))
    }

    @Test
    fun noTimeoutKeepsWaitingAsBefore() {
        val frames = AtomicInteger()
        camera.runOnUi {
            camera.view.analysisTimeoutMs = 0
            camera.view.analyserCallback = callback(frames) { /* never finishes */ }
        }
        camera.startPreview()
        assertTrue("no frame", waitFor { frames.get() >= 1 })

        Thread.sleep(2_000)

        assertEquals("frames kept coming while the callback was still busy", 1, frames.get())
    }
}
