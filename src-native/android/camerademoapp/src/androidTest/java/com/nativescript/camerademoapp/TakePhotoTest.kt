package com.nativescript.camerademoapp

import android.graphics.BitmapFactory
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File

/** The options of `takePhoto` that go through the ImageProxy path instead of `ImageSaver`. */
@RunWith(AndroidJUnit4::class)
class TakePhotoTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun decodeBounds(file: File) =
        BitmapFactory.Options().apply { inJustDecodeBounds = true }.also { BitmapFactory.decodeFile(file.path, it) }

    @Test
    fun autoSquareCropWritesASquareFile() {
        camera.startPreview()

        camera.runOnUi { camera.view.takePhoto("""{"autoSquareCrop":true}""") }
        val photo = camera.listener.await<CameraEvent.Photo>()

        val file = File(photo.uri!!.path!!)
        assertTrue("$file should exist", file.length() > 0)
        val bounds = decodeBounds(file)
        assertTrue("${bounds.outWidth}x${bounds.outHeight}", bounds.outWidth > 0)
        assertEquals(bounds.outWidth, bounds.outHeight)
    }

    @Test
    fun disablingExifRotationWritesAFileInTheRequestedFolder() {
        camera.startPreview()
        val dir = File(camera.runOnUi { camera.view.context.cacheDir }, "photo-test").apply { mkdirs() }

        camera.runOnUi {
            camera.view.takePhoto("""{"allowExifRotation":false,"fileName":"no-exif","storageLocation":"${dir.toURI()}"}""")
        }
        val photo = camera.listener.await<CameraEvent.Photo>()

        assertEquals(File(dir, "no-exif.jpg").path, File(photo.uri!!.path!!).path)
        assertTrue(decodeBounds(File(photo.uri!!.path!!)).outWidth > 0)
    }

    @Test
    fun aPhotoNeverOverwritesTheLastVideo() {
        camera.startPreview()
        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(2_000)
        camera.runOnUi { camera.view.stopRecording() }
        val video = camera.listener.await<CameraEvent.Video>().file!!
        val videoSize = video.length()
        assertTrue("video size $videoSize", videoSize > 0)

        camera.runOnUi { camera.view.takePhoto("""{"allowExifRotation":false}""") }
        val photo = camera.listener.await<CameraEvent.Photo>()

        assertNotEquals(video.path, File(photo.uri!!.path!!).path)
        assertEquals("the video was rewritten", videoSize, video.length())
    }

    @Test
    fun aListenerThatThrowsDoesNotStallTheNextPhotos() {
        camera.startPreview()
        camera.listener.onPhotoImage = { throw IllegalStateException("listener bug") }

        // more shots than ImageCapture has buffers: a leaked ImageProxy stalls the capture
        repeat(4) {
            camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
            camera.listener.await<CameraEvent.PhotoImage>()
            camera.listener.await<CameraEvent.Error>()
        }

        camera.listener.onPhotoImage = null
        camera.runOnUi { camera.view.takePhoto("""{"savePhotoToDisk":false}""") }
        camera.listener.await<CameraEvent.PhotoImage>()
    }
}
