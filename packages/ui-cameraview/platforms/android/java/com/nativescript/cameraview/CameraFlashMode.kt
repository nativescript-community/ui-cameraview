package com.nativescript.cameraview

enum class CameraFlashMode (val value: Int) {
    OFF(0),
    ON(1),
    AUTO(2),
    RED_EYE(3),
    TORCH(4);

    companion object {
        fun from(value: Int): CameraFlashMode = CameraFlashMode.values().first { it.value == value }
        fun from(value: String): CameraFlashMode {
            when (value) {
                "auto" -> return AUTO
                "redeye" -> return RED_EYE
                "on" -> return ON
                "torch" -> return TORCH
                "off" -> return OFF
                else -> return OFF
            }
        }
    }
}