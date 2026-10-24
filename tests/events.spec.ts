import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CAMERA_CLOSE_EVENT, CAMERA_OPEN_EVENT, FRAME_EVENT, ZOOM_EVENT } from '../src/ui-cameraview/events.ts';

// The names are what the native sides notify: a rename would silently stop every listener
test('the event names are the ones the views notify', () => {
    assert.equal(CAMERA_OPEN_EVENT, 'cameraOpen');
    assert.equal(CAMERA_CLOSE_EVENT, 'cameraClose');
    assert.equal(ZOOM_EVENT, 'zoom');
    assert.equal(FRAME_EVENT, 'frame');
});
