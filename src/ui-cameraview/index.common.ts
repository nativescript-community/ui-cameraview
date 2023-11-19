import { GridLayout } from '@nativescript/core';
import { Image } from '@nativescript/core/ui/image';
import { CssProperty, Property } from '@nativescript/core/ui/core/properties';
import { booleanConverter } from '@nativescript/core/ui/core/view-base';
import { TakePictureOptions } from '.';

export abstract class CameraViewBase extends GridLayout {
    static FRAME_EVENT = 'frame';
    flashMode = 'off';
    abstract toggleCamera();
    abstract startPreview();
    abstract stopPreview();
    abstract focusAtPoint(x, y);
    abstract takePicture(options: TakePictureOptions): Promise<any>;
}
export const flashModeProperty = new Property<CameraViewBase, string | number>({
    name: 'flashMode',
    defaultValue: 'off'
});
export const enablePinchZoomProperty = new Property<CameraViewBase, boolean>({
    name: 'enablePinchZoom',
    defaultValue: false,
    valueConverter: booleanConverter
});
export const autoFocusProperty = new Property<CameraViewBase, boolean>({
    name: 'autoFocus',
    defaultValue: false,
    valueConverter: booleanConverter
});
export const saveToGalleryProperty = new Property<CameraViewBase, boolean>({
    name: 'saveToGallery',
    defaultValue: false,
    valueConverter: booleanConverter
});
export const pictureSizeProperty = new Property<CameraViewBase, string | { x: number; y: number }>({
    name: 'pictureSize'
});
export const captureModeProperty = new Property<CameraViewBase, number>({
    name: 'captureMode',
    valueConverter: (d) => parseInt(d, 10),
    defaultValue: 1
});
export const jpegQualityProperty = new Property<CameraViewBase, number>({
    name: 'jpegQuality',
    valueConverter: (d) => parseInt(d, 10)
});
jpegQualityProperty.register(CameraViewBase);
pictureSizeProperty.register(CameraViewBase);
captureModeProperty.register(CameraViewBase);
flashModeProperty.register(CameraViewBase);
autoFocusProperty.register(CameraViewBase);
enablePinchZoomProperty.register(CameraViewBase);
saveToGalleryProperty.register(CameraViewBase);
