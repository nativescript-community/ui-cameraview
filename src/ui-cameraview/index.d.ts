import { GridLayout } from '@nativescript/core';
import type { ScaleType } from './index.common';

export interface TakePictureOptions<U extends boolean = true, V extends boolean = false> {
    savePhotoToDisk?: U; // android
    returnImageProxy?: V; // android
    captureMode?: number;
    targetRotation?: number; // android
    flashMode?: number;
    jpegQuality?: number; // android
    storageLocation?: string; // android
    fileName?: string; // android
    pictureSize?: `${number}x${number}`; // android
    maxWidth?: number; // android for now
    maxHeight?: number; // android for now
}

export function deviceHasCamera(): boolean;

/**
 * The PREVIEW stream's geometry — `getCurrentResolutionInfo` describes the still capture instead. The
 * platform picks this resolution itself, so it cannot be computed from the requested aspect ratio.
 */
export interface CameraPreviewInfo {
    /** Stream size in the CAMERA's orientation, px. */
    width: number;
    height: number;
    /** Degrees the view rotates the stream by to stand it upright: 0, 90, 180 or 270. */
    rotation: number;
    /** The part of the stream the platform keeps, px. Equal to the size when it keeps all of it. */
    cropWidth: number;
    cropHeight: number;
    /** How that is fitted into the view — the EFFECTIVE value, not the property's default. */
    stretch: ScaleType;
    zoomRatio: number;
}

export class CameraView extends GridLayout {
    autoFocus: boolean;
    /**
     * Android only. When enabled (default) `takePicture` waits for the auto focus to converge
     * before actually taking the photo. Ignored if the user recently focused manually
     * through `focusAtPoint`
     */
    focusBeforeCapture: boolean;
    readyToStartPreview: boolean;
    processor;
    enablePinchZoom: boolean;
    saveToGallery: boolean;
    flashMode: string;
    captureMode?: number;
    pictureSize?: { width: number; height: number };
    jpegQuality?: number;
    readonly minZoom: number;
    readonly maxZoom: number;
    readonly neutralZoom: number;
    /** What the camera is actually at: `zoom` is only the last value written, which it coerces and a pinch moves. */
    readonly zoomRatio: number;
    /** null while no preview is running. */
    getPreviewInfo(): CameraPreviewInfo | null;
    stopPreview();
    startPreview();
    toggleCamera();
    // if you use savePhotoToDisk:false and returnImageProxy:true on android you get a ImageProxy in image and a processor. You ae responsible for calling `finished()` on the processor once you are done with the ImageProxy
    // if you use savePhotoToDisk:false on android you get a Bitmap in image. You are responsible for recycling it
    takePicture<U extends boolean = true, V extends boolean = false>(
        options?: TakePictureOptions<U, V>
    ): Promise<U extends true ? { image: string } : V extends true ? { image; processor } : { image; info }>;
    startAutoFocus();
    focusAtPoint(x, y);
    getAllAvailablePictureSizes(); // Android only for now
    getCurrentResolutionInfo(); // Android only for now
}
