import { Utils } from '@nativescript/core';
import { TakePictureOptions } from '.';
import {
    CameraViewBase,
    ScaleType,
    aspectRatioProperty,
    autoFocusProperty,
    captureModeProperty,
    enablePinchZoomProperty,
    flashModeProperty,
    jpegQualityProperty,
    pictureSizeProperty,
    saveToGalleryProperty,
    stretchProperty,
    zoomProperty
} from './index.common';

export function deviceHasCamera() {
    return com.nativescript.cameraview.CameraView.Companion.deviceHasCamera(Utils.android.getApplicationContext());
}

function getScaleType(scaleType: ScaleType) {
    if (typeof scaleType === 'string') {
        switch (scaleType) {
            case ScaleType.FitCenter:
            case ScaleType.AspectFit:
                return androidx.camera.view.PreviewView.ScaleType.FIT_CENTER;
            case ScaleType.FitEnd:
                return androidx.camera.view.PreviewView.ScaleType.FIT_END;
            case ScaleType.FitStart:
                return androidx.camera.view.PreviewView.ScaleType.FIT_START;
            default:
            case ScaleType.Center:
            case ScaleType.Fill:
            case ScaleType.AspectFill:
                return androidx.camera.view.PreviewView.ScaleType.FILL_CENTER;
        }
    }

    return androidx.camera.view.PreviewView.ScaleType.FILL_CENTER;
}

export class CameraView extends CameraViewBase {
    autoFocus: boolean;
    refreshCameraDelay = 300;
    // nativeViewProtected: com.otaliastudios.cameraview.CameraView;
    nativeViewProtected: com.nativescript.cameraview.CameraView;
    public createNativeView() {
        const result = new com.nativescript.cameraview.CameraView(this._context);
        return result;
    }
    _processor: com.nativescript.cameraview.ImageAnalysisCallback;
    listener: com.nativescript.cameraview.CameraEventListener;

    get processor() {
        return this._processor;
    }
    set processor(value) {
        this._processor = value;
        this.nativeViewProtected?.setAnalyserCallback(this._processor);
    }

    get minZoom() {
        return this.nativeViewProtected?.getMinZoom();
    }
    get maxZoom() {
        return this.nativeViewProtected?.getMaxZoom();
    }

    get neutralZoom() {
        return 1.0;
    }

    initNativeView() {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        nativeView['refreshCameraDelay'] = this.refreshCameraDelay;

        const that = new WeakRef(this);
        const listener = (this.listener = new com.nativescript.cameraview.CameraEventListener({
            onReady() {},
            onCameraOpen: () => {
                that?.get()?.notify({ eventName: 'cameraOpen' });
            },
            onCameraVideo(param0) {},
            onCameraAnalysis(param0) {},
            onCameraVideoStart() {},
            onZoom: (zoom: number) => {
                that?.get()?.notify({ eventName: 'zoom', zoom });
            },
            onCameraError: (param0: string, error) => {
                that?.get()?.photoListeners?.forEach((c) => c.onCameraError(param0, error));
            },
            onCameraClose: () => {
                const owner = that?.get();
                if (owner) {
                    owner.notify({ eventName: 'cameraClose' });
                    owner.photoListeners?.forEach((c) => c.onCameraClose());
                }
            },
            onCameraPhoto: (file: android.net.Uri) => {
                const owner = that?.get();
                if (owner) {
                    const result = file.toString();
                    this.photoListeners?.forEach((c) => c.onCameraPhoto(result));
                }
            },
            onCameraPhotoImage: (image, info) => {
                that?.get()?.photoListeners?.forEach((c) => c.onCameraPhotoImage(image, info));
            },
            onCameraPhotoImageProxy: (image, processor) => {
                that?.get()?.photoListeners?.forEach((c) => c.onCameraPhotoImageProxy(image, processor));
            }
        }));
        nativeView.setListener(listener);
        this.startPreview();
    }

    private _frameChangeCount = 0;

    public addEventListener(arg: string, callback: any, thisArg?: any) {
        super.addEventListener(arg, callback, thisArg);

        if (arg === CameraViewBase.FRAME_EVENT) {
            this._frameChangeCount++;
            this.createProcessor();
        }
    }

    public removeEventListener(arg: string, callback: any, thisArg?: any) {
        super.removeEventListener(arg, callback, thisArg);

        if (arg === CameraViewBase.FRAME_EVENT) {
            this._frameChangeCount--;
            if (this._frameChangeCount === 0) {
                this.detachProcessor();
            }
        }
    }

    createProcessor() {
        if (!this.processor) {
            this.processor = new com.nativescript.cameraview.ImageAnalysisCallback({
                process: (image, info, processor) => {
                    try {
                        this.notify({ eventName: 'frame', object: this, image, info, processor });
                    } catch (err) {
                        console.error('process error', err, err.stack);
                    }
                }
            });
        }
    }
    detachProcessor() {
        if (this.processor) {
            this.nativeViewProtected?.setAnalyserCallback(null);
            this.processor = null;
        }
    }
    onLoaded(): void {
        super.onLoaded();
        this.startPreview();
    }
    onUnloaded(): void {
        this.stopPreview();
        super.onUnloaded();
    }
    disposeNativeView() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.stopPreview();
            nativeView.stop();
            if (this.listener) {
                nativeView.setListener(null);
            }
            this.detachProcessor();
            nativeView.release();
        }
        this.listener = null;
        this.processor = null;

        super.disposeNativeView();
    }
    startPreview() {
        const nativeView = this.nativeViewProtected;

        if (this.readyToStartPreview && nativeView) {
            if (this.processor) {
                this.nativeViewProtected.setAnalyserCallback(this.processor);
            }
            nativeView.startPreview();
        }
    }
    stopPreview() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.stopPreview();
        }
    }
    toggleCamera() {
        const nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.toggleCamera();
        }
    }
    photoListeners: {
        onCameraError(param0: string, error);
        onCameraPhotoImage(image, info);
        onCameraPhotoImageProxy(image, processor);
        onCameraClose();
        onCameraPhoto(file);
    }[] = [];
    takePicture(options: TakePictureOptions = {}) {
        return new Promise((resolve, reject) => {
            const myListener = {
                onCameraPhoto: (file) => {
                    removeListener();
                    resolve({ image: file.replace('file:', '') });
                },
                onCameraPhotoImage: (image, info) => {
                    removeListener();
                    resolve({ image, info });
                },
                onCameraPhotoImageProxy: (image, processor) => {
                    removeListener();
                    resolve({ image, processor });
                },
                onCameraError: (param0: string, error) => {
                    removeListener();
                    reject(error);
                },
                onCameraClose: () => {
                    removeListener();
                    reject('camera_closed');
                }
            };
            const removeListener = () => {
                const index = this.photoListeners.indexOf(myListener);
                if (index >= 0) {
                    this.photoListeners.splice(index, 1);
                }
            };
            this.photoListeners.push(myListener);
            // this.nativeViewProtected.setSavePhotoToDisk(options.savePhotoToDisk !== false);
            this.nativeViewProtected.takePhoto(JSON.stringify(options));
        });
    }

    [enablePinchZoomProperty.setNative](value: boolean) {
        this.nativeViewProtected.setEnablePinchZoom(value);
    }
    [autoFocusProperty.setNative](value: boolean) {
        this.nativeViewProtected.setAutoFocus(value);
    }
    [saveToGalleryProperty.setNative](value: boolean) {
        this.nativeViewProtected.setSaveToGallery(value);
    }
    [captureModeProperty.setNative](value: number) {
        this.nativeViewProtected.setCaptureMode(value);
    }
    [pictureSizeProperty.setNative](value: { width: number; height: number } | `${number}x${number}`) {
        const actualValue = !value ? (value as string) : typeof value === 'string' ? value : `${value.width}x${value.height}`;
        this.nativeViewProtected.setPictureSize(actualValue);
    }
    [jpegQualityProperty.setNative](value: number) {
        this.nativeViewProtected.setJpegQuality(value);
    }
    [zoomProperty.setNative](value: number) {
        this.nativeViewProtected.setZoom(value);
    }
    [stretchProperty.setNative](value) {
        this.nativeViewProtected.setScaleType(getScaleType(value));
    }
    [aspectRatioProperty.setNative](value) {
        this.nativeViewProtected.setAspectRatio(value);
    }
    [flashModeProperty.setNative](value: string | number) {
        if (typeof value === 'number') {
            this.nativeViewProtected.setFlashMode(java.lang.Integer.valueOf(value));
        } else {
            this.nativeViewProtected.setFlashMode(value);
        }
        //     switch (value) {
        //         case 'off':
        //             this.nativeViewProtected.setFlashMode(com.nativescript.cameraview.CameraFlashMode.OFF);
        //             break;
        //         case 'on':
        //             this.nativeViewProtected.setFlashMode(com.nativescript.cameraview.CameraFlashMode.ON);
        //             break;
        //         case 'auto':
        //             this.nativeViewProtected.setFlashMode(com.nativescript.cameraview.CameraFlashMode.AUTO);
        //             break;
        //         case 'torch':
        //             this.nativeViewProtected.setFlashMode(com.nativescript.cameraview.CameraFlashMode.TORCH);
        //             break;
        //     }
        // } else {
        //     this.nativeViewProtected.setFlashMode(com.nativescript.cameraview.CameraFlashMode.values()[value]);
        // }
    }

    getAllAvailablePictureSizes() {
        return JSON.parse(this.nativeViewProtected?.getAllAvailablePictureSizesJSONString());
    }
    getCurrentResolutionInfo() {
        return JSON.parse(this.nativeViewProtected?.getCurrentResolutionInfo());
    }
    // getAvailablePictureSizes(ratio: string) {
    //     return this.nativeViewProtected?.getAvailablePictureSizes(ratio);
    // }

    startAutoFocus() {
        return this.nativeViewProtected?.startAutoFocus();
    }
    focusAtPoint(x, y) {
        return this.nativeViewProtected?.focusAtPoint(Utils.layout.toDevicePixels(x), Utils.layout.toDevicePixels(y));
    }
}
