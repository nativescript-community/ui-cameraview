package com.nativescript.camerademoapp

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.ImageFormat
import android.graphics.Matrix
import android.graphics.Rect
import android.media.Image
import android.net.Uri
import androidx.camera.core.ImageCapture
import androidx.camera.core.ImageInfo
import androidx.camera.core.ImageProxy
import androidx.camera.core.impl.utils.ExifData
import androidx.camera.core.impl.TagBundle
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidxc.camera.core.impl.utils.Exif
import com.nativescript.cameraview.ImageSaver
import com.nativescript.cameraview.JpegFillBytes
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Assert.fail
import org.junit.Test
import org.junit.runner.RunWith
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.File
import java.nio.ByteBuffer
import java.util.UUID
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

/**
 * The JPEG encoder of some phones writes `0xFF` fill bytes before a marker, which the JPEG spec
 * allows. The ExifInterface copy `ImageSaver` relies on fails to parse such a file.
 */
@RunWith(AndroidJUnit4::class)
class ExifPaddingTest {
    private fun jpeg(): ByteArray {
        val out = ByteArrayOutputStream()
        Bitmap.createBitmap(64, 48, Bitmap.Config.ARGB_8888).compress(Bitmap.CompressFormat.JPEG, 90, out)
        return out.toByteArray()
    }

    /** Fill bytes right after SOI, before the first marker. */
    private fun withFillBytes(jpeg: ByteArray, count: Int): ByteArray =
        jpeg.copyOfRange(0, 2) + ByteArray(count) { 0xFF.toByte() } + jpeg.copyOfRange(2, jpeg.size)

    @Test
    fun theVendoredExifInterfaceStillNeedsTheFillBytesRemoved() {
        try {
            Exif.createFromInputStream(ByteArrayInputStream(withFillBytes(jpeg(), 3))).exifInterface.saveAttributes(
                ByteArrayInputStream(withFillBytes(jpeg(), 3)), ByteArrayOutputStream()
            )
        } catch (expected: java.io.IOException) {
            return
        }
        fail("the vendored ExifInterface handles fill bytes now: JpegFillBytes is not needed anymore")
    }

    @Test
    fun anImageSaverSavesAPhotoWhoseJpegHasFillBytes() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val name = "fill-bytes-${UUID.randomUUID()}"
        val folder = File(context.cacheDir, "exif-padding").apply { mkdirs() }
        val saved = CountDownLatch(1)
        var uri: Uri? = null
        var error: Exception? = null
        val saver = ImageSaver(
            context, 90, folder.toURI().toString(), name, ImageCapture.Metadata(),
            saveToMediaStore = false, removeExifAfterCapture = true,
            onCameraSuccess = { uri = it; saved.countDown() },
            onCameraError = { error = it; saved.countDown() }
        )

        saver.onCaptureSuccess(FakeJpegProxy(withFillBytes(jpeg(), 3)))

        assertTrue("timed out", saved.await(10, TimeUnit.SECONDS))
        assertEquals(null, error)
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        BitmapFactory.decodeFile(uri!!.path, bounds)
        assertEquals(64, bounds.outWidth)
        assertEquals(48, bounds.outHeight)
    }

    @Test
    fun fillBytesAreGoneAfterStripping() {
        val stripped = JpegFillBytes.strip(withFillBytes(jpeg(), 3))

        assertTrue(Exif.createFromInputStream(ByteArrayInputStream(stripped)) != null)
        assertEquals(jpeg().size, stripped.size)
    }

    /** Just enough of an ImageProxy for ImageSaver: a JPEG in one plane. */
    private class FakeJpegProxy(private val jpeg: ByteArray) : ImageProxy {
        private val rect = Rect(0, 0, 64, 48)
        override fun close() = Unit
        override fun getCropRect() = rect
        override fun setCropRect(rect: Rect?) = Unit
        override fun getFormat() = ImageFormat.JPEG
        override fun getHeight() = 48
        override fun getWidth() = 64
        override fun getPlanes(): Array<ImageProxy.PlaneProxy> = arrayOf(object : ImageProxy.PlaneProxy {
            override fun getRowStride() = jpeg.size
            override fun getPixelStride() = 1
            override fun getBuffer(): ByteBuffer = ByteBuffer.wrap(jpeg)
        })
        override fun getImageInfo(): ImageInfo = object : ImageInfo {
            override fun getTagBundle() = TagBundle.emptyBundle()
            override fun getTimestamp() = 0L
            override fun getRotationDegrees() = 0
            override fun getSensorToBufferTransformMatrix() = Matrix()
            override fun populateExifData(exifBuilder: ExifData.Builder) = Unit
        }
        @androidx.camera.core.ExperimentalGetImage
        override fun getImage(): Image? = null
    }
}
