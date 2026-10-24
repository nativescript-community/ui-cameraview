package com.nativescript.camerademoapp

import android.util.Log
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class CameraSelectionTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    @Test
    fun theCameraListIsStableAndSortedById() {
        camera.startPreview()

        val first = camera.runOnUi { camera.view.cameras.map { it.cameraId } }
        val second = camera.runOnUi { camera.view.cameras.map { it.cameraId } }

        assertTrue(first.isNotEmpty())
        assertEquals(first.sorted(), first)
        assertEquals(first, second)
    }

    @Test
    fun readingTheCameraListIsCheap() {
        camera.startPreview()
        camera.runOnUi { camera.view.cameras }

        // timed inside one main thread call: the round trip of runOnUi is not what is measured
        val perCallMs = camera.runOnUi {
            val start = System.nanoTime()
            repeat(5) { camera.view.cameras }
            (System.nanoTime() - start) / 5 / 1_000_000
        }
        Log.i("CameraSelectionTest", "cameras getter: $perCallMs ms per call")

        // every bind asks for the list: it must not rebuild a Camera (video capabilities, extensions) each time
        assertTrue("$perCallMs ms per call", perCallMs < 3)
    }

    @Test
    fun aCameraIdSelectsThatCamera() {
        camera.startPreview()
        val back = camera.runOnUi { camera.view.cameras.filter { it.cameraFacing == androidx.camera.core.CameraSelector.LENS_FACING_BACK } }
        val others = back.map { it.cameraId }
        // a device with one back camera cannot tell the choice from the default
        org.junit.Assume.assumeTrue("needs two back cameras, has $others", others.size >= 2)

        for (id in others) {
            camera.runOnUi { camera.view.cameraId = id }
            camera.listener.await<CameraEvent.Open>()
            assertEquals(id, camera.runOnUi { camera.view.activeCameraId })
        }
    }

    @Test
    fun theDefaultCameraFollowsThePosition() {
        camera.startPreview()
        val facing = camera.runOnUi { camera.view.cameras.first { it.cameraId == camera.view.activeCameraId }.cameraFacing }
        assertEquals(androidx.camera.core.CameraSelector.LENS_FACING_BACK, facing)

        camera.runOnUi { camera.view.toggleCamera() }
        camera.listener.await<CameraEvent.Close>()
        camera.listener.await<CameraEvent.Open>()

        val front = camera.runOnUi { camera.view.cameras.first { it.cameraId == camera.view.activeCameraId }.cameraFacing }
        assertEquals(androidx.camera.core.CameraSelector.LENS_FACING_FRONT, front)
    }
}
