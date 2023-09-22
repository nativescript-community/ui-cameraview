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

    flashMode: number;
    torchMode: number;

    nextLevel: NextLevel;

    processingDelegate: ProcessRawVideoSampleBufferDelegate;

    commonInit(): void;

    nextLevelDidCompletePhotoCaptureFromVideoFrame(nextLevel: NextLevel, photoDict: NSDictionary<string, any>): void;

    nextLevelDidUpdateVideoZoomFactor(nextLevel: NextLevel, videoZoomFactor: number): void;

    nextLevelRenderToCustomContextWithImageBufferOnQueue(nextLevel: NextLevel, imageBuffer: any, queue: NSObject): void;

    nextLevelWillProcessFrameTimestampOnQueue(nextLevel: NextLevel, frame: any, timestamp: number, queue: NSObject): void;

    nextLevelWillProcessRawVideoSampleBufferOnQueue(nextLevel: NextLevel, sampleBuffer: any, queue: NSObject): void;

    startPreviewAndReturnError(): boolean;

    stopPreview(): void;

    toggleCamera(): void;
}

interface ProcessRawVideoSampleBufferDelegate {
    cameraViewRenderToCustomContextWithImageBufferOnQueue(cameraView: NSCameraView, imageBuffer: any, queue: NSObject): void;

    cameraViewWillProcessRawVideoSampleBufferOnQueue(cameraView: NSCameraView, sampleBuffer: any, queue: NSObject): void;
}
declare let ProcessRawVideoSampleBufferDelegate: {
    prototype: ProcessRawVideoSampleBufferDelegate;
};
