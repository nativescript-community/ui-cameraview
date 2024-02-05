<script lang="ts">
    import { View, ImageSource } from '@nativescript/core';
    import { NativeViewElementNode } from 'svelte-native/dom';
    import { goBack } from 'svelte-native';
    import { CameraView } from '@nativescript-community/ui-cameraview';
    let cropView: NativeViewElementNode<View>;
    let cameraView: NativeViewElementNode<CameraView>;
    let flashMode = 'off';
    let torchEnabled = false;
    let imageSource: ImageSource;
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

    function setTorchEnabled(enabled: boolean) {
        cameraView.nativeView.flashMode = enabled ? 'torch' : (flashMode as any);
    }
    function switchTorch() {
        if (cameraView) {
            const current = cameraView.nativeView.flashMode;
            torchEnabled = !(current === 'torch');
            setTorchEnabled(torchEnabled);
        }
    }

    async function takePicture() {
        console.log('takePicture')
        try {
            const start = Date.now()
       const {image, info} = await cameraView.nativeView.takePicture({savePhotoToDisk:false})
       if (imageSource) {
            if(__ANDROID__) {
                imageSource.android.recycle()
            }
        }
       console.log('onpicture', image, info, Date.now() -start, 'ms')
       imageSource = new ImageSource(image)
        } catch (error) {
            console.error(error)
        }
       
       
    }

    function onCameraTap(event) {
        cameraView.nativeView.focusAtPoint(event.getX(), event.getY());
    }
    function toggleCamera(event) {
        cameraView.nativeView.toggleCamera();
    }
</script>

<page>
    <actionBar title="Basic CameraView">
        <navigationButton text="Go back" on:tap={() => goBack()} />
    </actionBar>
    <cameraview bind:this={cameraView} {flashMode} captureMode={1} on:tap={onCameraTap}>
        <!-- <cropview bind:this={cropView} /> -->
        <image src={imageSource} width={100} verticalAlignment="bottom"  horizontalAlignment="left" marginBottom={60} backgroundColor="red"/>
        <button text="toggleCamera" on:tap={toggleCamera} verticalAlignment="top" horizontalAlignment="left" marginTop={60}/>
        <button text="picture" on:tap={takePicture} verticalAlignment="bottom" horizontalAlignment="right"/>
        <button text="test processor" on:tap={applyProcessor} verticalAlignment="bottom"  horizontalAlignment="left"/>
        <button text={flashMode} on:tap={switchFlashMode} verticalAlignment="top" horizontalAlignment="right" />
        <button text='torch' on:tap={switchTorch} verticalAlignment="top" horizontalAlignment="right" marginTop="50"/>
        </cameraview>
</page>