package com.nativescript.camerademoapp

import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import com.nativescript.cameraview.Quality
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File

@RunWith(AndroidJUnit4::class)
class RecordVideoTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun record(): File {
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(2_000)
        camera.runOnUi { camera.view.stopRecording() }
        val file = camera.listener.await<CameraEvent.Video>().file
        assertTrue("video file $file", file != null && file.length() > 0)
        return file!!
    }

    @Test
    fun recordsAfterTheJpegQualityChanged() {
        camera.startPreview()
        // drops the bound ImageCapture, which recording used to dereference
        camera.runOnUi { camera.view.jpegQuality = 80 }

        record()
    }

    @Test
    fun recordsTwiceWithAQualityChangeInBetween() {
        camera.startPreview()
        record()

        camera.runOnUi { camera.view.quality = Quality.MAX_720P }

        record()
    }
}
