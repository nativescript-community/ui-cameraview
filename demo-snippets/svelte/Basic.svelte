<script lang="typescript">
    import { View } from '@nativescript/core';
    import { NativeViewElementNode } from 'svelte-native/dom';
    import { goBack } from 'svelte-native';
    import { CameraView } from '@nativescript-community/ui-cameraview';
    let cropView: NativeViewElementNode<View>;
    let cameraView: NativeViewElementNode<CameraView>;
    async function applyProcessor() {
        try {
            if (__ANDROID__) {
                const processor = new com.nativescript.cameraviewdemo.CustomImageAnalysisCallback(cameraView.nativeView._context, cropView.nativeView.nativeViewProtected);
                cameraView.nativeView.processor = processor;
            }
        } catch (error) {
            console.error(error);
        }
    }
</script>

<page>
    <actionBar title="Basic CameraView">
        <navigationButton text="Go back" on:tap={() => goBack()} />
    </actionBar>
    <cameraview bind:this={cameraView}>
        <cropview bind:this={cropView} />
        <button text="test" on:tap={applyProcessor} verticalAlignment="bottom" />
    </cameraview>
</page>

<style>
</style>
