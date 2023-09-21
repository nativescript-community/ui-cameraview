import { CameraView as NativeCameraView } from '..';
import '@vue/runtime-core';

const CameraViewPlugin = {
    install(app: any) {
        app.registerElement('CameraView', () => NativeCameraView, {
            viewFlags: 8,
            overwriteExisting: true
        });
    }
};

export default CameraViewPlugin;
