package com.nativescript.camerademoapp.support

import android.content.Context
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.test.core.app.ActivityScenario
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.rule.GrantPermissionRule
import com.nativescript.camerademoapp.CameraTestActivity
import com.nativescript.cameraview.CameraView
import org.junit.rules.ExternalResource
import java.lang.ref.WeakReference
import org.junit.rules.TestRule

/**
 * Hosts a real [CameraView] in [CameraTestActivity] on the connected device and records its events.
 *
 * The view is created and added to the window but the preview is not started, so a test can set
 * its properties first and then call [startPreview].
 */
class CameraViewRule : ExternalResource() {
    private lateinit var scenario: ActivityScenario<CameraTestActivity>
    private var hosted: CameraView? = null
    val view: CameraView get() = hosted!!
    val listener = RecordingListener()

    override fun before() {
        scenario = ActivityScenario.launch(CameraTestActivity::class.java)
        attachNewView()
    }

    /**
     * Adds a fresh CameraView to the activity. Used by [before], and to replace a discarded view.
     * [contextFor] chooses the context the view is created with (the activity itself by default).
     */
    fun attachNewView(contextFor: (CameraTestActivity) -> Context = { it }) {
        scenario.onActivity { activity ->
            hosted = CameraView(contextFor(activity)).also { it.listener = listener }
            activity.container.addView(
                hosted,
                FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
            )
        }
    }

    override fun after() {
        hosted?.let { view -> runOnUi { view.stop(); view.release() } }
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

    /**
     * Stops, releases and removes the view from the window, and forgets it. Returns a weak reference
     * so a test can check that nothing keeps the view alive.
     */
    fun discardView(): WeakReference<CameraView> {
        val reference = WeakReference(view)
        runOnUi {
            view.stopPreview()
            view.stop()
            view.release()
            (view.parent as ViewGroup).removeView(view)
        }
        hosted = null
        return reference
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
