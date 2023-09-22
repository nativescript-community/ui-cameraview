<script lang="typescript">
    import { View } from '@nativescript/core';
    import { NativeViewElementNode } from 'svelte-native/dom';
    import { goBack } from 'svelte-native';
    import { CameraView } from '@nativescript-community/ui-cameraview';
    let cropView: NativeViewElementNode<View>;
    let cameraView: NativeViewElementNode<CameraView>;
    let flashMode = 'off';
    async function applyProcessor() {
        try {
            if (__ANDROID__) {
                const processor = new com.nativescript.cameraviewdemo.CustomImageAnalysisCallback(cameraView.nativeView._context, cropView.nativeView.nativeViewProtected);
                cameraView.nativeView.processor = processor;
            } else {
                cameraView.nativeView.processor = OpencvDocumentProcessDelegate.alloc().initWithCropView(cropView.nativeView.nativeViewProtected);
            }
        } catch (error) {
            console.error(error);
        }
    }
    function onFrame(...args) {
        console.log('onFrame', ...args);
    }
    function switchFlashMode() {
        switch (flashMode) {
            case 'off':
                flashMode = 'on';
                break;
            case 'on':
                flashMode = 'auto';
                break;
            case 'auto':
                flashMode = 'torch';
                break;
            case 'torch':
                flashMode = 'off';
                break;
        }
    }
</script>

<page>
    <actionBar title="Basic CameraView">
        <navigationButton text="Go back" on:tap={() => goBack()} />
    </actionBar>
    <cameraview bind:this={cameraView} {flashMode}>
        <cropview bind:this={cropView} />
        <button text="test processor" on:tap={applyProcessor} verticalAlignment="bottom" />
        <button text={flashMode} on:tap={switchFlashMode} verticalAlignment="top" horizontalAlignment="right" /></cameraview
    >
</page>

<style>
</style>
