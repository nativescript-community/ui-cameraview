package com.nativescript.cameraview

import android.content.ContentValues
import android.content.Context
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.MediaStore
import java.io.File
import java.io.IOException

/** Copies a capture saved in the app's own folder into the shared gallery (DCIM). */
internal object MediaStoreWriter {
    /**
     * Inserts [file] in [collection] as [displayName] and returns its uri. The row stays pending,
     * hidden from the gallery, until the copy is complete. Throws [IOException] if it fails.
     */
    @Throws(IOException::class)
    fun copyToGallery(context: Context, file: File, collection: Uri, displayName: String, mimeType: String): Uri {
        val resolver = context.contentResolver
        val now = System.currentTimeMillis()
        val values = ContentValues().apply {
            put(MediaStore.MediaColumns.DISPLAY_NAME, displayName)
            put(MediaStore.MediaColumns.DATE_ADDED, now)
            put(MediaStore.MediaColumns.MIME_TYPE, mimeType)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DCIM)
                put(MediaStore.MediaColumns.IS_PENDING, 1)
                put(MediaStore.MediaColumns.DATE_TAKEN, now)
            }
        }
        val uri = resolver.insert(collection, values) ?: throw IOException("Failed to create uri")
        try {
            val out = resolver.openOutputStream(uri) ?: throw IOException("Failed to open $uri")
            out.use { output -> file.inputStream().use { it.copyTo(output) } }
        } catch (e: Exception) {
            resolver.delete(uri, null, null)
            throw e as? IOException ?: IOException(e)
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            values.clear()
            values.put(MediaStore.MediaColumns.IS_PENDING, 0)
            resolver.update(uri, values, null, null)
        }
        return uri
    }
}
