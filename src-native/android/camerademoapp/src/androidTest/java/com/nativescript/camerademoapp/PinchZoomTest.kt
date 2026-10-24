package com.nativescript.camerademoapp

import android.os.SystemClock
import android.view.MotionEvent
import android.view.View
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
class PinchZoomTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private val preview get() = camera.view.previewSurface as View

    /** Two fingers, centered on the view, whose distance goes from [fromSpan] to [toSpan] in [moves] equal factors. */
    private fun pinch(fromSpan: Float, toSpan: Float, moves: Int = 1) = camera.runOnUi {
        val cx = preview.width / 2f
        val cy = preview.height / 2f
        val downTime = SystemClock.uptimeMillis()
        fun send(action: Int, span: Float, pointers: Int, time: Long) {
            val props = Array(pointers) { id -> MotionEvent.PointerProperties().apply { this.id = id; toolType = MotionEvent.TOOL_TYPE_FINGER } }
            val coords = Array(pointers) { id ->
                MotionEvent.PointerCoords().apply { x = if (id == 0) cx - span / 2 else cx + span / 2; y = cy; pressure = 1f; size = 1f }
            }
            val event = MotionEvent.obtain(downTime, time, action, pointers, props, coords, 0, 0, 1f, 1f, 0, 0, 0, 0)
            preview.dispatchTouchEvent(event)
            event.recycle()
        }
        send(MotionEvent.ACTION_DOWN, fromSpan, 1, downTime)
        send(MotionEvent.ACTION_POINTER_DOWN or (1 shl MotionEvent.ACTION_POINTER_INDEX_SHIFT), fromSpan, 2, downTime + 20)
        val factor = Math.pow((toSpan / fromSpan).toDouble(), 1.0 / moves).toFloat()
        var span = fromSpan
        repeat(moves) { i ->
            span *= factor
            send(MotionEvent.ACTION_MOVE, span, 2, downTime + 40 + i * 20L)
        }
        send(MotionEvent.ACTION_POINTER_UP or (1 shl MotionEvent.ACTION_POINTER_INDEX_SHIFT), toSpan, 2, downTime + 80)
        send(MotionEvent.ACTION_UP, toSpan, 1, downTime + 100)
    }

    @Test
    fun pinchingOutNeverReportsMoreThanMaxZoom() {
        camera.startPreview()
        camera.runOnUi { camera.view.enablePinchZoom = true }
        val max = camera.runOnUi { camera.view.maxZoom }

        // a span jump far larger than any camera can zoom
        val minSpan = android.view.ViewConfiguration.get(preview.context).scaledMinimumScalingSpan * 1.5f
        pinch(fromSpan = minSpan, toSpan = minSpan * (max + 40f) * (max + 40f), moves = 2)

        camera.listener.await<CameraEvent.Zoom>()
        Thread.sleep(300)
        val reported = camera.listener.history.filterIsInstance<CameraEvent.Zoom>().map { it.zoom }
        assertTrue("reported $reported but the camera stops at $max", reported.all { it <= max + 0.001f })
        assertTrue("view.zoom ${camera.runOnUi { camera.view.zoom }}", camera.runOnUi { camera.view.zoom } <= max + 0.001f)
    }

    @Test
    fun aPinchIsNotAClickButATapIs() {
        camera.startPreview()
        camera.runOnUi { camera.view.enablePinchZoom = true }
        var clicks = 0
        camera.runOnUi { preview.setOnClickListener { clicks++ } }

        // the detector ignores fingers closer than the minimum scaling span
        val minSpan = android.view.ViewConfiguration.get(preview.context).scaledMinimumScalingSpan * 1.5f
        pinch(fromSpan = minSpan, toSpan = minSpan * 1.5f)
        assertEquals("a pinch fired a click", 0, clicks)

        camera.runOnUi {
            val t = SystemClock.uptimeMillis()
            for ((action, time) in listOf(MotionEvent.ACTION_DOWN to t, MotionEvent.ACTION_UP to t + 30)) {
                val e = MotionEvent.obtain(t, time, action, preview.width / 2f, preview.height / 2f, 0)
                preview.dispatchTouchEvent(e)
                e.recycle()
            }
        }
        assertEquals("a tap should click", 1, clicks)
    }
}
