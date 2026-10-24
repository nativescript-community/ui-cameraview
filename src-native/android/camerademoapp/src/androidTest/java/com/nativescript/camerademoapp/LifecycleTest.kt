package com.nativescript.camerademoapp

import android.app.UiAutomation
import android.view.Surface
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import com.nativescript.camerademoapp.support.CameraViewRule
import com.nativescript.cameraview.CameraView
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.lang.ref.WeakReference

@RunWith(AndroidJUnit4::class)
class LifecycleTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    @Test
    fun followsTheDisplayRotation() {
        camera.startPreview()
        val automation = InstrumentationRegistry.getInstrumentation().uiAutomation
        try {
            automation.setRotation(UiAutomation.ROTATION_FREEZE_90)

            val deadline = System.currentTimeMillis() + 5_000
            while (camera.runOnUi { camera.view.currentRotation } != Surface.ROTATION_90 && System.currentTimeMillis() < deadline) {
                Thread.sleep(100)
            }
            assertEquals(Surface.ROTATION_90, camera.runOnUi { camera.view.currentRotation })
        } finally {
            automation.setRotation(UiAutomation.ROTATION_UNFREEZE)
        }
    }

    /** The garbage collector gets a few chances: one `gc()` call is only a hint. */
    private fun collected(reference: WeakReference<CameraView>): Boolean {
        repeat(10) {
            System.gc()
            System.runFinalization()
            if (reference.get() == null) return true
            Thread.sleep(200)
        }
        return false
    }

    @Test
    fun aReleasedViewCanBeGarbageCollected() {
        camera.startPreview()

        val reference = camera.discardView()

        assertNull("something still references the released CameraView", if (collected(reference)) null else reference.get())
    }
}
