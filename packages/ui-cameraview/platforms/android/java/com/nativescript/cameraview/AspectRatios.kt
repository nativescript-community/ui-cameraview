package com.nativescript.cameraview

import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min

/** The aspect ratios the view deals in, as the strings JS uses. */
object AspectRatios {
    private const val RATIO_4_3_VALUE = 4.0 / 3.0
    private const val RATIO_16_9_VALUE = 16.0 / 9.0

    /**
     * The closest of the two ratios CameraX can be asked for ("4:3" or "16:9"), whatever the
     * orientation of [width] x [height].
     */
    @JvmStatic
    fun nearestSupported(width: Int, height: Int): String {
        val ratio = max(width, height).toDouble() / min(width, height)
        return if (abs(ratio - RATIO_4_3_VALUE) <= abs(ratio - RATIO_16_9_VALUE)) "4:3" else "16:9"
    }

    /** The name of the ratio of a [width] x [height] picture size, or null if it is not a usual one. */
    @JvmStatic
    fun labelOf(width: Int, height: Int): String? {
        val ratio = width.toFloat() / height.toFloat()
        return when (ratio) {
            1.0F -> "1:1"
            in 1.2F..1.2222222F -> "6:5"
            in 1.3F..1.3333334F -> "4:3"
            in 1.77F..1.7777778F -> "16:9"
            1.5F -> "3:2"
            else -> null
        }
    }
}
