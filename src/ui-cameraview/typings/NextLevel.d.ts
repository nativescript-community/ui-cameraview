
declare class NextLevel extends NSObject implements AVCaptureAudioDataOutputSampleBufferDelegate, AVCaptureFileOutputRecordingDelegate, AVCaptureMetadataOutputObjectsDelegate, AVCapturePhotoCaptureDelegate, AVCaptureVideoDataOutputSampleBufferDelegate {

	static alloc(): NextLevel; // inherited from NSObject

	static new(): NextLevel; // inherited from NSObject

	readonly canCapturePhoto: boolean;

	readonly canCaptureVideo: boolean;

	static readonly shared: NextLevel;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	captureOutputDidCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings): void;

	captureOutputDidDropSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputDidFinishCaptureForResolvedSettingsError(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings, error: NSError): void;

	captureOutputDidFinishCapturingDeferredPhotoProxyError(output: AVCapturePhotoOutput, deferredPhotoProxy: AVCaptureDeferredPhotoProxy, error: NSError): void;

	captureOutputDidFinishProcessingLivePhotoToMovieFileAtURLDurationPhotoDisplayTimeResolvedSettingsError(output: AVCapturePhotoOutput, outputFileURL: NSURL, duration: CMTime, photoDisplayTime: CMTime, resolvedSettings: AVCaptureResolvedPhotoSettings, error: NSError): void;

	captureOutputDidFinishProcessingPhotoError(output: AVCapturePhotoOutput, photo: AVCapturePhoto, error: NSError): void;

	captureOutputDidFinishProcessingPhotoSampleBufferPreviewPhotoSampleBufferResolvedSettingsBracketSettingsError(output: AVCapturePhotoOutput, photoSampleBuffer: any, previewPhotoSampleBuffer: any, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError): void;

	captureOutputDidFinishProcessingRawPhotoSampleBufferPreviewPhotoSampleBufferResolvedSettingsBracketSettingsError(output: AVCapturePhotoOutput, rawSampleBuffer: any, previewPhotoSampleBuffer: any, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError): void;

	captureOutputDidFinishRecordingLivePhotoMovieForEventualFileAtURLResolvedSettings(output: AVCapturePhotoOutput, outputFileURL: NSURL, resolvedSettings: AVCaptureResolvedPhotoSettings): void;

	captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[], error: NSError): void;

	captureOutputDidOutputMetadataObjectsFromConnection(output: AVCaptureMetadataOutput, metadataObjects: NSArray<AVMetadataObject> | AVMetadataObject[], connection: AVCaptureConnection): void;

	captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputDidPauseRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void;

	captureOutputDidResumeRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void;

	captureOutputDidStartRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void;

	captureOutputDidStartRecordingToOutputFileAtURLStartPTSFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, startPTS: CMTime, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void;

	captureOutputWillBeginCaptureForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings): void;

	captureOutputWillCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleSessionInterruptionEnded(notification: NSNotification): void;

	handleSessionWasInterrupted(notification: NSNotification): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var NextLevelVersionNumber: number;

declare var NextLevelVersionString: interop.Reference<number>;
