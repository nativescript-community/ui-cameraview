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

    readonly canCapturePhoto: boolean;

    readonly canCaptureVideo: boolean;

    flashMode: number;
    focusMode: number;

    nextLevel: NextLevel;

    photoDelegate: NSCameraViewPhotoDelegate;

    processingDelegate: ProcessRawVideoSampleBufferDelegate;

    torchMode: number;

    videoDelegate: NSCameraViewVideoDelegate;

    capturePhoto(): void;

    capturePhotoFromVideo(): void;

    commonInit(): void;

    focusAtAdjustedPointOfInterest(adjustedPoint: CGPoint): void;

    nextLevelDidCompletePhotoCapture(nextLevel: NextLevel): void;

    nextLevelDidCompletePhotoCaptureFromVideoFrame(nextLevel: NextLevel, photoDict: NSDictionary<string, any>): void;

    nextLevelDidUpdateVideoZoomFactor(nextLevel: NextLevel, videoZoomFactor: number): void;

    nextLevelRenderToCustomContextWithImageBufferOnQueue(nextLevel: NextLevel, imageBuffer: any, queue: NSObject): void;

    nextLevelWillProcessFrameTimestampOnQueue(nextLevel: NextLevel, frame: any, timestamp: number, queue: NSObject): void;

    nextLevelWillProcessRawVideoSampleBufferOnQueue(nextLevel: NextLevel, sampleBuffer: any, queue: NSObject): void;

    startPreviewAndReturnError(): boolean;

    stopPreview(): void;

    toggleCamera(): void;
}

declare class NSCameraViewPhotoConfiguration extends NSObject {
    static alloc(): NSCameraViewPhotoConfiguration; // inherited from NSObject

    static new(): NSCameraViewPhotoConfiguration; // inherited from NSObject
}

interface NSCameraViewPhotoDelegate {
    cameraViewDidCapturePhotoWithConfiguration(cameraView: NSCameraView, photoConfiguration: NSCameraViewPhotoConfiguration): void;

    cameraViewDidFinishProcessingPhotoPhotoDictPhotoConfiguration(
        cameraView: NSCameraView,
        photo: AVCapturePhoto,
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
