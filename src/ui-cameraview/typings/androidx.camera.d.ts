/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */


declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AndroidImageProxy extends java.lang.Object implements androidx.camera.core.ImageProxy {
				public static class: java.lang.Class<androidx.camera.core.AndroidImageProxy>;
				public getImageInfo(): androidx.camera.core.ImageInfo;
				public close(): void;
				public getHeight(): number;
				public getWidth(): number;
				public getCropRect(): globalAndroid.graphics.Rect;
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
				public getImage(): globalAndroid.media.Image;
				public getFormat(): number;
			}
			export namespace AndroidImageProxy {
				export class PlaneProxy extends java.lang.Object implements androidx.camera.core.ImageProxy.PlaneProxy {
					public static class: java.lang.Class<androidx.camera.core.AndroidImageProxy.PlaneProxy>;
					public getRowStride(): number;
					public getBuffer(): java.nio.ByteBuffer;
					public getPixelStride(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AndroidImageReaderProxy extends java.lang.Object implements androidx.camera.core.impl.ImageReaderProxy {
				public static class: java.lang.Class<androidx.camera.core.AndroidImageReaderProxy>;
				public acquireLatestImage(): androidx.camera.core.ImageProxy;
				public close(): void;
				public getHeight(): number;
				public getWidth(): number;
				public getSurface(): globalAndroid.view.Surface;
				public getImageFormat(): number;
				public getMaxImages(): number;
				public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
				public clearOnImageAvailableListener(): void;
				public acquireNextImage(): androidx.camera.core.ImageProxy;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AspectRatio extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.AspectRatio>;
				public static RATIO_4_3: number = 0;
				public static RATIO_16_9: number = 1;
			}
			export namespace AspectRatio {
				export class Ratio extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.AspectRatio.Ratio>;
					/**
					 * Constructs a new instance of the androidx.camera.core.AspectRatio$Ratio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_CameraState extends androidx.camera.core.CameraState {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_CameraState>;
				public getType(): androidx.camera.core.CameraState.Type;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getError(): androidx.camera.core.CameraState.StateError;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_CameraState_StateError extends androidx.camera.core.CameraState.StateError {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_CameraState_StateError>;
				public hashCode(): number;
				public getCode(): number;
				public equals(param0: any): boolean;
				public getCause(): java.lang.Throwable;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_ImageReaderFormatRecommender_FormatCombo extends androidx.camera.core.ImageReaderFormatRecommender.FormatCombo {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_ImageReaderFormatRecommender_FormatCombo>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_ImmutableImageInfo extends androidx.camera.core.ImmutableImageInfo {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_ImmutableImageInfo>;
				public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
				public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
				public hashCode(): number;
				public getTagBundle(): androidx.camera.core.impl.TagBundle;
				public equals(param0: any): boolean;
				public getRotationDegrees(): number;
				public toString(): string;
				public getTimestamp(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_ResolutionInfo extends androidx.camera.core.ResolutionInfo {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_ResolutionInfo>;
				public getCropRect(): globalAndroid.graphics.Rect;
				public hashCode(): number;
				public getResolution(): any;
				public equals(param0: any): boolean;
				public getRotationDegrees(): number;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_SurfaceOutput_Event extends androidx.camera.core.SurfaceOutput.Event {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_SurfaceOutput_Event>;
				public hashCode(): number;
				public getEventCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public getSurfaceOutput(): androidx.camera.core.SurfaceOutput;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_SurfaceRequest_Result extends androidx.camera.core.SurfaceRequest.Result {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_SurfaceRequest_Result>;
				public getSurface(): globalAndroid.view.Surface;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public getResultCode(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class AutoValue_SurfaceRequest_TransformationInfo extends androidx.camera.core.SurfaceRequest.TransformationInfo {
				public static class: java.lang.Class<androidx.camera.core.AutoValue_SurfaceRequest_TransformationInfo>;
				public getCropRect(): globalAndroid.graphics.Rect;
				public getTargetRotation(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getRotationDegrees(): number;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class Camera extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.Camera>;
				/**
				 * Constructs a new instance of the androidx.camera.core.Camera interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCameraControl(): androidx.camera.core.CameraControl;
					getCameraInfo(): androidx.camera.core.CameraInfo;
					getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
					getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
					setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
					isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
				});
				public constructor();
				public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
				public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
				public getCameraControl(): androidx.camera.core.CameraControl;
				public getCameraInfo(): androidx.camera.core.CameraInfo;
				public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
				public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraClosedException extends java.lang.RuntimeException {
				public static class: java.lang.Class<androidx.camera.core.CameraClosedException>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraControl extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraControl>;
				/**
				 * Constructs a new instance of the androidx.camera.core.CameraControl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
					cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
				});
				public constructor();
				public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
				public startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
				public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
			}
			export namespace CameraControl {
				export class OperationCanceledException extends java.lang.Exception {
					public static class: java.lang.Class<androidx.camera.core.CameraControl.OperationCanceledException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraEffect extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraEffect>;
				public static PREVIEW: number = 1;
				public static VIDEO_CAPTURE: number = 2;
				public static IMAGE_CAPTURE: number = 4;
				public getSurfaceProcessor(): androidx.camera.core.SurfaceProcessor;
				public getProcessorExecutor(): java.util.concurrent.Executor;
				public constructor(param0: number, param1: java.util.concurrent.Executor, param2: androidx.camera.core.ImageProcessor);
				public constructor(param0: number, param1: java.util.concurrent.Executor, param2: androidx.camera.core.SurfaceProcessor);
				public getImageProcessor(): androidx.camera.core.ImageProcessor;
				public getTargets(): number;
			}
			export namespace CameraEffect {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.CameraEffect.Builder>;
					public setSurfaceProcessor(param0: java.util.concurrent.Executor, param1: androidx.camera.core.SurfaceProcessor): androidx.camera.core.CameraEffect.Builder;
					public setImageProcessor(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageProcessor): androidx.camera.core.CameraEffect.Builder;
					public constructor(param0: number);
					public build(): androidx.camera.core.CameraEffect;
				}
				export class Targets extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.CameraEffect.Targets>;
					/**
					 * Constructs a new instance of the androidx.camera.core.CameraEffect$Targets interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraExecutor extends java.lang.Object implements java.util.concurrent.Executor {
				public static class: java.lang.Class<androidx.camera.core.CameraExecutor>;
				public execute(param0: java.lang.Runnable): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraFilter extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraFilter>;
				/**
				 * Constructs a new instance of the androidx.camera.core.CameraFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
					getIdentifier(): androidx.camera.core.impl.Identifier;
					"<clinit>"(): void;
				});
				public constructor();
				public static DEFAULT_ID: androidx.camera.core.impl.Identifier;
				public getIdentifier(): androidx.camera.core.impl.Identifier;
				public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraInfo>;
				/**
				 * Constructs a new instance of the androidx.camera.core.CameraInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSensorRotationDegrees(): number;
					getSensorRotationDegrees(param0: number): number;
					hasFlashUnit(): boolean;
					getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
					getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
					getExposureState(): androidx.camera.core.ExposureState;
					getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
					getImplementationType(): string;
					getCameraSelector(): androidx.camera.core.CameraSelector;
					isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
					isZslSupported(): boolean;
					isPrivateReprocessingSupported(): boolean;
				});
				public constructor();
				public static IMPLEMENTATION_TYPE_CAMERA2: string = "androidx.camera.camera2";
				public static IMPLEMENTATION_TYPE_CAMERA2_LEGACY: string = "androidx.camera.camera2.legacy";
				public static IMPLEMENTATION_TYPE_UNKNOWN: string = "<unknown>";
				public static IMPLEMENTATION_TYPE_FAKE: string = "androidx.camera.fake";
				public getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
				public getSensorRotationDegrees(): number;
				public getImplementationType(): string;
				public isPrivateReprocessingSupported(): boolean;
				public getExposureState(): androidx.camera.core.ExposureState;
				public getCameraSelector(): androidx.camera.core.CameraSelector;
				public isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
				public getSensorRotationDegrees(param0: number): number;
				public hasFlashUnit(): boolean;
				public isZslSupported(): boolean;
				public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
				public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
			}
			export namespace CameraInfo {
				export class ImplementationType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.CameraInfo.ImplementationType>;
					/**
					 * Constructs a new instance of the androidx.camera.core.CameraInfo$ImplementationType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraInfoUnavailableException extends java.lang.Exception {
				public static class: java.lang.Class<androidx.camera.core.CameraInfoUnavailableException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraProvider>;
				/**
				 * Constructs a new instance of the androidx.camera.core.CameraProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
					getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo>;
				});
				public constructor();
				public hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
				public getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraSelector extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraSelector>;
				public static LENS_FACING_FRONT: number = 0;
				public static LENS_FACING_BACK: number = 1;
				public static DEFAULT_FRONT_CAMERA: androidx.camera.core.CameraSelector;
				public static DEFAULT_BACK_CAMERA: androidx.camera.core.CameraSelector;
				public select(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>): androidx.camera.core.impl.CameraInternal;
				public getLensFacing(): java.lang.Integer;
				public filter(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
				public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
				public getCameraFilterSet(): java.util.LinkedHashSet<androidx.camera.core.CameraFilter>;
			}
			export namespace CameraSelector {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.CameraSelector.Builder>;
					public static fromSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector.Builder;
					public build(): androidx.camera.core.CameraSelector;
					public constructor();
					public addCameraFilter(param0: androidx.camera.core.CameraFilter): androidx.camera.core.CameraSelector.Builder;
					public requireLensFacing(param0: number): androidx.camera.core.CameraSelector.Builder;
				}
				export class LensFacing extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.CameraSelector.LensFacing>;
					/**
					 * Constructs a new instance of the androidx.camera.core.CameraSelector$LensFacing interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class CameraState extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraState>;
				public static ERROR_MAX_CAMERAS_IN_USE: number = 1;
				public static ERROR_CAMERA_IN_USE: number = 2;
				public static ERROR_OTHER_RECOVERABLE_ERROR: number = 3;
				public static ERROR_STREAM_CONFIG: number = 4;
				public static ERROR_CAMERA_DISABLED: number = 5;
				public static ERROR_CAMERA_FATAL_ERROR: number = 6;
				public static ERROR_DO_NOT_DISTURB_MODE_ENABLED: number = 7;
				public getType(): androidx.camera.core.CameraState.Type;
				public getError(): androidx.camera.core.CameraState.StateError;
				public static create(param0: androidx.camera.core.CameraState.Type, param1: androidx.camera.core.CameraState.StateError): androidx.camera.core.CameraState;
				public static create(param0: androidx.camera.core.CameraState.Type): androidx.camera.core.CameraState;
				public constructor();
			}
			export namespace CameraState {
				export class ErrorType {
					public static class: java.lang.Class<androidx.camera.core.CameraState.ErrorType>;
					public static RECOVERABLE: androidx.camera.core.CameraState.ErrorType;
					public static CRITICAL: androidx.camera.core.CameraState.ErrorType;
					public static valueOf(param0: string): androidx.camera.core.CameraState.ErrorType;
					public static values(): androidNative.Array<androidx.camera.core.CameraState.ErrorType>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export abstract class StateError extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.CameraState.StateError>;
					public constructor();
					public static create(param0: number): androidx.camera.core.CameraState.StateError;
					public getType(): androidx.camera.core.CameraState.ErrorType;
					public getCause(): java.lang.Throwable;
					public static create(param0: number, param1: java.lang.Throwable): androidx.camera.core.CameraState.StateError;
					public getCode(): number;
				}
				export class Type {
					public static class: java.lang.Class<androidx.camera.core.CameraState.Type>;
					public static PENDING_OPEN: androidx.camera.core.CameraState.Type;
					public static OPENING: androidx.camera.core.CameraState.Type;
					public static OPEN: androidx.camera.core.CameraState.Type;
					public static CLOSING: androidx.camera.core.CameraState.Type;
					public static CLOSED: androidx.camera.core.CameraState.Type;
					public static values(): androidNative.Array<androidx.camera.core.CameraState.Type>;
					public static valueOf(param0: string): androidx.camera.core.CameraState.Type;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraUnavailableException extends java.lang.Exception {
				public static class: java.lang.Class<androidx.camera.core.CameraUnavailableException>;
				public static CAMERA_UNKNOWN_ERROR: number = 0;
				public static CAMERA_DISABLED: number = 1;
				public static CAMERA_DISCONNECTED: number = 2;
				public static CAMERA_ERROR: number = 3;
				public static CAMERA_IN_USE: number = 4;
				public static CAMERA_MAX_IN_USE: number = 5;
				public static CAMERA_UNAVAILABLE_DO_NOT_DISTURB: number = 6;
				public constructor(param0: number, param1: string);
				public getReason(): number;
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
				public constructor(param0: number, param1: java.lang.Throwable);
			}
			export namespace CameraUnavailableException {
				export class Reason extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.CameraUnavailableException.Reason>;
					/**
					 * Constructs a new instance of the androidx.camera.core.CameraUnavailableException$Reason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraX extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraX>;
				public getDefaultConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
				public getCameraFactory(): androidx.camera.core.impl.CameraFactory;
				public shutdown(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public getCameraDeviceSurfaceManager(): androidx.camera.core.impl.CameraDeviceSurfaceManager;
				public getCameraRepository(): androidx.camera.core.impl.CameraRepository;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.camera.core.CameraXConfig.Provider);
				public getInitializeFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
			}
			export namespace CameraX {
				export class InternalInitState {
					public static class: java.lang.Class<androidx.camera.core.CameraX.InternalInitState>;
					public static UNINITIALIZED: androidx.camera.core.CameraX.InternalInitState;
					public static INITIALIZING: androidx.camera.core.CameraX.InternalInitState;
					public static INITIALIZING_ERROR: androidx.camera.core.CameraX.InternalInitState;
					public static INITIALIZED: androidx.camera.core.CameraX.InternalInitState;
					public static SHUTDOWN: androidx.camera.core.CameraX.InternalInitState;
					public static valueOf(param0: string): androidx.camera.core.CameraX.InternalInitState;
					public static values(): androidNative.Array<androidx.camera.core.CameraX.InternalInitState>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraXConfig extends androidx.camera.core.internal.TargetConfig<androidx.camera.core.CameraX> {
				public static class: java.lang.Class<androidx.camera.core.CameraXConfig>;
				public getCameraExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
				public getConfig(): androidx.camera.core.impl.Config;
				public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
				public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
				public getCameraFactoryProvider(param0: androidx.camera.core.impl.CameraFactory.Provider): androidx.camera.core.impl.CameraFactory.Provider;
				public getDeviceSurfaceManagerProvider(param0: androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider): androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider;
				public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
				public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				public getAvailableCamerasLimiter(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
				public getTargetClass(): java.lang.Class<any>;
				public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
				public getSchedulerHandler(param0: globalAndroid.os.Handler): globalAndroid.os.Handler;
				public getTargetName(param0: string): string;
				public getMinimumLoggingLevel(): number;
				public getTargetName(): string;
				public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
				public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
				public getUseCaseConfigFactoryProvider(param0: androidx.camera.core.impl.UseCaseConfigFactory.Provider): androidx.camera.core.impl.UseCaseConfigFactory.Provider;
				public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
				public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
				public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
				public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
			}
			export namespace CameraXConfig {
				export class Builder extends androidx.camera.core.internal.TargetConfig.Builder<androidx.camera.core.CameraX,androidx.camera.core.CameraXConfig.Builder> {
					public static class: java.lang.Class<androidx.camera.core.CameraXConfig.Builder>;
					public setSchedulerHandler(param0: globalAndroid.os.Handler): androidx.camera.core.CameraXConfig.Builder;
					public setTargetClass(param0: java.lang.Class<any>): any;
					public setCameraFactoryProvider(param0: androidx.camera.core.impl.CameraFactory.Provider): androidx.camera.core.CameraXConfig.Builder;
					public setAvailableCamerasLimiter(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraXConfig.Builder;
					public static fromConfig(param0: androidx.camera.core.CameraXConfig): androidx.camera.core.CameraXConfig.Builder;
					public setUseCaseConfigFactoryProvider(param0: androidx.camera.core.impl.UseCaseConfigFactory.Provider): androidx.camera.core.CameraXConfig.Builder;
					public setTargetName(param0: string): androidx.camera.core.CameraXConfig.Builder;
					public build(): androidx.camera.core.CameraXConfig;
					public constructor();
					public setDeviceSurfaceManagerProvider(param0: androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider): androidx.camera.core.CameraXConfig.Builder;
					public setTargetName(param0: string): any;
					public setMinimumLoggingLevel(param0: number): androidx.camera.core.CameraXConfig.Builder;
					public setCameraExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.CameraXConfig.Builder;
					public setTargetClass(param0: java.lang.Class<androidx.camera.core.CameraX>): androidx.camera.core.CameraXConfig.Builder;
				}
				export class Provider extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.CameraXConfig.Provider>;
					/**
					 * Constructs a new instance of the androidx.camera.core.CameraXConfig$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCameraXConfig(): androidx.camera.core.CameraXConfig;
					});
					public constructor();
					public getCameraXConfig(): androidx.camera.core.CameraXConfig;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CameraXThreads extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CameraXThreads>;
				public static TAG: string = "CameraX-";
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CaptureBundles extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.CaptureBundles>;
				public static singleDefaultCaptureBundle(): androidx.camera.core.impl.CaptureBundle;
			}
			export namespace CaptureBundles {
				export class CaptureBundleImpl extends java.lang.Object implements androidx.camera.core.impl.CaptureBundle {
					public static class: java.lang.Class<androidx.camera.core.CaptureBundles.CaptureBundleImpl>;
					public getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class CaptureProcessorPipeline extends java.lang.Object implements androidx.camera.core.impl.CaptureProcessor {
				public static class: java.lang.Class<androidx.camera.core.CaptureProcessorPipeline>;
				public close(): void;
				public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
				public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
				public onResolutionUpdate(param0: any): void;
				public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class DisplayOrientedMeteringPointFactory extends androidx.camera.core.MeteringPointFactory {
				public static class: java.lang.Class<androidx.camera.core.DisplayOrientedMeteringPointFactory>;
				public constructor(param0: globalAndroid.view.Display, param1: androidx.camera.core.CameraInfo, param2: number, param3: number);
				public constructor(param0: globalAndroid.util.Rational);
				public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
				public constructor();
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ExperimentalGetImage extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.camera.core.ExperimentalGetImage>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ExperimentalGetImage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ExperimentalUseCaseApi extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.camera.core.ExperimentalUseCaseApi>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ExperimentalUseCaseApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ExperimentalZeroShutterLag extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.camera.core.ExperimentalZeroShutterLag>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ExperimentalZeroShutterLag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ExposureState extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ExposureState>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ExposureState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getExposureCompensationIndex(): number;
					getExposureCompensationRange(): globalAndroid.util.Range<java.lang.Integer>;
					getExposureCompensationStep(): globalAndroid.util.Rational;
					isExposureCompensationSupported(): boolean;
				});
				public constructor();
				public isExposureCompensationSupported(): boolean;
				public getExposureCompensationRange(): globalAndroid.util.Range<java.lang.Integer>;
				public getExposureCompensationIndex(): number;
				public getExposureCompensationStep(): globalAndroid.util.Rational;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ExtendableBuilder<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ExtendableBuilder<any>>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ExtendableBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getMutableConfig(): androidx.camera.core.impl.MutableConfig;
					build(): T;
				});
				public constructor();
				public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
				public build(): T;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class FocusMeteringAction extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.FocusMeteringAction>;
				public static FLAG_AF: number = 1;
				public static FLAG_AE: number = 2;
				public static FLAG_AWB: number = 4;
				public getMeteringPointsAwb(): java.util.List<androidx.camera.core.MeteringPoint>;
				public getAutoCancelDurationInMillis(): number;
				public getMeteringPointsAf(): java.util.List<androidx.camera.core.MeteringPoint>;
				public isAutoCancelEnabled(): boolean;
				public getMeteringPointsAe(): java.util.List<androidx.camera.core.MeteringPoint>;
			}
			export namespace FocusMeteringAction {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.FocusMeteringAction.Builder>;
					public disableAutoCancel(): androidx.camera.core.FocusMeteringAction.Builder;
					public addPoint(param0: androidx.camera.core.MeteringPoint): androidx.camera.core.FocusMeteringAction.Builder;
					public constructor(param0: androidx.camera.core.MeteringPoint, param1: number);
					public build(): androidx.camera.core.FocusMeteringAction;
					public setAutoCancelDuration(param0: number, param1: java.util.concurrent.TimeUnit): androidx.camera.core.FocusMeteringAction.Builder;
					public constructor(param0: androidx.camera.core.MeteringPoint);
					public addPoint(param0: androidx.camera.core.MeteringPoint, param1: number): androidx.camera.core.FocusMeteringAction.Builder;
				}
				export class MeteringMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.FocusMeteringAction.MeteringMode>;
					/**
					 * Constructs a new instance of the androidx.camera.core.FocusMeteringAction$MeteringMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class FocusMeteringResult extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.FocusMeteringResult>;
				public static emptyInstance(): androidx.camera.core.FocusMeteringResult;
				public static create(param0: boolean): androidx.camera.core.FocusMeteringResult;
				public isFocusSuccessful(): boolean;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class ForwardingImageProxy extends java.lang.Object implements androidx.camera.core.ImageProxy {
				public static class: java.lang.Class<androidx.camera.core.ForwardingImageProxy>;
				public mImage: androidx.camera.core.ImageProxy;
				public getImageInfo(): androidx.camera.core.ImageInfo;
				public constructor(param0: androidx.camera.core.ImageProxy);
				public close(): void;
				public getHeight(): number;
				public getWidth(): number;
				public getCropRect(): globalAndroid.graphics.Rect;
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
				public notifyOnImageCloseListeners(): void;
				public getImage(): globalAndroid.media.Image;
				public addOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
				public getFormat(): number;
			}
			export namespace ForwardingImageProxy {
				export class OnImageCloseListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ForwardingImageProxy.OnImageCloseListener>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ForwardingImageProxy$OnImageCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageClose(param0: androidx.camera.core.ImageProxy): void;
					});
					public constructor();
					public onImageClose(param0: androidx.camera.core.ImageProxy): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageAnalysis extends androidx.camera.core.UseCase {
				public static class: java.lang.Class<androidx.camera.core.ImageAnalysis>;
				public static STRATEGY_KEEP_ONLY_LATEST: number = 0;
				public static STRATEGY_BLOCK_PRODUCER: number = 1;
				public static OUTPUT_IMAGE_FORMAT_YUV_420_888: number = 1;
				public static OUTPUT_IMAGE_FORMAT_RGBA_8888: number = 2;
				public static DEFAULT_CONFIG: androidx.camera.core.ImageAnalysis.Defaults;
				public static COORDINATE_SYSTEM_ORIGINAL: number = 0;
				public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builderany): androidx.camera.core.impl.UseCaseConfig<any>;
				public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
				public isOutputImageRotationEnabled(): boolean;
				public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builderany;
				public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
				public getBackpressureStrategy(): number;
				public toString(): string;
				public setAnalyzer(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageAnalysis.Analyzer): void;
				public getOutputImageFormat(): number;
				public setSensorToBufferTransformMatrix(param0: globalAndroid.graphics.Matrix): void;
				public getImageQueueDepth(): number;
				public onAttached(): void;
				public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
				public getTargetRotation(): number;
				public setTargetRotation(param0: number): void;
				public getBackgroundExecutor(): java.util.concurrent.Executor;
				public onSuggestedResolutionUpdated(param0: any): any;
				public clearAnalyzer(): void;
				public getOnePixelShiftEnabled(): java.lang.Boolean;
				public onDetached(): void;
			}
			export namespace ImageAnalysis {
				export class Analyzer extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.Analyzer>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageAnalysis$Analyzer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						analyze(param0: androidx.camera.core.ImageProxy): void;
						getDefaultTargetResolution(): any;
						getTargetCoordinateSystem(): number;
						updateTransform(param0: globalAndroid.graphics.Matrix): void;
					});
					public constructor();
					public updateTransform(param0: globalAndroid.graphics.Matrix): void;
					public getTargetCoordinateSystem(): number;
					public analyze(param0: androidx.camera.core.ImageProxy): void;
					public getDefaultTargetResolution(): any;
				}
				export class BackpressureStrategy extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.BackpressureStrategy>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageAnalysis$BackpressureStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.Builder>;
					public setTargetAspectRatio(param0: number): androidx.camera.core.ImageAnalysis.Builder;
					public setZslDisabled(param0: boolean): any;
					public getUseCaseConfig(): androidx.camera.core.impl.ImageAnalysisConfig;
					public setImageQueueDepth(param0: number): androidx.camera.core.ImageAnalysis.Builder;
					public setImageReaderProxyProvider(param0: androidx.camera.core.ImageReaderProxyProvider): androidx.camera.core.ImageAnalysis.Builder;
					public setTargetRotation(param0: number): androidx.camera.core.ImageAnalysis.Builder;
					public setDefaultResolution(param0: any): any;
					public build(): any;
					public setOutputImageRotationEnabled(param0: boolean): androidx.camera.core.ImageAnalysis.Builder;
					public setTargetName(param0: string): androidx.camera.core.ImageAnalysis.Builder;
					public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
					public setDefaultResolution(param0: any): androidx.camera.core.ImageAnalysis.Builder;
					public getUseCaseConfig(): any;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.ImageAnalysis.Builder;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
					public constructor();
					public setTargetResolution(param0: any): androidx.camera.core.ImageAnalysis.Builder;
					public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
					public setMaxResolution(param0: any): androidx.camera.core.ImageAnalysis.Builder;
					public setTargetClass(param0: java.lang.Class<androidx.camera.core.ImageAnalysis>): androidx.camera.core.ImageAnalysis.Builder;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.ImageAnalysis.Builder;
					public setBackpressureStrategy(param0: number): androidx.camera.core.ImageAnalysis.Builder;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.ImageAnalysis.Builder;
					public setMaxResolution(param0: any): any;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): any;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.ImageAnalysis.Builder;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
					public setTargetClass(param0: java.lang.Class<any>): any;
					public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.ImageAnalysis.Builder;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
					public setOnePixelShiftEnabled(param0: boolean): androidx.camera.core.ImageAnalysis.Builder;
					public setTargetRotation(param0: number): any;
					public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.ImageAnalysis.Builder;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.ImageAnalysis.Builder;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
					public setSurfaceOccupancyPriority(param0: number): any;
					public setTargetAspectRatio(param0: number): any;
					public static fromConfig(param0: androidx.camera.core.impl.ImageAnalysisConfig): androidx.camera.core.ImageAnalysis.Builder;
					public setTargetName(param0: string): any;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.ImageAnalysis.Builder;
					public setZslDisabled(param0: boolean): androidx.camera.core.ImageAnalysis.Builder;
					public setOutputImageFormat(param0: number): androidx.camera.core.ImageAnalysis.Builder;
					public build(): androidx.camera.core.ImageAnalysis;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): androidx.camera.core.ImageAnalysis.Builder;
					public setTargetResolution(param0: any): any;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
				}
				export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.ImageAnalysisConfig> {
					public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.Defaults>;
					public getConfig(): androidx.camera.core.impl.ImageAnalysisConfig;
					public constructor();
					public getConfig(): any;
				}
				export class OutputImageFormat extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.OutputImageFormat>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageAnalysis$OutputImageFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class ImageAnalysisAbstractAnalyzer extends java.lang.Object implements androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener {
				public static class: java.lang.Class<androidx.camera.core.ImageAnalysisAbstractAnalyzer>;
				public mIsAttached: boolean;
				public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageAnalysisBlockingAnalyzer extends androidx.camera.core.ImageAnalysisAbstractAnalyzer {
				public static class: java.lang.Class<androidx.camera.core.ImageAnalysisBlockingAnalyzer>;
				public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageAnalysisNonBlockingAnalyzer extends androidx.camera.core.ImageAnalysisAbstractAnalyzer {
				public static class: java.lang.Class<androidx.camera.core.ImageAnalysisNonBlockingAnalyzer>;
				public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
			}
			export namespace ImageAnalysisNonBlockingAnalyzer {
				export class CacheAnalyzingImageProxy extends androidx.camera.core.ForwardingImageProxy {
					public static class: java.lang.Class<androidx.camera.core.ImageAnalysisNonBlockingAnalyzer.CacheAnalyzingImageProxy>;
					public getFormat(): number;
					public getCropRect(): globalAndroid.graphics.Rect;
					public getHeight(): number;
					public getImageInfo(): androidx.camera.core.ImageInfo;
					public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
					public close(): void;
					public getWidth(): number;
					public getImage(): globalAndroid.media.Image;
					public setCropRect(param0: globalAndroid.graphics.Rect): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageCapture extends androidx.camera.core.UseCase {
				public static class: java.lang.Class<androidx.camera.core.ImageCapture>;
				public static ERROR_UNKNOWN: number = 0;
				public static ERROR_FILE_IO: number = 1;
				public static ERROR_CAPTURE_FAILED: number = 2;
				public static ERROR_CAMERA_CLOSED: number = 3;
				public static ERROR_INVALID_CAMERA: number = 4;
				public static CAPTURE_MODE_MAXIMIZE_QUALITY: number = 0;
				public static CAPTURE_MODE_MINIMIZE_LATENCY: number = 1;
				public static CAPTURE_MODE_ZERO_SHUTTER_LAG: number = 2;
				public static FLASH_MODE_AUTO: number = 0;
				public static FLASH_MODE_ON: number = 1;
				public static FLASH_MODE_OFF: number = 2;
				public static FLASH_TYPE_ONE_SHOT_FLASH: number = 0;
				public static FLASH_TYPE_USE_TORCH_AS_FLASH: number = 1;
				public static DEFAULT_CONFIG: androidx.camera.core.ImageCapture.Defaults;
				public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builderany): androidx.camera.core.impl.UseCaseConfig<any>;
				public getFlashMode(): number;
				public onStateDetached(): void;
				public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
				public getCaptureMode(): number;
				public setFlashMode(param0: number): void;
				public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builderany;
				public toString(): string;
				public takePicture(param0: androidx.camera.core.ImageCapture.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.core.ImageCapture.OnImageSavedCallback): void;
				public onCameraControlReady(): void;
				public getResolutionInfoInternal(): androidx.camera.core.ResolutionInfo;
				public onAttached(): void;
				public takePicture(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageCapture.OnImageCapturedCallback): void;
				public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
				public getTargetRotation(): number;
				public setTargetRotation(param0: number): void;
				public setCropAspectRatio(param0: globalAndroid.util.Rational): void;
				public getJpegQuality(): number;
				public onSuggestedResolutionUpdated(param0: any): any;
				public onDetached(): void;
			}
			export namespace ImageCapture {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.Builder>;
					public setZslDisabled(param0: boolean): any;
					public setTargetAspectRatio(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.ImageCapture.Builder;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.ImageCapture.Builder;
					public setImageReaderProxyProvider(param0: androidx.camera.core.ImageReaderProxyProvider): androidx.camera.core.ImageCapture.Builder;
					public build(): any;
					public setTargetResolution(param0: any): androidx.camera.core.ImageCapture.Builder;
					public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
					public setFlashMode(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.ImageCapture.Builder;
					public constructor();
					public getUseCaseConfig(): androidx.camera.core.impl.ImageCaptureConfig;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
					public setBufferFormat(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setSoftwareJpegEncoderRequested(param0: boolean): androidx.camera.core.ImageCapture.Builder;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): androidx.camera.core.ImageCapture.Builder;
					public setTargetRotation(param0: number): any;
					public setIoExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.ImageCapture.Builder;
					public setMaxCaptureStages(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setCaptureBundle(param0: androidx.camera.core.impl.CaptureBundle): androidx.camera.core.ImageCapture.Builder;
					public setSurfaceOccupancyPriority(param0: number): any;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.ImageCapture.Builder;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.ImageCapture.Builder;
					public setTargetResolution(param0: any): any;
					public setTargetClass(param0: java.lang.Class<androidx.camera.core.ImageCapture>): androidx.camera.core.ImageCapture.Builder;
					public setCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.ImageCapture.Builder;
					public setDefaultResolution(param0: any): any;
					public setTargetName(param0: string): androidx.camera.core.ImageCapture.Builder;
					public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.ImageCapture.Builder;
					public getUseCaseConfig(): any;
					public setIoExecutor(param0: java.util.concurrent.Executor): any;
					public setMaxResolution(param0: any): any;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): any;
					public setTargetClass(param0: java.lang.Class<any>): any;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
					public setDefaultResolution(param0: any): androidx.camera.core.ImageCapture.Builder;
					public setFlashType(param0: number): androidx.camera.core.ImageCapture.Builder;
					public build(): androidx.camera.core.ImageCapture;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
					public setTargetAspectRatio(param0: number): any;
					public setCaptureMode(param0: number): androidx.camera.core.ImageCapture.Builder;
					public static fromConfig(param0: androidx.camera.core.impl.Config): androidx.camera.core.ImageCapture.Builder;
					public setMaxResolution(param0: any): androidx.camera.core.ImageCapture.Builder;
					public setTargetName(param0: string): any;
					public setZslDisabled(param0: boolean): androidx.camera.core.ImageCapture.Builder;
					public setTargetRotation(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setJpegQuality(param0: number): androidx.camera.core.ImageCapture.Builder;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
				}
				export class CaptureMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.CaptureMode>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageCapture$CaptureMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.ImageCaptureConfig> {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.Defaults>;
					public getConfig(): androidx.camera.core.impl.ImageCaptureConfig;
					public constructor();
					public getConfig(): any;
				}
				export class FlashMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.FlashMode>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageCapture$FlashMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class FlashType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.FlashType>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageCapture$FlashType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ImageCaptureError extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureError>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageCapture$ImageCaptureError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ImageCaptureRequest extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequest>;
				}
				export class ImageCaptureRequestProcessor extends java.lang.Object implements androidx.camera.core.ForwardingImageProxy.OnImageCloseListener {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequestProcessor>;
					public sendRequest(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): void;
					public cancelRequests(param0: java.lang.Throwable): void;
					public onImageClose(param0: androidx.camera.core.ImageProxy): void;
					public pullOutUnfinishedRequests(): java.util.List<androidx.camera.core.ImageCapture.ImageCaptureRequest>;
				}
				export namespace ImageCaptureRequestProcessor {
					export class ImageCaptor extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequestProcessor.ImageCaptor>;
						/**
						 * Constructs a new instance of the androidx.camera.core.ImageCapture$ImageCaptureRequestProcessor$ImageCaptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							capture(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
						});
						public constructor();
						public capture(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
					}
					export class RequestProcessCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequestProcessor.RequestProcessCallback>;
						/**
						 * Constructs a new instance of the androidx.camera.core.ImageCapture$ImageCaptureRequestProcessor$RequestProcessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPreProcessRequest(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): void;
						});
						public constructor();
						public onPreProcessRequest(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): void;
					}
				}
				export class Metadata extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.Metadata>;
					public setReversedVertical(param0: boolean): void;
					public setReversedHorizontal(param0: boolean): void;
					public setLocation(param0: globalAndroid.location.Location): void;
					public constructor();
					public isReversedHorizontalSet(): boolean;
					public isReversedHorizontal(): boolean;
					public isReversedVertical(): boolean;
					public getLocation(): globalAndroid.location.Location;
				}
				export abstract class OnImageCapturedCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.OnImageCapturedCallback>;
					public onError(param0: androidx.camera.core.ImageCaptureException): void;
					public constructor();
					public onCaptureSuccess(param0: androidx.camera.core.ImageProxy): void;
				}
				export class OnImageSavedCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.OnImageSavedCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageCapture$OnImageSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
						onError(param0: androidx.camera.core.ImageCaptureException): void;
					});
					public constructor();
					public onError(param0: androidx.camera.core.ImageCaptureException): void;
					public onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
				}
				export class OutputFileOptions extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.OutputFileOptions>;
					public getMetadata(): androidx.camera.core.ImageCapture.Metadata;
					public getContentResolver(): globalAndroid.content.ContentResolver;
					public getSaveCollection(): globalAndroid.net.Uri;
					public getOutputStream(): java.io.OutputStream;
					public getFile(): java.io.File;
					public getContentValues(): globalAndroid.content.ContentValues;
				}
				export namespace OutputFileOptions {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.ImageCapture.OutputFileOptions.Builder>;
						public constructor(param0: java.io.OutputStream);
						public constructor(param0: java.io.File);
						public setMetadata(param0: androidx.camera.core.ImageCapture.Metadata): androidx.camera.core.ImageCapture.OutputFileOptions.Builder;
						public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: globalAndroid.content.ContentValues);
						public build(): androidx.camera.core.ImageCapture.OutputFileOptions;
					}
				}
				export class OutputFileResults extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageCapture.OutputFileResults>;
					public getSavedUri(): globalAndroid.net.Uri;
					public constructor(param0: globalAndroid.net.Uri);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageCaptureException extends java.lang.Exception {
				public static class: java.lang.Class<androidx.camera.core.ImageCaptureException>;
				public getImageCaptureError(): number;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageInfo>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getTagBundle(): androidx.camera.core.impl.TagBundle;
					getTimestamp(): number;
					getRotationDegrees(): number;
					getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
					populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
				});
				public constructor();
				public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
				public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
				public getTagBundle(): androidx.camera.core.impl.TagBundle;
				public getRotationDegrees(): number;
				public getTimestamp(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageProcessingUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageProcessingUtil>;
				public static rotateYUV(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.impl.ImageReaderProxy, param2: globalAndroid.media.ImageWriter, param3: java.nio.ByteBuffer, param4: java.nio.ByteBuffer, param5: java.nio.ByteBuffer, param6: number): androidx.camera.core.ImageProxy;
				public static applyPixelShiftForYUV(param0: androidx.camera.core.ImageProxy): boolean;
				public static convertJpegBytesToImage(param0: androidx.camera.core.impl.ImageReaderProxy, param1: androidNative.Array<number>): androidx.camera.core.ImageProxy;
				public static convertYUVToRGB(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.impl.ImageReaderProxy, param2: java.nio.ByteBuffer, param3: number, param4: boolean): androidx.camera.core.ImageProxy;
			}
			export namespace ImageProcessingUtil {
				export class Result {
					public static class: java.lang.Class<androidx.camera.core.ImageProcessingUtil.Result>;
					public static UNKNOWN: androidx.camera.core.ImageProcessingUtil.Result;
					public static SUCCESS: androidx.camera.core.ImageProcessingUtil.Result;
					public static ERROR_CONVERSION: androidx.camera.core.ImageProcessingUtil.Result;
					public static values(): androidNative.Array<androidx.camera.core.ImageProcessingUtil.Result>;
					public static valueOf(param0: string): androidx.camera.core.ImageProcessingUtil.Result;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageProcessor extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageProcessor>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ImageProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					process(param0: androidx.camera.core.ImageProcessor.Request): androidx.camera.core.ImageProcessor.Response;
				});
				public constructor();
				public process(param0: androidx.camera.core.ImageProcessor.Request): androidx.camera.core.ImageProcessor.Response;
			}
			export namespace ImageProcessor {
				export class Request extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageProcessor.Request>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageProcessor$Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInputImages(): java.util.List<androidx.camera.core.ImageProxy>;
						getOutputFormat(): number;
					});
					public constructor();
					public getInputImages(): java.util.List<androidx.camera.core.ImageProxy>;
					public getOutputFormat(): number;
				}
				export class Response extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageProcessor.Response>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageProcessor$Response interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getOutputImage(): androidx.camera.core.ImageProxy;
					});
					public constructor();
					public getOutputImage(): androidx.camera.core.ImageProxy;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageProxy extends java.lang.Object implements java.lang.AutoCloseable {
				public static class: java.lang.Class<androidx.camera.core.ImageProxy>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ImageProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					close(): void;
					getCropRect(): globalAndroid.graphics.Rect;
					setCropRect(param0: globalAndroid.graphics.Rect): void;
					getFormat(): number;
					getHeight(): number;
					getWidth(): number;
					getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
					getImageInfo(): androidx.camera.core.ImageInfo;
					getImage(): globalAndroid.media.Image;
					close(): void;
				});
				public constructor();
				public getImageInfo(): androidx.camera.core.ImageInfo;
				public close(): void;
				public getHeight(): number;
				public getWidth(): number;
				public getCropRect(): globalAndroid.graphics.Rect;
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
				public getImage(): globalAndroid.media.Image;
				public getFormat(): number;
			}
			export namespace ImageProxy {
				export class PlaneProxy extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageProxy.PlaneProxy>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageProxy$PlaneProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getRowStride(): number;
						getPixelStride(): number;
						getBuffer(): java.nio.ByteBuffer;
					});
					public constructor();
					public getRowStride(): number;
					public getBuffer(): java.nio.ByteBuffer;
					public getPixelStride(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageProxyDownsampler extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageProxyDownsampler>;
			}
			export namespace ImageProxyDownsampler {
				export class DownsamplingMethod {
					public static class: java.lang.Class<androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod>;
					public static NEAREST_NEIGHBOR: androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod;
					public static AVERAGING: androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod;
					public static values(): androidNative.Array<androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod>;
					public static valueOf(param0: string): androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export class ForwardingImageProxyImpl extends androidx.camera.core.ForwardingImageProxy {
					public static class: java.lang.Class<androidx.camera.core.ImageProxyDownsampler.ForwardingImageProxyImpl>;
					public getFormat(): number;
					public getCropRect(): globalAndroid.graphics.Rect;
					public getHeight(): number;
					public getImageInfo(): androidx.camera.core.ImageInfo;
					public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
					public close(): void;
					public getWidth(): number;
					public getImage(): globalAndroid.media.Image;
					public setCropRect(param0: globalAndroid.graphics.Rect): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageReaderFormatRecommender extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageReaderFormatRecommender>;
			}
			export namespace ImageReaderFormatRecommender {
				export abstract class FormatCombo extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageReaderFormatRecommender.FormatCombo>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageReaderProxyProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageReaderProxyProvider>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ImageReaderProxyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					newInstance(param0: number, param1: number, param2: number, param3: number, param4: number): androidx.camera.core.impl.ImageReaderProxy;
				});
				public constructor();
				public newInstance(param0: number, param1: number, param2: number, param3: number, param4: number): androidx.camera.core.impl.ImageReaderProxy;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageReaderProxys extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ImageReaderProxys>;
				public static createIsolatedReader(param0: number, param1: number, param2: number, param3: number): androidx.camera.core.impl.ImageReaderProxy;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ImageSaver extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<androidx.camera.core.ImageSaver>;
				public run(): void;
			}
			export namespace ImageSaver {
				export class OnImageSavedCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ImageSaver.OnImageSavedCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ImageSaver$OnImageSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
						onError(param0: androidx.camera.core.ImageSaver.SaveError, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onError(param0: androidx.camera.core.ImageSaver.SaveError, param1: string, param2: java.lang.Throwable): void;
					public onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
				}
				export class SaveError {
					public static class: java.lang.Class<androidx.camera.core.ImageSaver.SaveError>;
					public static FILE_IO_FAILED: androidx.camera.core.ImageSaver.SaveError;
					public static ENCODE_FAILED: androidx.camera.core.ImageSaver.SaveError;
					public static CROP_FAILED: androidx.camera.core.ImageSaver.SaveError;
					public static UNKNOWN: androidx.camera.core.ImageSaver.SaveError;
					public static valueOf(param0: string): androidx.camera.core.ImageSaver.SaveError;
					public static values(): androidNative.Array<androidx.camera.core.ImageSaver.SaveError>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class ImmutableImageInfo extends java.lang.Object implements androidx.camera.core.ImageInfo {
				public static class: java.lang.Class<androidx.camera.core.ImmutableImageInfo>;
				public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
				public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
				public getTagBundle(): androidx.camera.core.impl.TagBundle;
				public static create(param0: androidx.camera.core.impl.TagBundle, param1: number, param2: number, param3: globalAndroid.graphics.Matrix): androidx.camera.core.ImageInfo;
				public getRotationDegrees(): number;
				public getTimestamp(): number;
				public constructor();
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class InitializationException extends java.lang.Exception {
				public static class: java.lang.Class<androidx.camera.core.InitializationException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class Logger extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.Logger>;
				public static isDebugEnabled(param0: string): boolean;
				public static isWarnEnabled(param0: string): boolean;
				public static isErrorEnabled(param0: string): boolean;
				public static isInfoEnabled(param0: string): boolean;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class MetadataImageReader extends java.lang.Object implements androidx.camera.core.impl.ImageReaderProxy, androidx.camera.core.ForwardingImageProxy.OnImageCloseListener {
				public static class: java.lang.Class<androidx.camera.core.MetadataImageReader>;
				public close(): void;
				public getHeight(): number;
				public getCameraCaptureCallback(): androidx.camera.core.impl.CameraCaptureCallback;
				public getImageFormat(): number;
				public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
				public clearOnImageAvailableListener(): void;
				public acquireLatestImage(): androidx.camera.core.ImageProxy;
				public getWidth(): number;
				public getSurface(): globalAndroid.view.Surface;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public getMaxImages(): number;
				public acquireNextImage(): androidx.camera.core.ImageProxy;
				public onImageClose(param0: androidx.camera.core.ImageProxy): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class MeteringPoint extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.MeteringPoint>;
				public getX(): number;
				public getSize(): number;
				public getY(): number;
				public getSurfaceAspectRatio(): globalAndroid.util.Rational;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class MeteringPointFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.MeteringPointFactory>;
				public static getDefaultPointSize(): number;
				public createPoint(param0: number, param1: number): androidx.camera.core.MeteringPoint;
				public createPoint(param0: number, param1: number, param2: number): androidx.camera.core.MeteringPoint;
				public constructor(param0: globalAndroid.util.Rational);
				public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
				public constructor();
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ModifiableImageReaderProxy extends androidx.camera.core.AndroidImageReaderProxy {
				public static class: java.lang.Class<androidx.camera.core.ModifiableImageReaderProxy>;
				public acquireLatestImage(): androidx.camera.core.ImageProxy;
				public close(): void;
				public getHeight(): number;
				public getWidth(): number;
				public getSurface(): globalAndroid.view.Surface;
				public getImageFormat(): number;
				public getMaxImages(): number;
				public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
				public clearOnImageAvailableListener(): void;
				public acquireNextImage(): androidx.camera.core.ImageProxy;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class Preview extends androidx.camera.core.UseCase {
				public static class: java.lang.Class<androidx.camera.core.Preview>;
				public static DEFAULT_CONFIG: androidx.camera.core.Preview.Defaults;
				public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builderany): androidx.camera.core.impl.UseCaseConfig<any>;
				public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
				public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builderany;
				public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
				public toString(): string;
				public getProcessor(): androidx.camera.core.processing.SurfaceProcessorInternal;
				public setSurfaceProvider(param0: androidx.camera.core.Preview.SurfaceProvider): void;
				public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
				public setTargetRotation(param0: number): void;
				public getTargetRotation(): number;
				public setProcessor(param0: androidx.camera.core.processing.SurfaceProcessorInternal): void;
				public onSuggestedResolutionUpdated(param0: any): any;
				public setSurfaceProvider(param0: java.util.concurrent.Executor, param1: androidx.camera.core.Preview.SurfaceProvider): void;
				public onDetached(): void;
			}
			export namespace Preview {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.Preview.Builder>;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.Preview.Builder;
					public setZslDisabled(param0: boolean): any;
					public getUseCaseConfig(): androidx.camera.core.impl.PreviewConfig;
					public setIsRgba8888SurfaceRequired(param0: boolean): androidx.camera.core.Preview.Builder;
					public static fromConfig(param0: androidx.camera.core.impl.PreviewConfig): androidx.camera.core.Preview.Builder;
					public setDefaultResolution(param0: any): any;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): androidx.camera.core.Preview.Builder;
					public build(): any;
					public setTargetAspectRatio(param0: number): androidx.camera.core.Preview.Builder;
					public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.Preview.Builder;
					public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.Preview.Builder;
					public getUseCaseConfig(): any;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.Preview.Builder;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
					public constructor();
					public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.Preview.Builder;
					public setImageInfoProcessor(param0: androidx.camera.core.impl.ImageInfoProcessor): androidx.camera.core.Preview.Builder;
					public setTargetClass(param0: java.lang.Class<androidx.camera.core.Preview>): androidx.camera.core.Preview.Builder;
					public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
					public setZslDisabled(param0: boolean): androidx.camera.core.Preview.Builder;
					public setCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.Preview.Builder;
					public setMaxResolution(param0: any): any;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): any;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
					public setTargetClass(param0: java.lang.Class<any>): any;
					public setTargetResolution(param0: any): androidx.camera.core.Preview.Builder;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
					public setTargetRotation(param0: number): any;
					public setTargetName(param0: string): androidx.camera.core.Preview.Builder;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.Preview.Builder;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
					public setSurfaceOccupancyPriority(param0: number): any;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.Preview.Builder;
					public setTargetAspectRatio(param0: number): any;
					public setDefaultResolution(param0: any): androidx.camera.core.Preview.Builder;
					public setTargetName(param0: string): any;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
					public build(): androidx.camera.core.Preview;
					public setMaxResolution(param0: any): androidx.camera.core.Preview.Builder;
					public setTargetRotation(param0: number): androidx.camera.core.Preview.Builder;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.Preview.Builder;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
					public setTargetResolution(param0: any): any;
				}
				export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.PreviewConfig> {
					public static class: java.lang.Class<androidx.camera.core.Preview.Defaults>;
					public constructor();
					public getConfig(): androidx.camera.core.impl.PreviewConfig;
					public getConfig(): any;
				}
				export class SurfaceProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.Preview.SurfaceProvider>;
					/**
					 * Constructs a new instance of the androidx.camera.core.Preview$SurfaceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void;
					});
					public constructor();
					public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ProcessingImageReader extends java.lang.Object implements androidx.camera.core.impl.ImageReaderProxy {
				public static class: java.lang.Class<androidx.camera.core.ProcessingImageReader>;
				public close(): void;
				public getHeight(): number;
				public getTagBundleKey(): string;
				public getImageFormat(): number;
				public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
				public clearOnImageAvailableListener(): void;
				public acquireLatestImage(): androidx.camera.core.ImageProxy;
				public getWidth(): number;
				public getSurface(): globalAndroid.view.Surface;
				public setCaptureBundle(param0: androidx.camera.core.impl.CaptureBundle): void;
				public getMaxImages(): number;
				public setOnProcessingErrorCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ProcessingImageReader.OnProcessingErrorCallback): void;
				public acquireNextImage(): androidx.camera.core.ImageProxy;
			}
			export namespace ProcessingImageReader {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ProcessingImageReader.Builder>;
					public mInputImageReader: androidx.camera.core.impl.ImageReaderProxy;
					public mCaptureBundle: androidx.camera.core.impl.CaptureBundle;
					public mCaptureProcessor: androidx.camera.core.impl.CaptureProcessor;
					public mOutputFormat: number;
					public mPostProcessExecutor: java.util.concurrent.Executor;
				}
				export class OnProcessingErrorCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ProcessingImageReader.OnProcessingErrorCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ProcessingImageReader$OnProcessingErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						notifyProcessingError(param0: string, param1: java.lang.Throwable): void;
					});
					public constructor();
					public notifyProcessingError(param0: string, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ProcessingSurface extends androidx.camera.core.impl.DeferrableSurface {
				public static class: java.lang.Class<androidx.camera.core.ProcessingSurface>;
				public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class R extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.R>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class ResolutionInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ResolutionInfo>;
				public getCropRect(): globalAndroid.graphics.Rect;
				public getResolution(): any;
				public getRotationDegrees(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SafeCloseImageReaderProxy extends java.lang.Object implements androidx.camera.core.impl.ImageReaderProxy {
				public static class: java.lang.Class<androidx.camera.core.SafeCloseImageReaderProxy>;
				public close(): void;
				public getHeight(): number;
				public getCapacity(): number;
				public getImageFormat(): number;
				public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
				public clearOnImageAvailableListener(): void;
				public safeClose(): void;
				public constructor(param0: androidx.camera.core.impl.ImageReaderProxy);
				public acquireLatestImage(): androidx.camera.core.ImageProxy;
				public getWidth(): number;
				public getSurface(): globalAndroid.view.Surface;
				public setOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
				public getMaxImages(): number;
				public acquireNextImage(): androidx.camera.core.ImageProxy;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SettableImageProxy extends androidx.camera.core.ForwardingImageProxy {
				public static class: java.lang.Class<androidx.camera.core.SettableImageProxy>;
				public getImageInfo(): androidx.camera.core.ImageInfo;
				public constructor(param0: androidx.camera.core.ImageProxy);
				public getWidth(): number;
				public getHeight(): number;
				public close(): void;
				public getCropRect(): globalAndroid.graphics.Rect;
				public constructor(param0: androidx.camera.core.ImageProxy, param1: any, param2: androidx.camera.core.ImageInfo);
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
				public getImage(): globalAndroid.media.Image;
				public getFormat(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SettableImageProxyBundle extends java.lang.Object implements androidx.camera.core.impl.ImageProxyBundle {
				public static class: java.lang.Class<androidx.camera.core.SettableImageProxyBundle>;
				public getCaptureIds(): java.util.List<java.lang.Integer>;
				public getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SingleCloseImageProxy extends androidx.camera.core.ForwardingImageProxy {
				public static class: java.lang.Class<androidx.camera.core.SingleCloseImageProxy>;
				public getImageInfo(): androidx.camera.core.ImageInfo;
				public close(): void;
				public getHeight(): number;
				public getWidth(): number;
				public getCropRect(): globalAndroid.graphics.Rect;
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
				public getImage(): globalAndroid.media.Image;
				public getFormat(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SurfaceOrientedMeteringPointFactory extends androidx.camera.core.MeteringPointFactory {
				public static class: java.lang.Class<androidx.camera.core.SurfaceOrientedMeteringPointFactory>;
				public constructor(param0: number, param1: number);
				public constructor(param0: globalAndroid.util.Rational);
				public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
				public constructor(param0: number, param1: number, param2: androidx.camera.core.UseCase);
				public constructor();
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SurfaceOutput extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.SurfaceOutput>;
				/**
				 * Constructs a new instance of the androidx.camera.core.SurfaceOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSurface(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.core.SurfaceOutput.Event>): globalAndroid.view.Surface;
					getTargets(): number;
					getSize(): any;
					getFormat(): number;
					getRotationDegrees(): number;
					close(): void;
					updateTransformMatrix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				});
				public constructor();
				public close(): void;
				public getTargets(): number;
				public getSurface(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.core.SurfaceOutput.Event>): globalAndroid.view.Surface;
				public getRotationDegrees(): number;
				public updateTransformMatrix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				public getSize(): any;
				public getFormat(): number;
			}
			export namespace SurfaceOutput {
				export abstract class Event extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.SurfaceOutput.Event>;
					public static EVENT_REQUEST_CLOSE: number = 0;
					public getSurfaceOutput(): androidx.camera.core.SurfaceOutput;
					public constructor();
					public getEventCode(): number;
				}
				export namespace Event {
					export class EventCode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.SurfaceOutput.Event.EventCode>;
						/**
						 * Constructs a new instance of the androidx.camera.core.SurfaceOutput$Event$EventCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export class GlTransformOptions {
					public static class: java.lang.Class<androidx.camera.core.SurfaceOutput.GlTransformOptions>;
					public static USE_SURFACE_TEXTURE_TRANSFORM: androidx.camera.core.SurfaceOutput.GlTransformOptions;
					public static APPLY_CROP_ROTATE_AND_MIRRORING: androidx.camera.core.SurfaceOutput.GlTransformOptions;
					public static valueOf(param0: string): androidx.camera.core.SurfaceOutput.GlTransformOptions;
					public static values(): androidNative.Array<androidx.camera.core.SurfaceOutput.GlTransformOptions>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SurfaceProcessor extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.SurfaceProcessor>;
				/**
				 * Constructs a new instance of the androidx.camera.core.SurfaceProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
					onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
				});
				public constructor();
				public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
				public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class SurfaceRequest extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.SurfaceRequest>;
				public updateTransformationInfo(param0: androidx.camera.core.SurfaceRequest.TransformationInfo): void;
				public clearTransformationInfoListener(): void;
				public constructor(param0: any, param1: androidx.camera.core.impl.CameraInternal, param2: boolean);
				public getCamera(): androidx.camera.core.impl.CameraInternal;
				public addRequestCancellationListener(param0: java.util.concurrent.Executor, param1: java.lang.Runnable): void;
				public getDeferrableSurface(): androidx.camera.core.impl.DeferrableSurface;
				public isRGBA8888Required(): boolean;
				public getResolution(): any;
				public provideSurface(param0: globalAndroid.view.Surface, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.camera.core.SurfaceRequest.Result>): void;
				public willNotProvideSurface(): boolean;
				public setTransformationInfoListener(param0: java.util.concurrent.Executor, param1: androidx.camera.core.SurfaceRequest.TransformationInfoListener): void;
				public constructor(param0: any, param1: androidx.camera.core.impl.CameraInternal, param2: boolean, param3: globalAndroid.util.Range<java.lang.Integer>);
				public getExpectedFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
			}
			export namespace SurfaceRequest {
				export class RequestCancelledException extends java.lang.RuntimeException {
					public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.RequestCancelledException>;
				}
				export abstract class Result extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.Result>;
					public static RESULT_SURFACE_USED_SUCCESSFULLY: number = 0;
					public static RESULT_REQUEST_CANCELLED: number = 1;
					public static RESULT_INVALID_SURFACE: number = 2;
					public static RESULT_SURFACE_ALREADY_PROVIDED: number = 3;
					public static RESULT_WILL_NOT_PROVIDE_SURFACE: number = 4;
					public getResultCode(): number;
					public getSurface(): globalAndroid.view.Surface;
				}
				export namespace Result {
					export class ResultCode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.Result.ResultCode>;
						/**
						 * Constructs a new instance of the androidx.camera.core.SurfaceRequest$Result$ResultCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export abstract class TransformationInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.TransformationInfo>;
					public getCropRect(): globalAndroid.graphics.Rect;
					public getRotationDegrees(): number;
					public getTargetRotation(): number;
				}
				export class TransformationInfoListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.TransformationInfoListener>;
					/**
					 * Constructs a new instance of the androidx.camera.core.SurfaceRequest$TransformationInfoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTransformationInfoUpdate(param0: androidx.camera.core.SurfaceRequest.TransformationInfo): void;
					});
					public constructor();
					public onTransformationInfoUpdate(param0: androidx.camera.core.SurfaceRequest.TransformationInfo): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class TorchState extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.TorchState>;
				public static OFF: number = 0;
			}
			export namespace TorchState {
				export class State extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.TorchState.State>;
					/**
					 * Constructs a new instance of the androidx.camera.core.TorchState$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export abstract class UseCase extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.UseCase>;
				public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
				public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builderany): androidx.camera.core.impl.UseCaseConfig<any>;
				public onStateAttached(): void;
				public onStateDetached(): void;
				public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
				public getCamera(): androidx.camera.core.impl.CameraInternal;
				public mergeConfigs(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig<any>, param2: androidx.camera.core.impl.UseCaseConfig<any>): androidx.camera.core.impl.UseCaseConfig<any>;
				public updateSuggestedResolution(param0: any): void;
				public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builderany;
				public getCurrentConfig(): androidx.camera.core.impl.UseCaseConfig<any>;
				public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
				public onAttached(): void;
				public getCameraId(): string;
				public isCurrentCamera(param0: string): boolean;
				public updateSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void;
				public notifyState(): void;
				public getViewPortCropRect(): globalAndroid.graphics.Rect;
				public notifyInactive(): void;
				public notifyActive(): void;
				public getAttachedSurfaceResolution(): any;
				public constructor(param0: androidx.camera.core.impl.UseCaseConfig<any>);
				public notifyUpdated(): void;
				public getCameraControl(): androidx.camera.core.impl.CameraControlInternal;
				public onAttach(param0: androidx.camera.core.impl.CameraInternal, param1: androidx.camera.core.impl.UseCaseConfig<any>, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
				public getImageFormat(): number;
				public getName(): string;
				public onDetach(param0: androidx.camera.core.impl.CameraInternal): void;
				public getTargetRotationInternal(): number;
				public onCameraControlReady(): void;
				public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
				public getResolutionInfoInternal(): androidx.camera.core.ResolutionInfo;
				public setSensorToBufferTransformMatrix(param0: globalAndroid.graphics.Matrix): void;
				public getRelativeRotation(param0: androidx.camera.core.impl.CameraInternal): number;
				public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
				public setTargetRotationInternal(param0: number): boolean;
				public getAppTargetRotation(): number;
				public onSuggestedResolutionUpdated(param0: any): any;
				public notifyReset(): void;
				public onDetached(): void;
			}
			export namespace UseCase {
				export class EventCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.UseCase.EventCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.UseCase$EventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAttach(param0: androidx.camera.core.CameraInfo): void;
						onDetach(): void;
					});
					public constructor();
					public onAttach(param0: androidx.camera.core.CameraInfo): void;
					public onDetach(): void;
				}
				export class State {
					public static class: java.lang.Class<androidx.camera.core.UseCase.State>;
					public static ACTIVE: androidx.camera.core.UseCase.State;
					public static INACTIVE: androidx.camera.core.UseCase.State;
					public static values(): androidNative.Array<androidx.camera.core.UseCase.State>;
					public static valueOf(param0: string): androidx.camera.core.UseCase.State;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export class StateChangeCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.UseCase.StateChangeCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.UseCase$StateChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUseCaseActive(param0: androidx.camera.core.UseCase): void;
						onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
						onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
						onUseCaseReset(param0: androidx.camera.core.UseCase): void;
					});
					public constructor();
					public onUseCaseReset(param0: androidx.camera.core.UseCase): void;
					public onUseCaseActive(param0: androidx.camera.core.UseCase): void;
					public onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
					public onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class UseCaseGroup extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.UseCaseGroup>;
				public getViewPort(): androidx.camera.core.ViewPort;
				public getUseCases(): java.util.List<androidx.camera.core.UseCase>;
				public getEffects(): java.util.List<androidx.camera.core.CameraEffect>;
			}
			export namespace UseCaseGroup {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.UseCaseGroup.Builder>;
					public addEffect(param0: androidx.camera.core.CameraEffect): androidx.camera.core.UseCaseGroup.Builder;
					public constructor();
					public addUseCase(param0: androidx.camera.core.UseCase): androidx.camera.core.UseCaseGroup.Builder;
					public build(): androidx.camera.core.UseCaseGroup;
					public setViewPort(param0: androidx.camera.core.ViewPort): androidx.camera.core.UseCaseGroup.Builder;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class VideoCapture extends androidx.camera.core.UseCase {
				public static class: java.lang.Class<androidx.camera.core.VideoCapture>;
				public static ERROR_UNKNOWN: number = 0;
				public static ERROR_ENCODER: number = 1;
				public static ERROR_MUXER: number = 2;
				public static ERROR_RECORDING_IN_PROGRESS: number = 3;
				public static ERROR_FILE_IO: number = 4;
				public static ERROR_INVALID_CAMERA: number = 5;
				public static ERROR_RECORDING_TOO_SHORT: number = 6;
				public static DEFAULT_CONFIG: androidx.camera.core.VideoCapture.Defaults;
				public mIsFirstVideoKeyFrameWrite: java.util.concurrent.atomic.AtomicBoolean;
				public mIsFirstAudioSampleWrite: java.util.concurrent.atomic.AtomicBoolean;
				public startRecording(param0: androidx.camera.core.VideoCapture.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.core.VideoCapture.OnVideoSavedCallback): void;
				public onAttached(): void;
				public onStateDetached(): void;
				public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
				public setTargetRotation(param0: number): void;
				public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builderany;
				public onSuggestedResolutionUpdated(param0: any): any;
				public stopRecording(): void;
				public onDetached(): void;
			}
			export namespace VideoCapture {
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.Api23Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.Api26Impl>;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.Builder>;
					public setZslDisabled(param0: boolean): any;
					public setTargetClass(param0: java.lang.Class<androidx.camera.core.VideoCapture>): androidx.camera.core.VideoCapture.Builder;
					public setAudioMinBufferSize(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setDefaultResolution(param0: any): androidx.camera.core.VideoCapture.Builder;
					public setDefaultResolution(param0: any): any;
					public build(): any;
					public build(): androidx.camera.core.VideoCapture;
					public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
					public getUseCaseConfig(): any;
					public getUseCaseConfig(): androidx.camera.core.impl.VideoCaptureConfig;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): androidx.camera.core.VideoCapture.Builder;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
					public setMaxResolution(param0: any): androidx.camera.core.VideoCapture.Builder;
					public static fromConfig(param0: androidx.camera.core.impl.VideoCaptureConfig): androidx.camera.core.VideoCapture.Builder;
					public constructor();
					public setTargetRotation(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setAudioSampleRate(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setAudioChannelCount(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
					public setVideoFrameRate(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setBitRate(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.VideoCapture.Builder;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.VideoCapture.Builder;
					public setMaxResolution(param0: any): any;
					public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): any;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.VideoCapture.Builder;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.VideoCapture.Builder;
					public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
					public setTargetClass(param0: java.lang.Class<any>): any;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
					public setTargetAspectRatio(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setZslDisabled(param0: boolean): androidx.camera.core.VideoCapture.Builder;
					public setTargetResolution(param0: any): androidx.camera.core.VideoCapture.Builder;
					public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.VideoCapture.Builder;
					public setTargetRotation(param0: number): any;
					public setTargetName(param0: string): androidx.camera.core.VideoCapture.Builder;
					public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.VideoCapture.Builder;
					public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
					public setSurfaceOccupancyPriority(param0: number): any;
					public setTargetAspectRatio(param0: number): any;
					public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setTargetName(param0: string): any;
					public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
					public setIFrameInterval(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setAudioBitRate(param0: number): androidx.camera.core.VideoCapture.Builder;
					public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.VideoCapture.Builder;
					public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
					public setTargetResolution(param0: any): any;
				}
				export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.VideoCaptureConfig> {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.Defaults>;
					public constructor();
					public getConfig(): any;
					public getConfig(): androidx.camera.core.impl.VideoCaptureConfig;
				}
				export class Metadata extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.Metadata>;
					public location: globalAndroid.location.Location;
					public constructor();
				}
				export class OnVideoSavedCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.OnVideoSavedCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.VideoCapture$OnVideoSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoSaved(param0: androidx.camera.core.VideoCapture.OutputFileResults): void;
						onError(param0: number, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onVideoSaved(param0: androidx.camera.core.VideoCapture.OutputFileResults): void;
					public onError(param0: number, param1: string, param2: java.lang.Throwable): void;
				}
				export class OutputFileOptions extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.OutputFileOptions>;
				}
				export namespace OutputFileOptions {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.VideoCapture.OutputFileOptions.Builder>;
						public build(): androidx.camera.core.VideoCapture.OutputFileOptions;
						public constructor(param0: java.io.File);
						public setMetadata(param0: androidx.camera.core.VideoCapture.Metadata): androidx.camera.core.VideoCapture.OutputFileOptions.Builder;
						public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: globalAndroid.content.ContentValues);
						public constructor(param0: java.io.FileDescriptor);
					}
				}
				export class OutputFileResults extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.OutputFileResults>;
					public getSavedUri(): globalAndroid.net.Uri;
				}
				export class VideoCaptureError extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.VideoCaptureError>;
					/**
					 * Constructs a new instance of the androidx.camera.core.VideoCapture$VideoCaptureError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class VideoEncoderInitStatus {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.VideoEncoderInitStatus>;
					public static VIDEO_ENCODER_INIT_STATUS_UNINITIALIZED: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
					public static VIDEO_ENCODER_INIT_STATUS_INITIALIZED_FAILED: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
					public static VIDEO_ENCODER_INIT_STATUS_INSUFFICIENT_RESOURCE: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
					public static VIDEO_ENCODER_INIT_STATUS_RESOURCE_RECLAIMED: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
					public static values(): androidNative.Array<androidx.camera.core.VideoCapture.VideoEncoderInitStatus>;
					public static valueOf(param0: string): androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export class VideoSavedListenerWrapper extends java.lang.Object implements androidx.camera.core.VideoCapture.OnVideoSavedCallback {
					public static class: java.lang.Class<androidx.camera.core.VideoCapture.VideoSavedListenerWrapper>;
					public onVideoSaved(param0: androidx.camera.core.VideoCapture.OutputFileResults): void;
					public onError(param0: number, param1: string, param2: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ViewPort extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ViewPort>;
				public static FILL_START: number = 0;
				public static FILL_CENTER: number = 1;
				public static FILL_END: number = 2;
				public static FIT: number = 3;
				public getAspectRatio(): globalAndroid.util.Rational;
				public getLayoutDirection(): number;
				public getScaleType(): number;
				public getRotation(): number;
			}
			export namespace ViewPort {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.ViewPort.Builder>;
					public constructor(param0: globalAndroid.util.Rational, param1: number);
					public setLayoutDirection(param0: number): androidx.camera.core.ViewPort.Builder;
					public setScaleType(param0: number): androidx.camera.core.ViewPort.Builder;
					public build(): androidx.camera.core.ViewPort;
				}
				export class LayoutDirection extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ViewPort.LayoutDirection>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ViewPort$LayoutDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ScaleType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.core.ViewPort.ScaleType>;
					/**
					 * Constructs a new instance of the androidx.camera.core.ViewPort$ScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export class ZoomState extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.core.ZoomState>;
				/**
				 * Constructs a new instance of the androidx.camera.core.ZoomState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getZoomRatio(): number;
					getMaxZoomRatio(): number;
					getMinZoomRatio(): number;
					getLinearZoom(): number;
				});
				public constructor();
				public getZoomRatio(): number;
				public getMaxZoomRatio(): number;
				public getMinZoomRatio(): number;
				public getLinearZoom(): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_Bitmap2JpegBytes_In extends androidx.camera.core.imagecapture.Bitmap2JpegBytes.In {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_Bitmap2JpegBytes_In>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_CaptureNode_In extends androidx.camera.core.imagecapture.CaptureNode.In {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_CaptureNode_In>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_CaptureNode_Out extends androidx.camera.core.imagecapture.CaptureNode.Out {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_CaptureNode_Out>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_Image2JpegBytes_In extends androidx.camera.core.imagecapture.Image2JpegBytes.In {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_Image2JpegBytes_In>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_JpegBytes2Disk_In extends androidx.camera.core.imagecapture.JpegBytes2Disk.In {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_JpegBytes2Disk_In>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_ProcessingNode_In extends androidx.camera.core.imagecapture.ProcessingNode.In {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_ProcessingNode_In>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_ProcessingNode_InputPacket extends androidx.camera.core.imagecapture.ProcessingNode.InputPacket {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_ProcessingNode_InputPacket>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class AutoValue_TakePictureRequest extends androidx.camera.core.imagecapture.TakePictureRequest {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_TakePictureRequest>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class Bitmap2JpegBytes extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.Bitmap2JpegBytes.In,androidx.camera.core.processing.Packet<androidNative.Array<number>>> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.Bitmap2JpegBytes>;
					public apply(param0: any): any;
					public apply(param0: androidx.camera.core.imagecapture.Bitmap2JpegBytes.In): androidx.camera.core.processing.Packet<androidNative.Array<number>>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class BundlingNode extends androidx.camera.core.processing.Node<androidx.camera.core.imagecapture.CaptureNode.Out,androidx.camera.core.imagecapture.ProcessingNode.In> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.BundlingNode>;
					/**
					 * Constructs a new instance of the androidx.camera.core.imagecapture.BundlingNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transform(param0: any): any;
						release(): void;
					});
					public constructor();
					public transform(param0: any): any;
					public release(): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class CameraRequest extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.CameraRequest>;
					public constructor(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: androidx.camera.core.imagecapture.TakePictureCallback);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class CaptureNode extends androidx.camera.core.processing.Node<androidx.camera.core.imagecapture.CaptureNode.In,androidx.camera.core.imagecapture.CaptureNode.Out> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.CaptureNode>;
					public getCapacity(): number;
					public transform(param0: any): any;
					public release(): void;
					public transform(param0: androidx.camera.core.imagecapture.CaptureNode.In): androidx.camera.core.imagecapture.CaptureNode.Out;
					public setOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
				}
				export namespace CaptureNode {
					export abstract class Out extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.imagecapture.CaptureNode.Out>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class Image2JpegBytes extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.Image2JpegBytes.In,androidx.camera.core.processing.Packet<androidNative.Array<number>>> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.Image2JpegBytes>;
					public apply(param0: androidx.camera.core.imagecapture.Image2JpegBytes.In): androidx.camera.core.processing.Packet<androidNative.Array<number>>;
					public apply(param0: any): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class ImageCaptureControl extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.ImageCaptureControl>;
					/**
					 * Constructs a new instance of the androidx.camera.core.imagecapture.ImageCaptureControl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						lockFlashMode(): void;
						unlockFlashMode(): void;
						submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					});
					public constructor();
					public lockFlashMode(): void;
					public unlockFlashMode(): void;
					public submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class ImagePipeline extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.ImagePipeline>;
					public getCapacity(): number;
					public createSessionConfigBuilder(): androidx.camera.core.impl.SessionConfig.Builder;
					public constructor(param0: androidx.camera.core.impl.ImageCaptureConfig, param1: any);
					public close(): void;
					public setOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class JpegBytes2CroppedBitmap extends androidx.camera.core.processing.Operation<androidx.camera.core.processing.Packet<androidNative.Array<number>>,androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2CroppedBitmap>;
					public apply(param0: androidx.camera.core.processing.Packet<androidNative.Array<number>>): androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>;
					public apply(param0: any): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class JpegBytes2Disk extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.JpegBytes2Disk.In,androidx.camera.core.ImageCapture.OutputFileResults> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2Disk>;
					public apply(param0: any): any;
					public apply(param0: androidx.camera.core.imagecapture.JpegBytes2Disk.In): androidx.camera.core.ImageCapture.OutputFileResults;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class JpegBytes2Image extends androidx.camera.core.processing.Operation<androidx.camera.core.processing.Packet<androidNative.Array<number>>,androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2Image>;
					public apply(param0: androidx.camera.core.processing.Packet<androidNative.Array<number>>): androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>;
					public constructor();
					public apply(param0: any): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class JpegImage2Result extends androidx.camera.core.processing.Operation<androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>,androidx.camera.core.ImageProxy> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegImage2Result>;
					public constructor();
					public apply(param0: any): any;
					public apply(param0: androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>): androidx.camera.core.ImageProxy;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class ProcessingInput2Packet extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.ProcessingNode.InputPacket,androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingInput2Packet>;
					public apply(param0: any): any;
					public apply(param0: androidx.camera.core.imagecapture.ProcessingNode.InputPacket): androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class ProcessingNode extends androidx.camera.core.processing.Node<androidx.camera.core.imagecapture.ProcessingNode.In,java.lang.Void> {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingNode>;
					public transform(param0: any): any;
					public release(): void;
					public transform(param0: androidx.camera.core.imagecapture.ProcessingNode.In): java.lang.Void;
				}
				export namespace ProcessingNode {
					export abstract class InputPacket extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingNode.InputPacket>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class ProcessingRequest extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingRequest>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class RequestWithCallback extends java.lang.Object implements androidx.camera.core.imagecapture.TakePictureCallback {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.RequestWithCallback>;
					public onFinalResult(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
					public onCaptureFailure(param0: androidx.camera.core.ImageCaptureException): void;
					public onImageCaptured(): void;
					public onFinalResult(param0: androidx.camera.core.ImageProxy): void;
					public onProcessFailure(param0: androidx.camera.core.ImageCaptureException): void;
					public isAborted(): boolean;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class RgbaImageProxy extends java.lang.Object implements androidx.camera.core.ImageProxy {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.RgbaImageProxy>;
					public getFormat(): number;
					public createBitmap(): globalAndroid.graphics.Bitmap;
					public getCropRect(): globalAndroid.graphics.Rect;
					public constructor(param0: androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>);
					public getHeight(): number;
					public getImageInfo(): androidx.camera.core.ImageInfo;
					public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
					public constructor(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Rect, param5: number, param6: globalAndroid.graphics.Matrix, param7: number);
					public close(): void;
					public getWidth(): number;
					public getImage(): globalAndroid.media.Image;
					public setCropRect(param0: globalAndroid.graphics.Rect): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class SingleBundlingNode extends java.lang.Object implements androidx.camera.core.imagecapture.BundlingNode {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.SingleBundlingNode>;
					public transform(param0: any): any;
					public transform(param0: androidx.camera.core.imagecapture.CaptureNode.Out): androidx.camera.core.imagecapture.ProcessingNode.In;
					public release(): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class TakePictureCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.TakePictureCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.core.imagecapture.TakePictureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageCaptured(): void;
						onFinalResult(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
						onFinalResult(param0: androidx.camera.core.ImageProxy): void;
						onCaptureFailure(param0: androidx.camera.core.ImageCaptureException): void;
						onProcessFailure(param0: androidx.camera.core.ImageCaptureException): void;
						isAborted(): boolean;
					});
					public constructor();
					public onFinalResult(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
					public onCaptureFailure(param0: androidx.camera.core.ImageCaptureException): void;
					public onImageCaptured(): void;
					public onFinalResult(param0: androidx.camera.core.ImageProxy): void;
					public onProcessFailure(param0: androidx.camera.core.ImageCaptureException): void;
					public isAborted(): boolean;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export class TakePictureManager extends java.lang.Object implements androidx.camera.core.ForwardingImageProxy.OnImageCloseListener {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.TakePictureManager>;
					public abortRequests(): void;
					public pause(): void;
					public resume(): void;
					public onImageClose(param0: androidx.camera.core.ImageProxy): void;
					public constructor(param0: androidx.camera.core.imagecapture.ImageCaptureControl, param1: androidx.camera.core.imagecapture.ImagePipeline);
					public offerRequest(param0: androidx.camera.core.imagecapture.TakePictureRequest): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace imagecapture {
				export abstract class TakePictureRequest extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.imagecapture.TakePictureRequest>;
					public constructor();
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class AttachedSurfaceInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.AttachedSurfaceInfo>;
					public static create(param0: androidx.camera.core.impl.SurfaceConfig, param1: number, param2: any, param3: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.core.impl.AttachedSurfaceInfo;
					public getTargetFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
					public getImageFormat(): number;
					public getSurfaceConfig(): androidx.camera.core.impl.SurfaceConfig;
					public getSize(): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_AttachedSurfaceInfo extends androidx.camera.core.impl.AttachedSurfaceInfo {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_AttachedSurfaceInfo>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getTargetFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
					public getImageFormat(): number;
					public getSurfaceConfig(): androidx.camera.core.impl.SurfaceConfig;
					public getSize(): any;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_CamcorderProfileProxy extends androidx.camera.core.impl.CamcorderProfileProxy {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_CamcorderProfileProxy>;
					public getVideoFrameWidth(): number;
					public getVideoCodec(): number;
					public getVideoFrameRate(): number;
					public equals(param0: any): boolean;
					public getDuration(): number;
					public getVideoFrameHeight(): number;
					public toString(): string;
					public getAudioBitRate(): number;
					public getVideoBitRate(): number;
					public getAudioSampleRate(): number;
					public getQuality(): number;
					public getAudioCodec(): number;
					public getFileFormat(): number;
					public getAudioChannels(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_CameraThreadConfig extends androidx.camera.core.impl.CameraThreadConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_CameraThreadConfig>;
					public getCameraExecutor(): java.util.concurrent.Executor;
					public equals(param0: any): boolean;
					public toString(): string;
					public getSchedulerHandler(): globalAndroid.os.Handler;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_Config_Option<T>  extends androidx.camera.core.impl.Config.Option<any> {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_Config_Option<any>>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getId(): string;
					public getValueClass(): java.lang.Class<any>;
					public getToken(): any;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_DeviceProperties extends androidx.camera.core.impl.DeviceProperties {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_DeviceProperties>;
					public equals(param0: any): boolean;
					public toString(): string;
					public sdkVersion(): number;
					public manufacturer(): string;
					public hashCode(): number;
					public model(): string;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_Identifier extends androidx.camera.core.impl.Identifier {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_Identifier>;
					public equals(param0: any): boolean;
					public getValue(): any;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_OutputSurface extends androidx.camera.core.impl.OutputSurface {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_OutputSurface>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getImageFormat(): number;
					public getSurface(): globalAndroid.view.Surface;
					public getSize(): any;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_SessionConfig_OutputConfig extends androidx.camera.core.impl.SessionConfig.OutputConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SessionConfig_OutputConfig>;
					public equals(param0: any): boolean;
					public getSurfaceGroupId(): number;
					public toString(): string;
					public getSurface(): androidx.camera.core.impl.DeferrableSurface;
					public getPhysicalCameraId(): string;
					public getSharedSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
					public hashCode(): number;
				}
				export namespace AutoValue_SessionConfig_OutputConfig {
					export class Builder extends androidx.camera.core.impl.SessionConfig.OutputConfig.Builder {
						public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SessionConfig_OutputConfig.Builder>;
						public setPhysicalCameraId(param0: string): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
						public setSurfaceGroupId(param0: number): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
						public build(): androidx.camera.core.impl.SessionConfig.OutputConfig;
						public setSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
						public setSharedSurfaces(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_StateObservable_ErrorWrapper extends androidx.camera.core.impl.StateObservable.ErrorWrapper {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_StateObservable_ErrorWrapper>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public getError(): java.lang.Throwable;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_SurfaceConfig extends androidx.camera.core.impl.SurfaceConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SurfaceConfig>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getConfigType(): androidx.camera.core.impl.SurfaceConfig.ConfigType;
					public static getConfigType(param0: number): androidx.camera.core.impl.SurfaceConfig.ConfigType;
					public getConfigSize(): androidx.camera.core.impl.SurfaceConfig.ConfigSize;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class AutoValue_SurfaceSizeDefinition extends androidx.camera.core.impl.SurfaceSizeDefinition {
					public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SurfaceSizeDefinition>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getRecordSize(): any;
					public getPreviewSize(): any;
					public hashCode(): number;
					public getAnalysisSize(): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CamcorderProfileProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CamcorderProfileProvider>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CamcorderProfileProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasProfile(param0: number): boolean;
						get(param0: number): androidx.camera.core.impl.CamcorderProfileProxy;
						"<clinit>"(): void;
					});
					public constructor();
					public static EMPTY: androidx.camera.core.impl.CamcorderProfileProvider;
					public get(param0: number): androidx.camera.core.impl.CamcorderProfileProxy;
					public hasProfile(param0: number): boolean;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class CamcorderProfileProxy extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CamcorderProfileProxy>;
					public static CODEC_PROFILE_NONE: number;
					public getVideoFrameWidth(): number;
					public getAudioCodecMimeType(): string;
					public getVideoCodec(): number;
					public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): androidx.camera.core.impl.CamcorderProfileProxy;
					public static fromCamcorderProfile(param0: globalAndroid.media.CamcorderProfile): androidx.camera.core.impl.CamcorderProfileProxy;
					public getVideoFrameRate(): number;
					public getDuration(): number;
					public getVideoFrameHeight(): number;
					public getAudioBitRate(): number;
					public getVideoBitRate(): number;
					public constructor();
					public getAudioSampleRate(): number;
					public getQuality(): number;
					public getAudioCodec(): number;
					public getFileFormat(): number;
					public getVideoCodecMimeType(): string;
					public getAudioChannels(): number;
					public getRequiredAudioProfile(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class CameraCaptureCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallback>;
					public constructor();
					public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
					public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
					public onCaptureCancelled(): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraCaptureCallbacks extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallbacks>;
					public static createNoOpCallback(): androidx.camera.core.impl.CameraCaptureCallback;
					public static createComboCallback(param0: androidNative.Array<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.impl.CameraCaptureCallback;
				}
				export namespace CameraCaptureCallbacks {
					export class ComboCameraCaptureCallback extends androidx.camera.core.impl.CameraCaptureCallback {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallbacks.ComboCameraCaptureCallback>;
						public getCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
						public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
						public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
						public onCaptureCancelled(): void;
					}
					export class NoOpCameraCaptureCallback extends androidx.camera.core.impl.CameraCaptureCallback {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallbacks.NoOpCameraCaptureCallback>;
						public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
						public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraCaptureFailure extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureFailure>;
					public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure.Reason);
					public getReason(): androidx.camera.core.impl.CameraCaptureFailure.Reason;
				}
				export namespace CameraCaptureFailure {
					export class Reason {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureFailure.Reason>;
						public static ERROR: androidx.camera.core.impl.CameraCaptureFailure.Reason;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureFailure.Reason;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureFailure.Reason>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraCaptureMetaData extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData>;
				}
				export namespace CameraCaptureMetaData {
					export class AeState {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AeState>;
						public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public static INACTIVE: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public static SEARCHING: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public static FLASH_REQUIRED: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public static CONVERGED: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public static LOCKED: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AeState>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
					}
					export class AfMode {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AfMode>;
						public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
						public static OFF: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
						public static ON_MANUAL_AUTO: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
						public static ON_CONTINUOUS_AUTO: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AfMode>;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
					}
					export class AfState {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AfState>;
						public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static INACTIVE: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static SCANNING: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static PASSIVE_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static PASSIVE_NOT_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static LOCKED_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static LOCKED_NOT_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AfState>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
					}
					export class AwbState {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AwbState>;
						public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						public static INACTIVE: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						public static METERING: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						public static CONVERGED: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						public static LOCKED: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AwbState>;
					}
					export class FlashState {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.FlashState>;
						public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
						public static NONE: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
						public static READY: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
						public static FIRED: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.FlashState>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraCaptureResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureResult>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraCaptureResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
						getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
						getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
						getTimestamp(): number;
						getTagBundle(): androidx.camera.core.impl.TagBundle;
						populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
						getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult;
					});
					public constructor();
					public getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
					public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
					public getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
					public getTimestamp(): number;
					public getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult;
					public getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
					public getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
					public getTagBundle(): androidx.camera.core.impl.TagBundle;
					public getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
				}
				export namespace CameraCaptureResult {
					export class EmptyCameraCaptureResult extends java.lang.Object implements androidx.camera.core.impl.CameraCaptureResult {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureResult.EmptyCameraCaptureResult>;
						public getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
						public constructor();
						public getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
						public getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
						public getTimestamp(): number;
						public getTagBundle(): androidx.camera.core.impl.TagBundle;
						public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
						public getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult;
						public static create(): androidx.camera.core.impl.CameraCaptureResult;
						public getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
						public getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraCaptureResults extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureResults>;
					public static retrieveCameraCaptureResult(param0: androidx.camera.core.ImageInfo): androidx.camera.core.impl.CameraCaptureResult;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraConfig extends java.lang.Object implements androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
						getCompatibilityId(): androidx.camera.core.impl.Identifier;
						getUseCaseCombinationRequiredRule(): number;
						getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
						getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static REQUIRED_RULE_NONE: number = 0;
					public static OPTION_USECASE_CONFIG_FACTORY: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.UseCaseConfigFactory>;
					public static OPTION_COMPATIBILITY_ID: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.Identifier>;
					public static OPTION_USE_CASE_COMBINATION_REQUIRED_RULE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static REQUIRED_RULE_COEXISTING_PREVIEW_AND_IMAGE_CAPTURE: number = 1;
					public static OPTION_SESSION_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.SessionProcessor>;
					public static OPTION_ZSL_DISABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
					public getCompatibilityId(): androidx.camera.core.impl.Identifier;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getConfig(): androidx.camera.core.impl.Config;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public getUseCaseCombinationRequiredRule(): number;
					public getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
				}
				export namespace CameraConfig {
					export class Builder<B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraConfig.Builder<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CameraConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setUseCaseConfigFactory(param0: androidx.camera.core.impl.UseCaseConfigFactory): B;
							setCompatibilityId(param0: androidx.camera.core.impl.Identifier): B;
							setUseCaseCombinationRequiredRule(param0: number): B;
							setSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): B;
							setZslDisabled(param0: boolean): B;
						});
						public constructor();
						public setZslDisabled(param0: boolean): B;
						public setSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): B;
						public setUseCaseConfigFactory(param0: androidx.camera.core.impl.UseCaseConfigFactory): B;
						public setUseCaseCombinationRequiredRule(param0: number): B;
						public setCompatibilityId(param0: androidx.camera.core.impl.Identifier): B;
					}
					export class RequiredRule extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraConfig.RequiredRule>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CameraConfig$RequiredRule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraConfigProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraConfigProvider>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraConfigProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConfig(param0: androidx.camera.core.CameraInfo, param1: globalAndroid.content.Context): androidx.camera.core.impl.CameraConfig;
						lambda$static$0(param0: androidx.camera.core.CameraInfo, param1: globalAndroid.content.Context): androidx.camera.core.impl.CameraConfig;
						"<clinit>"(): void;
					});
					public constructor();
					public static EMPTY: androidx.camera.core.impl.CameraConfigProvider;
					public getConfig(param0: androidx.camera.core.CameraInfo, param1: globalAndroid.content.Context): androidx.camera.core.impl.CameraConfig;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraConfigs extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraConfigs>;
					public static emptyConfig(): androidx.camera.core.impl.CameraConfig;
				}
				export namespace CameraConfigs {
					export class EmptyCameraConfig extends java.lang.Object implements androidx.camera.core.impl.CameraConfig {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraConfigs.EmptyCameraConfig>;
						public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						public getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
						public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						public getConfig(): androidx.camera.core.impl.Config;
						public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						public getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
						public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
						public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						public getCompatibilityId(): androidx.camera.core.impl.Identifier;
						public getUseCaseCombinationRequiredRule(): number;
						public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						public getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
						public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraControlInternal extends java.lang.Object implements androidx.camera.core.CameraControl {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraControlInternal>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraControlInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFlashMode(): number;
						setFlashMode(param0: number): void;
						addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
						setZslDisabledByUserCaseConfig(param0: boolean): void;
						isZslDisabledByByUserCaseConfig(): boolean;
						submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: number, param2: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<java.lang.Void>>;
						getSessionConfig(): androidx.camera.core.impl.SessionConfig;
						getSensorRect(): globalAndroid.graphics.Rect;
						addInteropConfig(param0: androidx.camera.core.impl.Config): void;
						clearInteropConfig(): void;
						getInteropConfig(): androidx.camera.core.impl.Config;
						"<clinit>"(): void;
						enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
						startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
						cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
						setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
						setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
						setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
					});
					public constructor();
					public static DEFAULT_EMPTY_INSTANCE: androidx.camera.core.impl.CameraControlInternal;
					public submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: number, param2: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<java.lang.Void>>;
					public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public addInteropConfig(param0: androidx.camera.core.impl.Config): void;
					public addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
					public setZslDisabledByUserCaseConfig(param0: boolean): void;
					public cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public isZslDisabledByByUserCaseConfig(): boolean;
					public startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
					public clearInteropConfig(): void;
					public getInteropConfig(): androidx.camera.core.impl.Config;
					public getFlashMode(): number;
					public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getSensorRect(): globalAndroid.graphics.Rect;
					public setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
					public setFlashMode(param0: number): void;
					public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				}
				export namespace CameraControlInternal {
					export class CameraControlException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraControlInternal.CameraControlException>;
						public getCameraCaptureFailure(): androidx.camera.core.impl.CameraCaptureFailure;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure);
						public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
					export class ControlUpdateCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraControlInternal.ControlUpdateCallback>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CameraControlInternal$ControlUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCameraControlUpdateSessionConfig(): void;
							onCameraControlCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
						});
						public constructor();
						public onCameraControlCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
						public onCameraControlUpdateSessionConfig(): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraDeviceSurfaceManager extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraDeviceSurfaceManager>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraDeviceSurfaceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						checkSupported(param0: string, param1: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean;
						transformSurfaceConfig(param0: string, param1: number, param2: any): androidx.camera.core.impl.SurfaceConfig;
						getSuggestedResolutions(param0: string, param1: java.util.List<androidx.camera.core.impl.AttachedSurfaceInfo>, param2: java.util.List<androidx.camera.core.impl.UseCaseConfig<any>>): java.util.Map<androidx.camera.core.impl.UseCaseConfig<any>,any>;
					});
					public constructor();
					public checkSupported(param0: string, param1: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean;
					public getSuggestedResolutions(param0: string, param1: java.util.List<androidx.camera.core.impl.AttachedSurfaceInfo>, param2: java.util.List<androidx.camera.core.impl.UseCaseConfig<any>>): java.util.Map<androidx.camera.core.impl.UseCaseConfig<any>,any>;
					public transformSurfaceConfig(param0: string, param1: number, param2: any): androidx.camera.core.impl.SurfaceConfig;
				}
				export namespace CameraDeviceSurfaceManager {
					export class Provider extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CameraDeviceSurfaceManager$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newInstance(param0: globalAndroid.content.Context, param1: any, param2: java.util.Set<string>): androidx.camera.core.impl.CameraDeviceSurfaceManager;
						});
						public constructor();
						public newInstance(param0: globalAndroid.content.Context, param1: any, param2: java.util.Set<string>): androidx.camera.core.impl.CameraDeviceSurfaceManager;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraFactory>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCamera(param0: string): androidx.camera.core.impl.CameraInternal;
						getAvailableCameraIds(): java.util.Set<string>;
						getCameraManager(): any;
					});
					public constructor();
					public getCameraManager(): any;
					public getAvailableCameraIds(): java.util.Set<string>;
					public getCamera(param0: string): androidx.camera.core.impl.CameraInternal;
				}
				export namespace CameraFactory {
					export class Provider extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraFactory.Provider>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CameraFactory$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newInstance(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraThreadConfig, param2: androidx.camera.core.CameraSelector): androidx.camera.core.impl.CameraFactory;
						});
						public constructor();
						public newInstance(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraThreadConfig, param2: androidx.camera.core.CameraSelector): androidx.camera.core.impl.CameraFactory;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraFilters extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraFilters>;
					public static ANY: androidx.camera.core.CameraFilter;
					public static NONE: androidx.camera.core.CameraFilter;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraInfoInternal extends java.lang.Object implements androidx.camera.core.CameraInfo {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraInfoInternal>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraInfoInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLensFacing(): java.lang.Integer;
						getCameraId(): string;
						addSessionCaptureCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.CameraCaptureCallback): void;
						removeSessionCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
						getCameraQuirks(): androidx.camera.core.impl.Quirks;
						getCamcorderProfileProvider(): androidx.camera.core.impl.CamcorderProfileProvider;
						getTimebase(): androidx.camera.core.impl.Timebase;
						getCameraSelector(): androidx.camera.core.CameraSelector;
						lambda$getCameraSelector$0(param0: java.util.List<any>): java.util.List<any>;
						getSensorRotationDegrees(): number;
						getSensorRotationDegrees(param0: number): number;
						hasFlashUnit(): boolean;
						getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
						getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
						getExposureState(): androidx.camera.core.ExposureState;
						getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
						getImplementationType(): string;
						getCameraSelector(): androidx.camera.core.CameraSelector;
						isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
						isZslSupported(): boolean;
						isPrivateReprocessingSupported(): boolean;
					});
					public constructor();
					public static IMPLEMENTATION_TYPE_CAMERA2: string = "androidx.camera.camera2";
					public static IMPLEMENTATION_TYPE_CAMERA2_LEGACY: string = "androidx.camera.camera2.legacy";
					public static IMPLEMENTATION_TYPE_UNKNOWN: string = "<unknown>";
					public static IMPLEMENTATION_TYPE_FAKE: string = "androidx.camera.fake";
					public getCameraQuirks(): androidx.camera.core.impl.Quirks;
					public getCameraSelector(): androidx.camera.core.CameraSelector;
					public isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
					public removeSessionCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
					public getSensorRotationDegrees(param0: number): number;
					public addSessionCaptureCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.CameraCaptureCallback): void;
					public isPrivateReprocessingSupported(): boolean;
					public getSensorRotationDegrees(): number;
					public isZslSupported(): boolean;
					public getImplementationType(): string;
					public getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
					public getExposureState(): androidx.camera.core.ExposureState;
					public getCameraId(): string;
					public getCamcorderProfileProvider(): androidx.camera.core.impl.CamcorderProfileProvider;
					public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
					public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
					public hasFlashUnit(): boolean;
					public getLensFacing(): java.lang.Integer;
					public getTimebase(): androidx.camera.core.impl.Timebase;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraInternal extends java.lang.Object implements androidx.camera.core.Camera, androidx.camera.core.UseCase.StateChangeCallback {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraInternal>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CameraInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						open(): void;
						close(): void;
						setActiveResumingMode(param0: boolean): void;
						release(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
						getCameraState(): androidx.camera.core.impl.Observable<androidx.camera.core.impl.CameraInternal.State>;
						attachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
						detachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
						getCameraControlInternal(): androidx.camera.core.impl.CameraControlInternal;
						getCameraInfoInternal(): androidx.camera.core.impl.CameraInfoInternal;
						getCameraControl(): androidx.camera.core.CameraControl;
						getCameraInfo(): androidx.camera.core.CameraInfo;
						getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
						getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
						setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
						getCameraControl(): androidx.camera.core.CameraControl;
						getCameraInfo(): androidx.camera.core.CameraInfo;
						getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
						getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
						setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
						isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
						onUseCaseActive(param0: androidx.camera.core.UseCase): void;
						onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
						onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
						onUseCaseReset(param0: androidx.camera.core.UseCase): void;
					});
					public constructor();
					public onUseCaseReset(param0: androidx.camera.core.UseCase): void;
					public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
					public getCameraControlInternal(): androidx.camera.core.impl.CameraControlInternal;
					public getCameraInfoInternal(): androidx.camera.core.impl.CameraInfoInternal;
					public getCameraControl(): androidx.camera.core.CameraControl;
					public getCameraState(): androidx.camera.core.impl.Observable<androidx.camera.core.impl.CameraInternal.State>;
					public onUseCaseActive(param0: androidx.camera.core.UseCase): void;
					public close(): void;
					public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
					public onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
					public onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
					public setActiveResumingMode(param0: boolean): void;
					public open(): void;
					public attachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
					public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
					public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
					public release(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public getCameraInfo(): androidx.camera.core.CameraInfo;
					public detachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
				}
				export namespace CameraInternal {
					export class State {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraInternal.State>;
						public static PENDING_OPEN: androidx.camera.core.impl.CameraInternal.State;
						public static OPENING: androidx.camera.core.impl.CameraInternal.State;
						public static OPEN: androidx.camera.core.impl.CameraInternal.State;
						public static CLOSING: androidx.camera.core.impl.CameraInternal.State;
						public static CLOSED: androidx.camera.core.impl.CameraInternal.State;
						public static RELEASING: androidx.camera.core.impl.CameraInternal.State;
						public static RELEASED: androidx.camera.core.impl.CameraInternal.State;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): androidNative.Array<androidx.camera.core.impl.CameraInternal.State>;
						public static valueOf(param0: string): androidx.camera.core.impl.CameraInternal.State;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraRepository extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraRepository>;
					public init(param0: androidx.camera.core.impl.CameraFactory): void;
					public getCameras(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
					public constructor();
					public getCamera(param0: string): androidx.camera.core.impl.CameraInternal;
					public deinit(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraStateRegistry extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraStateRegistry>;
					public markCameraState(param0: androidx.camera.core.Camera, param1: androidx.camera.core.impl.CameraInternal.State): void;
					public registerCamera(param0: androidx.camera.core.Camera, param1: java.util.concurrent.Executor, param2: androidx.camera.core.impl.CameraStateRegistry.OnOpenAvailableListener): void;
					public markCameraState(param0: androidx.camera.core.Camera, param1: androidx.camera.core.impl.CameraInternal.State, param2: boolean): void;
					public isCameraClosing(): boolean;
					public constructor(param0: number);
					public tryOpenCamera(param0: androidx.camera.core.Camera): boolean;
				}
				export namespace CameraStateRegistry {
					export class CameraRegistration extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraStateRegistry.CameraRegistration>;
					}
					export class OnOpenAvailableListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraStateRegistry.OnOpenAvailableListener>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CameraStateRegistry$OnOpenAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onOpenAvailable(): void;
						});
						public constructor();
						public onOpenAvailable(): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class CameraThreadConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraThreadConfig>;
					public getCameraExecutor(): java.util.concurrent.Executor;
					public static create(param0: java.util.concurrent.Executor, param1: globalAndroid.os.Handler): androidx.camera.core.impl.CameraThreadConfig;
					public constructor();
					public getSchedulerHandler(): globalAndroid.os.Handler;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CameraValidator extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CameraValidator>;
					public static validateCameras(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraRepository, param2: androidx.camera.core.CameraSelector): void;
				}
				export namespace CameraValidator {
					export class CameraIdListIncorrectException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.camera.core.impl.CameraValidator.CameraIdListIncorrectException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CaptureBundle extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CaptureBundle>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CaptureBundle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage>;
					});
					public constructor();
					public getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CaptureConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CaptureConfig>;
					public static TEMPLATE_TYPE_NONE: number = -1;
					public static OPTION_ROTATION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_JPEG_QUALITY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public isUseRepeatingSurface(): boolean;
					public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
					public static defaultEmptyCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public getTagBundle(): androidx.camera.core.impl.TagBundle;
					public getSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
					public getCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
					public getImplementationOptions(): androidx.camera.core.impl.Config;
					public getTemplateType(): number;
				}
				export namespace CaptureConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CaptureConfig.Builder>;
						public constructor();
						public addTag(param0: string, param1: any): void;
						public removeSurface(param0: androidx.camera.core.impl.DeferrableSurface): void;
						public isUseRepeatingSurface(): boolean;
						public build(): androidx.camera.core.impl.CaptureConfig;
						public clearSurfaces(): void;
						public getImplementationOptions(): androidx.camera.core.impl.Config;
						public getTag(param0: string): any;
						public setCameraCaptureResult(param0: androidx.camera.core.impl.CameraCaptureResult): void;
						public static createFrom(param0: androidx.camera.core.impl.UseCaseConfig<any>): androidx.camera.core.impl.CaptureConfig.Builder;
						public getTemplateType(): number;
						public removeCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): boolean;
						public setUseRepeatingSurface(param0: boolean): void;
						public addSurface(param0: androidx.camera.core.impl.DeferrableSurface): void;
						public getSurfaces(): java.util.Set<androidx.camera.core.impl.DeferrableSurface>;
						public addImplementationOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
						public addCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
						public addAllTags(param0: androidx.camera.core.impl.TagBundle): void;
						public static from(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig.Builder;
						public setTemplateType(param0: number): void;
						public setImplementationOptions(param0: androidx.camera.core.impl.Config): void;
						public addAllCameraCaptureCallbacks(param0: java.util.Collection<androidx.camera.core.impl.CameraCaptureCallback>): void;
						public addImplementationOptions(param0: androidx.camera.core.impl.Config): void;
					}
					export class OptionUnpacker extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.CaptureConfig.OptionUnpacker>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.CaptureConfig$OptionUnpacker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.CaptureConfig.Builder): void;
						});
						public constructor();
						public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.CaptureConfig.Builder): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CaptureProcessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CaptureProcessor>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CaptureProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
						process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
						onResolutionUpdate(param0: any): void;
						close(): void;
						getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					});
					public constructor();
					public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
					public close(): void;
					public onResolutionUpdate(param0: any): void;
					public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class CaptureStage extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.CaptureStage>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.CaptureStage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): number;
						getCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					});
					public constructor();
					public getCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public getId(): number;
				}
				export namespace CaptureStage {
					export class DefaultCaptureStage extends java.lang.Object implements androidx.camera.core.impl.CaptureStage {
						public static class: java.lang.Class<androidx.camera.core.impl.CaptureStage.DefaultCaptureStage>;
						public getCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
						public constructor();
						public getId(): number;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class Config extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.Config>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.Config interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
				}
				export namespace Config {
					export abstract class Option<T>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.Config.Option<any>>;
						public getValueClass(): java.lang.Class<T>;
						public static create(param0: string, param1: java.lang.Class<any>, param2: any): androidx.camera.core.impl.Config.Option<any>;
						public getId(): string;
						public getToken(): any;
						public static create(param0: string, param1: java.lang.Class<any>): androidx.camera.core.impl.Config.Option<any>;
					}
					export class OptionMatcher extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.Config.OptionMatcher>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.Config$OptionMatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onOptionMatched(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						});
						public constructor();
						public onOptionMatched(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					}
					export class OptionPriority {
						public static class: java.lang.Class<androidx.camera.core.impl.Config.OptionPriority>;
						public static ALWAYS_OVERRIDE: androidx.camera.core.impl.Config.OptionPriority;
						public static REQUIRED: androidx.camera.core.impl.Config.OptionPriority;
						public static OPTIONAL: androidx.camera.core.impl.Config.OptionPriority;
						public static valueOf(param0: string): androidx.camera.core.impl.Config.OptionPriority;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): androidNative.Array<androidx.camera.core.impl.Config.OptionPriority>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ConfigProvider<C>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ConfigProvider<any>>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ConfigProvider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConfig(): C;
					});
					public constructor();
					public getConfig(): C;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ConstantObservable<T>  extends androidx.camera.core.impl.Observable<any> {
					public static class: java.lang.Class<androidx.camera.core.impl.ConstantObservable<any>>;
					public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
					public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
					public static withValue(param0: any): androidx.camera.core.impl.Observable<any>;
					public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class DeferrableSurface extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurface>;
					public static SIZE_UNDEFINED: any;
					public incrementUseCount(): void;
					public getSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
					public getContainerClass(): java.lang.Class<any>;
					public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
					public getPrescribedSize(): any;
					public setContainerClass(param0: java.lang.Class<any>): void;
					public getUseCount(): number;
					public constructor(param0: any, param1: number);
					public constructor();
					public close(): void;
					public decrementUseCount(): void;
					public getPrescribedStreamFormat(): number;
					public getTerminationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				}
				export namespace DeferrableSurface {
					export class SurfaceClosedException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurface.SurfaceClosedException>;
						public constructor(param0: string, param1: androidx.camera.core.impl.DeferrableSurface);
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public getDeferrableSurface(): androidx.camera.core.impl.DeferrableSurface;
						public constructor(param0: string);
					}
					export class SurfaceUnavailableException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurface.SurfaceUnavailableException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class DeferrableSurfaces extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurfaces>;
					public static tryIncrementAll(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): boolean;
					public static incrementAll(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): void;
					public static decrementAll(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): void;
					public static surfaceListWithTimeout(param0: java.util.Collection<androidx.camera.core.impl.DeferrableSurface>, param1: boolean, param2: number, param3: java.util.concurrent.Executor, param4: java.util.concurrent.ScheduledExecutorService): com.google.common.util.concurrent.ListenableFuture<java.util.List<globalAndroid.view.Surface>>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class DeviceProperties extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.DeviceProperties>;
					public static create(param0: string, param1: string, param2: number): androidx.camera.core.impl.DeviceProperties;
					public constructor();
					public sdkVersion(): number;
					public static create(): androidx.camera.core.impl.DeviceProperties;
					public manufacturer(): string;
					public model(): string;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ExtendedCameraConfigProviderStore extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ExtendedCameraConfigProviderStore>;
					public static addConfig(param0: any, param1: androidx.camera.core.impl.CameraConfigProvider): void;
					public static getConfigProvider(param0: any): androidx.camera.core.impl.CameraConfigProvider;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class Identifier extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.Identifier>;
					public getValue(): any;
					public constructor();
					public static create(param0: any): androidx.camera.core.impl.Identifier;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageAnalysisConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageAnalysisConfig>;
					public static OPTION_BACKPRESSURE_STRATEGY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_IMAGE_QUEUE_DEPTH: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_IMAGE_READER_PROXY_PROVIDER: androidx.camera.core.impl.Config.Option<androidx.camera.core.ImageReaderProxyProvider>;
					public static OPTION_OUTPUT_IMAGE_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_ONE_PIXEL_SHIFT_ENABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
					public static OPTION_OUTPUT_IMAGE_ROTATION_ENABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getMaxResolution(param0: any): any;
					public isOutputImageRotationEnabled(param0: java.lang.Boolean): java.lang.Boolean;
					public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public constructor(param0: androidx.camera.core.impl.OptionsBundle);
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getTargetResolution(param0: any): any;
					public getImageQueueDepth(): number;
					public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public hasTargetAspectRatio(): boolean;
					public getTargetRotation(param0: number): number;
					public getInputFormat(): number;
					public getTargetClass(): java.lang.Class<any>;
					public getBackpressureStrategy(): number;
					public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public isZslDisabled(param0: boolean): boolean;
					public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
					public getSurfaceOccupancyPriority(): number;
					public getOutputImageFormat(param0: number): number;
					public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
					public getTargetName(): string;
					public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getBackgroundExecutor(): java.util.concurrent.Executor;
					public getTargetName(param0: string): string;
					public getImageQueueDepth(param0: number): number;
					public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getAppTargetRotation(param0: number): number;
					public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getOnePixelShiftEnabled(param0: java.lang.Boolean): java.lang.Boolean;
					public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
					public getCameraSelector(): androidx.camera.core.CameraSelector;
					public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
					public getDefaultResolution(param0: any): any;
					public getTargetRotation(): number;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public getTargetAspectRatio(): number;
					public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
					public getSurfaceOccupancyPriority(param0: number): number;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public getTargetResolution(): any;
					public getImageReaderProxyProvider(): androidx.camera.core.ImageReaderProxyProvider;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public getConfig(): androidx.camera.core.impl.Config;
					public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getMaxResolution(): any;
					public getDefaultResolution(): any;
					public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
					public getBackpressureStrategy(param0: number): number;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageCaptureConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageCaptureConfig>;
					public static OPTION_IMAGE_CAPTURE_MODE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_FLASH_MODE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_CAPTURE_BUNDLE: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureBundle>;
					public static OPTION_CAPTURE_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureProcessor>;
					public static OPTION_BUFFER_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_MAX_CAPTURE_STAGES: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_IMAGE_READER_PROXY_PROVIDER: androidx.camera.core.impl.Config.Option<androidx.camera.core.ImageReaderProxyProvider>;
					public static OPTION_USE_SOFTWARE_JPEG_ENCODER: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
					public static OPTION_FLASH_TYPE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_JPEG_COMPRESSION_QUALITY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public getMaxCaptureStages(): number;
					public getMaxCaptureStages(param0: number): number;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getMaxResolution(param0: any): any;
					public getBufferFormat(param0: java.lang.Integer): java.lang.Integer;
					public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public constructor(param0: androidx.camera.core.impl.OptionsBundle);
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getFlashType(param0: number): number;
					public getTargetResolution(param0: any): any;
					public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public hasTargetAspectRatio(): boolean;
					public getTargetRotation(param0: number): number;
					public getInputFormat(): number;
					public hasCaptureMode(): boolean;
					public getTargetClass(): java.lang.Class<any>;
					public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public isZslDisabled(param0: boolean): boolean;
					public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
					public getSurfaceOccupancyPriority(): number;
					public getFlashType(): number;
					public getIoExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
					public getTargetName(): string;
					public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getTargetName(param0: string): string;
					public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getAppTargetRotation(param0: number): number;
					public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getCaptureProcessor(): androidx.camera.core.impl.CaptureProcessor;
					public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
					public getCameraSelector(): androidx.camera.core.CameraSelector;
					public getCaptureBundle(param0: androidx.camera.core.impl.CaptureBundle): androidx.camera.core.impl.CaptureBundle;
					public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
					public getDefaultResolution(param0: any): any;
					public getIoExecutor(): java.util.concurrent.Executor;
					public getTargetRotation(): number;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public getTargetAspectRatio(): number;
					public getFlashMode(): number;
					public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
					public getSurfaceOccupancyPriority(param0: number): number;
					public getCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.impl.CaptureProcessor;
					public getCaptureMode(): number;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public getJpegQuality(param0: number): number;
					public getTargetResolution(): any;
					public getImageReaderProxyProvider(): androidx.camera.core.ImageReaderProxyProvider;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public isSoftwareJpegEncoderRequested(): boolean;
					public getConfig(): androidx.camera.core.impl.Config;
					public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getJpegQuality(): number;
					public getMaxResolution(): any;
					public getBufferFormat(): java.lang.Integer;
					public getDefaultResolution(): any;
					public getFlashMode(param0: number): number;
					public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public getCaptureBundle(): androidx.camera.core.impl.CaptureBundle;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageFormatConstants extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageFormatConstants>;
					public static INTERNAL_DEFINED_IMAGE_FORMAT_JPEG: number = 33;
					public static INTERNAL_DEFINED_IMAGE_FORMAT_PRIVATE: number = 34;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageInfoProcessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageInfoProcessor>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ImageInfoProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCaptureStage(): androidx.camera.core.impl.CaptureStage;
						process(param0: androidx.camera.core.ImageInfo): boolean;
					});
					public constructor();
					public getCaptureStage(): androidx.camera.core.impl.CaptureStage;
					public process(param0: androidx.camera.core.ImageInfo): boolean;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageInputConfig extends java.lang.Object implements androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageInputConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ImageInputConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInputFormat(): number;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_INPUT_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getConfig(): androidx.camera.core.impl.Config;
					public getInputFormat(): number;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageOutputConfig extends java.lang.Object implements androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasTargetAspectRatio(): boolean;
						getTargetAspectRatio(): number;
						getTargetRotation(param0: number): number;
						getAppTargetRotation(param0: number): number;
						getTargetRotation(): number;
						getTargetResolution(param0: any): any;
						getTargetResolution(): any;
						getDefaultResolution(param0: any): any;
						getDefaultResolution(): any;
						getMaxResolution(param0: any): any;
						getMaxResolution(): any;
						getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
						getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_TARGET_RESOLUTION: androidx.camera.core.impl.Config.Option<any>;
					public static OPTION_DEFAULT_RESOLUTION: androidx.camera.core.impl.Config.Option<any>;
					public static OPTION_TARGET_ASPECT_RATIO: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_SUPPORTED_RESOLUTIONS: androidx.camera.core.impl.Config.Option<java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>>;
					public static OPTION_APP_TARGET_ROTATION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_TARGET_ROTATION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static ROTATION_NOT_SPECIFIED: number = -1;
					public static OPTION_MAX_RESOLUTION: androidx.camera.core.impl.Config.Option<any>;
					public static INVALID_ROTATION: number = -1;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getMaxResolution(param0: any): any;
					public getConfig(): androidx.camera.core.impl.Config;
					public getDefaultResolution(param0: any): any;
					public getMaxResolution(): any;
					public getTargetRotation(): number;
					public getDefaultResolution(): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public getTargetAspectRatio(): number;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getTargetResolution(param0: any): any;
					public getAppTargetRotation(param0: number): number;
					public hasTargetAspectRatio(): boolean;
					public getTargetRotation(param0: number): number;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getTargetResolution(): any;
				}
				export namespace ImageOutputConfig {
					export class Builder<B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.Builder<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setTargetAspectRatio(param0: number): B;
							setTargetRotation(param0: number): B;
							setTargetResolution(param0: any): B;
							setDefaultResolution(param0: any): B;
							setMaxResolution(param0: any): B;
							setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): B;
						});
						public constructor();
						public setTargetRotation(param0: number): B;
						public setMaxResolution(param0: any): B;
						public setTargetResolution(param0: any): B;
						public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): B;
						public setTargetAspectRatio(param0: number): B;
						public setDefaultResolution(param0: any): B;
					}
					export class OptionalRotationValue extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.OptionalRotationValue>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$OptionalRotationValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class RotationDegreesValue extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.RotationDegreesValue>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$RotationDegreesValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class RotationValue extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.RotationValue>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$RotationValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageProxyBundle extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageProxyBundle>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ImageProxyBundle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
						getCaptureIds(): java.util.List<java.lang.Integer>;
					});
					public constructor();
					public getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
					public getCaptureIds(): java.util.List<java.lang.Integer>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImageReaderProxy extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.ImageReaderProxy>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ImageReaderProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						acquireLatestImage(): androidx.camera.core.ImageProxy;
						acquireNextImage(): androidx.camera.core.ImageProxy;
						close(): void;
						getHeight(): number;
						getWidth(): number;
						getImageFormat(): number;
						getMaxImages(): number;
						getSurface(): globalAndroid.view.Surface;
						setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
						clearOnImageAvailableListener(): void;
					});
					public constructor();
					public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
					public getMaxImages(): number;
					public getHeight(): number;
					public acquireLatestImage(): androidx.camera.core.ImageProxy;
					public close(): void;
					public getWidth(): number;
					public getImageFormat(): number;
					public getSurface(): globalAndroid.view.Surface;
					public clearOnImageAvailableListener(): void;
					public acquireNextImage(): androidx.camera.core.ImageProxy;
				}
				export namespace ImageReaderProxy {
					export class OnImageAvailableListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.ImageReaderProxy$OnImageAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
						});
						public constructor();
						public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ImmediateSurface extends androidx.camera.core.impl.DeferrableSurface {
					public static class: java.lang.Class<androidx.camera.core.impl.ImmediateSurface>;
					public constructor(param0: any, param1: number);
					public constructor(param0: globalAndroid.view.Surface, param1: any, param2: number);
					public constructor();
					public constructor(param0: globalAndroid.view.Surface);
					public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class LensFacingCameraFilter extends java.lang.Object implements androidx.camera.core.CameraFilter {
					public static class: java.lang.Class<androidx.camera.core.impl.LensFacingCameraFilter>;
					public getIdentifier(): androidx.camera.core.impl.Identifier;
					public getLensFacing(): number;
					public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class LensFacingConverter extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.LensFacingConverter>;
					public static values(): androidNative.Array<java.lang.Integer>;
					public static valueOf(param0: string): number;
					public static nameOf(param0: number): string;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class LiveDataObservable<T>  extends androidx.camera.core.impl.Observable<any> {
					public static class: java.lang.Class<androidx.camera.core.impl.LiveDataObservable<any>>;
					public constructor();
					public getLiveData(): androidx.lifecycle.LiveData<androidx.camera.core.impl.LiveDataObservable.Result<any>>;
					public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
					public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
					public postValue(param0: any): void;
					public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
					public postError(param0: java.lang.Throwable): void;
				}
				export namespace LiveDataObservable {
					export class LiveDataObserverAdapter<T>  extends androidx.lifecycle.Observer<androidx.camera.core.impl.LiveDataObservable.Result<any>> {
						public static class: java.lang.Class<androidx.camera.core.impl.LiveDataObservable.LiveDataObserverAdapter<any>>;
						public onChanged(param0: androidx.camera.core.impl.LiveDataObservable.Result<any>): void;
					}
					export class Result<T>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.LiveDataObservable.Result<any>>;
						public completedSuccessfully(): boolean;
						public getValue(): T;
						public toString(): string;
						public getError(): java.lang.Throwable;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class MetadataHolderService extends globalAndroid.app.Service {
					public static class: java.lang.Class<androidx.camera.core.impl.MetadataHolderService>;
					public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public onTrimMemory(param0: number): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class MultiValueSet<C>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.MultiValueSet<any>>;
					public clone(): any;
					public constructor();
					public addAll(param0: java.util.List<C>): void;
					public getAllItems(): java.util.List<C>;
					public clone(): androidx.camera.core.impl.MultiValueSet<C>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class MutableConfig extends java.lang.Object implements androidx.camera.core.impl.Config {
					public static class: java.lang.Class<androidx.camera.core.impl.MutableConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.MutableConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
						insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority, param2: any): void;
						removeOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public removeOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority, param2: any): void;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class MutableOptionsBundle extends androidx.camera.core.impl.OptionsBundle implements androidx.camera.core.impl.MutableConfig {
					public static class: java.lang.Class<androidx.camera.core.impl.MutableOptionsBundle>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public static from(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.OptionsBundle;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public static from(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.MutableOptionsBundle;
					public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static create(): androidx.camera.core.impl.MutableOptionsBundle;
					public removeOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority, param2: any): void;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class MutableStateObservable<T>  extends androidx.camera.core.impl.StateObservable<any> {
					public static class: java.lang.Class<androidx.camera.core.impl.MutableStateObservable<any>>;
					public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
					public static withInitialError(param0: java.lang.Throwable): androidx.camera.core.impl.MutableStateObservable<any>;
					public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
					public static withInitialState(param0: any): androidx.camera.core.impl.MutableStateObservable<any>;
					public setError(param0: java.lang.Throwable): void;
					public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
					public setState(param0: any): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class MutableTagBundle extends androidx.camera.core.impl.TagBundle {
					public static class: java.lang.Class<androidx.camera.core.impl.MutableTagBundle>;
					public static create(param0: globalAndroid.util.Pair<string,any>): androidx.camera.core.impl.TagBundle;
					public addTagBundle(param0: androidx.camera.core.impl.TagBundle): void;
					public static create(): androidx.camera.core.impl.MutableTagBundle;
					public putTag(param0: string, param1: any): void;
					public static from(param0: androidx.camera.core.impl.TagBundle): androidx.camera.core.impl.MutableTagBundle;
					public static from(param0: androidx.camera.core.impl.TagBundle): androidx.camera.core.impl.TagBundle;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class Observable<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.Observable<any>>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.Observable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchData(): com.google.common.util.concurrent.ListenableFuture<T>;
						addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
						removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
					});
					public constructor();
					public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
					public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
					public fetchData(): com.google.common.util.concurrent.ListenableFuture<T>;
				}
				export namespace Observable {
					export class Observer<T>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.Observable.Observer<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.Observable$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onNewData(param0: T): void;
							onError(param0: java.lang.Throwable): void;
						});
						public constructor();
						public onNewData(param0: T): void;
						public onError(param0: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class OptionsBundle extends java.lang.Object implements androidx.camera.core.impl.Config {
					public static class: java.lang.Class<androidx.camera.core.impl.OptionsBundle>;
					public static ID_COMPARE: java.util.Comparator<androidx.camera.core.impl.Config.Option<any>>;
					public mOptions: java.util.TreeMap<androidx.camera.core.impl.Config.Option<any>,java.util.Map<androidx.camera.core.impl.Config.OptionPriority,any>>;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static from(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.OptionsBundle;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public static emptyBundle(): androidx.camera.core.impl.OptionsBundle;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class OutputSurface extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.OutputSurface>;
					public constructor();
					public getImageFormat(): number;
					public getSurface(): globalAndroid.view.Surface;
					public getSize(): any;
					public static create(param0: globalAndroid.view.Surface, param1: any, param2: number): androidx.camera.core.impl.OutputSurface;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class PreviewConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.PreviewConfig>;
					public static IMAGE_INFO_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.ImageInfoProcessor>;
					public static OPTION_PREVIEW_CAPTURE_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureProcessor>;
					public static OPTION_RGBA8888_SURFACE_REQUIRED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
					public isRgba8888SurfaceRequired(param0: boolean): boolean;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getMaxResolution(param0: any): any;
					public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public constructor(param0: androidx.camera.core.impl.OptionsBundle);
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getTargetResolution(param0: any): any;
					public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public hasTargetAspectRatio(): boolean;
					public getTargetRotation(param0: number): number;
					public getInputFormat(): number;
					public getTargetClass(): java.lang.Class<any>;
					public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public isZslDisabled(param0: boolean): boolean;
					public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
					public getSurfaceOccupancyPriority(): number;
					public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
					public getTargetName(): string;
					public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getBackgroundExecutor(): java.util.concurrent.Executor;
					public getTargetName(param0: string): string;
					public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getAppTargetRotation(param0: number): number;
					public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getCaptureProcessor(): androidx.camera.core.impl.CaptureProcessor;
					public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
					public getCameraSelector(): androidx.camera.core.CameraSelector;
					public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
					public getDefaultResolution(param0: any): any;
					public getTargetRotation(): number;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public getTargetAspectRatio(): number;
					public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
					public getSurfaceOccupancyPriority(param0: number): number;
					public getCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.impl.CaptureProcessor;
					public getImageInfoProcessor(param0: androidx.camera.core.impl.ImageInfoProcessor): androidx.camera.core.impl.ImageInfoProcessor;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public getTargetResolution(): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public getConfig(): androidx.camera.core.impl.Config;
					public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getMaxResolution(): any;
					public getDefaultResolution(): any;
					public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class Quirk extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.Quirk>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.Quirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class Quirks extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.Quirks>;
					public get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
					public contains(param0: java.lang.Class<any>): boolean;
					public constructor(param0: java.util.List<androidx.camera.core.impl.Quirk>);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class ReadableConfig extends java.lang.Object implements androidx.camera.core.impl.Config {
					public static class: java.lang.Class<androidx.camera.core.impl.ReadableConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.ReadableConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getConfig(): androidx.camera.core.impl.Config;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class RequestProcessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.RequestProcessor>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.RequestProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						submit(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
						submit(param0: java.util.List<androidx.camera.core.impl.RequestProcessor.Request>, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
						setRepeating(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
						abortCaptures(): void;
						stopRepeating(): void;
					});
					public constructor();
					public submit(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
					public setRepeating(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
					public stopRepeating(): void;
					public submit(param0: java.util.List<androidx.camera.core.impl.RequestProcessor.Request>, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
					public abortCaptures(): void;
				}
				export namespace RequestProcessor {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.RequestProcessor.Callback>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.RequestProcessor$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCaptureStarted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
							onCaptureProgressed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
							onCaptureCompleted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
							onCaptureFailed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureFailure): void;
							onCaptureBufferLost(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
							onCaptureSequenceCompleted(param0: number, param1: number): void;
							onCaptureSequenceAborted(param0: number): void;
						});
						public constructor();
						public onCaptureBufferLost(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
						public onCaptureCompleted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
						public onCaptureStarted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
						public onCaptureSequenceAborted(param0: number): void;
						public onCaptureFailed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureFailure): void;
						public onCaptureSequenceCompleted(param0: number, param1: number): void;
						public onCaptureProgressed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
					}
					export class Request extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.RequestProcessor.Request>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.RequestProcessor$Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTargetOutputConfigIds(): java.util.List<java.lang.Integer>;
							getParameters(): androidx.camera.core.impl.Config;
							getTemplateId(): number;
						});
						public constructor();
						public getTemplateId(): number;
						public getParameters(): androidx.camera.core.impl.Config;
						public getTargetOutputConfigIds(): java.util.List<java.lang.Integer>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class SessionConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig>;
					public getDeviceStateCallbacks(): java.util.List<globalAndroid.hardware.camera2.CameraDevice.StateCallback>;
					public getInputConfiguration(): globalAndroid.hardware.camera2.params.InputConfiguration;
					public getRepeatingCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
					public getSessionStateCallbacks(): java.util.List<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>;
					public getErrorListeners(): java.util.List<androidx.camera.core.impl.SessionConfig.ErrorListener>;
					public getSingleCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
					public static defaultEmptySessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getRepeatingCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public getSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
					public getOutputConfigs(): java.util.List<androidx.camera.core.impl.SessionConfig.OutputConfig>;
					public getImplementationOptions(): androidx.camera.core.impl.Config;
					public getTemplateType(): number;
				}
				export namespace SessionConfig {
					export class BaseBuilder extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.BaseBuilder>;
					}
					export class Builder extends androidx.camera.core.impl.SessionConfig.BaseBuilder {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.Builder>;
						public constructor();
						public addAllDeviceStateCallbacks(param0: java.util.Collection<globalAndroid.hardware.camera2.CameraDevice.StateCallback>): androidx.camera.core.impl.SessionConfig.Builder;
						public clearSurfaces(): androidx.camera.core.impl.SessionConfig.Builder;
						public addImplementationOptions(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.SessionConfig.Builder;
						public addDeviceStateCallback(param0: globalAndroid.hardware.camera2.CameraDevice.StateCallback): androidx.camera.core.impl.SessionConfig.Builder;
						public addRepeatingCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): androidx.camera.core.impl.SessionConfig.Builder;
						public build(): androidx.camera.core.impl.SessionConfig;
						public setTemplateType(param0: number): androidx.camera.core.impl.SessionConfig.Builder;
						public setImplementationOptions(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.SessionConfig.Builder;
						public static createFrom(param0: androidx.camera.core.impl.UseCaseConfig<any>): androidx.camera.core.impl.SessionConfig.Builder;
						public addSessionStateCallback(param0: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback): androidx.camera.core.impl.SessionConfig.Builder;
						public addAllRepeatingCameraCaptureCallbacks(param0: java.util.Collection<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.impl.SessionConfig.Builder;
						public addSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.Builder;
						public setInputConfiguration(param0: globalAndroid.hardware.camera2.params.InputConfiguration): androidx.camera.core.impl.SessionConfig.Builder;
						public getSingleCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
						public removeCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): boolean;
						public removeSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.Builder;
						public addOutputConfig(param0: androidx.camera.core.impl.SessionConfig.OutputConfig): androidx.camera.core.impl.SessionConfig.Builder;
						public addNonRepeatingSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.Builder;
						public addAllSessionStateCallbacks(param0: java.util.List<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>): androidx.camera.core.impl.SessionConfig.Builder;
						public addAllCameraCaptureCallbacks(param0: java.util.Collection<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.impl.SessionConfig.Builder;
						public addCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): androidx.camera.core.impl.SessionConfig.Builder;
						public addTag(param0: string, param1: any): androidx.camera.core.impl.SessionConfig.Builder;
						public addErrorListener(param0: androidx.camera.core.impl.SessionConfig.ErrorListener): androidx.camera.core.impl.SessionConfig.Builder;
					}
					export class ErrorListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.ErrorListener>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.SessionConfig$ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: androidx.camera.core.impl.SessionConfig, param1: androidx.camera.core.impl.SessionConfig.SessionError): void;
						});
						public constructor();
						public onError(param0: androidx.camera.core.impl.SessionConfig, param1: androidx.camera.core.impl.SessionConfig.SessionError): void;
					}
					export class OptionUnpacker extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.OptionUnpacker>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.SessionConfig$OptionUnpacker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.SessionConfig.Builder): void;
						});
						public constructor();
						public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.SessionConfig.Builder): void;
					}
					export abstract class OutputConfig extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.OutputConfig>;
						public static SURFACE_GROUP_ID_NONE: number = -1;
						public static builder(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
						public constructor();
						public getSharedSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
						public getPhysicalCameraId(): string;
						public getSurfaceGroupId(): number;
						public getSurface(): androidx.camera.core.impl.DeferrableSurface;
					}
					export namespace OutputConfig {
						export abstract class Builder extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.OutputConfig.Builder>;
							public constructor();
							public setSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
							public build(): androidx.camera.core.impl.SessionConfig.OutputConfig;
							public setPhysicalCameraId(param0: string): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
							public setSharedSurfaces(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
							public setSurfaceGroupId(param0: number): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
						}
					}
					export class SessionError {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.SessionError>;
						public static SESSION_ERROR_SURFACE_NEEDS_RESET: androidx.camera.core.impl.SessionConfig.SessionError;
						public static SESSION_ERROR_UNKNOWN: androidx.camera.core.impl.SessionConfig.SessionError;
						public static values(): androidNative.Array<androidx.camera.core.impl.SessionConfig.SessionError>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): androidx.camera.core.impl.SessionConfig.SessionError;
					}
					export class ValidatingBuilder extends androidx.camera.core.impl.SessionConfig.BaseBuilder {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.ValidatingBuilder>;
						public constructor();
						public addImplementationOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
						public build(): androidx.camera.core.impl.SessionConfig;
						public add(param0: androidx.camera.core.impl.SessionConfig): void;
						public clearSurfaces(): void;
						public isValid(): boolean;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class SessionProcessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.SessionProcessor>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.SessionProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initSession(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.core.impl.OutputSurface, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface): androidx.camera.core.impl.SessionConfig;
						deInitSession(): void;
						setParameters(param0: androidx.camera.core.impl.Config): void;
						onCaptureSessionStart(param0: androidx.camera.core.impl.RequestProcessor): void;
						onCaptureSessionEnd(): void;
						startRepeating(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
						stopRepeating(): void;
						startCapture(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
						abortCapture(param0: number): void;
					});
					public constructor();
					public onCaptureSessionStart(param0: androidx.camera.core.impl.RequestProcessor): void;
					public deInitSession(): void;
					public setParameters(param0: androidx.camera.core.impl.Config): void;
					public stopRepeating(): void;
					public startCapture(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
					public startRepeating(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
					public initSession(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.core.impl.OutputSurface, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface): androidx.camera.core.impl.SessionConfig;
					public onCaptureSessionEnd(): void;
					public abortCapture(param0: number): void;
				}
				export namespace SessionProcessor {
					export class CaptureCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.SessionProcessor.CaptureCallback>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.SessionProcessor$CaptureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCaptureStarted(param0: number, param1: number): void;
							onCaptureProcessStarted(param0: number): void;
							onCaptureFailed(param0: number): void;
							onCaptureSequenceCompleted(param0: number): void;
							onCaptureSequenceAborted(param0: number): void;
							onCaptureCompleted(param0: number, param1: number, param2: java.util.Map<globalAndroid.hardware.camera2.CaptureResult.Key,any>): void;
						});
						public constructor();
						public onCaptureSequenceCompleted(param0: number): void;
						public onCaptureProcessStarted(param0: number): void;
						public onCaptureFailed(param0: number): void;
						public onCaptureCompleted(param0: number, param1: number, param2: java.util.Map<globalAndroid.hardware.camera2.CaptureResult.Key,any>): void;
						public onCaptureStarted(param0: number, param1: number): void;
						public onCaptureSequenceAborted(param0: number): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class SessionProcessorSurface extends androidx.camera.core.impl.DeferrableSurface {
					public static class: java.lang.Class<androidx.camera.core.impl.SessionProcessorSurface>;
					public constructor(param0: any, param1: number);
					public constructor();
					public getOutputConfigId(): number;
					public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
					public constructor(param0: globalAndroid.view.Surface, param1: number);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class SingleImageProxyBundle extends java.lang.Object implements androidx.camera.core.impl.ImageProxyBundle {
					public static class: java.lang.Class<androidx.camera.core.impl.SingleImageProxyBundle>;
					public getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
					public close(): void;
					public getCaptureIds(): java.util.List<java.lang.Integer>;
					public constructor(param0: androidx.camera.core.ImageProxy, param1: string);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class StateObservable<T>  extends androidx.camera.core.impl.Observable<any> {
					public static class: java.lang.Class<androidx.camera.core.impl.StateObservable<any>>;
					public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
					public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
					public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
				}
				export namespace StateObservable {
					export abstract class ErrorWrapper extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.StateObservable.ErrorWrapper>;
						public getError(): java.lang.Throwable;
					}
					export class ObserverWrapper<T>  extends java.lang.Runnable {
						public static class: java.lang.Class<androidx.camera.core.impl.StateObservable.ObserverWrapper<any>>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class SurfaceCombination extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.SurfaceCombination>;
					public getSurfaceConfigList(): java.util.List<androidx.camera.core.impl.SurfaceConfig>;
					public removeSurfaceConfig(param0: androidx.camera.core.impl.SurfaceConfig): boolean;
					public isSupported(param0: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean;
					public constructor();
					public addSurfaceConfig(param0: androidx.camera.core.impl.SurfaceConfig): boolean;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class SurfaceConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.SurfaceConfig>;
					public getConfigType(): androidx.camera.core.impl.SurfaceConfig.ConfigType;
					public getConfigSize(): androidx.camera.core.impl.SurfaceConfig.ConfigSize;
					public static getConfigType(param0: number): androidx.camera.core.impl.SurfaceConfig.ConfigType;
					public static create(param0: androidx.camera.core.impl.SurfaceConfig.ConfigType, param1: androidx.camera.core.impl.SurfaceConfig.ConfigSize): androidx.camera.core.impl.SurfaceConfig;
					public isSupported(param0: androidx.camera.core.impl.SurfaceConfig): boolean;
					public static transformSurfaceConfig(param0: number, param1: any, param2: androidx.camera.core.impl.SurfaceSizeDefinition): androidx.camera.core.impl.SurfaceConfig;
				}
				export namespace SurfaceConfig {
					export class ConfigSize {
						public static class: java.lang.Class<androidx.camera.core.impl.SurfaceConfig.ConfigSize>;
						public static VGA: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
						public static PREVIEW: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
						public static RECORD: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
						public static MAXIMUM: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
						public static NOT_SUPPORT: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
						public static values(): androidNative.Array<androidx.camera.core.impl.SurfaceConfig.ConfigSize>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): androidx.camera.core.impl.SurfaceConfig.ConfigSize;
					}
					export class ConfigType {
						public static class: java.lang.Class<androidx.camera.core.impl.SurfaceConfig.ConfigType>;
						public static PRIV: androidx.camera.core.impl.SurfaceConfig.ConfigType;
						public static YUV: androidx.camera.core.impl.SurfaceConfig.ConfigType;
						public static JPEG: androidx.camera.core.impl.SurfaceConfig.ConfigType;
						public static RAW: androidx.camera.core.impl.SurfaceConfig.ConfigType;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): androidx.camera.core.impl.SurfaceConfig.ConfigType;
						public static values(): androidNative.Array<androidx.camera.core.impl.SurfaceConfig.ConfigType>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export abstract class SurfaceSizeDefinition extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.SurfaceSizeDefinition>;
					public getRecordSize(): any;
					public static create(param0: any, param1: any, param2: any): androidx.camera.core.impl.SurfaceSizeDefinition;
					public getPreviewSize(): any;
					public getAnalysisSize(): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class TagBundle extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.TagBundle>;
					public mTagMap: java.util.Map<string,any>;
					public static create(param0: globalAndroid.util.Pair<string,any>): androidx.camera.core.impl.TagBundle;
					public toString(): string;
					public getTag(param0: string): any;
					public listKeys(): java.util.Set<string>;
					public static emptyBundle(): androidx.camera.core.impl.TagBundle;
					public static from(param0: androidx.camera.core.impl.TagBundle): androidx.camera.core.impl.TagBundle;
					public constructor(param0: java.util.Map<string,any>);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class Timebase {
					public static class: java.lang.Class<androidx.camera.core.impl.Timebase>;
					public static UPTIME: androidx.camera.core.impl.Timebase;
					public static REALTIME: androidx.camera.core.impl.Timebase;
					public static valueOf(param0: string): androidx.camera.core.impl.Timebase;
					public static values(): androidNative.Array<androidx.camera.core.impl.Timebase>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class UseCaseAttachState extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.UseCaseAttachState>;
					public constructor(param0: string);
					public setUseCaseDetached(param0: string): void;
					public isUseCaseAttached(param0: string): boolean;
					public setUseCaseActive(param0: string, param1: androidx.camera.core.impl.SessionConfig, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
					public setUseCaseInactive(param0: string): void;
					public getActiveAndAttachedBuilder(): androidx.camera.core.impl.SessionConfig.ValidatingBuilder;
					public getAttachedBuilder(): androidx.camera.core.impl.SessionConfig.ValidatingBuilder;
					public getAttachedUseCaseConfigs(): java.util.Collection<androidx.camera.core.impl.UseCaseConfig<any>>;
					public getAttachedSessionConfigs(): java.util.Collection<androidx.camera.core.impl.SessionConfig>;
					public removeUseCase(param0: string): void;
					public getActiveAndAttachedSessionConfigs(): java.util.Collection<androidx.camera.core.impl.SessionConfig>;
					public updateUseCase(param0: string, param1: androidx.camera.core.impl.SessionConfig, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
					public setUseCaseAttached(param0: string, param1: androidx.camera.core.impl.SessionConfig, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
				}
				export namespace UseCaseAttachState {
					export class AttachStateFilter extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.UseCaseAttachState.AttachStateFilter>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.UseCaseAttachState$AttachStateFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							filter(param0: androidx.camera.core.impl.UseCaseAttachState.UseCaseAttachInfo): boolean;
						});
						public constructor();
						public filter(param0: androidx.camera.core.impl.UseCaseAttachState.UseCaseAttachInfo): boolean;
					}
					export class UseCaseAttachInfo extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.UseCaseAttachState.UseCaseAttachInfo>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class UseCaseConfig<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfig<any>>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfig<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
						getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
						getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
						getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
						getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
						getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
						getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
						getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
						getSurfaceOccupancyPriority(param0: number): number;
						getSurfaceOccupancyPriority(): number;
						getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
						getCameraSelector(): androidx.camera.core.CameraSelector;
						getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
						getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
						isZslDisabled(param0: boolean): boolean;
						"<clinit>"(): void;
						getTargetClass(param0: java.lang.Class<T>): java.lang.Class<T>;
						getTargetClass(): java.lang.Class<T>;
						getTargetName(param0: string): string;
						getTargetName(): string;
						"<clinit>"(): void;
						getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
						getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
						"<clinit>"(): void;
						getInputFormat(): number;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_DEFAULT_CAPTURE_CONFIG: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureConfig>;
					public static OPTION_USE_CASE_EVENT_CALLBACK: androidx.camera.core.impl.Config.Option<androidx.camera.core.UseCase.EventCallback>;
					public static OPTION_SESSION_CONFIG_UNPACKER: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.SessionConfig.OptionUnpacker>;
					public static OPTION_CAPTURE_CONFIG_UNPACKER: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureConfig.OptionUnpacker>;
					public static OPTION_TARGET_FRAME_RATE: androidx.camera.core.impl.Config.Option<globalAndroid.util.Range<java.lang.Integer>>;
					public static OPTION_TARGET_NAME: androidx.camera.core.impl.Config.Option<string>;
					public static OPTION_TARGET_CLASS: androidx.camera.core.impl.Config.Option<java.lang.Class<any>>;
					public static OPTION_DEFAULT_SESSION_CONFIG: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.SessionConfig>;
					public static OPTION_CAMERA_SELECTOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.CameraSelector>;
					public static OPTION_INPUT_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_SURFACE_OCCUPANCY_PRIORITY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_ZSL_DISABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
					public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
					public getCameraSelector(): androidx.camera.core.CameraSelector;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
					public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public getSurfaceOccupancyPriority(param0: number): number;
					public getInputFormat(): number;
					public getTargetClass(): java.lang.Class<T>;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public isZslDisabled(param0: boolean): boolean;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
					public getSurfaceOccupancyPriority(): number;
					public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getConfig(): androidx.camera.core.impl.Config;
					public getTargetName(): string;
					public getTargetClass(param0: java.lang.Class<T>): java.lang.Class<T>;
					public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getTargetName(param0: string): string;
					public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
					public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
				}
				export namespace UseCaseConfig {
					export class Builder<T, C, B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfig.Builderany>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): B;
							setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): B;
							setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): B;
							setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): B;
							setSurfaceOccupancyPriority(param0: number): B;
							setCameraSelector(param0: androidx.camera.core.CameraSelector): B;
							setZslDisabled(param0: boolean): B;
							getUseCaseConfig(): C;
							setTargetClass(param0: java.lang.Class<T>): B;
							setTargetName(param0: string): B;
							getMutableConfig(): androidx.camera.core.impl.MutableConfig;
							build(): T;
							setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B;
						});
						public constructor();
						public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): B;
						public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B;
						public setTargetClass(param0: java.lang.Class<T>): B;
						public setTargetName(param0: string): B;
						public setCameraSelector(param0: androidx.camera.core.CameraSelector): B;
						public setSurfaceOccupancyPriority(param0: number): B;
						public setZslDisabled(param0: boolean): B;
						public getUseCaseConfig(): C;
						public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): B;
						public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): B;
						public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): B;
						public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
						public build(): T;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class UseCaseConfigFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfigFactory>;
					/**
					 * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfigFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConfig(param0: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType, param1: number): androidx.camera.core.impl.Config;
						"<clinit>"(): void;
					});
					public constructor();
					public static EMPTY_INSTANCE: androidx.camera.core.impl.UseCaseConfigFactory;
					public getConfig(param0: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType, param1: number): androidx.camera.core.impl.Config;
				}
				export namespace UseCaseConfigFactory {
					export class CaptureType {
						public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfigFactory.CaptureType>;
						public static IMAGE_CAPTURE: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
						public static PREVIEW: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
						public static IMAGE_ANALYSIS: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
						public static VIDEO_CAPTURE: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
						public static valueOf(param0: string): androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): androidNative.Array<androidx.camera.core.impl.UseCaseConfigFactory.CaptureType>;
					}
					export class Provider extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfigFactory.Provider>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfigFactory$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newInstance(param0: globalAndroid.content.Context): androidx.camera.core.impl.UseCaseConfigFactory;
						});
						public constructor();
						public newInstance(param0: globalAndroid.content.Context): androidx.camera.core.impl.UseCaseConfigFactory;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export class VideoCaptureConfig extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.impl.VideoCaptureConfig>;
					public static OPTION_VIDEO_FRAME_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_BIT_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_INTRA_FRAME_INTERVAL: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_AUDIO_BIT_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_AUDIO_SAMPLE_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_AUDIO_CHANNEL_COUNT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public static OPTION_AUDIO_MIN_BUFFER_SIZE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
					public getAudioMinBufferSize(param0: number): number;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getMaxResolution(param0: any): any;
					public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
					public getIFrameInterval(param0: number): number;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public constructor(param0: androidx.camera.core.impl.OptionsBundle);
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getAudioBitRate(): number;
					public getTargetResolution(param0: any): any;
					public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
					public hasTargetAspectRatio(): boolean;
					public getTargetRotation(param0: number): number;
					public getInputFormat(): number;
					public getAudioMinBufferSize(): number;
					public getTargetClass(): java.lang.Class<any>;
					public getAudioBitRate(param0: number): number;
					public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getIFrameInterval(): number;
					public isZslDisabled(param0: boolean): boolean;
					public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer,androidNative.Array<any>>>;
					public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
					public getSurfaceOccupancyPriority(): number;
					public getAudioSampleRate(param0: number): number;
					public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
					public getTargetName(): string;
					public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getBackgroundExecutor(): java.util.concurrent.Executor;
					public getTargetName(param0: string): string;
					public getAudioChannelCount(param0: number): number;
					public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
					public getAppTargetRotation(param0: number): number;
					public getAudioChannelCount(): number;
					public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
					public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
					public getCameraSelector(): androidx.camera.core.CameraSelector;
					public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
					public getDefaultResolution(param0: any): any;
					public getTargetRotation(): number;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public getVideoFrameRate(param0: number): number;
					public getBitRate(param0: number): number;
					public getTargetAspectRatio(): number;
					public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
					public getSurfaceOccupancyPriority(param0: number): number;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
					public getTargetResolution(): any;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public getConfig(): androidx.camera.core.impl.Config;
					public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
					public getVideoFrameRate(): number;
					public getMaxResolution(): any;
					public getDefaultResolution(): any;
					public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
					public getAudioSampleRate(): number;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public getBitRate(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace annotation {
					export class ExecutedBy extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.core.impl.annotation.ExecutedBy>;
						/**
						 * Constructs a new instance of the androidx.camera.core.impl.annotation.ExecutedBy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class Absent<T>  extends androidx.camera.core.impl.utils.Optional<any> {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.Absent<any>>;
						public isPresent(): boolean;
						public orNull(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public get(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class AspectRatioUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.AspectRatioUtil>;
						public static ASPECT_RATIO_4_3: globalAndroid.util.Rational;
						public static ASPECT_RATIO_3_4: globalAndroid.util.Rational;
						public static ASPECT_RATIO_16_9: globalAndroid.util.Rational;
						public static ASPECT_RATIO_9_16: globalAndroid.util.Rational;
						public static hasMatchingAspectRatio(param0: any, param1: globalAndroid.util.Rational): boolean;
					}
					export namespace AspectRatioUtil {
						export class CompareAspectRatiosByDistanceToTargetRatio extends java.util.Comparator<globalAndroid.util.Rational> {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.AspectRatioUtil.CompareAspectRatiosByDistanceToTargetRatio>;
							public constructor(param0: globalAndroid.util.Rational);
							public compare(param0: any, param1: any): number;
							public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public compare(param0: globalAndroid.util.Rational, param1: globalAndroid.util.Rational): number;
							public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ByteOrderedDataInputStream extends java.io.InputStream implements java.io.DataInput {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ByteOrderedDataInputStream>;
						public read(param0: androidNative.Array<number>): number;
						public readInt(): number;
						public readUnsignedByte(): number;
						public readUTF(): string;
						public close(): void;
						public readChar(): string;
						public peek(): number;
						public getLength(): number;
						public readFully(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public readByte(): number;
						public readUnsignedShort(): number;
						public readLong(): number;
						public readLine(): string;
						public read(): number;
						public skipBytes(param0: number): number;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public readFully(param0: androidNative.Array<number>): void;
						public readDouble(): number;
						public mark(param0: number): void;
						public readUnsignedInt(): number;
						public available(): number;
						public readShort(): number;
						public setByteOrder(param0: java.nio.ByteOrder): void;
						public readBoolean(): boolean;
						public readFloat(): number;
						public seek(param0: number): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ByteOrderedDataOutputStream extends java.io.FilterOutputStream {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ByteOrderedDataOutputStream>;
						public setByteOrder(param0: java.nio.ByteOrder): void;
						public writeUnsignedShort(param0: number): void;
						public close(): void;
						public write(param0: number): void;
						public writeByte(param0: number): void;
						public writeInt(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public flush(): void;
						public writeUnsignedInt(param0: number): void;
						public writeShort(param0: number): void;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class CameraOrientationUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.CameraOrientationUtil>;
						public static surfaceRotationToDegrees(param0: number): number;
						public static getRelativeImageRotation(param0: number, param1: number, param2: boolean): number;
						public static degreesToSurfaceRotation(param0: number): number;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class CloseGuardHelper extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper>;
						public static create(): androidx.camera.core.impl.utils.CloseGuardHelper;
						public close(): void;
						public open(param0: string): void;
						public warnIfOpen(): void;
					}
					export namespace CloseGuardHelper {
						export class CloseGuardApi30Impl extends java.lang.Object implements androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardImpl {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardApi30Impl>;
							public close(): void;
							public open(param0: string): void;
							public warnIfOpen(): void;
						}
						export class CloseGuardImpl extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardImpl>;
							/**
							 * Constructs a new instance of the androidx.camera.core.impl.utils.CloseGuardHelper$CloseGuardImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								open(param0: string): void;
								close(): void;
								warnIfOpen(): void;
							});
							public constructor();
							public close(): void;
							public open(param0: string): void;
							public warnIfOpen(): void;
						}
						export class CloseGuardNoOpImpl extends java.lang.Object implements androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardImpl {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardNoOpImpl>;
							public close(): void;
							public open(param0: string): void;
							public warnIfOpen(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class CompareSizesByArea extends java.util.Comparator<any> {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.CompareSizesByArea>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public constructor();
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public constructor(param0: boolean);
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ContextUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ContextUtil>;
						public static getApplicationContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						public static getApplicationFromContext(param0: globalAndroid.content.Context): globalAndroid.app.Application;
						public static getBaseContext(param0: globalAndroid.content.ContextWrapper): globalAndroid.content.Context;
					}
					export namespace ContextUtil {
						export class Api30Impl extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.ContextUtil.Api30Impl>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class Exif extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.Exif>;
						public static INVALID_TIMESTAMP: number = -1;
						public static createFromInputStream(param0: java.io.InputStream): androidx.camera.core.impl.utils.Exif;
						public flipVertically(): void;
						public flipHorizontally(): void;
						public getLocation(): globalAndroid.location.Location;
						public isFlippedHorizontally(): boolean;
						public attachLocation(param0: globalAndroid.location.Location): void;
						public rotate(param0: number): void;
						public attachTimestamp(): void;
						public static createFromFileString(param0: string): androidx.camera.core.impl.utils.Exif;
						public isFlippedVertically(): boolean;
						public getTimestamp(): number;
						public setOrientation(param0: number): void;
						public getRotation(): number;
						public getLastModifiedTimestamp(): number;
						public getOrientation(): number;
						public copyToCroppedImage(param0: androidx.camera.core.impl.utils.Exif): void;
						public static getAllExifTags(): java.util.List<string>;
						public getHeight(): number;
						public toString(): string;
						public setDescription(param0: string): void;
						public static createFromImageProxy(param0: androidx.camera.core.ImageProxy): androidx.camera.core.impl.utils.Exif;
						public removeTimestamp(): void;
						public getWidth(): number;
						public getExifInterface(): androidx.exifinterface.media.ExifInterface;
						public static createFromFile(param0: java.io.File): androidx.camera.core.impl.utils.Exif;
						public save(): void;
						public getDescription(): string;
						public removeLocation(): void;
					}
					export namespace Exif {
						export class Speed extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.Exif.Speed>;
						}
						export namespace Speed {
							export class Converter extends java.lang.Object {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.Exif.Speed.Converter>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ExifAttribute extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifAttribute>;
						public static BYTES_OFFSET_UNKNOWN: number = -1;
						public format: number;
						public numberOfComponents: number;
						public bytesOffset: number;
						public bytes: androidNative.Array<number>;
						public static createString(param0: string): androidx.camera.core.impl.utils.ExifAttribute;
						public static createSRational(param0: androidNative.Array<androidx.camera.core.impl.utils.LongRational>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createULong(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createUShort(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createULong(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createURational(param0: androidx.camera.core.impl.utils.LongRational, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createSLong(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createByte(param0: string): androidx.camera.core.impl.utils.ExifAttribute;
						public static createSRational(param0: androidx.camera.core.impl.utils.LongRational, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public getStringValue(param0: java.nio.ByteOrder): string;
						public toString(): string;
						public static createSLong(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createDouble(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createUShort(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public getIntValue(param0: java.nio.ByteOrder): number;
						public static createURational(param0: androidNative.Array<androidx.camera.core.impl.utils.LongRational>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public static createDouble(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
						public getDoubleValue(param0: java.nio.ByteOrder): number;
						public size(): number;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ExifData extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifData>;
						public static builderForDevice(): androidx.camera.core.impl.utils.ExifData.Builder;
						public static create(param0: androidx.camera.core.ImageProxy, param1: number): androidx.camera.core.impl.utils.ExifData;
						public getByteOrder(): java.nio.ByteOrder;
						public getAttribute(param0: string): string;
					}
					export namespace ExifData {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifData.Builder>;
							public setImageWidth(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public setExposureTimeNanos(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public setFlashState(param0: androidx.camera.core.impl.CameraCaptureMetaData.FlashState): androidx.camera.core.impl.utils.ExifData.Builder;
							public setLensFNumber(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public setFocalLength(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public removeAttribute(param0: string): androidx.camera.core.impl.utils.ExifData.Builder;
							public setIso(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public setOrientationDegrees(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public setWhiteBalanceMode(param0: androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode): androidx.camera.core.impl.utils.ExifData.Builder;
							public setAttribute(param0: string, param1: string): androidx.camera.core.impl.utils.ExifData.Builder;
							public setImageHeight(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
							public build(): androidx.camera.core.impl.utils.ExifData;
						}
						export class WhiteBalanceMode {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode>;
							public static AUTO: androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode;
							public static MANUAL: androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static values(): androidNative.Array<androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode>;
							public static valueOf(param0: string): androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ExifOutputStream extends java.io.FilterOutputStream {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifOutputStream>;
						public constructor(param0: java.io.OutputStream);
						public constructor(param0: java.io.OutputStream, param1: androidx.camera.core.impl.utils.ExifData);
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public flush(): void;
						public write(param0: androidNative.Array<number>): void;
					}
					export namespace ExifOutputStream {
						export class JpegHeader extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifOutputStream.JpegHeader>;
							public static SOI: number = -40;
							public static APP1: number = -31;
							public static EOI: number = -39;
							public static SOF0: number = -64;
							public static SOF15: number = -49;
							public static DHT: number = -60;
							public static JPG: number = -56;
							public static DAC: number = -52;
							public static isSofMarker(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class ExifTag extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifTag>;
						public number: number;
						public name: string;
						public primaryFormat: number;
						public secondaryFormat: number;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class LongRational extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.LongRational>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class MainThreadAsyncHandler extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.MainThreadAsyncHandler>;
						public static getInstance(): globalAndroid.os.Handler;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class MatrixExt extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.MatrixExt>;
						public static preRotate(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
						public static toString(param0: androidNative.Array<number>, param1: number): string;
						public static setRotate(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
						public static postRotate(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export abstract class Optional<T>  extends java.io.Serializable {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.Optional<any>>;
						public isPresent(): boolean;
						public orNull(): any;
						public static fromNullable(param0: any): androidx.camera.core.impl.utils.Optional<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static absent(): androidx.camera.core.impl.utils.Optional<any>;
						public get(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class Present<T>  extends androidx.camera.core.impl.utils.Optional<any> {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.Present<any>>;
						public isPresent(): boolean;
						public orNull(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public get(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class Threads extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.Threads>;
						public static isMainThread(): boolean;
						public static checkBackgroundThread(): void;
						public static isBackgroundThread(): boolean;
						public static checkMainThread(): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export class TransformUtils extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.impl.utils.TransformUtils>;
						public static NORMALIZED_RECT: globalAndroid.graphics.RectF;
						public static rectToString(param0: globalAndroid.graphics.Rect): string;
						public static hasCropping(param0: globalAndroid.graphics.Rect, param1: any): boolean;
						public static sizeToRect(param0: any, param1: number, param2: number): globalAndroid.graphics.Rect;
						public static max(param0: number, param1: number, param2: number, param3: number): number;
						public static sizeToRectF(param0: any): globalAndroid.graphics.RectF;
						public static getNormalizedToBuffer(param0: globalAndroid.graphics.Rect): globalAndroid.graphics.Matrix;
						public static reverseSize(param0: any): any;
						public static rotateSize(param0: any, param1: number): any;
						public static isAspectRatioMatchingWithRoundingError(param0: any, param1: boolean, param2: any, param3: boolean): boolean;
						public static getNormalizedToBuffer(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.Matrix;
						public static min(param0: number, param1: number, param2: number, param3: number): number;
						public static is90or270(param0: number): boolean;
						public static rectToSize(param0: globalAndroid.graphics.Rect): any;
						public static sizeToRectF(param0: any, param1: number, param2: number): globalAndroid.graphics.RectF;
						public static sizeToVertices(param0: any): androidNative.Array<number>;
						public static getRectToRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.RectF, param2: number): globalAndroid.graphics.Matrix;
						public static rectToVertices(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
						public static updateSensorToBufferTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.Matrix;
						public static getRectToRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.RectF, param2: number, param3: boolean): globalAndroid.graphics.Matrix;
						public static getExifTransform(param0: number, param1: number, param2: number): globalAndroid.graphics.Matrix;
						public static verticesToRect(param0: androidNative.Array<number>): globalAndroid.graphics.RectF;
						public static sizeToRect(param0: any): globalAndroid.graphics.Rect;
						public static within360(param0: number): number;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class CameraXExecutors extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.CameraXExecutors>;
							public static newSequentialExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
							public static newHandlerExecutor(param0: globalAndroid.os.Handler): java.util.concurrent.ScheduledExecutorService;
							public static isSequentialExecutor(param0: java.util.concurrent.Executor): boolean;
							public static mainThreadExecutor(): java.util.concurrent.ScheduledExecutorService;
							public static myLooperExecutor(): java.util.concurrent.ScheduledExecutorService;
							public static highPriorityExecutor(): java.util.concurrent.Executor;
							public static ioExecutor(): java.util.concurrent.Executor;
							public static directExecutor(): java.util.concurrent.Executor;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class DirectExecutor extends java.lang.Object implements java.util.concurrent.Executor {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.DirectExecutor>;
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class HandlerScheduledExecutorService extends java.util.concurrent.AbstractExecutorService implements java.util.concurrent.ScheduledExecutorService {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.HandlerScheduledExecutorService>;
							public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
							public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
							public shutdownNow(): java.util.List<java.lang.Runnable>;
							public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
							public invokeAny(param0: java.util.Collection<any>): any;
							public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
							public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
							public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public shutdown(): void;
							public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
							public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
							public execute(param0: java.lang.Runnable): void;
							public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
							public isShutdown(): boolean;
							public isTerminated(): boolean;
							public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
							public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
						}
						export namespace HandlerScheduledExecutorService {
							export class HandlerScheduledFuture<V>  extends java.util.concurrent.RunnableScheduledFuture<any> {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.HandlerScheduledExecutorService.HandlerScheduledFuture<any>>;
								public isPeriodic(): boolean;
								public isCancelled(): boolean;
								public get(): any;
								public getDelay(param0: java.util.concurrent.TimeUnit): number;
								public run(): void;
								public isDone(): boolean;
								public cancel(param0: boolean): boolean;
								public compareTo(param0: java.util.concurrent.Delayed): number;
								public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class HighPriorityExecutor extends java.lang.Object implements java.util.concurrent.Executor {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.HighPriorityExecutor>;
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class IoExecutor extends java.lang.Object implements java.util.concurrent.Executor {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.IoExecutor>;
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class MainThreadExecutor extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.MainThreadExecutor>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace executor {
						export class SequentialExecutor extends java.lang.Object implements java.util.concurrent.Executor {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.SequentialExecutor>;
							public execute(param0: java.lang.Runnable): void;
						}
						export namespace SequentialExecutor {
							export class QueueWorker extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.SequentialExecutor.QueueWorker>;
								public run(): void;
							}
							export class WorkerRunningState {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState>;
								public static IDLE: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
								public static QUEUING: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
								public static QUEUED: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
								public static RUNNING: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
								public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
								public static valueOf(param0: string): androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
								public static values(): androidNative.Array<androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export class AsyncFunction<I, O>  extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.AsyncFunctionany>;
							/**
							 * Constructs a new instance of the androidx.camera.core.impl.utils.futures.AsyncFunctionany interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: I): com.google.common.util.concurrent.ListenableFuture<O>;
							});
							public constructor();
							public apply(param0: I): com.google.common.util.concurrent.ListenableFuture<O>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export class ChainingListenableFuture<I, O>  extends androidx.camera.core.impl.utils.futures.FutureChain<any> implements java.lang.Runnable  {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ChainingListenableFutureany>;
							public get(): any;
							public cancel(param0: boolean): boolean;
							public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export class FutureCallback<V>  extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.FutureCallback<any>>;
							/**
							 * Constructs a new instance of the androidx.camera.core.impl.utils.futures.FutureCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: V): void;
								onFailure(param0: java.lang.Throwable): void;
							});
							public constructor();
							public onSuccess(param0: V): void;
							public onFailure(param0: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export class FutureChain<V>  extends com.google.common.util.concurrent.ListenableFuture<any> {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.FutureChain<any>>;
							public transform(param0: androidx.arch.core.util.Function, param1: java.util.concurrent.Executor): androidx.camera.core.impl.utils.futures.FutureChain<any>;
							public addCallback(param0: androidx.camera.core.impl.utils.futures.FutureCallback<any>, param1: java.util.concurrent.Executor): void;
							public get(): any;
							public static from(param0: com.google.common.util.concurrent.ListenableFuture): androidx.camera.core.impl.utils.futures.FutureChain<any>;
							public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
							public cancel(param0: boolean): boolean;
							public isCancelled(): boolean;
							public isDone(): boolean;
							public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							public transformAsync(param0: androidx.camera.core.impl.utils.futures.AsyncFunctionany, param1: java.util.concurrent.Executor): androidx.camera.core.impl.utils.futures.FutureChain<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export class Futures extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.Futures>;
							public static addCallback(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.camera.core.impl.utils.futures.FutureCallback<any>, param2: java.util.concurrent.Executor): void;
							public static getDone(param0: java.util.concurrent.Future<any>): any;
							public static immediateFailedFuture(param0: java.lang.Throwable): com.google.common.util.concurrent.ListenableFuture;
							public static allAsList(param0: java.util.Collection<any>): com.google.common.util.concurrent.ListenableFuture;
							public static transform(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.arch.core.util.Function, param2: java.util.concurrent.Executor): com.google.common.util.concurrent.ListenableFuture;
							public static immediateFuture(param0: any): com.google.common.util.concurrent.ListenableFuture;
							public static immediateFailedScheduledFuture(param0: java.lang.Throwable): java.util.concurrent.ScheduledFuture<any>;
							public static getUninterruptibly(param0: java.util.concurrent.Future<any>): any;
							public static successfulAsList(param0: java.util.Collection<any>): com.google.common.util.concurrent.ListenableFuture;
							public static transformAsync(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.camera.core.impl.utils.futures.AsyncFunctionany, param2: java.util.concurrent.Executor): com.google.common.util.concurrent.ListenableFuture;
							public static nonCancellationPropagating(param0: com.google.common.util.concurrent.ListenableFuture): com.google.common.util.concurrent.ListenableFuture;
							public static propagateTransform(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.arch.core.util.Function, param2: androidx.concurrent.futures.CallbackToFutureAdapter.Completer, param3: java.util.concurrent.Executor): void;
							public static propagate(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.concurrent.futures.CallbackToFutureAdapter.Completer): void;
						}
						export namespace Futures {
							export class CallbackListener<V>  extends java.lang.Runnable {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.Futures.CallbackListener<any>>;
								public toString(): string;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export abstract class ImmediateFuture<V>  extends com.google.common.util.concurrent.ListenableFuture<any> {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture<any>>;
							public get(): any;
							public static nullFuture(): com.google.common.util.concurrent.ListenableFuture;
							public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
							public cancel(param0: boolean): boolean;
							public isCancelled(): boolean;
							public isDone(): boolean;
							public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
						}
						export namespace ImmediateFuture {
							export class ImmediateFailedFuture<V>  extends androidx.camera.core.impl.utils.futures.ImmediateFuture<any> {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedFuture<any>>;
								public toString(): string;
								public get(): any;
								public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							}
							export class ImmediateFailedScheduledFuture<V>  extends androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedFuture<any> implements java.util.concurrent.ScheduledFuture<any>  {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedScheduledFuture<any>>;
								public isCancelled(): boolean;
								public get(): any;
								public getDelay(param0: java.util.concurrent.TimeUnit): number;
								public isDone(): boolean;
								public cancel(param0: boolean): boolean;
								public compareTo(param0: java.util.concurrent.Delayed): number;
								public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							}
							export class ImmediateSuccessfulFuture<V>  extends androidx.camera.core.impl.utils.futures.ImmediateFuture<any> {
								public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateSuccessfulFuture<any>>;
								public toString(): string;
								public get(): any;
								public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace impl {
				export namespace utils {
					export namespace futures {
						export class ListFuture<V>  extends com.google.common.util.concurrent.ListenableFuture<java.util.List<any>> {
							public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ListFuture<any>>;
							public get(param0: number, param1: java.util.concurrent.TimeUnit): java.util.List<any>;
							public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
							public cancel(param0: boolean): boolean;
							public isCancelled(): boolean;
							public isDone(): boolean;
							public get(): java.util.List<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class AutoValue_ImmutableZoomState extends androidx.camera.core.internal.ImmutableZoomState {
					public static class: java.lang.Class<androidx.camera.core.internal.AutoValue_ImmutableZoomState>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getMinZoomRatio(): number;
					public getLinearZoom(): number;
					public getMaxZoomRatio(): number;
					public hashCode(): number;
					public getZoomRatio(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class ByteBufferOutputStream extends java.io.OutputStream {
					public static class: java.lang.Class<androidx.camera.core.internal.ByteBufferOutputStream>;
					public constructor();
					public write(param0: androidNative.Array<number>): void;
					public close(): void;
					public write(param0: number): void;
					public flush(): void;
					public constructor(param0: java.nio.ByteBuffer);
					public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class CameraCaptureResultImageInfo extends java.lang.Object implements androidx.camera.core.ImageInfo {
					public static class: java.lang.Class<androidx.camera.core.internal.CameraCaptureResultImageInfo>;
					public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
					public getRotationDegrees(): number;
					public getTimestamp(): number;
					public constructor(param0: androidx.camera.core.impl.CameraCaptureResult);
					public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
					public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
					public getTagBundle(): androidx.camera.core.impl.TagBundle;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class CameraUseCaseAdapter extends java.lang.Object implements androidx.camera.core.Camera {
					public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter>;
					public getUseCases(): java.util.List<androidx.camera.core.UseCase>;
					public getCameraId(): androidx.camera.core.internal.CameraUseCaseAdapter.CameraId;
					public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
					public attachUseCases(): void;
					public setEffects(param0: java.util.List<androidx.camera.core.CameraEffect>): void;
					public addUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
					public removeUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
					public constructor(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>, param1: androidx.camera.core.impl.CameraDeviceSurfaceManager, param2: androidx.camera.core.impl.UseCaseConfigFactory);
					public getCameraControl(): androidx.camera.core.CameraControl;
					public setViewPort(param0: androidx.camera.core.ViewPort): void;
					public detachUseCases(): void;
					public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
					public static generateCameraId(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>): androidx.camera.core.internal.CameraUseCaseAdapter.CameraId;
					public setActiveResumingMode(param0: boolean): void;
					public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
					public isEquivalent(param0: androidx.camera.core.internal.CameraUseCaseAdapter): boolean;
					public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
					public getCameraInfo(): androidx.camera.core.CameraInfo;
				}
				export namespace CameraUseCaseAdapter {
					export class CameraException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter.CameraException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
					export class CameraId extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter.CameraId>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export class ConfigPair extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter.ConfigPair>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export abstract class ImmutableZoomState extends java.lang.Object implements androidx.camera.core.ZoomState {
					public static class: java.lang.Class<androidx.camera.core.internal.ImmutableZoomState>;
					public static create(param0: androidx.camera.core.ZoomState): androidx.camera.core.ZoomState;
					public static create(param0: number, param1: number, param2: number, param3: number): androidx.camera.core.ZoomState;
					public getMinZoomRatio(): number;
					public constructor();
					public getLinearZoom(): number;
					public getMaxZoomRatio(): number;
					public getZoomRatio(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class IoConfig extends java.lang.Object implements androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.internal.IoConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.internal.IoConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getIoExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
						getIoExecutor(): java.util.concurrent.Executor;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_IO_EXECUTOR: androidx.camera.core.impl.Config.Option<java.util.concurrent.Executor>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getConfig(): androidx.camera.core.impl.Config;
					public getIoExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
					public getIoExecutor(): java.util.concurrent.Executor;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				}
				export namespace IoConfig {
					export class Builder<B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.IoConfig.Builder<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.internal.IoConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setIoExecutor(param0: java.util.concurrent.Executor): B;
						});
						public constructor();
						public setIoExecutor(param0: java.util.concurrent.Executor): B;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class TargetConfig<T>  extends androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.internal.TargetConfig<any>>;
					/**
					 * Constructs a new instance of the androidx.camera.core.internal.TargetConfig<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
						getTargetClass(): java.lang.Class<any>;
						getTargetName(param0: string): string;
						getTargetName(): string;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_TARGET_NAME: androidx.camera.core.impl.Config.Option<string>;
					public static OPTION_TARGET_CLASS: androidx.camera.core.impl.Config.Option<java.lang.Class<any>>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
					public getConfig(): androidx.camera.core.impl.Config;
					public getTargetName(): string;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public getTargetName(param0: string): string;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public getTargetClass(): java.lang.Class<any>;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				}
				export namespace TargetConfig {
					export class Builder<T, B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.TargetConfig.Builderany>;
						/**
						 * Constructs a new instance of the androidx.camera.core.internal.TargetConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setTargetClass(param0: java.lang.Class<T>): B;
							setTargetName(param0: string): B;
						});
						public constructor();
						public setTargetClass(param0: java.lang.Class<T>): B;
						public setTargetName(param0: string): B;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class ThreadConfig extends java.lang.Object implements androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.internal.ThreadConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.internal.ThreadConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
						getBackgroundExecutor(): java.util.concurrent.Executor;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_BACKGROUND_EXECUTOR: androidx.camera.core.impl.Config.Option<java.util.concurrent.Executor>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getConfig(): androidx.camera.core.impl.Config;
					public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public getBackgroundExecutor(): java.util.concurrent.Executor;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				}
				export namespace ThreadConfig {
					export class Builder<B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.ThreadConfig.Builder<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.internal.ThreadConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setBackgroundExecutor(param0: java.util.concurrent.Executor): B;
						});
						public constructor();
						public setBackgroundExecutor(param0: java.util.concurrent.Executor): B;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class UseCaseEventConfig extends java.lang.Object implements androidx.camera.core.impl.ReadableConfig {
					public static class: java.lang.Class<androidx.camera.core.internal.UseCaseEventConfig>;
					/**
					 * Constructs a new instance of the androidx.camera.core.internal.UseCaseEventConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
						getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
						"<clinit>"(): void;
						getConfig(): androidx.camera.core.impl.Config;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
						retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
						retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
						getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
						findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
						listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
						getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
						hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
						mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					});
					public constructor();
					public static OPTION_USE_CASE_EVENT_CALLBACK: androidx.camera.core.impl.Config.Option<androidx.camera.core.UseCase.EventCallback>;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
					public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
					public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
					public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
					public getConfig(): androidx.camera.core.impl.Config;
					public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
					public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
					public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
					public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
					public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
					public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
					public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
					public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
				}
				export namespace UseCaseEventConfig {
					export class Builder<B>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.UseCaseEventConfig.Builder<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.internal.UseCaseEventConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B;
						});
						public constructor();
						public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class ViewPorts extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.internal.ViewPorts>;
					public static getScaledRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.util.Rational, param2: number, param3: boolean, param4: number, param5: number): globalAndroid.graphics.RectF;
					public static calculateViewPortRects(param0: globalAndroid.graphics.Rect, param1: boolean, param2: globalAndroid.util.Rational, param3: number, param4: number, param5: number, param6: java.util.Map<androidx.camera.core.UseCase,any>): java.util.Map<androidx.camera.core.UseCase,globalAndroid.graphics.Rect>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export class YuvToJpegProcessor extends java.lang.Object implements androidx.camera.core.impl.CaptureProcessor {
					public static class: java.lang.Class<androidx.camera.core.internal.YuvToJpegProcessor>;
					public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public setJpegQuality(param0: number): void;
					public setRotationDegrees(param0: number): void;
					public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
					public close(): void;
					public onResolutionUpdate(param0: any): void;
					public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export class ImageWriterCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompat>;
						public static queueInputImage(param0: globalAndroid.media.ImageWriter, param1: globalAndroid.media.Image): void;
						public static dequeueInputImage(param0: globalAndroid.media.ImageWriter): globalAndroid.media.Image;
						public static newInstance(param0: globalAndroid.view.Surface, param1: number): globalAndroid.media.ImageWriter;
						public static newInstance(param0: globalAndroid.view.Surface, param1: number, param2: number): globalAndroid.media.ImageWriter;
						public static close(param0: globalAndroid.media.ImageWriter): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export class ImageWriterCompatApi23Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompatApi23Impl>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export class ImageWriterCompatApi26Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompatApi26Impl>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export class ImageWriterCompatApi29Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompatApi29Impl>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class DeviceQuirks extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.DeviceQuirks>;
							public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class DeviceQuirksLoader extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.DeviceQuirksLoader>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class ImageCaptureRotationOptionQuirk extends java.lang.Object implements androidx.camera.core.impl.Quirk {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.ImageCaptureRotationOptionQuirk>;
							public constructor();
							public isSupported(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class OnePixelShiftQuirk extends java.lang.Object implements androidx.camera.core.impl.Quirk {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.OnePixelShiftQuirk>;
							/**
							 * Constructs a new instance of the androidx.camera.core.internal.compat.quirk.OnePixelShiftQuirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class SoftwareJpegEncodingPreferredQuirk extends java.lang.Object implements androidx.camera.core.impl.Quirk {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.SoftwareJpegEncodingPreferredQuirk>;
							/**
							 * Constructs a new instance of the androidx.camera.core.internal.compat.quirk.SoftwareJpegEncodingPreferredQuirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class SurfaceOrderQuirk extends java.lang.Object implements androidx.camera.core.impl.Quirk {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.SurfaceOrderQuirk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace workaround {
						export class ExifRotationAvailability extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.workaround.ExifRotationAvailability>;
							public constructor();
							public isRotationOptionSupported(): boolean;
							public shouldUseExifOrientation(param0: androidx.camera.core.ImageProxy): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace compat {
					export namespace workaround {
						export class SurfaceSorter extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.internal.compat.workaround.SurfaceSorter>;
							public constructor();
							public sort(param0: java.util.List<androidx.camera.core.impl.SessionConfig.OutputConfig>): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class ArrayRingBuffer<T>  extends androidx.camera.core.internal.utils.RingBuffer<any> {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.ArrayRingBuffer<any>>;
						public constructor(param0: number, param1: androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<any>);
						public constructor(param0: number);
						public getMaxCapacity(): number;
						public dequeue(): any;
						public isEmpty(): boolean;
						public enqueue(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class ImageUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.ImageUtil>;
						public static DEFAULT_RGBA_PIXEL_STRIDE: number = 4;
						public static jpegImageToJpegByteArray(param0: androidx.camera.core.ImageProxy, param1: globalAndroid.graphics.Rect, param2: number): androidNative.Array<number>;
						public static yuvImageToJpegByteArray(param0: androidx.camera.core.ImageProxy, param1: globalAndroid.graphics.Rect, param2: number): androidNative.Array<number>;
						public static getRotatedAspectRatio(param0: number, param1: globalAndroid.util.Rational): globalAndroid.util.Rational;
						public static yuv_420_888toNv21(param0: androidx.camera.core.ImageProxy): androidNative.Array<number>;
						public static createBitmapFromPlane(param0: androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>, param1: number, param2: number): globalAndroid.graphics.Bitmap;
						public static createDirectByteBuffer(param0: globalAndroid.graphics.Bitmap): java.nio.ByteBuffer;
						public static jpegImageToJpegByteArray(param0: androidx.camera.core.ImageProxy): androidNative.Array<number>;
						public static computeCropRectFromAspectRatio(param0: any, param1: globalAndroid.util.Rational): globalAndroid.graphics.Rect;
						public static min(param0: number, param1: number, param2: number, param3: number): number;
						public static isAspectRatioValid(param0: any, param1: globalAndroid.util.Rational): boolean;
						public static computeCropRectFromDispatchInfo(param0: globalAndroid.graphics.Rect, param1: number, param2: any, param3: number): globalAndroid.graphics.Rect;
						public static shouldCropImage(param0: androidx.camera.core.ImageProxy): boolean;
						public static sizeToVertexes(param0: any): androidNative.Array<number>;
						public static isAspectRatioValid(param0: globalAndroid.util.Rational): boolean;
						public static shouldCropImage(param0: number, param1: number, param2: number, param3: number): boolean;
					}
					export namespace ImageUtil {
						export class CodecFailedException extends java.lang.Exception {
							public static class: java.lang.Class<androidx.camera.core.internal.utils.ImageUtil.CodecFailedException>;
							public getFailureType(): androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
						}
						export namespace CodecFailedException {
							export class FailureType {
								public static class: java.lang.Class<androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType>;
								public static ENCODE_FAILED: androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
								public static DECODE_FAILED: androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
								public static UNKNOWN: androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
								public static valueOf(param0: string): androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
								public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
								public static values(): androidNative.Array<androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class RingBuffer<T>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.RingBuffer<any>>;
						/**
						 * Constructs a new instance of the androidx.camera.core.internal.utils.RingBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							enqueue(param0: T): void;
							dequeue(): T;
							getMaxCapacity(): number;
							isEmpty(): boolean;
						});
						public constructor();
						public enqueue(param0: T): void;
						public dequeue(): T;
						public getMaxCapacity(): number;
						public isEmpty(): boolean;
					}
					export namespace RingBuffer {
						export class OnRemoveCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<any>>;
							/**
							 * Constructs a new instance of the androidx.camera.core.internal.utils.RingBuffer$OnRemoveCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRemove(param0: T): void;
							});
							public constructor();
							public onRemove(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class SizeUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.SizeUtil>;
						public static RESOLUTION_ZERO: any;
						public static RESOLUTION_VGA: any;
						public static RESOLUTION_480P: any;
						public static RESOLUTION_1080P: any;
						public static getArea(param0: any): number;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class UseCaseConfigUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.UseCaseConfigUtil>;
						public static updateTargetRotationAndRelatedConfigs(param0: androidx.camera.core.impl.UseCaseConfig.Builderany, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class VideoUtil extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.VideoUtil>;
						public static getAbsolutePathFromUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): string;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace internal {
				export namespace utils {
					export class ZslRingBuffer extends androidx.camera.core.internal.utils.ArrayRingBuffer<androidx.camera.core.ImageProxy> {
						public static class: java.lang.Class<androidx.camera.core.internal.utils.ZslRingBuffer>;
						public enqueue(param0: androidx.camera.core.ImageProxy): void;
						public constructor(param0: number, param1: androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<any>);
						public constructor(param0: number, param1: androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<androidx.camera.core.ImageProxy>);
						public constructor(param0: number);
						public getMaxCapacity(): number;
						public dequeue(): any;
						public isEmpty(): boolean;
						public enqueue(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class AutoValue_OpenGlRenderer_OutputSurface extends androidx.camera.core.processing.OpenGlRenderer.OutputSurface {
					public static class: java.lang.Class<androidx.camera.core.processing.AutoValue_OpenGlRenderer_OutputSurface>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class AutoValue_Packet<T>  extends androidx.camera.core.processing.Packet<any> {
					public static class: java.lang.Class<androidx.camera.core.processing.AutoValue_Packet<any>>;
					public getFormat(): number;
					public equals(param0: any): boolean;
					public getData(): any;
					public getCropRect(): globalAndroid.graphics.Rect;
					public toString(): string;
					public getExif(): androidx.camera.core.impl.utils.Exif;
					public getRotationDegrees(): number;
					public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
					public getSensorToBufferTransform(): globalAndroid.graphics.Matrix;
					public getSize(): any;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class AutoValue_SurfaceEdge extends androidx.camera.core.processing.SurfaceEdge {
					public static class: java.lang.Class<androidx.camera.core.processing.AutoValue_SurfaceEdge>;
					public getSurfaces(): java.util.List<androidx.camera.core.processing.SettableSurface>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class DefaultSurfaceProcessor extends java.lang.Object implements androidx.camera.core.processing.SurfaceProcessorInternal, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener {
					public static class: java.lang.Class<androidx.camera.core.processing.DefaultSurfaceProcessor>;
					public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
					public constructor(param0: androidx.camera.core.processing.ShaderProvider);
					public constructor();
					public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
					public release(): void;
					public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class Edge<T>  extends androidx.core.util.Consumer<any> {
					public static class: java.lang.Class<androidx.camera.core.processing.Edge<any>>;
					public accept(param0: any): void;
					public constructor();
					public setListener(param0: androidx.core.util.Consumer<any>): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class ImageProcessorRequest extends java.lang.Object implements androidx.camera.core.ImageProcessor.Request {
					public static class: java.lang.Class<androidx.camera.core.processing.ImageProcessorRequest>;
					public constructor(param0: java.util.List<androidx.camera.core.ImageProxy>, param1: number);
					public getInputImages(): java.util.List<androidx.camera.core.ImageProxy>;
					public getOutputFormat(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class InternalImageProcessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.InternalImageProcessor>;
					public safeProcess(param0: androidx.camera.core.ImageProcessor.Request): androidx.camera.core.ImageProcessor.Response;
					public constructor(param0: androidx.camera.core.CameraEffect);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class Node<I, O>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.Nodeany>;
					/**
					 * Constructs a new instance of the androidx.camera.core.processing.Nodeany interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transform(param0: I): O;
						release(): void;
					});
					public constructor();
					public transform(param0: I): O;
					public release(): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class OpenGlRenderer extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.OpenGlRenderer>;
					public getTextureName(): number;
					public constructor();
					public setOutputSurface(param0: globalAndroid.view.Surface): void;
					public release(): void;
					public render(param0: number, param1: androidNative.Array<number>): void;
					public static createFloatBuffer(param0: androidNative.Array<number>): java.nio.FloatBuffer;
					public init(param0: androidx.camera.core.processing.ShaderProvider): void;
				}
				export namespace OpenGlRenderer {
					export abstract class OutputSurface extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.core.processing.OpenGlRenderer.OutputSurface>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class Operation<I, O>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.Operationany>;
					/**
					 * Constructs a new instance of the androidx.camera.core.processing.Operationany interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: I): O;
					});
					public constructor();
					public apply(param0: I): O;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export abstract class Packet<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.Packet<any>>;
					public getFormat(): number;
					public getCropRect(): globalAndroid.graphics.Rect;
					public getExif(): androidx.camera.core.impl.utils.Exif;
					public hasCropping(): boolean;
					public getRotationDegrees(): number;
					public constructor();
					public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
					public getData(): T;
					public getSensorToBufferTransform(): globalAndroid.graphics.Matrix;
					public getSize(): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class SettableSurface extends androidx.camera.core.impl.DeferrableSurface {
					public static class: java.lang.Class<androidx.camera.core.processing.SettableSurface>;
					public getFormat(): number;
					public getCropRect(): globalAndroid.graphics.Rect;
					public hasEmbeddedTransform(): boolean;
					public setRotationDegrees(param0: number): void;
					public createSurfaceRequest(param0: androidx.camera.core.impl.CameraInternal): androidx.camera.core.SurfaceRequest;
					public constructor(param0: number, param1: any, param2: number, param3: globalAndroid.graphics.Matrix, param4: boolean, param5: globalAndroid.graphics.Rect, param6: number, param7: boolean);
					public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
					public createSurfaceOutputFuture(param0: androidx.camera.core.SurfaceOutput.GlTransformOptions, param1: any, param2: globalAndroid.graphics.Rect, param3: number, param4: boolean): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.SurfaceOutput>;
					public getTargets(): number;
					public setProvider(param0: com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>): void;
					public constructor(param0: any, param1: number);
					public getRotationDegrees(): number;
					public getMirroring(): boolean;
					public constructor();
					public setProvider(param0: androidx.camera.core.impl.DeferrableSurface): void;
					public createSurfaceRequest(param0: androidx.camera.core.impl.CameraInternal, param1: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.core.SurfaceRequest;
					public close(): void;
					public getSensorToBufferTransform(): globalAndroid.graphics.Matrix;
					public getSize(): any;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class ShaderProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.ShaderProvider>;
					/**
					 * Constructs a new instance of the androidx.camera.core.processing.ShaderProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFragmentShader(param0: string, param1: string): string;
						"<clinit>"(): void;
					});
					public constructor();
					public static DEFAULT: androidx.camera.core.processing.ShaderProvider;
					public createFragmentShader(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export abstract class SurfaceEdge extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.core.processing.SurfaceEdge>;
					public getSurfaces(): java.util.List<androidx.camera.core.processing.SettableSurface>;
					public constructor();
					public static create(param0: java.util.List<androidx.camera.core.processing.SettableSurface>): androidx.camera.core.processing.SurfaceEdge;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class SurfaceOutputImpl extends java.lang.Object implements androidx.camera.core.SurfaceOutput {
					public static class: java.lang.Class<androidx.camera.core.processing.SurfaceOutputImpl>;
					public getFormat(): number;
					public requestClose(): void;
					public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					public getRotationDegrees(): number;
					public close(): void;
					public updateTransformMatrix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public getTargets(): number;
					public getSize(): any;
					public getSurface(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.core.SurfaceOutput.Event>): globalAndroid.view.Surface;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class SurfaceProcessorInternal extends java.lang.Object implements androidx.camera.core.SurfaceProcessor {
					public static class: java.lang.Class<androidx.camera.core.processing.SurfaceProcessorInternal>;
					/**
					 * Constructs a new instance of the androidx.camera.core.processing.SurfaceProcessorInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						release(): void;
						onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
						onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
					});
					public constructor();
					public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
					public release(): void;
					public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class SurfaceProcessorNode extends androidx.camera.core.processing.Node<androidx.camera.core.processing.SurfaceEdge,androidx.camera.core.processing.SurfaceEdge> {
					public static class: java.lang.Class<androidx.camera.core.processing.SurfaceProcessorNode>;
					public constructor(param0: androidx.camera.core.impl.CameraInternal, param1: androidx.camera.core.SurfaceOutput.GlTransformOptions, param2: androidx.camera.core.processing.SurfaceProcessorInternal);
					public transform(param0: any): any;
					public release(): void;
					public transform(param0: androidx.camera.core.processing.SurfaceEdge): androidx.camera.core.processing.SurfaceEdge;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace core {
			export namespace processing {
				export class SurfaceProcessorWithExecutor extends java.lang.Object implements androidx.camera.core.processing.SurfaceProcessorInternal {
					public static class: java.lang.Class<androidx.camera.core.processing.SurfaceProcessorWithExecutor>;
					public getExecutor(): java.util.concurrent.Executor;
					public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
					public constructor(param0: androidx.camera.core.SurfaceProcessor, param1: java.util.concurrent.Executor);
					public getProcessor(): androidx.camera.core.SurfaceProcessor;
					public release(): void;
					public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
				}
			}
		}
	}
}

//Generics information:
//androidx.camera.core.ExtendableBuilder:1
//androidx.camera.core.impl.AutoValue_Config_Option:1
//androidx.camera.core.impl.CameraConfig.Builder:1
//androidx.camera.core.impl.Config.Option:1
//androidx.camera.core.impl.ConfigProvider:1
//androidx.camera.core.impl.ConstantObservable:1
//androidx.camera.core.impl.ImageOutputConfig.Builder:1
//androidx.camera.core.impl.LiveDataObservable:1
//androidx.camera.core.impl.LiveDataObservable.LiveDataObserverAdapter:1
//androidx.camera.core.impl.LiveDataObservable.Result:1
//androidx.camera.core.impl.MultiValueSet:1
//androidx.camera.core.impl.MutableStateObservable:1
//androidx.camera.core.impl.Observable:1
//androidx.camera.core.impl.Observable.Observer:1
//androidx.camera.core.impl.StateObservable:1
//androidx.camera.core.impl.StateObservable.ObserverWrapper:1
//androidx.camera.core.impl.UseCaseConfig:1
//androidx.camera.core.impl.UseCaseConfig.Builder:3
//androidx.camera.core.impl.utils.Absent:1
//androidx.camera.core.impl.utils.Optional:1
//androidx.camera.core.impl.utils.Present:1
//androidx.camera.core.impl.utils.executor.HandlerScheduledExecutorService.HandlerScheduledFuture:1
//androidx.camera.core.impl.utils.futures.AsyncFunction:2
//androidx.camera.core.impl.utils.futures.ChainingListenableFuture:2
//androidx.camera.core.impl.utils.futures.FutureCallback:1
//androidx.camera.core.impl.utils.futures.FutureChain:1
//androidx.camera.core.impl.utils.futures.Futures.CallbackListener:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedFuture:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedScheduledFuture:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateSuccessfulFuture:1
//androidx.camera.core.impl.utils.futures.ListFuture:1
//androidx.camera.core.internal.IoConfig.Builder:1
//androidx.camera.core.internal.TargetConfig:1
//androidx.camera.core.internal.TargetConfig.Builder:2
//androidx.camera.core.internal.ThreadConfig.Builder:1
//androidx.camera.core.internal.UseCaseEventConfig.Builder:1
//androidx.camera.core.internal.utils.ArrayRingBuffer:1
//androidx.camera.core.internal.utils.RingBuffer:1
//androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback:1
//androidx.camera.core.processing.AutoValue_Packet:1
//androidx.camera.core.processing.Edge:1
//androidx.camera.core.processing.Node:2
//androidx.camera.core.processing.Operation:2
//androidx.camera.core.processing.Packet:1


/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export abstract class CameraController extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.view.CameraController>;
				public static COORDINATE_SYSTEM_VIEW_REFERENCED: number = 1;
				public static TAP_TO_FOCUS_NOT_STARTED: number = 0;
				public static TAP_TO_FOCUS_STARTED: number = 1;
				public static TAP_TO_FOCUS_FOCUSED: number = 2;
				public static TAP_TO_FOCUS_NOT_FOCUSED: number = 3;
				public static TAP_TO_FOCUS_FAILED: number = 4;
				public static IMAGE_CAPTURE: number = 1;
				public static IMAGE_ANALYSIS: number = 2;
				public static VIDEO_CAPTURE: number = 4;
				public setImageCaptureTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
				public isPinchToZoomEnabled(): boolean;
				public isTapToFocusEnabled(): boolean;
				public isImageCaptureEnabled(): boolean;
				public getVideoCaptureTargetSize(): androidx.camera.view.CameraController.OutputSize;
				public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
				public getInitializationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public getImageAnalysisBackpressureStrategy(): number;
				public setImageAnalysisImageQueueDepth(param0: number): void;
				public isImageAnalysisEnabled(): boolean;
				public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public setImageAnalysisBackgroundExecutor(param0: java.util.concurrent.Executor): void;
				public getPreviewTargetSize(): androidx.camera.view.CameraController.OutputSize;
				public setPinchToZoomEnabled(param0: boolean): void;
				public setImageCaptureIoExecutor(param0: java.util.concurrent.Executor): void;
				public hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
				public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public getCameraInfo(): androidx.camera.core.CameraInfo;
				public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
				public clearImageAnalysisAnalyzer(): void;
				public isVideoCaptureEnabled(): boolean;
				public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				public takePicture(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageCapture.OnImageCapturedCallback): void;
				public setImageAnalysisAnalyzer(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageAnalysis.Analyzer): void;
				public setImageAnalysisBackpressureStrategy(param0: number): void;
				public getCameraControl(): androidx.camera.core.CameraControl;
				public setEffects(param0: java.util.List<androidx.camera.core.CameraEffect>): void;
				public getImageAnalysisTargetSize(): androidx.camera.view.CameraController.OutputSize;
				public getImageCaptureIoExecutor(): java.util.concurrent.Executor;
				public setImageAnalysisTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
				public setImageCaptureFlashMode(param0: number): void;
				public getImageCaptureTargetSize(): androidx.camera.view.CameraController.OutputSize;
				public setPreviewTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
				public getImageAnalysisImageQueueDepth(): number;
				public getImageAnalysisBackgroundExecutor(): java.util.concurrent.Executor;
				public startRecording(param0: androidx.camera.view.video.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.view.video.OnVideoSavedCallback): void;
				public setVideoCaptureTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
				public setCameraSelector(param0: androidx.camera.core.CameraSelector): void;
				public createUseCaseGroup(): androidx.camera.core.UseCaseGroup;
				public setEnabledUseCases(param0: number): void;
				public stopRecording(): void;
				public isRecording(): boolean;
				public setImageCaptureMode(param0: number): void;
				public getTapToFocusState(): androidx.lifecycle.LiveData<java.lang.Integer>;
				public getCameraSelector(): androidx.camera.core.CameraSelector;
				public getImageCaptureMode(): number;
				public takePicture(param0: androidx.camera.core.ImageCapture.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.core.ImageCapture.OnImageSavedCallback): void;
				public setTapToFocusEnabled(param0: boolean): void;
				public getImageCaptureFlashMode(): number;
			}
			export namespace CameraController {
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.CameraController.Api30Impl>;
				}
				export class OutputSize extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.CameraController.OutputSize>;
					public static UNASSIGNED_ASPECT_RATIO: number = -1;
					public getAspectRatio(): number;
					public toString(): string;
					public getResolution(): any;
					public constructor(param0: any);
					public constructor(param0: number);
				}
				export namespace OutputSize {
					export class OutputAspectRatio extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.view.CameraController.OutputSize.OutputAspectRatio>;
						/**
						 * Constructs a new instance of the androidx.camera.view.CameraController$OutputSize$OutputAspectRatio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export class TapToFocusStates extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.view.CameraController.TapToFocusStates>;
					/**
					 * Constructs a new instance of the androidx.camera.view.CameraController$TapToFocusStates interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class UseCases extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.view.CameraController.UseCases>;
					/**
					 * Constructs a new instance of the androidx.camera.view.CameraController$UseCases interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class FlashModeConverter extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.view.FlashModeConverter>;
				public static nameOf(param0: number): string;
				public static valueOf(param0: string): number;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class ForwardingLiveData<T>  extends androidx.lifecycle.MediatorLiveData<any> {
				public static class: java.lang.Class<androidx.camera.view.ForwardingLiveData<any>>;
				public getValue(): any;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class LifecycleCameraController extends androidx.camera.view.CameraController {
				public static class: java.lang.Class<androidx.camera.view.LifecycleCameraController>;
				public bindToLifecycle(param0: androidx.lifecycle.LifecycleOwner): void;
				public constructor(param0: globalAndroid.content.Context);
				public unbind(): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class PreviewStreamStateObserver extends androidx.camera.core.impl.Observable.Observer<androidx.camera.core.impl.CameraInternal.State> {
				public static class: java.lang.Class<androidx.camera.view.PreviewStreamStateObserver>;
				public onNewData(param0: androidx.camera.core.impl.CameraInternal.State): void;
				public onError(param0: java.lang.Throwable): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class PreviewTransformation extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.view.PreviewTransformation>;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class PreviewView extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.camera.view.PreviewView>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public setFrameUpdateListener(param0: java.util.concurrent.Executor, param1: androidx.camera.view.PreviewView.OnFrameUpdateListener): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public clearChildFocus(param0: globalAndroid.view.View): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSurfaceProvider(): androidx.camera.core.Preview.SurfaceProvider;
				public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public getOutputTransform(): androidx.camera.view.transform.OutputTransform;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public requestFitSystemWindows(): void;
				public getImplementationMode(): androidx.camera.view.PreviewView.ImplementationMode;
				public getScaleType(): androidx.camera.view.PreviewView.ScaleType;
				public getTextDirection(): number;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getMeteringPointFactory(): androidx.camera.core.MeteringPointFactory;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public getPreviewStreamState(): androidx.lifecycle.LiveData<androidx.camera.view.PreviewView.StreamState>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getTextAlignment(): number;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public findOnBackInvokedDispatcherForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.View): globalAndroid.window.OnBackInvokedDispatcher;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public getViewPort(): androidx.camera.core.ViewPort;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onDetachedFromWindow(): void;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
				public performClick(): boolean;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public getController(): androidx.camera.view.CameraController;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public getViewPort(param0: number): androidx.camera.core.ViewPort;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public setController(param0: androidx.camera.view.CameraController): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public setScaleType(param0: androidx.camera.view.PreviewView.ScaleType): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setImplementationMode(param0: androidx.camera.view.PreviewView.ImplementationMode): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public onAttachedToWindow(): void;
				/** @deprecated */
				public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
			export namespace PreviewView {
				export class DisplayRotationListener extends java.lang.Object implements globalAndroid.hardware.display.DisplayManager.DisplayListener {
					public static class: java.lang.Class<androidx.camera.view.PreviewView.DisplayRotationListener>;
					public onDisplayRemoved(param0: number): void;
					public onDisplayAdded(param0: number): void;
					public onDisplayChanged(param0: number): void;
				}
				export class ImplementationMode {
					public static class: java.lang.Class<androidx.camera.view.PreviewView.ImplementationMode>;
					public static PERFORMANCE: androidx.camera.view.PreviewView.ImplementationMode;
					public static COMPATIBLE: androidx.camera.view.PreviewView.ImplementationMode;
					public static values(): androidNative.Array<androidx.camera.view.PreviewView.ImplementationMode>;
					public static valueOf(param0: string): androidx.camera.view.PreviewView.ImplementationMode;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export class OnFrameUpdateListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.PreviewView.OnFrameUpdateListener>;
					/**
					 * Constructs a new instance of the androidx.camera.view.PreviewView$OnFrameUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFrameUpdate(param0: number): void;
					});
					public constructor();
					public onFrameUpdate(param0: number): void;
				}
				export class PinchToZoomOnScaleGestureListener extends globalAndroid.view.ScaleGestureDetector.SimpleOnScaleGestureListener {
					public static class: java.lang.Class<androidx.camera.view.PreviewView.PinchToZoomOnScaleGestureListener>;
					public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
					public onScaleBegin(param0: globalAndroid.view.ScaleGestureDetector): boolean;
					public onScaleEnd(param0: globalAndroid.view.ScaleGestureDetector): void;
				}
				export class ScaleType {
					public static class: java.lang.Class<androidx.camera.view.PreviewView.ScaleType>;
					public static FILL_START: androidx.camera.view.PreviewView.ScaleType;
					public static FILL_CENTER: androidx.camera.view.PreviewView.ScaleType;
					public static FILL_END: androidx.camera.view.PreviewView.ScaleType;
					public static FIT_START: androidx.camera.view.PreviewView.ScaleType;
					public static FIT_CENTER: androidx.camera.view.PreviewView.ScaleType;
					public static FIT_END: androidx.camera.view.PreviewView.ScaleType;
					public static values(): androidNative.Array<androidx.camera.view.PreviewView.ScaleType>;
					public static valueOf(param0: string): androidx.camera.view.PreviewView.ScaleType;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export class StreamState {
					public static class: java.lang.Class<androidx.camera.view.PreviewView.StreamState>;
					public static IDLE: androidx.camera.view.PreviewView.StreamState;
					public static STREAMING: androidx.camera.view.PreviewView.StreamState;
					public static valueOf(param0: string): androidx.camera.view.PreviewView.StreamState;
					public static values(): androidNative.Array<androidx.camera.view.PreviewView.StreamState>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export abstract class PreviewViewImplementation extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.view.PreviewViewImplementation>;
			}
			export namespace PreviewViewImplementation {
				export class OnSurfaceNotInUseListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.PreviewViewImplementation.OnSurfaceNotInUseListener>;
					/**
					 * Constructs a new instance of the androidx.camera.view.PreviewViewImplementation$OnSurfaceNotInUseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSurfaceNotInUse(): void;
					});
					public constructor();
					public onSurfaceNotInUse(): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class PreviewViewMeteringPointFactory {
				public static class: java.lang.Class<androidx.camera.view.PreviewViewMeteringPointFactory>;
				public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class R extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.view.R>;
			}
			export namespace R {
				export class attr extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.R.attr>;
					public static implementationMode: number = 0;
					public static scaleType: number = 0;
				}
				export class styleable extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.R.styleable>;
					public static PreviewView: androidNative.Array<number>;
					public static PreviewView_implementationMode: number = 0;
					public static PreviewView_scaleType: number = 1;
					public static "<clinit>"(): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class RotationProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.camera.view.RotationProvider>;
				public addListener(param0: java.util.concurrent.Executor, param1: androidx.camera.view.RotationProvider.Listener): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public removeListener(param0: androidx.camera.view.RotationProvider.Listener): void;
			}
			export namespace RotationProvider {
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.RotationProvider.Listener>;
					/**
					 * Constructs a new instance of the androidx.camera.view.RotationProvider$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRotationChanged(param0: number): void;
					});
					public constructor();
					public onRotationChanged(param0: number): void;
				}
				export class ListenerWrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.RotationProvider.ListenerWrapper>;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class SurfaceViewImplementation extends androidx.camera.view.PreviewViewImplementation {
				public static class: java.lang.Class<androidx.camera.view.SurfaceViewImplementation>;
			}
			export namespace SurfaceViewImplementation {
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.SurfaceViewImplementation.Api24Impl>;
				}
				export class SurfaceRequestCallback extends java.lang.Object implements globalAndroid.view.SurfaceHolder.Callback {
					public static class: java.lang.Class<androidx.camera.view.SurfaceViewImplementation.SurfaceRequestCallback>;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class TextureViewImplementation extends androidx.camera.view.PreviewViewImplementation {
				public static class: java.lang.Class<androidx.camera.view.TextureViewImplementation>;
				public initializePreview(): void;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export class TransformExperimental extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.camera.view.TransformExperimental>;
				/**
				 * Constructs a new instance of the androidx.camera.view.TransformExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class DeviceQuirks extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.DeviceQuirks>;
							public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class DeviceQuirksLoader extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.DeviceQuirksLoader>;
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class SurfaceViewNotCroppedByParentQuirk extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.SurfaceViewNotCroppedByParentQuirk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace internal {
				export namespace compat {
					export namespace quirk {
						export class SurfaceViewStretchedQuirk extends java.lang.Object {
							public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.SurfaceViewStretchedQuirk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace transform {
				export class CoordinateTransform extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.transform.CoordinateTransform>;
					public transform(param0: globalAndroid.graphics.Matrix): void;
					public mapPoints(param0: androidNative.Array<number>): void;
					public mapRect(param0: globalAndroid.graphics.RectF): void;
					public mapPoint(param0: globalAndroid.graphics.PointF): void;
					public constructor(param0: androidx.camera.view.transform.OutputTransform, param1: androidx.camera.view.transform.OutputTransform);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace transform {
				export class FileTransformFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.transform.FileTransformFactory>;
					public setUsingExifOrientation(param0: boolean): void;
					public constructor();
					public getOutputTransform(param0: java.io.File): androidx.camera.view.transform.OutputTransform;
					public getOutputTransform(param0: java.io.InputStream): androidx.camera.view.transform.OutputTransform;
					public isUsingExifOrientation(): boolean;
					public getOutputTransform(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): androidx.camera.view.transform.OutputTransform;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace transform {
				export class ImageProxyTransformFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.transform.ImageProxyTransformFactory>;
					public setUsingCropRect(param0: boolean): void;
					public isUsingRotationDegrees(): boolean;
					public isUsingCropRect(): boolean;
					public constructor();
					public setUsingRotationDegrees(param0: boolean): void;
					public getOutputTransform(param0: androidx.camera.core.ImageProxy): androidx.camera.view.transform.OutputTransform;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace transform {
				export class OutputTransform extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.transform.OutputTransform>;
					public getMatrix(): globalAndroid.graphics.Matrix;
					public constructor(param0: globalAndroid.graphics.Matrix, param1: any);
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export class AutoValue_Metadata extends androidx.camera.view.video.Metadata {
					public static class: java.lang.Class<androidx.camera.view.video.AutoValue_Metadata>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public getLocation(): globalAndroid.location.Location;
				}
				export namespace AutoValue_Metadata {
					export class Builder extends androidx.camera.view.video.Metadata.Builder {
						public static class: java.lang.Class<androidx.camera.view.video.AutoValue_Metadata.Builder>;
						public setLocation(param0: globalAndroid.location.Location): androidx.camera.view.video.Metadata.Builder;
						public build(): androidx.camera.view.video.Metadata;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export class AutoValue_OutputFileOptions extends androidx.camera.view.video.OutputFileOptions {
					public static class: java.lang.Class<androidx.camera.view.video.AutoValue_OutputFileOptions>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getMetadata(): androidx.camera.view.video.Metadata;
					public hashCode(): number;
				}
				export namespace AutoValue_OutputFileOptions {
					export class Builder extends androidx.camera.view.video.OutputFileOptions.Builder {
						public static class: java.lang.Class<androidx.camera.view.video.AutoValue_OutputFileOptions.Builder>;
						public setMetadata(param0: androidx.camera.view.video.Metadata): androidx.camera.view.video.OutputFileOptions.Builder;
						public build(): androidx.camera.view.video.OutputFileOptions;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export class AutoValue_OutputFileResults extends androidx.camera.view.video.OutputFileResults {
					public static class: java.lang.Class<androidx.camera.view.video.AutoValue_OutputFileResults>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getSavedUri(): globalAndroid.net.Uri;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export class ExperimentalVideo extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.camera.view.video.ExperimentalVideo>;
					/**
					 * Constructs a new instance of the androidx.camera.view.video.ExperimentalVideo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export abstract class Metadata extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.video.Metadata>;
					public static builder(): androidx.camera.view.video.Metadata.Builder;
					public getLocation(): globalAndroid.location.Location;
				}
				export namespace Metadata {
					export abstract class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.view.video.Metadata.Builder>;
						public setLocation(param0: globalAndroid.location.Location): androidx.camera.view.video.Metadata.Builder;
						public build(): androidx.camera.view.video.Metadata;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export class OnVideoSavedCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.video.OnVideoSavedCallback>;
					/**
					 * Constructs a new instance of the androidx.camera.view.video.OnVideoSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVideoSaved(param0: androidx.camera.view.video.OutputFileResults): void;
						onError(param0: number, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public static ERROR_UNKNOWN: number = 0;
					public static ERROR_RECORDING_IN_PROGRESS: number = 3;
					public static ERROR_ENCODER: number = 1;
					public static ERROR_FILE_IO: number = 4;
					public static ERROR_INVALID_CAMERA: number = 5;
					public static ERROR_MUXER: number = 2;
					public onVideoSaved(param0: androidx.camera.view.video.OutputFileResults): void;
					public onError(param0: number, param1: string, param2: java.lang.Throwable): void;
				}
				export namespace OnVideoSavedCallback {
					export class VideoCaptureError extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.camera.view.video.OnVideoSavedCallback.VideoCaptureError>;
						/**
						 * Constructs a new instance of the androidx.camera.view.video.OnVideoSavedCallback$VideoCaptureError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export abstract class OutputFileOptions extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.video.OutputFileOptions>;
					public static builder(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: globalAndroid.content.ContentValues): androidx.camera.view.video.OutputFileOptions.Builder;
					public getMetadata(): androidx.camera.view.video.Metadata;
					public toVideoCaptureOutputFileOptions(): androidx.camera.core.VideoCapture.OutputFileOptions;
					public static builder(param0: globalAndroid.os.ParcelFileDescriptor): androidx.camera.view.video.OutputFileOptions.Builder;
					public static builder(param0: java.io.File): androidx.camera.view.video.OutputFileOptions.Builder;
				}
				export namespace OutputFileOptions {
					export abstract class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.camera.view.video.OutputFileOptions.Builder>;
						public setMetadata(param0: androidx.camera.view.video.Metadata): androidx.camera.view.video.OutputFileOptions.Builder;
						public build(): androidx.camera.view.video.OutputFileOptions;
					}
				}
			}
		}
	}
}

declare namespace androidx {
	export namespace camera {
		export namespace view {
			export namespace video {
				export abstract class OutputFileResults extends java.lang.Object {
					public static class: java.lang.Class<androidx.camera.view.video.OutputFileResults>;
					public static create(param0: globalAndroid.net.Uri): androidx.camera.view.video.OutputFileResults;
					public getSavedUri(): globalAndroid.net.Uri;
				}
			}
		}
	}
}

//Generics information:
//androidx.camera.view.ForwardingLiveData:1

