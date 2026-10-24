package com.nativescript.camerademoapp

import android.os.Bundle
import android.view.WindowManager
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity

/**
 * Bare host for a [com.nativescript.cameraview.CameraView]. The view needs a `LifecycleOwner`
 * context, which a plain test context is not. The window flags let the tests run on a phone that
 * is locked or asleep.
 */
class CameraTestActivity : AppCompatActivity() {
    lateinit var container: FrameLayout
        private set

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setShowWhenLocked(true)
        setTurnScreenOn(true)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        container = FrameLayout(this)
        setContentView(container)
    }
}
