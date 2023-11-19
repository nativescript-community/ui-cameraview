import { TakePictureOptions } from '.';
import { CameraViewBase, autoFocusProperty, flashModeProperty } from './index.common';

@NativeClass
class ProcessRawVideoSampleBufferDelegateImpl extends NSObject implements ProcessRawVideoSampleBufferDelegate {
    cameraViewRenderToCustomContextWithImageBufferOnQueue(cameraView: NSCameraView, imageBuffer: any, queue: NSObject): void {}
    cameraViewWillProcessRawVideoSampleBufferOnQueue(cameraView: NSCameraView, sampleBuffer: any, queue: NSObject): void {
        try {
            const owner = this._owner?.get();
            owner?.notify({ eventName: 'frame', object: owner, cameraView, sampleBuffer, queue });
        } catch (err) {
            console.log('process error', err, err.stack);
        }
    }
    _owner: WeakRef<CameraView>;
    public static ObjCProtocols = [ProcessRawVideoSampleBufferDelegate];

    static initWithOwner(owner: CameraView) {
        const delegate = ProcessRawVideoSampleBufferDelegateImpl.new() as ProcessRawVideoSampleBufferDelegateImpl;
        delegate._owner = new WeakRef(owner);
        return delegate;
    }
}

export class CameraView extends CameraViewBase {
    nativeViewProtected: NSCameraView;
    _processor: ProcessRawVideoSampleBufferDelegate;
    createNativeView() {
        return NSCameraView.alloc().initWithFrame(CGRectZero);
    }
    private _frameChangeCount = 0;

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
    disposeNativeView() {
        this.stopPreview();
        this.detachProcessor();

        super.disposeNativeView();
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
        this.nativeViewProtected?.nextLevel?.focusAtAdjustedPointOfInterest(CGPointMake(x, y));
    }
    async takePicture(options: TakePictureOptions = {}) {
        throw new Error('Method not implemented.');
        // this.nativeViewProtected?.nextLevel?.capturePhoto();
    }

    toggleCamera() {
        throw new Error('Method not implemented.');
    }

    [flashModeProperty.setNative](value: string | number) {
        if (typeof value === 'string') {
            switch (value) {
                case 'off':
                    this.nativeViewProtected.torchMode = AVCaptureTorchMode.Off;
                    this.nativeViewProtected.flashMode = AVCaptureFlashMode.Off;
                    break;
                case 'on':
                    this.nativeViewProtected.torchMode = AVCaptureTorchMode.Off;
                    this.nativeViewProtected.flashMode = AVCaptureFlashMode.On;
                    break;
                case 'auto':
                    this.nativeViewProtected.torchMode = AVCaptureTorchMode.Off;
                    this.nativeViewProtected.flashMode = AVCaptureFlashMode.Auto;
                    break;
                case 'torch':
                    this.nativeViewProtected.flashMode = AVCaptureFlashMode.Off;
                    this.nativeViewProtected.torchMode = AVCaptureTorchMode.On;
                    break;
            }
        }
    }

    [autoFocusProperty.setNative](value: boolean) {
        throw new Error('Method not implemented.');
    }
}
