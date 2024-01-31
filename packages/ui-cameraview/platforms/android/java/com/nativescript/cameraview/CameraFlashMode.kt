package com.nativescript.cameraview

enum class CameraFlashMode (val value: Int) {
    AUTO(0),
    ON(1),
    OFF(2),
    RED_EYE(3),
    TORCH(4);

    companion object {
        fun from(value: Int): CameraFlashMode = CameraFlashMode.values().first { it.value == value }
    }
}