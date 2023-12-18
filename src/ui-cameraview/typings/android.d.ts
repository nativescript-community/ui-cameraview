/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */
declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class BitmapUtils extends java.lang.Object {
                public static class: java.lang.Class<BitmapUtils>;
                public static INSTANCE: BitmapUtils;
                public getBitmap(param0: java.nio.ByteBuffer, param1: FrameMetadata): globalAndroid.graphics.Bitmap;
                public getBitmapFromContentUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
                public getBitmap(param0: androidNative.Array<number>, param1: FrameMetadata): globalAndroid.graphics.Bitmap;
                public getBitmap(param0: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean = 0;
                public static LIBRARY_PACKAGE_NAME: string = 'com.nativescript.cameraview';
                public static BUILD_TYPE: string = 'release';
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export abstract class CameraBase {
                public static class: java.lang.Class<CameraBase>;
                public getPreviewSurface(): any;
                public requestStoragePermission(): void;
                public getCurrentRotation(): number;
                public stopDurationTimer$ui_cameraview_release(): void;
                public setFlashMode(param0: CameraFlashMode): void;
                public getDb(): number;
                public setAllowExifRotation(param0: boolean): void;
                public isProcessingEveryNthFrame$ui_cameraview_release(): boolean;
                public getAllowExifRotation(): boolean;
                public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                public getMTimer$ui_cameraview_release(): java.util.Timer;
                public getPosition(): CameraPosition;
                public setQuality(param0: Quality): void;
                public getAutoFocus(): boolean;
                public getOverridePhotoHeight(): number;
                public getProcessEveryNthFrame(): number;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public setPosition(param0: CameraPosition): void;
                public getCurrentFrame$ui_cameraview_release(): number;
                public getAnalysisExecutor$ui_cameraview_release(): java.util.concurrent.ExecutorService;
                public initOptions$ui_cameraview_release(): void;
                public getAmplitude(): number;
                public getPictureSize(): string;
                public getSaveToGallery(): boolean;
                public getDATETIME_FORMAT$ui_cameraview_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public getMaxVideoBitrate(): number;
                public setListener(param0: CameraEventListener): void;
                public getRecorder$ui_cameraview_release(): globalAndroid.media.MediaRecorder;
                public getPause(): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public startRecording(): void;
                public getDuration(): number;
                public setOverridePhotoHeight(param0: number): void;
                public isAudioLevelsEnabled(): boolean;
                public getDisplayRatio(): string;
                public requestAudioPermission(): void;
                public hasPermission(): boolean;
                public incrementCurrentFrame$ui_cameraview_release(): void;
                public setMTimer$ui_cameraview_release(param0: java.util.Timer): void;
                public isGettingAudioLevels$ui_cameraview_release(): boolean;
                public startDurationTimer$ui_cameraview_release(): void;
                public setMaxVideoBitrate(param0: number): void;
                public stopRecording(): void;
                public cameraRecording(): boolean;
                public release(): void;
                public resetCurrentFrame$ui_cameraview_release(): void;
                public setEnablePinchZoom(param0: boolean): void;
                public getDisplayId(): number;
                public setZoom(param0: number): void;
                public getMainHandler$ui_cameraview_release(): globalAndroid.os.Handler;
                public setRecorder$ui_cameraview_release(param0: globalAndroid.media.MediaRecorder): void;
                public getRetrieveLatestImage(): boolean;
                public setAutoFocus(param0: boolean): void;
                public setMDuration$ui_cameraview_release(param0: number): void;
                public getLatestImage$ui_cameraview_release(): globalAndroid.graphics.Bitmap;
                public getListener(): CameraEventListener;
                public setLatestImage$ui_cameraview_release(param0: globalAndroid.graphics.Bitmap): void;
                public toggleCamera(): void;
                public getMDuration$ui_cameraview_release(): number;
                public getMaxAudioBitRate(): number;
                public getMTimerTask$ui_cameraview_release(): java.util.TimerTask;
                public getTIME_FORMAT$ui_cameraview_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public deInitListener$ui_cameraview_release(): void;
                public takePhoto(param0: string): void;
                public setDisableHEVC(param0: boolean): void;
                public requestCameraPermission(): void;
                public setWhiteBalance(param0: WhiteBalance): void;
                public getRotation(): CameraOrientation;
                public orientationUpdated(): void;
                public getVIDEO_RECORDER_PERMISSIONS$ui_cameraview_release(): androidNative.Array<string>;
                public convertToExifDateTime$ui_cameraview_release(param0: number): string;
                public setCurrentRotation(param0: number): void;
                public setSaveToGallery(param0: boolean): void;
                public getOverridePhotoWidth(): number;
                public setMaxVideoFrameRate(param0: number): void;
                public startPreview(): void;
                public requestPermission(): void;
                public getMaxVideoFrameRate(): number;
                public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                public setGettingAudioLevels$ui_cameraview_release(param0: boolean): void;
                public stopPreview(): void;
                public setPictureSize(param0: string): void;
                public hasCameraPermission(): boolean;
                public getAmplitudeEMA(): number;
                public getCamcorderProfile$ui_cameraview_release(param0: Quality): globalAndroid.media.CamcorderProfile;
                public getVIDEO_RECORDER_PERMISSIONS_REQUEST$ui_cameraview_release(): number;
                public convertFromExifDateTime$ui_cameraview_release(param0: string): java.util.Date;
                public getZoom(): number;
                public getDisableHEVC(): boolean;
                public finalize(): void;
                public initListener$ui_cameraview_release(param0: globalAndroid.media.MediaRecorder): void;
                public setCurrentFrame$ui_cameraview_release(param0: number): void;
                public setDisplayRatio(param0: string): void;
                public hasAudioPermission(): boolean;
                public stringSizeToSize$ui_cameraview_release(param0: string): Size;
                public toggleFlash(): void;
                public constructor(param0: globalAndroid.content.Context);
                public setDisplayId(param0: number): void;
                public setRotation(param0: CameraOrientation): void;
                public getFlashMode(): CameraFlashMode;
                public getEnableAudio(): boolean;
                public setOverridePhotoWidth(param0: number): void;
                public setEnableAudio(param0: boolean): void;
                public setAnalysisExecutor$ui_cameraview_release(param0: java.util.concurrent.ExecutorService): void;
                public getQuality(): Quality;
                public setAudioLevelsEnabled(param0: boolean): void;
                public setAutoSquareCrop(param0: boolean): void;
                public setMaxAudioBitRate(param0: number): void;
                public getEnablePinchZoom(): boolean;
                public getAutoSquareCrop(): boolean;
                public stop(): void;
                public setMTimerTask$ui_cameraview_release(param0: java.util.TimerTask): void;
                public hasFlash(): boolean;
                public getDisplayManager(): globalAndroid.hardware.display.DisplayManager;
                public getWhiteBalance(): WhiteBalance;
                public getDATE_FORMAT$ui_cameraview_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public hasStoragePermission(): boolean;
                public setRetrieveLatestImage(param0: boolean): void;
                public getNumberOfCameras(): number;
                public setProcessEveryNthFrame(param0: number): void;
                public setPause(param0: boolean): void;
            }
            export namespace CameraBase {
                export class WhenMappings extends java.lang.Object {
                    public static class: java.lang.Class<WhenMappings>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraEventListener extends java.lang.Object {
                public static class: java.lang.Class<CameraEventListener>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraview.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onReady(): void;
                    onCameraOpen(): void;
                    onCameraClose(): void;
                    onCameraPhoto(param0: java.io.File): void;
                    onCameraPhotoImage(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo): void;
                    onCameraPhotoImageProxy(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                    onCameraVideo(param0: java.io.File): void;
                    onCameraAnalysis(param0: ImageAnalysis): void;
                    onCameraError(param0: string, param1: java.lang.Exception): void;
                    onCameraVideoStart(): void;
                });
                public constructor();
                public onCameraPhotoImage(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                public onCameraPhotoImageProxy(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                public onCameraVideo(param0: java.io.File): void;
                public onReady(): void;
                public onCameraVideoStart(): void;
                public onCameraClose(): void;
                public onCameraOpen(): void;
                public onCameraAnalysis(param0: ImageAnalysis): void;
                public onCameraPhoto(param0: java.io.File): void;
                public onCameraError(param0: string, param1: java.lang.Exception): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraFlashMode {
                public static class: java.lang.Class<CameraFlashMode>;
                public static OFF: CameraFlashMode;
                public static ON: CameraFlashMode;
                public static AUTO: CameraFlashMode;
                public static RED_EYE: CameraFlashMode;
                public static TORCH: CameraFlashMode;
                public static valueOf(param0: string): CameraFlashMode;
                public static values(): androidNative.Array<CameraFlashMode>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace CameraFlashMode {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<Companion>;
                    public from(param0: number): CameraFlashMode;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraOrientation {
                public static class: java.lang.Class<CameraOrientation>;
                public static UNKNOWN: CameraOrientation;
                public static PORTRAIT: CameraOrientation;
                public static PORTRAIT_UPSIDE_DOWN: CameraOrientation;
                public static LANDSCAPE_LEFT: CameraOrientation;
                public static LANDSCAPE_RIGHT: CameraOrientation;
                public static valueOf(param0: string): CameraOrientation;
                public getValue(): number;
                public static values(): androidNative.Array<CameraOrientation>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace CameraOrientation {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<Companion>;
                    public from(param0: number): CameraOrientation;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraPosition {
                public static class: java.lang.Class<CameraPosition>;
                public static BACK: CameraPosition;
                public static FRONT: CameraPosition;
                public static valueOf(param0: string): CameraPosition;
                public static values(): androidNative.Array<CameraPosition>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace CameraPosition {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<Companion>;
                    public from(param0: number): CameraPosition;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraView extends CameraBase {
                public static class: java.lang.Class<CameraView>;
                public takePhoto(param0: string): void;
                public setDisableHEVC(param0: boolean): void;
                public getPreviewSurface(): any;
                public setWhiteBalance(param0: WhiteBalance): void;
                public getSavePhotoToDisk(): boolean;
                public getDb(): number;
                public setFlashMode(param0: CameraFlashMode): void;
                public setAllowExifRotation(param0: boolean): void;
                public getAllowExifRotation(): boolean;
                public setScaleType(param0: androidx.camera.view.PreviewView.ScaleType): void;
                public getScaleType(): androidx.camera.view.PreviewView.ScaleType;
                public getRotation(): CameraOrientation;
                public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                public orientationUpdated(): void;
                public getPosition(): CameraPosition;
                public setQuality(param0: Quality): void;
                public setDb(param0: number): void;
                public getAutoFocus(): boolean;
                public setSaveToGallery(param0: boolean): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public setPosition(param0: CameraPosition): void;
                public setMaxVideoFrameRate(param0: number): void;
                public startAutoFocus(): void;
                public getCaptureMode(): number;
                public startPreview(): void;
                public getAmplitude(): number;
                public getMaxVideoFrameRate(): number;
                public getPictureSize(): string;
                public getSaveToGallery(): boolean;
                public getMaxVideoBitrate(): number;
                public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                public getAnalyserCallback(): ImageAnalysisCallback;
                public setCaptureMode(param0: number): void;
                public setAnalyserCallback(param0: ImageAnalysisCallback): void;
                public setPictureSize(param0: string): void;
                public stopPreview(): void;
                public setSavePhotoToDisk(param0: boolean): void;
                public getAmplitudeEMA(): number;
                public getPause(): boolean;
                public getZoom(): number;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public startRecording(): void;
                public getDisableHEVC(): boolean;
                public finalize(): void;
                public setAmplitudeEMA(param0: number): void;
                public setDisplayRatio(param0: string): void;
                public isAudioLevelsEnabled(): boolean;
                public getDisplayRatio(): string;
                public getRecorderQuality$ui_cameraview_release(param0: Quality): androidx.camera.video.Quality;
                public constructor(param0: globalAndroid.content.Context);
                public setAmplitude(param0: number): void;
                public getJpegQuality(): number;
                public setRotation(param0: CameraOrientation): void;
                public setMaxVideoBitrate(param0: number): void;
                public stopRecording(): void;
                public cameraRecording(): boolean;
                public focusAtPoint(param0: number, param1: number): void;
                public getFlashMode(): CameraFlashMode;
                public setJpegQuality(param0: number): void;
                public release(): void;
                public setEnablePinchZoom(param0: boolean): void;
                public setZoom(param0: number): void;
                public getRetrieveLatestImage(): boolean;
                public getQuality(): Quality;
                public setAutoFocus(param0: boolean): void;
                public setAudioLevelsEnabled(param0: boolean): void;
                public setAutoSquareCrop(param0: boolean): void;
                public setMaxAudioBitRate(param0: number): void;
                public getEnablePinchZoom(): boolean;
                public getAutoSquareCrop(): boolean;
                public stop(): void;
                public hasFlash(): boolean;
                public toggleCamera(): void;
                public getWhiteBalance(): WhiteBalance;
                public getMaxAudioBitRate(): number;
                public setRetrieveLatestImage(param0: boolean): void;
                public getNumberOfCameras(): number;
                public setPause(param0: boolean): void;
            }
            export namespace CameraView {
                export class CameraAnalyzer extends java.lang.Object {
                    public static class: java.lang.Class<CameraAnalyzer>;
                    public constructor(param0: any);
                    public constructor();
                    public onFrameAnalyzed(param0: any): boolean;
                    public analyze(param0: androidx.camera.core.ImageProxy): void;
                    public getDefaultTargetResolution(): any;
                }
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<Companion>;
                }
                export class WhenMappings extends java.lang.Object {
                    public static class: java.lang.Class<WhenMappings>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class FrameMetadata extends java.lang.Object {
                public static class: java.lang.Class<FrameMetadata>;
                public getWidth(): number;
                public getHeight(): number;
                public getRotation(): number;
            }
            export namespace FrameMetadata {
                export class Builder extends java.lang.Object {
                    public static class: java.lang.Class<Builder>;
                    public build(): FrameMetadata;
                    public constructor();
                    public setRotation(param0: number): Builder;
                    public setHeight(param0: number): Builder;
                    public setWidth(param0: number): Builder;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ImageAnalysis extends java.lang.Object {
                public static class: java.lang.Class<ImageAnalysis>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ImageAnalysisCallback extends java.lang.Object {
                public static class: java.lang.Class<ImageAnalysisCallback>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraview.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { process(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void });
                public constructor();
                public process(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ImageAsyncProcessor extends java.lang.Object {
                public static class: java.lang.Class<ImageAsyncProcessor>;
                public getLatch(): java.util.concurrent.CountDownLatch;
                public constructor(param0: java.util.concurrent.CountDownLatch);
                public setLatch(param0: java.util.concurrent.CountDownLatch): void;
                public finished(): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class Quality {
                public static class: java.lang.Class<Quality>;
                public static MAX_480P: Quality;
                public static MAX_720P: Quality;
                public static MAX_1080P: Quality;
                public static MAX_2160P: Quality;
                public static HIGHEST: Quality;
                public static LOWEST: Quality;
                public static QVGA: Quality;
                public static valueOf(param0: string): Quality;
                public static values(): androidNative.Array<Quality>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace Quality {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<Companion>;
                    public from(param0: number): Quality;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class Size extends java.lang.Object {
                public static class: java.lang.Class<Size>;
                public constructor(param0: number, param1: number);
                public getWidth(): number;
                public getHeight(): number;
                public toString(): string;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class SurfaceUpdateListener extends java.lang.Object {
                public static class: java.lang.Class<SurfaceUpdateListener>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraview.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onUpdate(): void });
                public constructor();
                public onUpdate(): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class WhiteBalance {
                public static class: java.lang.Class<WhiteBalance>;
                public static Auto: WhiteBalance;
                public static Sunny: WhiteBalance;
                public static Cloudy: WhiteBalance;
                public static Shadow: WhiteBalance;
                public static Twilight: WhiteBalance;
                public static Fluorescent: WhiteBalance;
                public static Incandescent: WhiteBalance;
                public static WarmFluorescent: WhiteBalance;
                public static valueOf(param0: string): WhiteBalance;
                public static values(): androidNative.Array<WhiteBalance>;
                public getValue$ui_cameraview_release(): string;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

//Generics information:
