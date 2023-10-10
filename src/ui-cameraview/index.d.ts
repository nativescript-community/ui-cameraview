import { GridLayout } from '@nativescript/core';

export class CameraView extends GridLayout {
    autoFocus: boolean;
    processor;
    enablePinchZoom: boolean;
    saveToGallery: boolean;
    flashMode: string;
    stopPreview();
    startPreview();
    toggleCamera();
    takePicture(
        options: {
            savePhotoToDisk?: boolean;
            captureMode?: number;
            targetRotation?: number;
            flashMode?: number;
            pictureSize?: { width: number; height: number };
        } = {}
    ): Promise<any>;
    startAutoFocus();
    focusAtPoint(x, y);
}
