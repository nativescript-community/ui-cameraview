import { GridLayout } from '@nativescript/core';

export interface TakePictureOptions<U extends Boolean = true> {
    savePhotoToDisk?: U;
    captureMode?: number;
    targetRotation?: number;
    flashMode?: number;
    jpegQuality?: number;
    pictureSize?: { width: number; height: number } | `${number}x${number}`;
}

export class CameraView extends GridLayout {
    autoFocus: boolean;
    processor;
    enablePinchZoom: boolean;
    saveToGallery: boolean;
    flashMode: string;
    captureMode?: number;
    pictureSize?: { width: number; height: number };
    jpegQuality?: number;
    stopPreview();
    startPreview();
    toggleCamera();
    // if you use savePhotoToDisk:false on android you get a Bitmap in image. You are responsible for recycling it
    takePicture<U extends boolean = true>(options?: TakePictureOptions<U>): Promise<U extends true ? File : { image; info }>;
    startAutoFocus();
    focusAtPoint(x, y);
}
