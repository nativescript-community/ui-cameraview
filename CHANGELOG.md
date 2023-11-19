# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.0.6](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.5...v0.0.6) (2023-11-19)

### Bug Fixes

* **android:** much faster photo taking. However to make it fast it is prefered to set properties like `pictureSize`, `captureMode` ... on the view instead of as a arg of `takePicture`. If you do pass them to `takePicture` the whole configuration needs to be updated/set before taking the photo which is slow ([a6c8fe6](https://github.com/nativescript-community/ui-cameraview/commit/a6c8fe65623ae80c4371b19bd96849dd08359994))
* **ios:** throw error on not implemented methods ([fa1adde](https://github.com/nativescript-community/ui-cameraview/commit/fa1adde97fce4b674236163b4c67625f974190c0))

## [0.0.5](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.4...v0.0.5) (2023-11-07)

### Bug Fixes

* **android:** build fix for broken N cli ([aa60f59](https://github.com/nativescript-community/ui-cameraview/commit/aa60f59ae0c1f1a627cd1f5c076e6e374366f979))

## [0.0.4](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.3...v0.0.4) (2023-10-10)

### Bug Fixes

* multiple fixes ([22dc0cc](https://github.com/nativescript-community/ui-cameraview/commit/22dc0ccd9636b2a60705877dc09979c658bc1b2c))

## [0.0.3](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.2...v0.0.3) (2023-09-25)

**Note:** Version bump only for package ui-cameraview

## 0.0.2 (2023-09-22)

**Note:** Version bump only for package ui-cameraview
