package com.nativescript.cameraview

import android.graphics.ImageFormat
import android.graphics.SurfaceTexture
import android.hardware.camera2.params.StreamConfigurationMap
import android.os.Build

object PictureSizes {
    /** Every size a camera can output for a still or a preview, the high resolution ones included, once each. */
    fun outputSizes(streamMap: StreamConfigurationMap): List<android.util.Size> {
        var sizes = streamMap.getOutputSizes(ImageFormat.JPEG).toList() +
            streamMap.getOutputSizes(SurfaceTexture::class.java).toList()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            streamMap.getHighResolutionOutputSizes(ImageFormat.JPEG)?.let { sizes = sizes + it }
        }
        return sizes.distinct()
    }

    /** The sizes by ratio name, without doubles (a size is often both a JPEG and a preview size). */
    fun byRatio(sizes: Collection<android.util.Size>): Map<String, Set<Size>> {
        val result = LinkedHashMap<String, MutableSet<Size>>()
        for (size in sizes) {
            val ratio = AspectRatios.labelOf(size.width, size.height) ?: continue
            result.getOrPut(ratio) { LinkedHashSet() }.add(Size(size.width, size.height))
        }
        return result
    }

    /** The largest of [sizes] that does not exceed [limit] in pixels (no limit when null). Null if none. */
    @JvmStatic
    fun largestUpTo(sizes: Collection<Size>, limit: Size?): Size? =
        sizes.filter { limit == null || it.width.toLong() * it.height <= limit.width.toLong() * limit.height }
            .maxByOrNull { it.width.toLong() * it.height }
}
