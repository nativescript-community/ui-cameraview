# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.0](https://github.com/nativescript-community/ui-cameraview/compare/v0.1.5...v0.2.0) (2024-01-31)

### Features

* new `cameraOpen` and `cameraClose` events. `getCurrentResolutionInfo` and `getAllAvailablePictureSizes` for Android ([602ce0d](https://github.com/nativescript-community/ui-cameraview/commit/602ce0d121590b83b8be31ebd384d547e43fe4e2))

## [0.1.5](https://github.com/nativescript-community/ui-cameraview/compare/v0.1.4...v0.1.5) (2024-01-30)

### Bug Fixes

* **android:** report high resolutions ([f712fab](https://github.com/nativescript-community/ui-cameraview/commit/f712fabf5dffa121f38f18dc7355917811c72161))
* **android:** some fixes ([e3e3741](https://github.com/nativescript-community/ui-cameraview/commit/e3e3741304931e4b2372cd64336d235c79d080a0))

## [0.1.4](https://github.com/nativescript-community/ui-cameraview/compare/v0.1.3...v0.1.4) (2024-01-06)

### Bug Fixes

* **ios:** crash fix ([c3532a0](https://github.com/nativescript-community/ui-cameraview/commit/c3532a011214c10535ed358fb36538fd6ed06bd2))

## [0.1.3](https://github.com/nativescript-community/ui-cameraview/compare/v0.1.2...v0.1.3) (2023-12-22)

### Bug Fixes

* **android:** build fix ([e371dfe](https://github.com/nativescript-community/ui-cameraview/commit/e371dfe8e6ee0135f02f6784f8db07824e9ee2f4))

## [0.1.2](https://github.com/nativescript-community/ui-cameraview/compare/v0.1.1...v0.1.2) (2023-12-21)

### Bug Fixes

* **android:** regression fix preventing image analysis ([db312c9](https://github.com/nativescript-community/ui-cameraview/commit/db312c91eec299dce50cd605196522a3a4d73d77))

## [0.1.1](https://github.com/nativescript-community/ui-cameraview/compare/v0.1.0...v0.1.1) (2023-12-20)

### Features

* `aspectRatio` property ([cdb4cdf](https://github.com/nativescript-community/ui-cameraview/commit/cdb4cdf445254f59719d421a5406882c70b040da))

# [0.1.0](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.9...v0.1.0) (2023-12-20)

### Bug Fixes

* **android:** `aspectRatio` and `stretch` fix ([079432c](https://github.com/nativescript-community/ui-cameraview/commit/079432c9a08c6c630206eded012d8844fe260fe5))

### Features

* **android:** stretch property ([d4eafde](https://github.com/nativescript-community/ui-cameraview/commit/d4eafde42499a2a1ce16d87fad274cdb53db90f6))
* **android:** stretch property for preview scaleType ([21f049b](https://github.com/nativescript-community/ui-cameraview/commit/21f049ba894920eed497a4a22da00be80dffa5c5))

## [0.0.9](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.8...v0.0.9) (2023-12-07)

### Bug Fixes

* **android:** prevent null bitmap ([0b0a78d](https://github.com/nativescript-community/ui-cameraview/commit/0b0a78d38c99c703b1e82ee80af1dc7baadc64a0))
* **ios:** autofocus fix ([cf7ace0](https://github.com/nativescript-community/ui-cameraview/commit/cf7ace04131560c0bf56c15be36f89242fccb545))
* **ios:** correctly returned  picture(rotation) ([b13235a](https://github.com/nativescript-community/ui-cameraview/commit/b13235aa338ffb56ca1df746bf55b5456475bf8c))

## [0.0.8](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.7...v0.0.8) (2023-11-22)

### Bug Fixes

* **android:** build fix ([d8e46a1](https://github.com/nativescript-community/ui-cameraview/commit/d8e46a1cef34604383b2567a27d762733f834350))
* better typings ([f8f000b](https://github.com/nativescript-community/ui-cameraview/commit/f8f000b2493fde813f7c7ad653a96801e5e27eb6))
* **ios:** working `takePicture` ([22a4ed0](https://github.com/nativescript-community/ui-cameraview/commit/22a4ed00a00d594ca878e3fd5c76b711209a959b))

## [0.0.7](https://github.com/nativescript-community/ui-cameraview/compare/v0.0.6...v0.0.7) (2023-11-19)

### Bug Fixes

* **android:** fixed a crash on takePicture ([e0e8e20](https://github.com/nativescript-community/ui-cameraview/commit/e0e8e20b0799b53a960170ac178540f745bde0de))

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
