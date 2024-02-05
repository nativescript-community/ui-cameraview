import { request } from '@nativescript-community/perms';
import CameraViewViewElement from '@nativescript-community/ui-cameraview/svelte';
import { View } from '@nativescript/core';
import { registerNativeViewElement } from 'svelte-native/dom';
import Camera from './Camera.svelte';

// class CropView extends View {
//     createNativeView() {
//         if (__ANDROID__) {
//             return new com.nativescript.cameraviewdemo.CropView(this._context);
//         } else if (__IOS__) {
//             return NSCropView.alloc().init();
//         }
//         return null;
//     }
// }

export function installPlugin() {
    // registerNativeViewElement('cropview', () => CropView);
    CameraViewViewElement.register();
    setTimeout(() => {
        request('camera');
    }, 1000);
}

// export const demos = [];
export const demos = [{ name: 'Camera', path: 'camera', component: Camera }];

