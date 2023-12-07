import { ContentView, ItemEventData, View, profile } from '@nativescript/core';
import { NativeViewElementNode, TemplateElement, ViewNode, createElement, registerNativeViewElement } from 'svelte-native/dom';
import { CameraView } from '..';

export default class CameraViewViewElement extends NativeViewElementNode<CameraView> {
    static register() {
        registerNativeViewElement('cameraview', () => CameraView);
    }
}
