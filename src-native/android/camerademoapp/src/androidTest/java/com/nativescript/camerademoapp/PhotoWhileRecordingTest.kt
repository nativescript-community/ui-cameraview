package com.nativescript.camerademoapp

import androidx.camera.core.ImageCaptureException
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith

/**
 * A photo taken in the middle of a recording, many times: an intermittent failure needs many tries to show.
 * `BindingTest.aPhotoCanBeTakenWhileRecording` failed about 1 run in 7 on the phone one day (a plain
 * "Failed to take photo image") and 0 in 183 attempts on another, so a failure here prints the
 * ImageCaptureException code. To hunt it, raise the counts and loop. Skipped on an emulator, whose camera
 * ends recordings with ERROR_SOURCE_INACTIVE on its own.
 */
@RunWith(AndroidJUnit4::class)
class PhotoWhileRecordingTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun describe(error: CameraEvent.Error): String {
        val cause = error.exception
        val code = (cause as? ImageCaptureException)?.imageCaptureError
        return "${error.message}: $cause (imageCaptureError=$code, cause=${cause.cause})"
    }

    @Test
    fun photosInTheMiddleOfRecordingsAllSucceed() {
        // the emulator's camera ends recordings with ERROR_SOURCE_INACTIVE now and then, on its own
        org.junit.Assume.assumeTrue("needs a real camera", !android.os.Build.FINGERPRINT.contains("generic") && !android.os.Build.FINGERPRINT.contains("emulator"))
        camera.startPreview()
        val failures = mutableListOf<String>()
        repeat(CYCLES) { cycle ->
            camera.runOnUi { camera.view.startRecording() }
            camera.listener.await<CameraEvent.VideoStart>()
            Thread.sleep(800)

            camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
            try {
                camera.listener.await<CameraEvent.PhotoImage>()
            } catch (e: AssertionError) {
                failures.add("cycle $cycle: ${e.message}  cause=${e.cause}")
            }

            camera.runOnUi { camera.view.stopRecording() }
            try {
                camera.listener.await<CameraEvent.Video>()
            } catch (e: AssertionError) {
                failures.add("cycle $cycle video: ${e.message}")
            }
        }
        assertTrue("${failures.size}/$CYCLES cycles failed:\n" + failures.joinToString("\n"), failures.isEmpty())
    }



    /** Same, but the camera is opened from scratch for every recording, like a screen opened again and again. */
    @Test
    fun aPhotoInTheMiddleOfARecordingRightAfterTheCameraOpenedSucceeds() {
        org.junit.Assume.assumeTrue("needs a real camera", !android.os.Build.FINGERPRINT.contains("generic") && !android.os.Build.FINGERPRINT.contains("emulator"))
        val failures = mutableListOf<String>()
        repeat(COLD_CYCLES) { cycle ->
            if (cycle > 0) {
                camera.discardView()
                camera.attachNewView()
            }
            camera.startPreview()
            camera.runOnUi { camera.view.startRecording() }
            camera.listener.await<CameraEvent.VideoStart>()
            Thread.sleep(1_000)
            camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
            try {
                camera.listener.await<CameraEvent.PhotoImage>()
            } catch (e: AssertionError) {
                val cause = e.cause
                failures.add("cycle $cycle: ${e.message} cause=$cause code=${(cause as? ImageCaptureException)?.imageCaptureError} inner=${cause?.cause}")
            }
            camera.runOnUi { camera.view.stopRecording() }
            try {
                camera.listener.await<CameraEvent.Video>()
            } catch (e: AssertionError) {
                failures.add("cycle $cycle video: ${e.message?.take(120)}")
            }
        }
        assertTrue("${failures.size}/$COLD_CYCLES cold cycles failed:\n" + failures.joinToString("\n"), failures.isEmpty())
    }

    companion object {
        const val CYCLES = 6
        const val COLD_CYCLES = 6
    }
}
