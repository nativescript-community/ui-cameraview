import { request } from '@nativescript-community/perms';
import CameraViewViewElement from '@nativescript-community/ui-cameraview/svelte';
import { View } from '@nativescript/core';
import { registerNativeViewElement } from 'svelte-native/dom';
import Basic from './Basic.svelte';

class CropView extends View {
    createNativeView() {
        if (__ANDROID__) {
            return new com.nativescript.cameraviewdemo.CropView(this._context);
        } else if (__IOS__) {
            return NSCropView.alloc().init();
        }
        return null;
    }
}

export function installPlugin() {
    registerNativeViewElement('cropview', () => CropView);
    CameraViewViewElement.register();
    setTimeout(() => {
        request('camera');
    }, 1000);
}

export const demos = [{ name: 'Basic', path: 'basic', component: Basic }];

// let start = Date.now();
// for (let index = 0; index < 10000; index++) {
//     new java.lang.Float(2.3);
// }
// console.log('java.lang.Float', Date.now() -start);
// start = Date.now();
// for (let index = 0; index < 10000; index++) {
//      java.lang.Float.valueOf(2.3);
// }
// console.log('java.lang.Float.valueOf', Date.now() -start);
// start = Date.now();
// for (let index = 0; index < 10000; index++) {
//     float(2.3);
// }
// console.log('float', Date.now() -start);
