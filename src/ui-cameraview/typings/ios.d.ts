/* eslint-disable no-redeclare */
declare class NSCameraView extends UIView {
    static alloc(): NSCameraView; // inherited from NSObject

    static appearance(): NSCameraView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): NSCameraView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCameraView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCameraView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCameraView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCameraView; // inherited from UIAppearance

    static new(): NSCameraView; // inherited from NSObject

    _zoomEnabled: boolean;

    automaticallyUpdatesDeviceOrientation: boolean;

    readonly canCapturePhoto: boolean;

    readonly canCaptureVideo: boolean;

    captureMode: number;

    captureModeCompletionHandler: () => void;

    delegate: NSCameraViewDelegate;

    flashMode: number;

    focusMode: number;

    lensPosition: number;

    readonly maxVideoZoomFactor: number;

    readonly minVideoZoomFactor: number;

    readonly neutralVideoZoomFactor: number;

    nextLevel: NextLevel;

    photoDelegate: NSCameraViewPhotoDelegate;

    pinchScaleOffset: number;

    processingDelegate: ProcessRawVideoSampleBufferDelegate;

    torchMode: number;

    videoDelegate: NSCameraViewVideoDelegate;

    videoGravity: string;

    readonly videoOrientation: number;

    videoZoomFactor: number;

    zoomEnabled: boolean;

    frontMirrored: boolean;

    capturePhoto(options: string): void;

    capturePhotoFromVideo(): void;

    commonInit(): void;

    focusAtAdjustedPointOfInterest(adjustedPoint: CGPoint): void;

    handlePinchToZoomRecognizer(gesture: UIPinchGestureRecognizer): void;

    nextLevelCaptureModeDidChange(nextLevel: NextLevel): void;

    nextLevelCaptureModeWillChange(nextLevel: NextLevel): void;

    nextLevelDidCompletePhotoCapture(nextLevel: NextLevel): void;

    nextLevelDidCompletePhotoCaptureFromVideoFrame(nextLevel: NextLevel, photoDict: NSDictionary<string, any>): void;

    nextLevelDidUpdateVideoZoomFactor(nextLevel: NextLevel, videoZoomFactor: number): void;

    nextLevelRenderToCustomContextWithImageBufferOnQueue(nextLevel: NextLevel, imageBuffer: any, queue: interop.Pointer | interop.Reference<any>): void;

    nextLevelSessionDidStart(nextLevel: NextLevel): void;

    nextLevelSessionDidStop(nextLevel: NextLevel): void;

    nextLevelSessionInterruptionEnded(nextLevel: NextLevel): void;

    nextLevelSessionWasInterrupted(nextLevel: NextLevel): void;

    nextLevelSessionWillStart(nextLevel: NextLevel): void;

    nextLevelWillProcessFrameTimestampOnQueue(nextLevel: NextLevel, frame: any, timestamp: number, queue: interop.Pointer | interop.Reference<any>): void;

    nextLevelWillProcessRawVideoSampleBufferOnQueue(nextLevel: NextLevel, sampleBuffer: any, queue: interop.Pointer | interop.Reference<any>): void;

    startPreviewAndReturnError(): boolean;

    stopPreview(): void;

    toggleCamera(): void;
}

interface NSCameraViewDelegate {
    didUpdateVideoZoomFactor(videoZoomFactor: number): void;

    sessionDidStart(cameraView: NSCameraView): void;

    sessionDidStop(cameraView: NSCameraView): void;
}
declare let NSCameraViewDelegate: {
    prototype: NSCameraViewDelegate;
};

declare class NSCameraViewPhotoConfiguration extends NSObject {
    static alloc(): NSCameraViewPhotoConfiguration; // inherited from NSObject

    static new(): NSCameraViewPhotoConfiguration; // inherited from NSObject
}

interface NSCameraViewPhotoDelegate {
    cameraViewDidCapturePhotoWithConfiguration(cameraView: NSCameraView, photoConfiguration: NSCameraViewPhotoConfiguration): void;

    cameraViewDidFinishProcessingPhotoPhotoDictPhotoConfiguration(
        cameraView: NSCameraView,
        photo: UIImage,
        photoDict: NSDictionary<string, any>,
        photoConfiguration: NSCameraViewPhotoConfiguration
    ): void;
}
declare let NSCameraViewPhotoDelegate: {
    prototype: NSCameraViewPhotoDelegate;
};

interface NSCameraViewVideoDelegate {
    cameraViewDidCompletePhotoCaptureFromVideoFrame(cameraView: NSCameraView, photoDict: NSDictionary<string, any>): void;
}
declare let NSCameraViewVideoDelegate: {
    prototype: NSCameraViewVideoDelegate;
};

interface ProcessRawVideoSampleBufferDelegate {
    cameraViewRenderToCustomContextWithImageBufferOnQueue(cameraView: NSCameraView, imageBuffer: any, queue: NSObject): void;

    cameraViewWillProcessRawVideoSampleBufferOnQueue(cameraView: NSCameraView, sampleBuffer: any, queue: NSObject): void;
}
declare let ProcessRawVideoSampleBufferDelegate: {
    prototype: ProcessRawVideoSampleBufferDelegate;
};

interface ProcessRawVideoSampleBufferDelegate {
    cameraViewRenderToCustomContextWithImageBufferOnQueue(cameraView: NSCameraView, imageBuffer: any, queue: NSObject): void;

    cameraViewWillProcessRawVideoSampleBufferOnQueue(cameraView: NSCameraView, sampleBuffer: any, queue: NSObject): void;
}
declare let ProcessRawVideoSampleBufferDelegate: {
    prototype: ProcessRawVideoSampleBufferDelegate;
};
