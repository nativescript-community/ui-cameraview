package com.nativescript.cameraview

import org.json.JSONException
import org.json.JSONObject

/**
 * The options JS passes to `takePhoto` as a JSON string. A property is null when the caller did
 * not give it (or gave `null`): the view's own setting applies then.
 */
class PhotoOptions private constructor(private val json: JSONObject) {
    val autoSquareCrop: Boolean? = bool("autoSquareCrop")
    val removeExifAfterCapture: Boolean? = bool("removeExifAfterCapture")
    val saveToGallery: Boolean? = bool("saveToGallery")
    val savePhotoToDisk: Boolean? = bool("savePhotoToDisk")
    val allowExifRotation: Boolean? = bool("allowExifRotation")
    val returnImageProxy: Boolean? = bool("returnImageProxy")
    val fileName: String? = string("fileName")
    val storageLocation: String? = string("storageLocation")
    val maxWidth: Int? = int("maxWidth")
    val maxHeight: Int? = int("maxHeight")

    // how the still is captured: a different value needs another ImageCapture
    val pictureSize: String? = string("pictureSize")
    val aspectRatio: String? = string("aspectRatio")
    val jpegQuality: Int? = int("jpegQuality")
    val captureMode: Int? = int("captureMode")
    val flashMode: Int? = int("flashMode")
    val targetRotation: Int? = int("targetRotation")

    private fun has(key: String) = json.has(key) && !json.isNull(key)
    private fun bool(key: String) = if (has(key)) json.getBoolean(key) else null
    private fun string(key: String) = if (has(key)) json.getString(key) else null
    private fun int(key: String) = if (has(key)) json.getInt(key) else null

    companion object {
        /** Null when there is nothing to read: no string, or one that is not a JSON object. */
        @JvmStatic
        fun parse(jsonString: String?): PhotoOptions? {
            if (jsonString == null) return null
            return try {
                PhotoOptions(JSONObject(jsonString))
            } catch (e: JSONException) {
                e.printStackTrace()
                null
            }
        }
    }
}
