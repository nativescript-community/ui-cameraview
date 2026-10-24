package com.nativescript.camerademoapp

import android.content.ContextWrapper
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith

/** The camera is bound to a lifecycle: the one of the activity, wherever the view's context came from. */
@RunWith(AndroidJUnit4::class)
class LifecycleOwnerTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun replaceViewWith(contextFor: (com.nativescript.camerademoapp.CameraTestActivity) -> android.content.Context) {
        camera.discardView()
        camera.attachNewView(contextFor)
    }

    @Test
    fun aViewMadeWithAWrappedActivityContextOpens() {
        // what a themed or modal context looks like: not a LifecycleOwner itself
        replaceViewWith { ContextWrapper(ContextWrapper(it)) }

        camera.startPreview()

        camera.runOnUi { camera.view.takePhoto(null) }
        camera.listener.await<CameraEvent.Photo>()
    }

    @Test
    fun aViewMadeWithTheApplicationContextOpensOnceItIsInTheWindow() {
        // the window's lifecycle owner is found from the view tree
        replaceViewWith { it.applicationContext }

        camera.startPreview()

        camera.runOnUi { camera.view.takePhoto(null) }
        camera.listener.await<CameraEvent.Photo>()
    }

    @Test
    fun aViewWithNoLifecycleAtAllReportsAnErrorInsteadOfCrashing() {
        replaceViewWith { it.applicationContext }
        // taken out of the window again: nothing to bind to
        camera.runOnUi { (camera.view.parent as android.view.ViewGroup).removeView(camera.view) }

        camera.runOnUi { camera.view.startPreview() }

        val error = camera.listener.await<CameraEvent.Error>()
        assertTrue(error.message, error.message.contains("lifecycle", ignoreCase = true))
    }
}
