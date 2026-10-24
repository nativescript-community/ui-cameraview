package com.nativescript.camerademoapp

import android.media.MediaMetadataRetriever
import android.os.Build
import android.util.Log
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import com.nativescript.cameraview.Quality
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Assume.assumeTrue
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File

/** What the video options do to the file that is recorded. */
@RunWith(AndroidJUnit4::class)
class VideoOptionsTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    @Before
    fun needsARealCamera() {
        assumeTrue("an emulator's encoder does not follow the targets", !Build.FINGERPRINT.contains("generic") && !Build.FINGERPRINT.contains("emulator"))
    }

    private class Stats(val bitrate: Int, val fps: Double, val durationMs: Long)

    private fun stats(file: File): Stats {
        val retriever = MediaMetadataRetriever()
        try {
            retriever.setDataSource(file.path)
            val bitrate = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_BITRATE)!!.toInt()
            val duration = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION)!!.toLong()
            val frames = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_FRAME_COUNT)!!.toLong()
            return Stats(bitrate, frames * 1000.0 / duration, duration)
        } finally {
            retriever.release()
        }
    }

    private fun record(seconds: Long = 3): Stats {
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(seconds * 1000)
        camera.runOnUi { camera.view.stopRecording() }
        val file = camera.listener.await<CameraEvent.Video>().file!!
        return stats(file).also { Log.i("VideoOptionsTest", "bitrate ${it.bitrate} fps ${"%.1f".format(it.fps)} duration ${it.durationMs} ms") }
    }

    // The bitrate of the file depends on the scene (a dark, still one gives 130 to 500 kbit/s whatever
    // the target), so the test reads the target the recorder was configured with.
    @Test
    fun maxVideoBitrateIsTheTargetOfTheEncoder() {
        camera.startPreview()
        assertEquals("auto by default", 0, camera.runOnUi { camera.view.videoTargetBitRate })

        camera.runOnUi { camera.view.maxVideoBitrate = 800_000 }
        record(2)
        assertEquals(800_000, camera.runOnUi { camera.view.videoTargetBitRate })

        camera.runOnUi { camera.view.maxVideoBitrate = -1 }
        record(2)
        assertEquals("back to auto", 0, camera.runOnUi { camera.view.videoTargetBitRate })
    }

    @Test
    fun aLowerMaxVideoFrameRateGivesFewerFramesPerSecond() {
        camera.startPreview()
        camera.runOnUi { camera.view.quality = Quality.MAX_720P }
        val before = record()
        assumeTrue("the scene is dark, the camera already lowers the frame rate itself (${before.fps} fps)", before.fps >= 24)

        camera.runOnUi { camera.view.maxVideoFrameRate = 15 }
        val after = record()

        assertTrue("fps ${before.fps} then ${after.fps}", after.fps <= 18.5 && after.fps < before.fps * 0.75)
    }

    @Test
    fun theOptionsAreChangeableWhilePreviewingAndPhotosStillWork() {
        camera.startPreview()
        val binds = camera.runOnUi { camera.view.bindCalls }

        camera.runOnUi {
            camera.view.maxVideoBitrate = 2_000_000
            camera.view.maxVideoFrameRate = 24
        }
        record(2)
        camera.runOnUi { camera.view.takePhoto(null) }
        camera.listener.await<CameraEvent.Photo>()

        // the video use case is rebuilt once per change (two binds at most), the rest is not touched
        assertTrue("binds ${binds} -> ${camera.runOnUi { camera.view.bindCalls }}", camera.runOnUi { camera.view.bindCalls } - binds <= 2)
    }

    @Test
    fun anOptionLeftAtMinusOneChangesNothing() {
        camera.startPreview()
        assertEquals(-1, camera.runOnUi { camera.view.maxVideoBitrate })
        assertEquals(-1, camera.runOnUi { camera.view.maxVideoFrameRate })

        assertTrue(record(2).durationMs > 1000)
    }
}
