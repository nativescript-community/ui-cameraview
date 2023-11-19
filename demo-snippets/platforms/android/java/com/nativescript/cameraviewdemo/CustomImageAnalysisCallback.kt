package com.nativescript.cameraviewdemo

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Point
import android.media.Image
import androidx.camera.core.ImageProxy
import com.nativescript.cameraview.BitmapUtils
import com.nativescript.cameraview.ImageAnalysisCallback
import com.nativescript.cameraview.ImageAsyncProcessor
import com.nativescript.cameraviewdemo.models.Quad
import java.util.Vector

class CustomImageAnalysisCallback  @JvmOverloads constructor(
    private val context: Context, private val cropView: CropView
) : ImageAnalysisCallback {
    /**
     * @property cropperOffsetWhenCornersNotFound if we can't find document corners, we set
     * corners to image size with a slight margin
     */
    private val cropperOffsetWhenCornersNotFound = 100.0

    companion object {
        private external fun nativeScan(srcBitmap: Bitmap, shrunkImageHeight: Int, imageRotation: Int): Vector<Vector<Point>>
        init {
            try {
                System.loadLibrary("document_detector")
            } catch (exception: Exception) {}
        }

        /**
         * take a photo with a document, and find the document's corners
         *
         * @param image a photo with a document
         * @return a list with document corners (top left, top right, bottom right, bottom left)
         */
        fun findDocumentCorners(image: Bitmap, shrunkImageHeight: Double = 500.0, imageRotation: Int= 0): List<List<Point>>? {
            val outPoints =  nativeScan(image, shrunkImageHeight.toInt(), imageRotation)
            if (outPoints.size > 0) {
                if (outPoints[0].size == 0) {
                    return null
                }
                return (outPoints)
                return (outPoints)
            }
            return null
        }
        /**
         * take a photo with a document, crop everything out but document, and force it to display
         * as a rectangle
         *
         * @param document with original image data
         * @param colorFilter for this image
         * @return bitmap with cropped and warped document
         */
//        fun cropDocument(document: Document, colorFilter: ColorFilter?): Bitmap {
//            val file = File(document.originalPhotoPath)
//            val bitmap = ImageUtil.getImageFromFile(file, 4000)
//
//            // convert corners from image preview coordinates to original photo coordinates
//            // (original image is probably bigger than the preview image)
//            val preview = document.preview
//            val corners =if (preview != null)  document.quad!!.mapPreviewToOriginalImageCoordinates(
//                RectF(0f, 0f, 1f * preview.width, 1f * preview.height),
//                1f * preview.height / bitmap.height
//            ) else document.quad!!
//            // convert output image matrix to bitmap
//            val cropWidth = ((corners.topLeftCorner.distance(corners.topRightCorner)
//                    + corners.bottomLeftCorner.distance(corners.bottomRightCorner)) / 2).toInt()
//            val cropHeight = ((corners.bottomLeftCorner.distance(corners.topLeftCorner)
//                    + corners.bottomRightCorner.distance(corners.topRightCorner)) / 2).toInt()
//
//            val cropBitmap = Bitmap.createBitmap(cropWidth, cropHeight, Bitmap.Config.ARGB_8888)
//            nativeCrop(bitmap,  corners.cornersList, cropBitmap)
////
//            if (colorFilter != null) {
//                val canvas = Canvas(cropBitmap)
//                val paint = Paint()
//                paint.colorFilter = colorFilter
//                canvas.drawBitmap(cropBitmap, 0f, 0f, paint)
//            }
//            return cropBitmap
//        }
    }
    /**
     * take a photo with a document, and find the document's corners
     *
     * @param image a photo with a document
     * @return a list with document corners (top left, top right, bottom right, bottom left)
     */
    fun findDocumentCorners(image: Bitmap, shrunkImageHeight: Double = 500.0, imageRotation: Int= 0): List<List<Point>>? {
        val outPoints =  nativeScan(image, shrunkImageHeight.toInt(), imageRotation)
        if (outPoints.size > 0) {
            if (outPoints[0].size == 0) {
                return null
            }
            return (outPoints)
            return (outPoints)
        }
        return null
    }
    /**
     * Pass in a photo of a document, and get back 4 corner points (top left, top right, bottom
     * right, bottom left). This tries to detect document corners, but falls back to photo corners
     * with slight margin in case we can't detect document corners.
     *
     * @param photo the original photo with a rectangular document
     * @return a List of 4 OpenCV points (document corners)
     */
    private fun getDocumentCorners(
        photo: Bitmap,
        shrunkImageHeight: Double = 500.0,
        imageRotation: Int = 0,
        returnDefault: Boolean = true
    ): List<List<Point>>? {
        val cornerPoints: List<List<Point>>? =
            findDocumentCorners(photo, shrunkImageHeight, imageRotation)
        // if cornerPoints is null then default the corners to the photo bounds with a margin
        var default = if (returnDefault) listOf(
            Point(
                cropperOffsetWhenCornersNotFound.toInt(),
                cropperOffsetWhenCornersNotFound.toInt()
            ),
            Point(
                (photo.width.toDouble() - cropperOffsetWhenCornersNotFound).toInt(),
                cropperOffsetWhenCornersNotFound.toInt()
            ),
            Point(
                cropperOffsetWhenCornersNotFound.toInt(),
                (photo.height.toDouble() - cropperOffsetWhenCornersNotFound.toInt()).toInt()
            ),
            Point(
                (photo.width.toDouble() - cropperOffsetWhenCornersNotFound).toInt(),
                (photo.height.toDouble() - cropperOffsetWhenCornersNotFound).toInt()
            )
        ) else null
        return if (cornerPoints != null) cornerPoints else (if (default != null) listOf(default) else null)
    }

    override fun process(
        image: ImageProxy,
        info: androidx.camera.core.ImageInfo,
        processor: ImageAsyncProcessor
    ) {
//        if (!livePreview) {
//            processor.finished()
//            return
//        }
        try {

            var previewBitmap = BitmapUtils.getBitmap(context, image )
            var pointsList: List<List<Point>>?;

            pointsList = getDocumentCorners(
                previewBitmap,
                500.0,
                info.rotationDegrees,
                false
            )
            if (pointsList != null) {
                var photoHeight: Int;
                if (info.rotationDegrees == 180 || info.rotationDegrees == 0) {
                    photoHeight = image.height
                } else {
                    photoHeight = image.width
                }
                val ratio = cropView.height.toFloat() / photoHeight.toFloat();
                val quads = pointsList.map { points ->
                    points.sortedBy { it.y }
                        .chunked(2)
                        .map { it.sortedBy { point -> point.x } }
                        .flatten()
                }
                cropView.quads = quads!!.map { points -> Quad(points) }.map { quad ->
                    quad.applyRatio(ratio)
                }
            } else {
                cropView.quads = null;
            }
            cropView.invalidate()
            previewBitmap.recycle()
            processor.finished()
        } catch (exception: Exception) {
            exception.printStackTrace()
//                        Log.e(TAG, exception.localizedMessage)
        }
    }

}