// Run with `npm test` (node's own runner, no dependency)
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { WHITE_BALANCES, parseSupportedWhiteBalances, parseWhiteBalance } from '../src/ui-cameraview/white-balance.ts';

test('the names are the ones the native side understands', () => {
    assert.deepEqual(
        [...WHITE_BALANCES],
        ['auto', 'daylight', 'cloudy-daylight', 'shade', 'twilight', 'fluorescent', 'incandescent', 'warm-fluorescent']
    );
});

test('a known name is kept', () => {
    for (const name of WHITE_BALANCES) {
        assert.equal(parseWhiteBalance(name), name);
    }
});

test('a name is read whatever its case, spaces or separator', () => {
    assert.equal(parseWhiteBalance('Daylight'), 'daylight');
    assert.equal(parseWhiteBalance(' INCANDESCENT '), 'incandescent');
    assert.equal(parseWhiteBalance('warm_fluorescent'), 'warm-fluorescent');
    assert.equal(parseWhiteBalance('cloudy daylight'), 'cloudy-daylight');
});

test('anything else is auto', () => {
    assert.equal(parseWhiteBalance(undefined), 'auto');
    assert.equal(parseWhiteBalance(null), 'auto');
    assert.equal(parseWhiteBalance(''), 'auto');
    assert.equal(parseWhiteBalance('sunny'), 'auto');
    assert.equal(parseWhiteBalance(3), 'auto');
});

test('the supported list is read from the json of the native side', () => {
    assert.deepEqual(parseSupportedWhiteBalances('["auto","daylight","shade"]'), ['auto', 'daylight', 'shade']);
});

test('the supported list drops names it does not know and always has auto first', () => {
    assert.deepEqual(parseSupportedWhiteBalances('["daylight","moonlight"]'), ['auto', 'daylight']);
    assert.deepEqual(parseSupportedWhiteBalances('["auto","auto","shade"]'), ['auto', 'shade']);
});

test('a missing or broken list is just auto', () => {
    assert.deepEqual(parseSupportedWhiteBalances(undefined), ['auto']);
    assert.deepEqual(parseSupportedWhiteBalances(null), ['auto']);
    assert.deepEqual(parseSupportedWhiteBalances(''), ['auto']);
    assert.deepEqual(parseSupportedWhiteBalances('{not json'), ['auto']);
    assert.deepEqual(parseSupportedWhiteBalances('{"a":1}'), ['auto']);
});
