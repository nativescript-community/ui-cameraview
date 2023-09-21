/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class BitmapUtils extends java.lang.Object {
                public static class: java.lang.Class<BitmapUtils>;
                public static INSTANCE: BitmapUtils;
                public getBitmapFromContentUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
                public getBitmap(param0: androidNative.Array<number>, param1: FrameMetadata): globalAndroid.graphics.Bitmap;
                public getBitmap(param0: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
                public getBitmap(param0: java.nio.ByteBuffer, param1: FrameMetadata): globalAndroid.graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean;
                public static LIBRARY_PACKAGE_NAME: string;
                public static BUILD_TYPE: string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export abstract class CameraBase extends globalAndroid.widget.FrameLayout {
                public static class: java.lang.Class<CameraBase>;
                public getMTimerTask$library_debug(): java.util.TimerTask;
                public childDrawableStateChanged(param0: globalAndroid.view.View): void;
                public getPreviewSurface(): any;
                public requestStoragePermission(): void;
                public getCurrentRotation(): number;
                public clearChildFocus(param0: globalAndroid.view.View): void;
                public setFlashMode(param0: CameraFlashMode): void;
                public getDb(): number;
                public setAllowExifRotation(param0: boolean): void;
                public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                public getAllowExifRotation(): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public isLayoutRequested(): boolean;
                public sendAccessibilityEvent(param0: number): void;
                public getDATETIME_FORMAT$library_debug(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public getTextDirection(): number;
                public getWhiteBalance(): WhiteBalance;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                public getAutoFocus(): boolean;
                public getMainHandler$library_debug(): globalAndroid.os.Handler;
                public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
                public resetCurrentFrame$library_debug(): void;
                public getOverridePhotoHeight(): number;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public getProcessEveryNthFrame(): number;
                public setQuality(param0: Quality): void;
                public startDurationTimer$library_debug(): void;
                public getParentForAccessibility(): globalAndroid.view.ViewParent;
                public getAmplitude(): number;
                public isGettingAudioLevels$library_debug(): boolean;
                public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
                public getPictureSize(): string;
                public getSaveToGallery(): boolean;
                public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
                public getMaxVideoBitrate(): number;
                public isTextDirectionResolved(): boolean;
                public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                public setMTimerTask$library_debug(param0: java.util.TimerTask): void;
                public setRecorder$library_debug(param0: globalAndroid.media.MediaRecorder): void;
                public getCurrentFrame$library_debug(): number;
                public isLayoutDirectionResolved(): boolean;
                public getFlashMode(): CameraFlashMode;
                public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                public getPause(): boolean;
                public getVIDEO_RECORDER_PERMISSIONS_REQUEST$library_debug(): number;
                public deInitListener$library_debug(): void;
                public getRotation(): CameraOrientation;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public startRecording(): void;
                public getDuration(): number;
                public getTIME_FORMAT$library_debug(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public setMDuration$library_debug(param0: number): void;
                public setOverridePhotoHeight(param0: number): void;
                public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
                public isAudioLevelsEnabled(): boolean;
                public getDisplayRatio(): string;
                public requestAudioPermission(): void;
                public hasPermission(): boolean;
                public focusSearch(param0: number): globalAndroid.view.View;
                public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
                public isProcessingEveryNthFrame$library_debug(): boolean;
                /** @deprecated */
                public requestFitSystemWindows(): void;
                public bringChildToFront(param0: globalAndroid.view.View): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public setMaxVideoBitrate(param0: number): void;
                public stopRecording(): void;
                public cameraRecording(): boolean;
                public incrementCurrentFrame$library_debug(): void;
                public release(): void;
                public setEnablePinchZoom(param0: boolean): void;
                public getDisplayId(): number;
                public getCamcorderProfile$library_debug(param0: Quality): globalAndroid.media.CamcorderProfile;
                public setZoom(param0: number): void;
                public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
                public getRetrieveLatestImage(): boolean;
                public setAutoFocus(param0: boolean): void;
                public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
                public getRotation(): number;
                public toggleCamera(): void;
                public setMTimer$library_debug(param0: java.util.Timer): void;
                public onStopNestedScroll(param0: globalAndroid.view.View): void;
                public getMaxAudioBitRate(): number;
                /** @deprecated */
                public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                public getParent(): globalAndroid.view.ViewParent;
                public takePhoto(param0: string): void;
                public requestDisallowInterceptTouchEvent(param0: boolean): void;
                public setDisableHEVC(param0: boolean): void;
                public requestCameraPermission(): void;
                /** @deprecated */
                public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
                public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public setCurrentFrame$library_debug(param0: number): void;
                public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
                public setRotation(param0: CameraOrientation): void;
                public initOptions$library_debug(): void;
                public orientationUpdated(): void;
                public setAnalysisExecutor$library_debug(param0: java.util.concurrent.ExecutorService): void;
                public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                public requestFitSystemWindows(): void;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public getQuality(): Quality;
                public setListener(param0: CameraEventListener): void;
                public getPosition(): CameraPosition;
                public requestTransparentRegion(param0: globalAndroid.view.View): void;
                public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
                public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
                public stringSizeToSize$library_debug(param0: string): Size;
                public setCurrentRotation(param0: number): void;
                public getListener(): CameraEventListener;
                public setSaveToGallery(param0: boolean): void;
                public getLatestImage$library_debug(): globalAndroid.graphics.Bitmap;
                public getOverridePhotoWidth(): number;
                public getTextAlignment(): number;
                public setMaxVideoFrameRate(param0: number): void;
                public startPreview(): void;
                public convertToExifDateTime$library_debug(param0: number): string;
                public requestPermission(): void;
                public addView(param0: globalAndroid.view.View, param1: number): void;
                public getMaxVideoFrameRate(): number;
                public getAnalysisExecutor$library_debug(): java.util.concurrent.ExecutorService;
                public getVIDEO_RECORDER_PERMISSIONS$library_debug(): androidNative.Array<string>;
                public setPosition(param0: CameraPosition): void;
                public getDATE_FORMAT$library_debug(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
                public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                public stopPreview(): void;
                public setPictureSize(param0: string): void;
                public hasCameraPermission(): boolean;
                public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                public getAmplitudeEMA(): number;
                public recomputeViewAttributes(param0: globalAndroid.view.View): void;
                public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
                public isTextAlignmentResolved(): boolean;
                public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                public getSupportedRatios(): androidNative.Array<string>;
                public getLayoutDirection(): number;
                public setWhiteBalance(param0: WhiteBalance): void;
                public getZoom(): number;
                public setLatestImage$library_debug(param0: globalAndroid.graphics.Bitmap): void;
                public removeView(param0: globalAndroid.view.View): void;
                public canResolveTextDirection(): boolean;
                public getDisableHEVC(): boolean;
                public finalize(): void;
                public canResolveTextAlignment(): boolean;
                public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
                public setDisplayRatio(param0: string): void;
                public stopDurationTimer$library_debug(): void;
                public hasAudioPermission(): boolean;
                public getMTimer$library_debug(): java.util.Timer;
                public toggleFlash(): void;
                public requestLayout(): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public setDisplayId(param0: number): void;
                public getRecorder$library_debug(): globalAndroid.media.MediaRecorder;
                public convertFromExifDateTime$library_debug(param0: string): java.util.Date;
                public getEnableAudio(): boolean;
                public setOverridePhotoWidth(param0: number): void;
                public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                public setEnableAudio(param0: boolean): void;
                public initListener$library_debug(param0: globalAndroid.media.MediaRecorder): void;
                public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
                public setAudioLevelsEnabled(param0: boolean): void;
                public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                public focusableViewAvailable(param0: globalAndroid.view.View): void;
                public setAutoSquareCrop(param0: boolean): void;
                public canResolveLayoutDirection(): boolean;
                public addView(param0: globalAndroid.view.View): void;
                public setMaxAudioBitRate(param0: number): void;
                public getEnablePinchZoom(): boolean;
                public setGettingAudioLevels$library_debug(param0: boolean): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public getAutoSquareCrop(): boolean;
                public stop(): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public getMDuration$library_debug(): number;
                public setRotation(param0: number): void;
                public hasFlash(): boolean;
                public getDisplayManager(): globalAndroid.hardware.display.DisplayManager;
                public hasStoragePermission(): boolean;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public setRetrieveLatestImage(param0: boolean): void;
                public getNumberOfCameras(): number;
                public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
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
                    onCameraPhotoImage(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                    onCameraVideo(param0: java.io.File): void;
                    onCameraAnalysis(param0: ImageAnalysis): void;
                    onCameraError(param0: string, param1: java.lang.Exception): void;
                    onCameraVideoStart(): void;
                });
                public constructor();
                public onCameraVideo(param0: java.io.File): void;
                public onReady(): void;
                public onCameraAnalysis(param0: ImageAnalysis): void;
                public onCameraVideoStart(): void;
                public onCameraClose(): void;
                public onCameraPhotoImage(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: ImageAsyncProcessor): void;
                public onCameraOpen(): void;
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
                public static Companion: CameraFlashMode.Companion;
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
                public static Companion: CameraOrientation.Companion;
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
                public static Companion: CameraPosition.Companion;
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
                public static Companion: CameraView.Companion;
                public childDrawableStateChanged(param0: globalAndroid.view.View): void;
                public getPreviewSurface(): any;
                public clearChildFocus(param0: globalAndroid.view.View): void;
                public getDb(): number;
                public setFlashMode(param0: CameraFlashMode): void;
                public setAllowExifRotation(param0: boolean): void;
                public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                public getAllowExifRotation(): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public isLayoutRequested(): boolean;
                public sendAccessibilityEvent(param0: number): void;
                public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
                public getAnalyserCallback(): ImageAnalysisCallback;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public getTextDirection(): number;
                public getWhiteBalance(): WhiteBalance;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public getAvailablePictureSizes(param0: string): androidNative.Array<Size>;
                public getAutoFocus(): boolean;
                public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public startAutoFocus(): void;
                public setQuality(param0: Quality): void;
                public getParentForAccessibility(): globalAndroid.view.ViewParent;
                public getAmplitude(): number;
                public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
                public getPictureSize(): string;
                public getSaveToGallery(): boolean;
                public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
                public getMaxVideoBitrate(): number;
                public isTextDirectionResolved(): boolean;
                public setSavePhotoToDisk(param0: boolean): void;
                public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                public isLayoutDirectionResolved(): boolean;
                public getFlashMode(): CameraFlashMode;
                public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                public getPause(): boolean;
                public getRotation(): CameraOrientation;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public startRecording(): void;
                public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
                public setAmplitudeEMA(param0: number): void;
                public isAudioLevelsEnabled(): boolean;
                public getDisplayRatio(): string;
                public focusSearch(param0: number): globalAndroid.view.View;
                public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
                /** @deprecated */
                public requestFitSystemWindows(): void;
                public bringChildToFront(param0: globalAndroid.view.View): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public setMaxVideoBitrate(param0: number): void;
                public stopRecording(): void;
                public cameraRecording(): boolean;
                public focusAtPoint(param0: number, param1: number): void;
                public release(): void;
                public setEnablePinchZoom(param0: boolean): void;
                public setZoom(param0: number): void;
                public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
                public getRetrieveLatestImage(): boolean;
                public setAutoFocus(param0: boolean): void;
                public setAnalyserCallback(param0: ImageAnalysisCallback): void;
                public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
                public getRotation(): number;
                public toggleCamera(): void;
                public onStopNestedScroll(param0: globalAndroid.view.View): void;
                public getMaxAudioBitRate(): number;
                /** @deprecated */
                public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                public getParent(): globalAndroid.view.ViewParent;
                public takePhoto(param0: string): void;
                public requestDisallowInterceptTouchEvent(param0: boolean): void;
                public setDisableHEVC(param0: boolean): void;
                /** @deprecated */
                public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
                public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public getSavePhotoToDisk(): boolean;
                public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
                public setRotation(param0: CameraOrientation): void;
                public orientationUpdated(): void;
                public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                public requestFitSystemWindows(): void;
                public setDb(param0: number): void;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public getQuality(): Quality;
                public getPosition(): CameraPosition;
                public requestTransparentRegion(param0: globalAndroid.view.View): void;
                public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
                public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
                public setSaveToGallery(param0: boolean): void;
                public getTextAlignment(): number;
                public setMaxVideoFrameRate(param0: number): void;
                public startPreview(): void;
                public addView(param0: globalAndroid.view.View, param1: number): void;
                public getMaxVideoFrameRate(): number;
                public setPosition(param0: CameraPosition): void;
                public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                public setPictureSize(param0: string): void;
                public stopPreview(): void;
                public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                public getRecorderQuality$library_debug(param0: Quality): androidx.camera.video.Quality;
                public getAmplitudeEMA(): number;
                public recomputeViewAttributes(param0: globalAndroid.view.View): void;
                public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
                public isTextAlignmentResolved(): boolean;
                public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                public getSupportedRatios(): androidNative.Array<string>;
                public getLayoutDirection(): number;
                public setWhiteBalance(param0: WhiteBalance): void;
                public getZoom(): number;
                public removeView(param0: globalAndroid.view.View): void;
                public canResolveTextDirection(): boolean;
                public finalize(): void;
                public getDisableHEVC(): boolean;
                public canResolveTextAlignment(): boolean;
                public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
                public setDisplayRatio(param0: string): void;
                public requestLayout(): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public setAmplitude(param0: number): void;
                public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
                public setAudioLevelsEnabled(param0: boolean): void;
                public getAllAvailablePictureSizes(): androidNative.Array<Size>;
                public focusableViewAvailable(param0: globalAndroid.view.View): void;
                public setAutoSquareCrop(param0: boolean): void;
                public canResolveLayoutDirection(): boolean;
                public addView(param0: globalAndroid.view.View): void;
                public getEnablePinchZoom(): boolean;
                public setMaxAudioBitRate(param0: number): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public getAutoSquareCrop(): boolean;
                public stop(): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public setRotation(param0: number): void;
                public hasFlash(): boolean;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public setRetrieveLatestImage(param0: boolean): void;
                public getNumberOfCameras(): number;
                public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
                public setPause(param0: boolean): void;
            }
            export namespace CameraView {
                export class CameraAnalyzer extends java.lang.Object {
                    public static class: java.lang.Class<CameraAnalyzer>;
                    public constructor(param0: kotlin.jvm.functions.Function1<any, kotlin.Unit>);
                    public constructor();
                    public onFrameAnalyzed(param0: kotlin.jvm.functions.Function1<any, kotlin.Unit>): boolean;
                    public getTargetResolutionOverride(): any;
                    public analyze(param0: androidx.camera.core.ImageProxy): void;
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
            export class CameraViewKt extends java.lang.Object {
                public static class: java.lang.Class<CameraViewKt>;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraview {
            export class ExtensionsKt extends java.lang.Object {
                public static class: java.lang.Class<ExtensionsKt>;
                public static afterMeasured(param0: globalAndroid.view.View, param1: kotlin.jvm.functions.Function1): void;
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
                    public setHeight(param0: number): Builder;
                    public setRotation(param0: number): Builder;
                    public constructor();
                    public build(): FrameMetadata;
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
                public static Companion: Quality.Companion;
                public static MAX_480P: Quality;
                public static MAX_720P: Quality;
                public static MAX_1080P: Quality;
                public static MAX_2160P: Quality;
                public static HIGHEST: Quality;
                public static LOWEST: Quality;
                public static QVGA: Quality;
                public static values(): androidNative.Array<Quality>;
                public getValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static valueOf(param0: string): Quality;
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
                public static values(): androidNative.Array<WhiteBalance>;
                public static valueOf(param0: string): WhiteBalance;
                public getValue$library_debug(): string;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

//Generics information:
