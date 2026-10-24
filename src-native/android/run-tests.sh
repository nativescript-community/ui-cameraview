#!/usr/bin/env bash
# Runs the instrumented tests of the shared Android source on ONE connected device or emulator.
#
#   ./run-tests.sh                  # the only connected device
#   ./run-tests.sh <adb-serial>     # pick one when several are connected (adb devices)
#   ./run-tests.sh <serial> -Pandroid.testInstrumentationRunnerArguments.class=com.nativescript.camerademoapp.CameraViewSmokeTest
#
# Without a serial gradle would run on every connected device at the same time.
set -euo pipefail
cd "$(dirname "$0")"

if [ $# -gt 0 ] && [[ "$1" != -* ]]; then
    export ANDROID_SERIAL="$1"
    shift
fi

./gradlew :camerademoapp:connectedDebugAndroidTest --console=plain "$@"
