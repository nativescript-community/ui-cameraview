package com.nativescript.camerademoapp

import android.graphics.BitmapFactory
import android.os.Build
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.nativescript.camerademoapp.support.CameraEvent
import com.nativescript.camerademoapp.support.CameraViewRule
import com.nativescript.cameraview.WhiteBalance
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Assume.assumeTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.RuleChain
import org.junit.runner.RunWith
import java.io.File

@RunWith(AndroidJUnit4::class)
class WhiteBalanceTest {
    private val camera = CameraViewRule()

    @get:Rule
    val rules: RuleChain = RuleChain.outerRule(CameraViewRule.permissions()).around(camera)

    private fun shoot(): File {
        // no option: a jpegQuality would build another ImageCapture and count as a rebind
        camera.runOnUi { camera.view.takePhoto(null) }
        return File(camera.listener.await<CameraEvent.Photo>().uri!!.path!!)
    }

    /** Mean blue over mean red of the photo: higher means a bluer picture. Skips the test in the dark. */
    private fun blueOverRed(file: File): Double {
        val bitmap = BitmapFactory.decodeFile(file.path, BitmapFactory.Options().apply { inSampleSize = 16 })
        var red = 0L
        var green = 0L
        var blue = 0L
        val pixels = IntArray(bitmap.width * bitmap.height)
        bitmap.getPixels(pixels, 0, bitmap.width, 0, 0, bitmap.width, bitmap.height)
        for (p in pixels) {
            red += (p shr 16) and 0xFF
            green += (p shr 8) and 0xFF
            blue += p and 0xFF
        }
        val brightness = (red + green + blue) / 3.0 / pixels.size
        assumeTrue("the scene is too dark to compare colours (mean $brightness/255): point the camera at something lit", brightness > 25)
        return blue.toDouble() / maxOf(red, 1)
    }

    private fun settle() = Thread.sleep(1_500) // the auto white balance converges over a few frames

    @Test
    fun changingTheWhiteBalanceWhilePreviewingKeepsTheStillBound() {
        camera.startPreview()
        val binds = camera.runOnUi { camera.view.bindCalls }

        camera.runOnUi { camera.view.whiteBalance = WhiteBalance.Incandescent }
        shoot()
        camera.runOnUi { camera.view.whiteBalance = WhiteBalance.Auto }
        shoot()

        assertEquals("a white balance change rebound the use cases", binds, camera.runOnUi { camera.view.bindCalls })
    }

    @Test
    fun theSupportedWhiteBalancesAlwaysIncludeAuto() {
        camera.startPreview()

        val supported = camera.runOnUi { camera.view.supportedWhiteBalances }

        assertTrue("$supported", supported.contains(WhiteBalance.Auto))
    }

    @Test
    fun incandescentGivesABluerPictureThanDaylight() {
        assumeTrue("an emulator does not honour the white balance mode", !Build.FINGERPRINT.contains("generic") && !Build.FINGERPRINT.contains("emulator"))
        camera.startPreview()
        val supported = camera.runOnUi { camera.view.supportedWhiteBalances }
        assumeTrue("needs both modes, has $supported", supported.containsAll(listOf(WhiteBalance.Sunny, WhiteBalance.Incandescent)))

        camera.runOnUi { camera.view.whiteBalance = WhiteBalance.Sunny }
        settle()
        val daylight = blueOverRed(shoot())
        camera.runOnUi { camera.view.whiteBalance = WhiteBalance.Incandescent }
        settle()
        val incandescent = blueOverRed(shoot())

        assertTrue("blue/red: daylight $daylight, incandescent $incandescent", incandescent > daylight * 1.03)
    }

    @Test
    fun theWhiteBalanceSurvivesTheCameraBeingRebuilt() {
        assumeTrue("an emulator does not honour the white balance mode", !Build.FINGERPRINT.contains("generic") && !Build.FINGERPRINT.contains("emulator"))
        camera.startPreview()
        val supported = camera.runOnUi { camera.view.supportedWhiteBalances }
        assumeTrue("needs both modes, has $supported", supported.containsAll(listOf(WhiteBalance.Sunny, WhiteBalance.Incandescent)))
        camera.runOnUi { camera.view.whiteBalance = WhiteBalance.Sunny }
        settle()
        val daylight = blueOverRed(shoot())

        camera.runOnUi { camera.view.whiteBalance = WhiteBalance.Incandescent }
        camera.runOnUi { camera.view.aspectRatio = if (camera.view.aspectRatio == "16:9") "4:3" else "16:9" }
        camera.listener.await<CameraEvent.Close>()
        camera.listener.await<CameraEvent.Open>()
        settle()
        val incandescent = blueOverRed(shoot())

        assertTrue("blue/red: daylight $daylight, incandescent after refresh $incandescent", incandescent > daylight * 1.03)
    }

    @Test
    fun whiteBalanceCanBeSetByTheNameJsUses() {
        camera.startPreview()

        camera.runOnUi { camera.view.setWhiteBalance("daylight") }
        assertEquals(WhiteBalance.Sunny, camera.runOnUi { camera.view.whiteBalance })
        camera.runOnUi { camera.view.setWhiteBalance("nonsense") }
        assertEquals(WhiteBalance.Auto, camera.runOnUi { camera.view.whiteBalance })
    }
}
