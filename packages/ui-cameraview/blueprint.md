{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

| <img src="https://github.com/nativescript-community/ui-cameraview/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/ui-cameraview/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

### Usage

## Plain NativeScript

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:mdc="@nativescript-community/ui-cameraview"` on the Page element_

### XML

```XML
<Page xmlns:bc="@nativescript-community/ui-cameraview">
    <StackLayout horizontalAlignment="center">
        <bc:CameraView width="100" height="100"/>
   </StackLayout>
</Page>
```

## NativeScript + Angular

```typescript
import { registerElement } from 'nativescript-angular/element-registry';
import { CameraView } from '@nativescript-community/ui-cameraview';
registerElement('CameraView', () => CameraView);
```

```html
<CameraView width="100" height="100"></CameraView>
```

## NativeScript + Vue

```javascript
import Vue from 'nativescript-vue';
(<any>Vue).registerElement('CameraView', () => require('@nativescript-community/ui-cameraview').CameraView);

```

```html
<CameraView  width="100" height="100"/>
```


## Demos
This repository includes Svelte demos. In order to run these execute the following in your shell:
```shell
$ git clone https://github.com/@nativescript-community/ui-cameraview
$ cd ui-cameraview
$ npm run i
$ npm run setup
$ npm run build
$ cd demo-svelte
$ ns run ios|android
```

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}