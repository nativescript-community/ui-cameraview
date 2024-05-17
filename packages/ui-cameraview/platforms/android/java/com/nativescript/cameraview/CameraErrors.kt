package com.nativescript.cameraview


abstract class CameraError(
    /**
     * The domain of the error. Error domains are used to group errors.
     *
     * Example: "permission"
     */
    val domain: String,
    /**
     * The id of the error. Errors are uniquely identified under a given domain.
     *
     * Example: "microphone-permission-denied"
     */
    val id: String,
    /**
     * A detailed error description of "what went wrong".
     *
     * Example: "The microphone permission was denied!"
     */
    override val message: String,
    /**
     * A throwable that caused this error.
     */
    cause: Throwable? = null
) : Throwable("[$domain/$id] $message", cause) {
    val code: String
        get() = "$domain/$id"
}
class CameraNotReadyError :
    CameraError("session", "camera-not-ready", "The Camera is not ready yet! Wait for the onInitialized() callback!")