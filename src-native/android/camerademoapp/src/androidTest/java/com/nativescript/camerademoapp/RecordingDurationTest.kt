package com.nativescript.camerademoapp

import android.os.Build
import android.os.SystemClock
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Assume.assumeTrue
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import kotlin.math.abs

/** How long the current recording is: `duration` in whole seconds, `durationMs` in milliseconds. */
@RunWith(AndroidJUnit4::class)
class RecordingDurationTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    @Before
    fun needsARealCamera() {
        assumeTrue("an emulator's recordings end on their own now and then", !Build.FINGERPRINT.contains("generic") && !Build.FINGERPRINT.contains("emulator"))
    }

    private fun startRecording(): Long {
        camera.startPreview()
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        return SystemClock.elapsedRealtime()
    }

    private var lastFile: java.io.File? = null

    private fun stopRecording() {
        Thread.sleep(1_000) // stopped at once, a recording has no data (ERROR_NO_VALID_DATA)
        camera.runOnUi { camera.view.stopRecording() }
        lastFile = camera.listener.await<CameraEvent.Video>().file
    }

    @Test
    fun theDurationIsZeroBeforeAndRightAfterTheStart() {
        assertEquals(0L, camera.runOnUi { camera.view.duration })
        assertEquals(0L, camera.runOnUi { camera.view.durationMs })

        startRecording()

        // the timer used to count once at the very start: a recording of 0 s said 1
        assertEquals(0L, camera.runOnUi { camera.view.duration })
        stopRecording()
    }

    // The camera needs ~0.4 s after the start event for its first frame, so the recorded time runs that
    // much behind the clock. What matters is that it runs at the pace of the clock: no 1 s steps.
    @Test
    fun theDurationRunsAtTheSamePaceAsTheClock() {
        val start = startRecording()
        val lags = mutableListOf<Long>()

        for (i in 1..12) {
            Thread.sleep(250)
            val elapsed = SystemClock.elapsedRealtime() - start
            lags.add(elapsed - camera.runOnUi { camera.view.durationMs })
        }
        stopRecording()

        val spread = lags.max() - lags.min()
        android.util.Log.i("RecordingDurationTest", "lag behind the clock ${lags.min()}..${lags.max()} ms")
        assertTrue("lag behind the clock went from ${lags.min()} to ${lags.max()} ms: $lags", spread <= 300)
    }

    @Test
    fun theLastDurationIsTheLengthOfTheFile() {
        startRecording()
        Thread.sleep(3_000)
        val lastSeen = camera.runOnUi { camera.view.durationMs }
        camera.runOnUi { camera.view.stopRecording() }
        lastFile = camera.listener.await<CameraEvent.Video>().file

        val file = lastFile!!
        val retriever = android.media.MediaMetadataRetriever()
        retriever.setDataSource(file.path)
        val fileMs = retriever.extractMetadata(android.media.MediaMetadataRetriever.METADATA_KEY_DURATION)!!.toLong()
        retriever.release()

        android.util.Log.i("RecordingDurationTest", "last seen $lastSeen ms, file $fileMs ms")
        assertTrue("last seen $lastSeen ms, the file lasts $fileMs ms", abs(fileMs - lastSeen) <= 400)
    }

    @Test
    fun theDurationNeverGoesBackAndSecondsAreTheWholeSecondsOfMilliseconds() {
        startRecording()
        var last = 0L

        repeat(16) {
            Thread.sleep(200)
            val (seconds, ms) = camera.runOnUi { camera.view.duration to camera.view.durationMs }
            assertTrue("went back from $last to $ms", ms >= last)
            assertEquals("seconds of $ms", ms / 1000, seconds)
            last = ms
        }
        stopRecording()
    }

    @Test
    fun theDurationIsZeroAgainWhenTheRecordingIsOver() {
        startRecording()
        Thread.sleep(1_500)
        stopRecording()

        assertEquals(0L, camera.runOnUi { camera.view.duration })
        assertEquals(0L, camera.runOnUi { camera.view.durationMs })
    }

    @Test
    fun aSecondRecordingStartsFromZeroAgain() {
        startRecording()
        Thread.sleep(2_000)
        stopRecording()

        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()

        assertTrue("${camera.runOnUi { camera.view.durationMs }} ms", camera.runOnUi { camera.view.durationMs } < 700)
        stopRecording()
    }
}
