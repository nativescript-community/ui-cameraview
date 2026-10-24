package com.nativescript.camerademoapp

import android.graphics.BitmapFactory
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File
import org.junit.Test

/**
 * Behaviour of the shipped CameraView source on a real camera stack. These pin what works today,
 * so a change that breaks it fails here before it reaches the NativeScript plugin.
 */
@RunWith(AndroidJUnit4::class)
class CameraViewSmokeTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    @Test
    fun previewOpensAndReportsItsGeometry() {
        camera.startPreview()

        val info = JSONObject(camera.runOnUi { camera.view.getPreviewInfo() })
        assertTrue("preview width: $info", info.optInt("width") > 0)
        assertTrue("preview height: $info", info.optInt("height") > 0)
    }

    @Test
    fun takePhotoWritesADecodableJpeg() {
        camera.startPreview()

        camera.runOnUi { camera.view.takePhoto(null) }
        val photo = camera.listener.await<CameraEvent.Photo>()

        val file = File(photo.uri!!.path!!)
        assertTrue("$file should exist", file.exists())
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        BitmapFactory.decodeFile(file.path, bounds)
        assertTrue("decoded size ${bounds.outWidth}x${bounds.outHeight}", bounds.outWidth > 0 && bounds.outHeight > 0)
        assertEquals("image/jpeg", bounds.outMimeType)
    }

    @Test
    fun takePhotoCanReturnABitmapInsteadOfAFile() {
        camera.startPreview()

        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        val photo = camera.listener.await<CameraEvent.PhotoImage>()

        assertNotNull(photo.bitmap)
        assertTrue(photo.bitmap!!.width > 0 && photo.bitmap.height > 0)
    }

    @Test
    fun takePhotoDownscalesToMaxWidth() {
        camera.startPreview()

        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false,"maxWidth":320}""") }
        val photo = camera.listener.await<CameraEvent.PhotoImage>()

        assertTrue("width ${photo.bitmap!!.width}", photo.bitmap.width in 1..320)
    }

    @Test
    fun recordsAVideoFile() {
        camera.startPreview()

        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(2_000)
        camera.runOnUi { camera.view.stopRecording() }
        val video = camera.listener.await<CameraEvent.Video>()

        assertTrue("video file ${video.file}", video.file != null && video.file.length() > 0)
    }

    @Test
    fun zoomIsClampedToTheCameraRange() {
        camera.startPreview()
        val max = camera.runOnUi { camera.view.maxZoom }

        camera.runOnUi { camera.view.zoom = 1_000f }
        Thread.sleep(500)

        val zoomRatio = camera.runOnUi { camera.view.zoomRatio }
        assertTrue("zoomRatio $zoomRatio max $max", zoomRatio <= max + 0.01f)
    }

    @Test
    fun toggleCameraClosesThenReopens() {
        camera.startPreview()

        camera.runOnUi { camera.view.toggleCamera() }

        camera.listener.await<CameraEvent.Close>()
        camera.listener.await<CameraEvent.Open>()
    }
}
