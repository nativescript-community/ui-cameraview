package com.nativescript.camerademoapp

import com.nativescript.cameraview.PhotoOptions
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Test

/** Plain JVM test: runs without a device. */
class PhotoOptionsTest {
    @Test
    fun noStringMeansNoOptions() {
        assertNull(PhotoOptions.parse(null))
    }

    @Test
    fun aStringThatIsNotJsonMeansNoOptions() {
        assertNull(PhotoOptions.parse("{not json"))
        assertNull(PhotoOptions.parse("[1,2]"))
    }

    @Test
    fun anEmptyObjectLeavesEverythingUnset() {
        val o = PhotoOptions.parse("{}")!!

        assertNull(o.autoSquareCrop)
        assertNull(o.fileName)
        assertNull(o.maxWidth)
        assertNull(o.pictureSize)
        assertNull(o.flashMode)
    }

    @Test
    fun everyOptionIsRead() {
        val o = PhotoOptions.parse(
            """{"autoSquareCrop":true,"removeExifAfterCapture":false,"saveToGallery":true,"savePhotoToDisk":false,
               "allowExifRotation":false,"returnImageProxy":true,"fileName":"a","storageLocation":"file:/x/",
               "maxWidth":320,"maxHeight":240,"pictureSize":"4000x3000","aspectRatio":"4:3","jpegQuality":80,
               "captureMode":1,"flashMode":2,"targetRotation":3}"""
        )!!

        assertEquals(true, o.autoSquareCrop)
        assertEquals(false, o.removeExifAfterCapture)
        assertEquals(true, o.saveToGallery)
        assertEquals(false, o.savePhotoToDisk)
        assertEquals(false, o.allowExifRotation)
        assertEquals(true, o.returnImageProxy)
        assertEquals("a", o.fileName)
        assertEquals("file:/x/", o.storageLocation)
        assertEquals(320, o.maxWidth)
        assertEquals(240, o.maxHeight)
        assertEquals("4000x3000", o.pictureSize)
        assertEquals("4:3", o.aspectRatio)
        assertEquals(80, o.jpegQuality)
        assertEquals(1, o.captureMode)
        assertEquals(2, o.flashMode)
        assertEquals(3, o.targetRotation)
    }

    @Test
    fun aJsonNullIsTheSameAsAnOptionNotGiven() {
        // JSON.stringify keeps null but drops undefined
        val o = PhotoOptions.parse("""{"pictureSize":null,"fileName":null,"maxWidth":null,"autoSquareCrop":null}""")!!

        assertNotNull(o)
        assertNull(o.pictureSize)
        assertNull(o.fileName)
        assertNull(o.maxWidth)
        assertNull(o.autoSquareCrop)
    }
}
