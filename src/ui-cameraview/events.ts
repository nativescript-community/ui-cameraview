/**
 * The events the view notifies. No import: also run by plain node in the tests.
 *
 * NativeScript only binds an event written as an XML attribute (`<cv:CameraView cameraOpen="onOpen">`)
 * if the class has a static `<name>Event`: CameraViewBase has them.
 */
export const CAMERA_OPEN_EVENT = 'cameraOpen';
export const CAMERA_CLOSE_EVENT = 'cameraClose';
export const ZOOM_EVENT = 'zoom';
export const FRAME_EVENT = 'frame';
