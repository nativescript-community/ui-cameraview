import { TakePictureOptions } from '.';
import { CameraViewBase, ScaleType, autoFocusProperty, captureModeProperty, flashModeProperty, stretchProperty } from './index.common';
import { File, Property, Utils } from '@nativescript/core';

function getScaleType(scaleType: ScaleType) {
    if (typeof scaleType === 'string') {
        switch (scaleType) {
            case ScaleType.FitCenter:
            case ScaleType.AspectFit:
            case ScaleType.FitEnd:
            case ScaleType.FitStart:
                return AVLayerVideoGravityResizeAspect;
            default:
            case ScaleType.Center:
            case ScaleType.Fill:
            case ScaleType.AspectFill:
                return AVLayerVideoGravityResizeAspectFill;
        }
    }

    return AVLayerVideoGravityResizeAspectFill;
}

@NativeClass
class ProcessRawVideoSampleBufferDelegateImpl extends NSObject implements ProcessRawVideoSampleBufferDelegate {
    cameraViewRenderToCustomContextWithImageBufferOnQueue(cameraView: NSCameraView, imageBuffer: any, queue: NSObject): void {}
    cameraViewWillProcessRawVideoSampleBufferOnQueue(cameraView: NSCameraView, sampleBuffer: any, queue: NSObject): void {
        const owner = this._owner?.get();
        this._owner?.get()?.notify({ eventName: 'frame', object: owner, cameraView, sampleBuffer, queue });
    }
    _owner: WeakRef<CameraView>;
    public static ObjCProtocols = [ProcessRawVideoSampleBufferDelegate];

    static initWithOwner(owner: CameraView) {
        const delegate = ProcessRawVideoSampleBufferDelegateImpl.new() as ProcessRawVideoSampleBufferDelegateImpl;
        delegate._owner = new WeakRef(owner);
        return delegate;
    }
}
@NativeClass
class NSCameraViewVideoDelegateImpl extends NSObject implements NSCameraViewVideoDelegate {
    cameraViewDidCompletePhotoCaptureFromVideoFrame(cameraView: NSCameraView, photoDict: any): void {
        this._owner?.get()?.cameraViewDidCompletePhotoCaptureFromVideoFrame(photoDict);
    }

    _owner: WeakRef<CameraView>;
    public static ObjCProtocols = [NSCameraViewVideoDelegate];

    static initWithOwner(owner: CameraView) {
        const delegate = NSCameraViewVideoDelegateImpl.new() as NSCameraViewVideoDelegateImpl;
        delegate._owner = new WeakRef(owner);
        return delegate;
    }
}
@NativeClass
class NSCameraViewPhotoDelegateImpl extends NSObject implements NSCameraViewPhotoDelegate {
    cameraViewDidCapturePhotoWithConfiguration(cameraView: NSCameraView, photoConfiguration: any): void {}
    cameraViewDidFinishProcessingPhotoPhotoDictPhotoConfiguration(cameraView: NSCameraView, photo: UIImage, photoDict: NSDictionary<string, any>, photoConfiguration: NSCameraViewPhotoConfiguration) {
        // TODO: move this to swift
        const size: CGSize = photo.size;
        UIGraphicsBeginImageContextWithOptions(size, false, photo.scale);
        photo.drawInRect(CGRectMake(0, 0, size.width, size.height));
        const resizedImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
        this._owner?.get()?.cameraViewDidFinishProcessingPhotoPhotoDictPhotoConfiguration(resizedImage, photoDict);
    }

    _owner: WeakRef<CameraView>;
    public static ObjCProtocols = [NSCameraViewPhotoDelegate];

    static initWithOwner(owner: CameraView) {
        const delegate = NSCameraViewPhotoDelegateImpl.new() as NSCameraViewPhotoDelegateImpl;
        delegate._owner = new WeakRef(owner);
        return delegate;
    }
}

@NativeClass
class NSCameraViewDelegateImpl extends NSObject implements NSCameraViewDelegate {
    sessionDidStart(cameraView: NSCameraView): void {
        const owner = this._owner.get();
        if (owner) {
            owner.notify({ eventName: 'cameraOpen' });
        }
    }
    sessionDidStop(cameraView: NSCameraView): void {
        const owner = this._owner.get();
        if (owner) {
            owner.notify({ eventName: 'cameraClose' });
        }
    }
    didUpdateVideoZoomFactor(zoom: number) {
        const owner = this._owner.get();
        if (owner) {
            owner.notify({ eventName: 'zoom', zoom });
        }
    }
    _owner: WeakRef<CameraView>;
    public static ObjCProtocols = [NSCameraViewDelegate];

    static initWithOwner(owner: CameraView) {
        const delegate = NSCameraViewDelegateImpl.new() as NSCameraViewDelegateImpl;
        delegate._owner = new WeakRef(owner);
        return delegate;
    }
}

export const iosCaptureModeProperty = new Property<CameraView, number | String>({
    name: 'iosCaptureMode',
    defaultValue: 1
});
export class CameraView extends CameraViewBase {
    cameraViewDidFinishProcessingPhotoPhotoDictPhotoConfiguration(photo: UIImage, photoDict: any) {
        // const cgImage = photo.CGImageRepresentation();
        // const orientation = photo.metadata.objectForKey(kCGImagePropertyOrientation);
        // const image = UIImage.imageWithCGImageScaleOrientation(cgImage, 1, orientation);
        this.photoCaptureListener.forEach((c) => c(photo, photoDict));
    }
    cameraViewDidProcessPhotoCaptureWithPhotoConfiguration(photoDict: any) {}
    videoCaptureListener = new Set<Function>();
    photoCaptureListener = new Set<Function>();
    cameraViewDidCompletePhotoCaptureFromVideoFrame(photoDict: any) {
        this.videoCaptureListener.forEach((c) => c(photoDict));
    }
    nativeViewProtected: NSCameraView;
    _processor: ProcessRawVideoSampleBufferDelegate;
    videoDelegate: NSCameraViewVideoDelegate;
    photoDelegate: NSCameraViewPhotoDelegate;
    delegate: NSCameraViewDelegateImpl;
    createNativeView() {
        return NSCameraView.alloc().initWithFrame(CGRectZero);
    }
    private _frameChangeCount = 0;

    initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        nativeView.photoDelegate = this.photoDelegate = NSCameraViewPhotoDelegateImpl.initWithOwner(this);
        nativeView.videoDelegate = this.videoDelegate = NSCameraViewVideoDelegateImpl.initWithOwner(this);
        nativeView.delegate = this.delegate = NSCameraViewDelegateImpl.initWithOwner(this);
    }
    disposeNativeView() {
        this.stopPreview();
        this.detachProcessor();
        const nativeView = this.nativeViewProtected;
        nativeView.videoDelegate = this.videoDelegate = null;
        nativeView.photoDelegate = this.photoDelegate = null;
        nativeView.delegate = this.delegate = null;
        super.disposeNativeView();
    }
    get processor() {
        return this._processor;
    }
    set processor(value) {
        this._processor = value;
        if (this.nativeViewProtected) {
            this.nativeViewProtected.processingDelegate = this._processor;
        }
    }

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
            this.processor = ProcessRawVideoSampleBufferDelegateImpl.initWithOwner(this);
            if (this.nativeViewProtected) {
                this.nativeViewProtected.processingDelegate = this.processor;
            }
        }
    }
    detachProcessor() {
        if (this.processor) {
            if (this.nativeViewProtected) {
                this.nativeViewProtected.processingDelegate = null;
            }
            this.processor = null;
        }
    }
    onLoaded(): void {
        super.onLoaded();
        if (this.processor) {
            this.nativeViewProtected.processingDelegate = this.processor;
        }
        this.startPreview();
    }
    onUnloaded(): void {
        this.stopPreview();
        this.nativeViewProtected.processingDelegate = null;
        super.onUnloaded();
    }
    previewStarted = false;
    startPreview() {
        if (this.previewStarted) {
            return;
        }
        this.previewStarted = true;
        this.nativeViewProtected?.startPreviewAndReturnError();
    }
    stopPreview() {
        if (!this.previewStarted) {
            return;
        }
        this.previewStarted = false;
        this.nativeViewProtected?.stopPreview();
    }
    focusAtPoint(x, y) {
        // NextLevel expects a point between 0,1
        const width = this.getMeasuredWidth();
        const height = this.getMeasuredHeight();
        console.log('focusAtPoint', width, height, x, y);
        this.nativeViewProtected?.focusAtAdjustedPointOfInterest(CGPointMake(Utils.layout.toDevicePixels(x) / width, Utils.layout.toDevicePixels(y) / height));
    }
    async takePicture(options: TakePictureOptions = {}) {
        return new Promise((resolve, reject) => {
            try {
                // if (!this.nativeViewProtected.canCaptureVideo) {
                //     return reject(new Error('this device cant capture photo: ' + this.nativeViewProtected.canCaptureVideo));
                // }
                // const onPhoto = (photoDict: NSDictionary<any, any>) => {
                //     this.videoCaptureListener.delete(onPhoto);
                //     const photoData = photoDict.objectForKey('NextLevelPhotoJPEGKey');
                //     console.log('photoData', photoData, photoDict);
                //     resolve({ image: new UIImage({ data: photoData }) });
                // };
                // this.videoCaptureListener.add(onPhoto);
                // console.log('capturePhotoFromVideo');
                // this.nativeViewProtected?.capturePhotoFromVideo();
                if (!this.nativeViewProtected.canCapturePhoto) {
                    return reject(new Error('this device cant capture photo: ' + this.nativeViewProtected.canCapturePhoto));
                }
                const onPhoto = (image, photoDict: NSDictionary<any, any>) => {
                    resolve({ image });
                };
                this.photoCaptureListener.add(onPhoto);
                this.nativeViewProtected?.capturePhoto(JSON.stringify(options));
            } catch (error) {
                reject(error);
            }
        });
    }

    toggleCamera() {
        this.nativeViewProtected.toggleCamera();
    }

    [iosCaptureModeProperty.setNative](value: number | string) {
        let intValue;
        if (typeof value === 'string') {
            switch (value) {
                case 'video':
                    intValue = 0;
                    break;
                case 'audio':
                    intValue = 2;
                    break;
                case 'videoWithoutAudio':
                    intValue = 3;
                    break;
                case 'videoPhotoWithoutAudio':
                    intValue = 4;
                    break;
                case 'movie':
                    intValue = 5;
                    break;
                case 'arKit':
                    intValue = 6;
                    break;
                case 'arKitWithoutAudio':
                    intValue = 7;
                    break;
                default:
                case 'photo':
                    intValue = 1;
                    break;
            }
        } else {
            intValue = value;
        }
        this.nativeViewProtected.captureMode = intValue;
    }
    [flashModeProperty.setNative](value: string | number) {
        const nativeView = this.nativeViewProtected;
        if (typeof value === 'string') {
            switch (value) {
                case 'off':
                    nativeView.torchMode = AVCaptureTorchMode.Off;
                    nativeView.flashMode = AVCaptureFlashMode.Off;
                    break;
                case 'on':
                    nativeView.torchMode = AVCaptureTorchMode.Off;
                    nativeView.flashMode = AVCaptureFlashMode.On;
                    break;
                case 'auto':
                    nativeView.torchMode = AVCaptureTorchMode.Off;
                    nativeView.flashMode = AVCaptureFlashMode.Auto;
                    break;
                case 'torch':
                    nativeView.flashMode = AVCaptureFlashMode.Off;
                    nativeView.torchMode = AVCaptureTorchMode.On;
                    break;
            }
        } else {
            nativeView.torchMode = AVCaptureTorchMode.Off;
            nativeView.flashMode = value;
        }
    }

    [autoFocusProperty.setNative](value: boolean | number) {
        if (typeof value === 'boolean') {
            this.nativeViewProtected.focusMode = value ? AVCaptureFocusMode.ContinuousAutoFocus : AVCaptureFocusMode.Locked;
        } else {
            this.nativeViewProtected.focusMode = value;
        }
    }

    [stretchProperty.setNative](value) {
        this.nativeViewProtected.videoGravity = getScaleType(value);
    }

    getAllAvailablePictureSizes() {
        // TODO: implement
    }
}

iosCaptureModeProperty.register(CameraView);
