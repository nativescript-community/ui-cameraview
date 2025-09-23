import { GridLayout } from '@nativescript/core';

export interface TakePictureOptions<U extends Boolean = true, V extends Boolean = false> {
    savePhotoToDisk?: U; // android
    returnImageProxy?: V; // android
    captureMode?: number;
    targetRotation?: number; // android
    flashMode?: number;
    jpegQuality?: number; // android
    storageLocation?: string; // android
    fileName?: string; // android
    pictureSize?: { width: number; height: number } | `${number}x${number}`; // android
    maxWidth?: number; // android for now
    maxHeight?: number; // android for now
}

export function deviceHasCamera(): boolean;

export class CameraView extends GridLayout {
    autoFocus: boolean;
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
