import { CameraViewBase, autoFocusProperty, enablePinchZoomProperty, flashModeProperty, saveToGalleryProperty } from './index.common';

import { ImageSource } from '@nativescript/core/image-source';
import { Color } from '@nativescript/core/color';

export class CameraView extends CameraViewBase {
    createNativeView() {
        return NSCameraView.alloc().init();
    }

    disposeNativeView() {
        super.disposeNativeView();
    }

    initNativeView() {
        super.initNativeView();
    }
}
