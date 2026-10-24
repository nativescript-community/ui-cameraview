package com.nativescript.camerademoapp

import android.graphics.BitmapFactory
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.json.JSONArray
import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File

/** Options of `takePhoto` that choose how the still is captured, as opposed to what is done with it. */
@RunWith(AndroidJUnit4::class)
class PhotoOptionsTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun shoot(options: String): File {
        camera.runOnUi { camera.view.takePhoto(options) }
        return File(camera.listener.await<CameraEvent.Photo>().uri!!.path!!)
    }

    private fun size(file: File) =
        BitmapFactory.Options().apply { inJustDecodeBounds = true }.also { BitmapFactory.decodeFile(file.path, it) }
            .let { it.outWidth to it.outHeight }

    @Test
    fun jpegQualityChangesTheFileSize() {
        camera.startPreview()

        val low = shoot("""{"jpegQuality":10}""").length()
        val high = shoot("""{"jpegQuality":100}""").length()

        assertTrue("quality 10 gave $low bytes, quality 100 gave $high", low < high)
    }

    @Test
    fun pictureSizeChoosesTheResolution() {
        camera.startPreview()
        val sizes = JSONArray(camera.runOnUi { camera.view.getAllAvailablePictureSizesJSONString() })
        assertTrue("no picture sizes", sizes.length() > 0)
        // a small 4:3 size every device offers; the largest ones can be refused for a capture mode
        val wanted = (0 until sizes.length()).map { sizes.getJSONObject(it) }
            .filter { it.getString("aspectRatio") == "4:3" && it.getInt("width") <= 2000 }
            .maxByOrNull { it.getInt("width") }!!

        val photo = shoot("""{"pictureSize":"${wanted.getString("pictureSize")}","aspectRatio":"4:3"}""")

        val (w, h) = size(photo)
        assertEquals(wanted.getInt("width") to wanted.getInt("height"), maxOf(w, h) to minOf(w, h))
    }

    @Test
    fun captureModeFlashModeAndTargetRotationAreAccepted() {
        camera.startPreview()

        val photo = shoot("""{"captureMode":0,"flashMode":0,"targetRotation":0}""")

        assertTrue(size(photo).first > 0)
    }

    @Test
    fun theOptionsOfOneShotDoNotStickToTheNext() {
        camera.startPreview()
        val first = shoot("""{"autoSquareCrop":true,"fileName":"first-shot"}""")
        val second = shoot("""{"fileName":"second-shot"}""")

        val (fw, fh) = size(first)
        val (sw, sh) = size(second)
        assertEquals("first is square", fw, fh)
        assertTrue("second is not: ${sw}x$sh", sw != sh)
        assertEquals("second-shot.jpg", second.name)
    }

    @Test
    fun malformedOptionsAreIgnored() {
        camera.startPreview()

        val photo = shoot("{not json")

        assertTrue(size(photo).first > 0)
    }

    @Test
    fun exifIsKeptWhenNotRemoved() {
        camera.startPreview()
        val kept = shoot("""{"removeExifAfterCapture":false}""")

        val exif = android.media.ExifInterface(kept.path)

        assertTrue("datetime tag missing", exif.getAttribute(android.media.ExifInterface.TAG_DATETIME_ORIGINAL) != null)
    }
}
