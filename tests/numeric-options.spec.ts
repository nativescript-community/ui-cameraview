import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DEFAULT_ANALYSIS_TIMEOUT_MS, parseAnalysisTimeoutMs, parseOptionalPositiveInt } from '../src/ui-cameraview/numeric-options.ts';

// maxVideoBitrate and maxVideoFrameRate: -1 is "the camera's own choice"
test('a positive number is kept, from a number or from an XML attribute string', () => {
    assert.equal(parseOptionalPositiveInt(800000), 800000);
    assert.equal(parseOptionalPositiveInt('800000'), 800000);
    assert.equal(parseOptionalPositiveInt(' 15 '), 15);
});

test('a decimal is cut to a whole number', () => {
    assert.equal(parseOptionalPositiveInt(14.9), 14);
    assert.equal(parseOptionalPositiveInt('29.97'), 29);
});

test('anything that is not a positive number means the default of the camera', () => {
    for (const value of [-1, 0, '-1', '0', '', '  ', 'fast', NaN, Infinity, -Infinity, null, undefined, {}, [], true, 0.4]) {
        assert.equal(parseOptionalPositiveInt(value), -1, `${String(value)}`);
    }
});

// analysisTimeoutMs: 0 waits for ever, a negative or unreadable value is the default
test('the analysis timeout keeps 0, which waits for ever', () => {
    assert.equal(parseAnalysisTimeoutMs(0), 0);
    assert.equal(parseAnalysisTimeoutMs('0'), 0);
});

test('the analysis timeout keeps a positive number of milliseconds', () => {
    assert.equal(parseAnalysisTimeoutMs(1500), 1500);
    assert.equal(parseAnalysisTimeoutMs('1500'), 1500);
    assert.equal(parseAnalysisTimeoutMs(250.8), 250);
});

test('a negative or unreadable analysis timeout is the default', () => {
    assert.equal(DEFAULT_ANALYSIS_TIMEOUT_MS, 5000);
    for (const value of [-1, '-5', '', 'soon', NaN, Infinity, null, undefined, {}]) {
        assert.equal(parseAnalysisTimeoutMs(value), DEFAULT_ANALYSIS_TIMEOUT_MS, `${String(value)}`);
    }
});
