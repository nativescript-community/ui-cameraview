import { GridLayout, Trace } from '@nativescript/core';
import { Property } from '@nativescript/core/ui/core/properties';
import { booleanConverter } from '@nativescript/core/ui/core/view-base';
import { TakePictureOptions } from '.';

export const CameraViewTraceCategory = 'CameraView';

export enum CLogTypes {
    log = Trace.messageType.log,
    info = Trace.messageType.info,
    warning = Trace.messageType.warn,
    error = Trace.messageType.error
}

export const CLog = (type: CLogTypes, ...args) => {
    Trace.write(args.map((a) => (a && typeof a === 'object' ? JSON.stringify(a) : a)).join(' '), CameraViewTraceCategory, type);
};

export enum ScaleType {
    None = 'none',
    Fill = 'fill',
    AspectFill = 'aspectFill',
    AspectFit = 'aspectFit',
    Center = 'center',
    FitCenter = 'fitCenter',
    FitEnd = 'fitEnd',
    FitStart = 'fitStart'
}

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
export const autoFocusProperty = new Property<CameraViewBase, boolean | number>({
    name: 'autoFocus',
    defaultValue: false,
    valueConverter: (v) => (v === 'false' || v === 'true' ? booleanConverter(v) : parseInt(v, 10))
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
export const zoomProperty = new Property<CameraViewBase, number>({
    name: 'zoom',
    valueConverter: (d) => parseInt(d, 10)
});
export const stretchProperty = new Property<CameraViewBase, string>({ name: 'stretch' });
export const aspectRatioProperty = new Property<CameraViewBase, string>({ name: 'aspectRatio' });

zoomProperty.register(CameraViewBase);
jpegQualityProperty.register(CameraViewBase);
pictureSizeProperty.register(CameraViewBase);
captureModeProperty.register(CameraViewBase);
flashModeProperty.register(CameraViewBase);
autoFocusProperty.register(CameraViewBase);
enablePinchZoomProperty.register(CameraViewBase);
saveToGalleryProperty.register(CameraViewBase);
stretchProperty.register(CameraViewBase);
aspectRatioProperty.register(CameraViewBase);
