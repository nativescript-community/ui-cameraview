package com.nativescript.cameraview

import android.hardware.camera2.CameraMetadata

enum class WhiteBalance(internal val value: String, internal val awbMode: Int) {
    Auto("auto", CameraMetadata.CONTROL_AWB_MODE_AUTO),
    Sunny("daylight", CameraMetadata.CONTROL_AWB_MODE_DAYLIGHT),
    Cloudy("cloudy-daylight", CameraMetadata.CONTROL_AWB_MODE_CLOUDY_DAYLIGHT),
    Shadow("shade", CameraMetadata.CONTROL_AWB_MODE_SHADE),
    Twilight("twilight", CameraMetadata.CONTROL_AWB_MODE_TWILIGHT),
    Fluorescent("fluorescent", CameraMetadata.CONTROL_AWB_MODE_FLUORESCENT),
    Incandescent("incandescent", CameraMetadata.CONTROL_AWB_MODE_INCANDESCENT),
    WarmFluorescent("warm-fluorescent", CameraMetadata.CONTROL_AWB_MODE_FLUORESCENT);

    companion object {
        /** By the name JS uses, Auto when it is not one. */
        @JvmStatic
        fun from(value: String?): WhiteBalance = values().firstOrNull { it.value == value } ?: Auto
    }
}
