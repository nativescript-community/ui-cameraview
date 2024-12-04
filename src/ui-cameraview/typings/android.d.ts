/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class BitmapUtils extends java.lang.Object {
                public static class: java.lang.Class<cameraview.BitmapUtils>;
                public constructor();
            }
            export namespace BitmapUtils {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.BitmapUtils.Companion>;
                    public getBitmapFromContentUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
                    public getBitmap(param0: globalAndroid.content.Context, param1: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class Camera extends java.lang.Object {
                public static class: java.lang.Class<cameraview.Camera>;
                public isLogical(): boolean;
                public supportsExtensionMode(param0: number): boolean;
                public getSupportedExtensionModes(): java.util.List<java.lang.Integer>;
                public getCameraSelector(): androidx.camera.core.CameraSelector;
                public constructor(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.extensions.ExtensionsManager);
                public getHasFlashUnit(): boolean;
                public getSupportsZsl(): boolean;
                public getSupportsVideoRecording(): boolean;
                public getSupportedShadingModes(): java.util.Set<java.lang.Integer>;
                public getSupportedColorCorrectionAberrationModes(): java.util.Set<java.lang.Integer>;
                public getIntrinsicZoomRatio(): number;
                public getSupportedNoiseReductionModes(): java.util.Set<java.lang.Integer>;
                public getResolutions(): java.util.List<string>;
                public getSupportedDistortionCorrectionModes(): java.util.Set<java.lang.Integer>;
                public getCameraId(): string;
                public getExposureCompensationRange(): globalAndroid.util.Range<java.lang.Integer>;
                public getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
                public getSupportedEdgeModes(): java.util.Set<java.lang.Integer>;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getSupportedHotPixelModes(): java.util.Set<java.lang.Integer>;
                public getCameraFacing(): number;
                public getSupportedVideoQualities(): java.util.Set<androidx.camera.video.Quality>;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export abstract class CameraBase {
                public static class: java.lang.Class<cameraview.CameraBase>;
                public getPreviewSurface(): any;
                public requestStoragePermission(): void;
                public getCurrentRotation(): number;
                public stopDurationTimer$ui_cameraview_release(): void;
                public getDb(): number;
                public setAllowExifRotation(param0: boolean): void;
                public getAllowExifRotation(): boolean;
                public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                public getMTimer$ui_cameraview_release(): java.util.Timer;
                public setQuality(param0: Quality): void;
                public getScaleType(): androidx.camera.view.PreviewView.ScaleType;
                public getAutoFocus(): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
                public getPosition(): number;
                public isAudioLevelsEnabled(): boolean;
                public requestAudioPermission(): void;
                public hasPermission(): boolean;
                public setMTimer$ui_cameraview_release(param0: java.util.Timer): void;
                public isGettingAudioLevels$ui_cameraview_release(): boolean;
                public startDurationTimer$ui_cameraview_release(): void;
                public setPosition(param0: number): void;
                public setMaxVideoBitrate(param0: number): void;
                public stopRecording(): void;
                public cameraRecording(): boolean;
                public setFlashMode(param0: any): void;
                public release(): void;
                public setEnablePinchZoom(param0: boolean): void;
                public getDisplayId(): number;
                public setZoom(param0: number): void;
                public getMainHandler$ui_cameraview_release(): globalAndroid.os.Handler;
                public setRecorder$ui_cameraview_release(param0: globalAndroid.media.MediaRecorder): void;
                public setAutoFocus(param0: boolean): void;
                public setMDuration$ui_cameraview_release(param0: number): void;
                public getListener(): CameraEventListener;
                public getFlashMode(): any;
                public toggleCamera(): void;
                public getMDuration$ui_cameraview_release(): number;
                public getMaxAudioBitRate(): number;
                public getMTimerTask$ui_cameraview_release(): java.util.TimerTask;
                public getTIME_FORMAT$ui_cameraview_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public deInitListener$ui_cameraview_release(): void;
                public getAspectRatio(): string;
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
                public setMaxVideoFrameRate(param0: number): void;
                public startPreview(): void;
                public requestPermission(): void;
                public getMaxVideoFrameRate(): number;
                public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                public setGettingAudioLevels$ui_cameraview_release(param0: boolean): void;
                public stopPreview(): void;
                public setPictureSize(param0: string): void;
                public hasCameraPermission(): boolean;
                public setAspectRatio(param0: string): void;
                public getAmplitudeEMA(): number;
                public getCamcorderProfile$ui_cameraview_release(param0: Quality): globalAndroid.media.CamcorderProfile;
                public getVIDEO_RECORDER_PERMISSIONS_REQUEST$ui_cameraview_release(): number;
                public convertFromExifDateTime$ui_cameraview_release(param0: string): java.util.Date;
                public getZoom(): number;
                public getDisableHEVC(): boolean;
                public finalize(): void;
                public initListener$ui_cameraview_release(param0: globalAndroid.media.MediaRecorder): void;
                public hasAudioPermission(): boolean;
                public stringSizeToSize$ui_cameraview_release(param0: string): Size;
                public toggleFlash(): void;
                public constructor(param0: globalAndroid.content.Context);
                public setDisplayId(param0: number): void;
                public setRotation(param0: CameraOrientation): void;
                public getEnableAudio(): boolean;
                public setEnableAudio(param0: boolean): void;
                public setAnalysisExecutor$ui_cameraview_release(param0: java.util.concurrent.ExecutorService): void;
                public getQuality(): Quality;
                public setAudioLevelsEnabled(param0: boolean): void;
                public setScaleType(param0: androidx.camera.view.PreviewView.ScaleType): void;
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
                public getNumberOfCameras(): number;
                public setPause(param0: boolean): void;
            }
            export namespace CameraBase {
                export class WhenMappings extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraBase.WhenMappings>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraEventListener extends java.lang.Object {
                public static class: java.lang.Class<cameraview.CameraEventListener>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraview.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onReady(): void;
                    onCameraOpen(): void;
                    onCameraClose(): void;
                    onCameraPhoto(param0: android.net.Uri): void;
                    onCameraPhotoImage(param0: globalAndroid.graphics.Bitmap, param1: androidx.camera.core.ImageInfo): void;
                    onCameraPhotoImageProxy(param0: androidx.camera.core.ImageProxy, param1: ImageAsyncProcessor): void;
                    onCameraVideo(param0: java.io.File): void;
                    onCameraAnalysis(param0: ImageAnalysis): void;
                    onCameraError(param0: string, param1: java.lang.Exception): void;
                    onCameraVideoStart(): void;
                    onZoom(zoom: number);
                });
                public constructor();
                public onCameraVideo(param0: java.io.File): void;
                public onCameraPhotoImage(param0: globalAndroid.graphics.Bitmap, param1: androidx.camera.core.ImageInfo): void;
                public onReady(): void;
                public onCameraPhotoImageProxy(param0: androidx.camera.core.ImageProxy, param1: ImageAsyncProcessor): void;
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
                public static class: java.lang.Class<cameraview.CameraFlashMode>;
                public static AUTO: cameraview.CameraFlashMode;
                public static ON: cameraview.CameraFlashMode;
                public static OFF: cameraview.CameraFlashMode;
                public static RED_EYE: cameraview.CameraFlashMode;
                public static TORCH: cameraview.CameraFlashMode;
                public static valueOf(param0: string): cameraview.CameraFlashMode;
                public static values(): androidNative.Array<cameraview.CameraFlashMode>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static getEntries(): any;
            }
            export namespace CameraFlashMode {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraFlashMode.Companion>;
                    public from(param0: number): cameraview.CameraFlashMode;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraOrientation {
                public static class: java.lang.Class<cameraview.CameraOrientation>;
                public static UNKNOWN: cameraview.CameraOrientation;
                public static PORTRAIT: cameraview.CameraOrientation;
                public static PORTRAIT_UPSIDE_DOWN: cameraview.CameraOrientation;
                public static LANDSCAPE_LEFT: cameraview.CameraOrientation;
                public static LANDSCAPE_RIGHT: cameraview.CameraOrientation;
                public static valueOf(param0: string): cameraview.CameraOrientation;
                public static getEntries(): any;
                public getValue(): number;
                public static values(): androidNative.Array<cameraview.CameraOrientation>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace CameraOrientation {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraOrientation.Companion>;
                    public from(param0: number): cameraview.CameraOrientation;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraPosition {
                public static class: java.lang.Class<cameraview.CameraPosition>;
                public static BACK: cameraview.CameraPosition;
                public static FRONT: cameraview.CameraPosition;
                public static valueOf(param0: string): cameraview.CameraPosition;
                public static values(): androidNative.Array<cameraview.CameraPosition>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static getEntries(): any;
            }
            export namespace CameraPosition {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraPosition.Companion>;
                    public from(param0: number): cameraview.CameraPosition;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class CameraView extends CameraBase {
                public static class: java.lang.Class<cameraview.CameraView>;
                public getAspectRatio(): string;
                public takePhoto(param0: string): void;
                public setDisableHEVC(param0: boolean): void;
                public getPreviewSurface(): any;
                public setWhiteBalance(param0: WhiteBalance): void;
                public getSavePhotoToDisk(): boolean;
                public getDb(): number;
                public setAllowExifRotation(param0: boolean): void;
                public getAllowExifRotation(): boolean;
                public getRotation(): CameraOrientation;
                public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                public orientationUpdated(): void;
                public getCameraId(): string;
                public getScaleType(): androidx.camera.view.PreviewView.ScaleType;
                public setQuality(param0: Quality): void;
                public setDb(param0: number): void;
                public getAutoFocus(): boolean;
                public setSaveToGallery(param0: boolean): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
                public getCameras(): java.util.List<Camera>;
                public setAspectRatio(param0: string): void;
                public getAmplitudeEMA(): number;
                public getCurrentResolutionInfo(): string;
                public getPause(): boolean;
                public getZoom(): number;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public startRecording(): void;
                public getDisableHEVC(): boolean;
                public finalize(): void;
                public getPosition(): number;
                public setAmplitudeEMA(param0: number): void;
                public isAudioLevelsEnabled(): boolean;
                public getAllAvailablePictureSizesJSON(): androidNative.Array<org.json.JSONObject>;
                public getRecorderQuality$ui_cameraview_release(param0: Quality): androidx.camera.video.Quality;
                public constructor(param0: globalAndroid.content.Context);
                public setAmplitude(param0: number): void;
                public getAllAvailablePictureSizesJSONString(): string;
                public setPosition(param0: number): void;
                public getJpegQuality(): number;
                public setRotation(param0: CameraOrientation): void;
                public setMaxVideoBitrate(param0: number): void;
                public stopRecording(): void;
                public cameraRecording(): boolean;
                public focusAtPoint(param0: number, param1: number): void;
                public setFlashMode(param0: any): void;
                public setJpegQuality(param0: number): void;
                public release(): void;
                public setEnablePinchZoom(param0: boolean): void;
                public setZoom(param0: number): void;
                public getQuality(): Quality;
                public setAutoFocus(param0: boolean): void;
                public setCameraId(param0: string): void;
                public setAudioLevelsEnabled(param0: boolean): void;
                public setScaleType(param0: androidx.camera.view.PreviewView.ScaleType): void;
                public setAutoSquareCrop(param0: boolean): void;
                public setMaxAudioBitRate(param0: number): void;
                public getEnablePinchZoom(): boolean;
                public getAutoSquareCrop(): boolean;
                public stop(): void;
                public hasFlash(): boolean;
                public getFlashMode(): any;
                public toggleCamera(): void;
                public getWhiteBalance(): WhiteBalance;
                public getMaxAudioBitRate(): number;
                public getNumberOfCameras(): number;
                public setPause(param0: boolean): void;
            }
            export namespace CameraView {
                export class CameraAnalyzer extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraView.CameraAnalyzer>;
                    public constructor(param0: any);
                    public constructor();
                    public onFrameAnalyzed(param0: any): boolean;
                    public analyze(param0: androidx.camera.core.ImageProxy): void;
                    public getDefaultTargetResolution(): any;
                }
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraView.Companion>;
                    public static deviceHasCamera(context: android.content.Context): boolean;
                }
                export class WhenMappings extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.CameraView.WhenMappings>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class FrameMetadata extends java.lang.Object {
                public static class: java.lang.Class<cameraview.FrameMetadata>;
                public getWidth(): number;
                public getHeight(): number;
                public getRotation(): number;
            }
            export namespace FrameMetadata {
                export class Builder extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.FrameMetadata.Builder>;
                    public build(): cameraview.FrameMetadata;
                    public constructor();
                    public setRotation(param0: number): cameraview.FrameMetadata.Builder;
                    public setHeight(param0: number): cameraview.FrameMetadata.Builder;
                    public setWidth(param0: number): cameraview.FrameMetadata.Builder;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ImageAnalysis extends java.lang.Object {
                public static class: java.lang.Class<cameraview.ImageAnalysis>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ImageAnalysisCallback extends java.lang.Object {
                public static class: java.lang.Class<cameraview.ImageAnalysisCallback>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraview.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { process(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void });
                public constructor();
                public process(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ImageAsyncProcessor extends java.lang.Object {
                public static class: java.lang.Class<cameraview.ImageAsyncProcessor>;
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
                public static class: java.lang.Class<cameraview.Quality>;
                public static MAX_480P: cameraview.Quality;
                public static MAX_720P: cameraview.Quality;
                public static MAX_1080P: cameraview.Quality;
                public static MAX_2160P: cameraview.Quality;
                public static HIGHEST: cameraview.Quality;
                public static LOWEST: cameraview.Quality;
                public static QVGA: cameraview.Quality;
                public static getEntries(): any;
                public static valueOf(param0: string): cameraview.Quality;
                public static values(): androidNative.Array<cameraview.Quality>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace Quality {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.Quality.Companion>;
                    public from(param0: number): cameraview.Quality;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class Size extends java.lang.Object {
                public static class: java.lang.Class<cameraview.Size>;
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
                public static class: java.lang.Class<cameraview.SurfaceUpdateListener>;
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
                public static class: java.lang.Class<cameraview.WhiteBalance>;
                public static Auto: cameraview.WhiteBalance;
                public static Sunny: cameraview.WhiteBalance;
                public static Cloudy: cameraview.WhiteBalance;
                public static Shadow: cameraview.WhiteBalance;
                public static Twilight: cameraview.WhiteBalance;
                public static Fluorescent: cameraview.WhiteBalance;
                public static Incandescent: cameraview.WhiteBalance;
                public static WarmFluorescent: cameraview.WhiteBalance;
                public static valueOf(param0: string): cameraview.WhiteBalance;
                public static values(): androidNative.Array<cameraview.WhiteBalance>;
                public getValue$ui_cameraview_release(): string;
                public static getEntries(): any;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class YuvByteBuffer extends java.lang.Object {
                public static class: java.lang.Class<cameraview.YuvByteBuffer>;
                public constructor(param0: globalAndroid.media.Image, param1: java.nio.ByteBuffer);
                public getType(): number;
                public getBuffer(): java.nio.ByteBuffer;
            }
            export namespace YuvByteBuffer {
                export class ImageWrapper extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.YuvByteBuffer.ImageWrapper>;
                    public getHeight(): number;
                    public getV(): cameraview.YuvByteBuffer.PlaneWrapper;
                    public getWidth(): number;
                    public getU(): cameraview.YuvByteBuffer.PlaneWrapper;
                    public constructor(param0: globalAndroid.media.Image);
                    public getY(): cameraview.YuvByteBuffer.PlaneWrapper;
                }
                export class PlaneWrapper extends java.lang.Object {
                    public static class: java.lang.Class<cameraview.YuvByteBuffer.PlaneWrapper>;
                    public getRowStride(): number;
                    public getBuffer(): java.nio.ByteBuffer;
                    public getHeight(): number;
                    public getPixelStride(): number;
                    public getWidth(): number;
                    public constructor(param0: number, param1: number, param2: globalAndroid.media.Image.Plane);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class YuvToRgbConverter extends java.lang.Object {
                public static class: java.lang.Class<cameraview.YuvToRgbConverter>;
                public destroy(): void;
                public constructor(param0: globalAndroid.content.Context);
                public yuvToRgb(param0: globalAndroid.media.Image, param1: globalAndroid.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class YuvType extends java.lang.Object implements java.lang.annotation.Annotation {
                public static class: java.lang.Class<cameraview.YuvType>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraview.YuvType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { equals(param0: any): boolean; hashCode(): number; toString(): string; annotationType(): java.lang.Class<any> });
                public constructor();
                public hashCode(): number;
                public equals(param0: any): boolean;
                public annotationType(): java.lang.Class<any>;
                public toString(): string;
            }
        }
    }
}

//Generics information:
