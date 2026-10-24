package com.nativescript.camerademoapp

import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraViewRule
import org.json.JSONArray
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class PictureSizesTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private data class Entry(val pictureSize: String, val width: Int, val height: Int, val aspectRatio: String)

    private fun sizes(): List<Entry> {
        val json = JSONArray(camera.runOnUi { camera.view.getAllAvailablePictureSizesJSONString() })
        return (0 until json.length()).map {
            val o = json.getJSONObject(it)
            Entry(o.getString("pictureSize"), o.getInt("width"), o.getInt("height"), o.getString("aspectRatio"))
        }
    }

    @Test
    fun theCameraOffersSizes() {
        camera.startPreview()

        assertTrue(sizes().isNotEmpty())
    }

    @Test
    fun noSizeIsListedTwice() {
        camera.startPreview()

        val listed = sizes().map { it.pictureSize }
        assertEquals("duplicates in $listed", listed.distinct(), listed)
    }

    @Test
    fun sizesAreSortedFromTheLargest() {
        camera.startPreview()

        val areas = sizes().map { it.width.toLong() * it.height }
        assertEquals(areas.sortedDescending(), areas)
    }

    @Test
    fun everySizeCarriesTheRatioItReallyHas() {
        camera.startPreview()

        sizes().forEach {
            val ratio = it.width.toFloat() / it.height
            val expected = when {
                it.aspectRatio == "1:1" -> 1.0f
                it.aspectRatio == "6:5" -> 1.2f
                it.aspectRatio == "4:3" -> 1.3333f
                it.aspectRatio == "16:9" -> 1.7777f
                it.aspectRatio == "3:2" -> 1.5f
                else -> throw AssertionError("unknown ratio ${it.aspectRatio}")
            }
            assertEquals("$it", expected, ratio, 0.03f)
        }
    }

    @Test
    fun theSizesPerRatioAreTheSameSizesAsTheFlatList() {
        camera.startPreview()

        val flat = sizes().map { it.pictureSize }.toSet()
        val perRatio = listOf("1:1", "6:5", "4:3", "16:9", "3:2").flatMap { ratio ->
            camera.runOnUi { camera.view.getAvailablePictureSizes(ratio) }.map { "${it.width}x${it.height}" }
        }.toSet()

        assertEquals(flat, perRatio)
    }
}
