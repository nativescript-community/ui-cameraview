package com.nativescript.cameraview

import android.annotation.SuppressLint
import android.annotation.TargetApi
import android.content.ContentResolver
import android.graphics.*
import android.media.Image
import android.net.Uri
import android.os.Build
import android.provider.MediaStore
import android.util.Log
import androidx.annotation.OptIn
import androidx.annotation.RequiresApi
import androidx.camera.core.ExperimentalGetImage
import androidx.camera.core.ImageProxy
import androidx.camera.core.internal.utils.ImageUtil
import androidx.exifinterface.media.ExifInterface
import java.io.ByteArrayOutputStream
import java.io.IOException
import java.lang.Exception
import java.nio.ByteBuffer

/*
 * Copyright 2020 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/** Utils functions for bitmap conversions.  */
object BitmapUtils {
    private const val TAG = "BitmapUtils"

    // based on androidx.camera.core.ImageSaver#imageToJpegByteArray(),
    // optimized to avoid extracting uncropped image twice and to close ImageProxy sooner
    @SuppressLint("RestrictedApi")
    @Throws(ImageUtil.CodecFailedException::class)
    public fun extractJpegBytes(image: ImageProxy, jpegQuality: Int): ByteArray {
        try {
            var cropRect = if (ImageUtil.shouldCropImage(image)) image.cropRect else null
            val imageFormat = image.format

            var origJpegBytes = if (imageFormat == ImageFormat.JPEG) {
                ImageUtil.jpegImageToJpegByteArray(image)
            } else if (imageFormat == ImageFormat.YUV_420_888) {
                ImageUtil.yuvImageToJpegByteArray(image, cropRect, jpegQuality)
            } else {
                throw IllegalStateException("unknown imageFormat $imageFormat")
            }
            return origJpegBytes!!;
        } finally {
            /*
             from javadoc of the Image class:
             Since Images are often directly produced or consumed by hardware components, they are
             a limited resource shared across the system, and should be closed as soon as
             they are no longer needed.
             */
            image.close()
        }
    }
    @OptIn(ExperimentalGetImage::class) public fun byteArrayFromProxy(image: ImageProxy, jpegQuality: Int): ByteArray? {
        return extractJpegBytes(image,jpegQuality);
    }
    @OptIn(ExperimentalGetImage::class) public fun getBitmap(image: ImageProxy, jpegQuality: Int): Bitmap {
        val byteArray = extractJpegBytes(image, jpegQuality);
        var bm = BitmapFactory.decodeByteArray(byteArray, 0, byteArray.size);
        return bm;
    }

    /** Rotates a bitmap if it is converted from a bytebuffer.  */
    private fun rotateBitmap(
        bitmap: Bitmap, rotationDegrees: Int, flipX: Boolean, flipY: Boolean
    ): Bitmap {
        val matrix = Matrix()

        // Rotate the image back to straight.
        matrix.postRotate(rotationDegrees.toFloat())

        // Mirror the image along the X or Y axis.
        matrix.postScale(if (flipX) -1.0f else 1.0f, if (flipY) -1.0f else 1.0f)
        val rotatedBitmap =
            Bitmap.createBitmap(bitmap, 0, 0, bitmap.width, bitmap.height, matrix, true)

        // Recycle the old bitmap if it has changed.
        if (rotatedBitmap != bitmap) {
            bitmap.recycle()
        }
        return rotatedBitmap
    }

    @Throws(IOException::class)
    fun getBitmapFromContentUri(contentResolver: ContentResolver, imageUri: Uri): Bitmap? {
        val decodedBitmap =
            MediaStore.Images.Media.getBitmap(contentResolver, imageUri)
                ?: return null
        val orientation = getExifOrientationTag(contentResolver, imageUri)
        var rotationDegrees = 0
        var flipX = false
        var flipY = false
        when (orientation) {
            ExifInterface.ORIENTATION_FLIP_HORIZONTAL -> flipX = true
            ExifInterface.ORIENTATION_ROTATE_90 -> rotationDegrees = 90
            ExifInterface.ORIENTATION_TRANSPOSE -> {
                rotationDegrees = 90
                flipX = true
            }
            ExifInterface.ORIENTATION_ROTATE_180 -> rotationDegrees = 180
            ExifInterface.ORIENTATION_FLIP_VERTICAL -> flipY = true
            ExifInterface.ORIENTATION_ROTATE_270 -> rotationDegrees = -90
            ExifInterface.ORIENTATION_TRANSVERSE -> {
                rotationDegrees = -90
                flipX = true
            }
            ExifInterface.ORIENTATION_UNDEFINED, ExifInterface.ORIENTATION_NORMAL -> {}
            else -> {}
        }
        return rotateBitmap(decodedBitmap, rotationDegrees, flipX, flipY)
    }

    private fun getExifOrientationTag(resolver: ContentResolver, imageUri: Uri): Int {
        // We only support parsing EXIF orientation tag from local file on the device.
        // See also:
        // https://android-developers.googleblog.com/2016/12/introducing-the-exifinterface-support-library.html
        if (ContentResolver.SCHEME_CONTENT != imageUri.scheme
            && ContentResolver.SCHEME_FILE != imageUri.scheme
        ) {
            return 0
        }
        var exif: ExifInterface
        try {
            resolver.openInputStream(imageUri).use { inputStream ->
                if (inputStream == null) {
                    return 0
                }
                exif = ExifInterface(inputStream)
            }
        } catch (e: IOException) {
            Log.e(
                TAG,
                "failed to open file to read rotation meta data: $imageUri", e
            )
            return 0
        }
        return exif.getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL)
    }
}