package com.nativescript.camerademoapp

import com.nativescript.cameraview.AspectRatios
import com.nativescript.cameraview.Size
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

/** Plain JVM test: runs without a device. */
class AspectRatiosTest {
    @Test
    fun nearestSupportedPicksFourThirdsOrSixteenNinthsWhateverTheOrientation() {
        assertEquals("4:3", AspectRatios.nearestSupported(4000, 3000))
        assertEquals("4:3", AspectRatios.nearestSupported(3000, 4000))
        assertEquals("16:9", AspectRatios.nearestSupported(1920, 1080))
        assertEquals("16:9", AspectRatios.nearestSupported(1080, 1920))
    }

    @Test
    fun nearestSupportedRoundsAnOtherRatioToTheClosest() {
        assertEquals("4:3", AspectRatios.nearestSupported(1000, 1000)) // 1:1 is closer to 4:3
        assertEquals("16:9", AspectRatios.nearestSupported(2400, 1080)) // 20:9 is closer to 16:9
        assertEquals("4:3", AspectRatios.nearestSupported(1500, 1000)) // 3:2: 0.17 from 4:3, 0.28 from 16:9
    }

    @Test
    fun labelOfNamesTheUsualPictureRatios() {
        assertEquals("1:1", AspectRatios.labelOf(2976, 2976))
        assertEquals("6:5", AspectRatios.labelOf(1200, 1000))
        assertEquals("4:3", AspectRatios.labelOf(4000, 3000))
        assertEquals("4:3", AspectRatios.labelOf(4160, 3120))
        assertEquals("16:9", AspectRatios.labelOf(3840, 2160))
        assertEquals("16:9", AspectRatios.labelOf(4096, 2304))
        assertEquals("3:2", AspectRatios.labelOf(3000, 2000))
    }

    @Test
    fun labelOfIsNullForAnythingElse() {
        assertNull(AspectRatios.labelOf(2400, 1080))
        assertNull(AspectRatios.labelOf(1000, 3000))
        assertNull(AspectRatios.labelOf(1250, 1000))
    }

    @Test
    fun sizeIsAValue() {
        assertEquals(Size(4000, 3000), Size(4000, 3000))
        assertEquals(1, setOf(Size(4000, 3000), Size(4000, 3000)).size)
    }
}
