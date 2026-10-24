package com.nativescript.camerademoapp.support

import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.test.core.app.ActivityScenario
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.rule.GrantPermissionRule
import com.nativescript.camerademoapp.CameraTestActivity
import com.nativescript.cameraview.CameraView
import org.junit.rules.ExternalResource
import org.junit.rules.TestRule

/**
 * Hosts a real [CameraView] in [CameraTestActivity] on the connected device and records its events.
 *
 * The view is created and added to the window but the preview is not started, so a test can set
 * its properties first and then call [startPreview].
 */
class CameraViewRule : ExternalResource() {
    private lateinit var scenario: ActivityScenario<CameraTestActivity>
    lateinit var view: CameraView
        private set
    val listener = RecordingListener()

    override fun before() {
        scenario = ActivityScenario.launch(CameraTestActivity::class.java)
        scenario.onActivity { activity ->
            view = CameraView(activity)
            view.listener = listener
            activity.container.addView(
                view,
                FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
            )
        }
    }

    override fun after() {
        runOnUi { view.stop(); view.release() }
        scenario.close()
    }

    /** CameraX binds on the main thread, so every call into the view goes through here. */
    fun <T> runOnUi(block: () -> T): T {
        var result: Result<T>? = null
        InstrumentationRegistry.getInstrumentation().runOnMainSync {
            result = runCatching(block)
        }
        return result!!.getOrThrow()
    }

    /** Starts the preview and waits until the camera is bound. */
    fun startPreview() {
        runOnUi { view.startPreview() }
        listener.await<CameraEvent.Open>()
    }

    companion object {
        /** Camera and microphone, granted before the activity starts. */
        fun permissions(): TestRule = GrantPermissionRule.grant(
            android.Manifest.permission.CAMERA,
            android.Manifest.permission.RECORD_AUDIO
        )
    }
}
