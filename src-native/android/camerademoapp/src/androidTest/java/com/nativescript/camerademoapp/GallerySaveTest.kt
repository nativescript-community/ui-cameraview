package com.nativescript.camerademoapp

import android.content.ContentResolver
import android.net.Uri
import android.provider.MediaStore
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.util.UUID

/**
 * `saveToGallery` must put the capture in the shared MediaStore. Everything inserted here is
 * deleted afterwards: these run on a real phone with a real gallery.
 */
@RunWith(AndroidJUnit4::class)
class GallerySaveTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private val resolver: ContentResolver get() = InstrumentationRegistry.getInstrumentation().targetContext.contentResolver
    private val inserted = mutableListOf<Pair<Uri, String>>()

    @After
    fun deleteWhatWasInserted() {
        inserted.forEach { (collection, name) -> resolver.delete(collection, "${MediaStore.MediaColumns.DISPLAY_NAME}=?", arrayOf(name)) }
    }

    /** MIME type of the finished (not pending) MediaStore row called [displayName], or null if there is none. */
    private fun mimeTypeInGallery(collection: Uri, displayName: String): String? {
        inserted.add(collection to displayName)
        resolver.query(
            collection,
            arrayOf(MediaStore.MediaColumns.MIME_TYPE),
            "${MediaStore.MediaColumns.DISPLAY_NAME}=?",
            arrayOf(displayName),
            null
        )?.use { return if (it.moveToFirst()) it.getString(0) else null }
        return null
    }

    /** Size and folder of the finished MediaStore row called [displayName]. */
    private fun rowInGallery(collection: Uri, displayName: String): Pair<Long, String>? {
        resolver.query(
            collection,
            arrayOf(MediaStore.MediaColumns.SIZE, MediaStore.MediaColumns.RELATIVE_PATH),
            "${MediaStore.MediaColumns.DISPLAY_NAME}=?",
            arrayOf(displayName),
            null
        )?.use { return if (it.moveToFirst()) it.getLong(0) to it.getString(1) else null }
        return null
    }

    private val images = MediaStore.Images.Media.EXTERNAL_CONTENT_URI
    private val videos = MediaStore.Video.Media.EXTERNAL_CONTENT_URI

    @Test
    fun aPhotoFromImageSaverReachesTheGalleryAsJpeg() {
        camera.startPreview()
        val name = "gallery-test-${UUID.randomUUID()}"

        camera.runOnUi { camera.view.takePhoto("""{"saveToGallery":true,"fileName":"$name"}""") }
        camera.listener.await<CameraEvent.Photo>()

        assertEquals("image/jpeg", mimeTypeInGallery(images, "$name.jpg"))
    }

    @Test
    fun aPhotoFromTheImageProxyPathReachesTheGalleryAsJpeg() {
        camera.startPreview()
        val name = "gallery-test-${UUID.randomUUID()}"

        camera.runOnUi { camera.view.takePhoto("""{"saveToGallery":true,"allowExifRotation":false,"fileName":"$name"}""") }
        camera.listener.await<CameraEvent.Photo>()

        assertEquals("image/jpeg", mimeTypeInGallery(images, "$name.jpg"))
    }

    @Test
    fun aVideoReachesTheGalleryAsMp4() {
        camera.startPreview()
        camera.runOnUi { camera.view.saveToGallery = true }

        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(2_000)
        camera.runOnUi { camera.view.stopRecording() }
        val video = camera.listener.await<CameraEvent.Video>().file
        assertNotNull(video)

        assertEquals("video/mp4", mimeTypeInGallery(videos, video!!.name))
    }

    @Test
    fun theGalleryCopyOfAnImageProxyPhotoIsTheSavedFileInDcim() {
        camera.startPreview()
        val name = "gallery-test-${UUID.randomUUID()}"

        camera.runOnUi { camera.view.takePhoto("""{"saveToGallery":true,"allowExifRotation":false,"fileName":"$name"}""") }
        val saved = java.io.File(camera.listener.await<CameraEvent.Photo>().uri!!.path!!)

        mimeTypeInGallery(images, "$name.jpg") // registers the row for cleanup
        val (size, folder) = rowInGallery(images, "$name.jpg")!!
        assertEquals(saved.length(), size)
        assertTrue("folder $folder", folder.startsWith("DCIM"))
    }

    @Test
    fun theGalleryCopyOfAVideoIsTheRecordedFileInDcim() {
        camera.startPreview()
        camera.runOnUi { camera.view.saveToGallery = true }

        camera.runOnUi { camera.view.startRecording() }
        camera.listener.await<CameraEvent.VideoStart>()
        Thread.sleep(2_000)
        camera.runOnUi { camera.view.stopRecording() }
        val video = camera.listener.await<CameraEvent.Video>().file!!

        mimeTypeInGallery(videos, video.name) // registers the row for cleanup
        val (size, folder) = rowInGallery(videos, video.name)!!
        assertEquals(video.length(), size)
        assertTrue("folder $folder", folder.startsWith("DCIM"))
    }
}
