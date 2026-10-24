package com.nativescript.cameraview

import java.io.ByteArrayOutputStream

/**
 * The JPEG spec lets an encoder put any number of `0xFF` fill bytes before a marker, and the
 * encoder of some phones does. The ExifInterface copy `ImageSaver` uses (it adds a stream to
 * stream `saveAttributes` that androidx does not have) predates the fix for them and throws an
 * `EOFException`. Removing the fill bytes of the header changes no pixel and no metadata.
 */
object JpegFillBytes {
    private const val FF = 0xFF
    private const val SOI = 0xD8
    private const val SOS = 0xDA

    /** [jpeg] itself when it has no fill byte or is not a JPEG this can walk, otherwise a copy without them. */
    @JvmStatic
    fun strip(jpeg: ByteArray): ByteArray {
        if (jpeg.size < 4 || jpeg[0].toInt() and 0xFF != FF || jpeg[1].toInt() and 0xFF != SOI) return jpeg
        val out = ByteArrayOutputStream(jpeg.size)
        out.write(jpeg, 0, 2)
        var pos = 2
        var removed = false
        while (pos < jpeg.size) {
            if (jpeg[pos].toInt() and 0xFF != FF) return jpeg
            var markerPos = pos + 1
            while (markerPos < jpeg.size && jpeg[markerPos].toInt() and 0xFF == FF) markerPos++
            if (markerPos >= jpeg.size) return jpeg
            if (markerPos > pos + 1) removed = true
            val marker = jpeg[markerPos].toInt() and 0xFF
            if (marker == SOS) {
                // entropy coded data: not segments any more, copied untouched
                out.write(FF)
                out.write(jpeg, markerPos, jpeg.size - markerPos)
                return if (removed) out.toByteArray() else jpeg
            }
            out.write(FF)
            out.write(marker)
            pos = markerPos + 1
            val standalone = marker == 0x01 || marker in 0xD0..0xD9
            if (standalone) continue
            if (pos + 2 > jpeg.size) return jpeg
            val length = (jpeg[pos].toInt() and 0xFF shl 8) or (jpeg[pos + 1].toInt() and 0xFF)
            if (length < 2 || pos + length > jpeg.size) return jpeg
            out.write(jpeg, pos, length)
            pos += length
        }
        return if (removed) out.toByteArray() else jpeg
    }
}
