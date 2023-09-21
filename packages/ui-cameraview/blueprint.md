{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

| <img src="https://github.com/nativescript-community/document-scanner/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/document-scanner/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

## Usage

To use that plugin you need camera permission.
Dont forget to ask for it at runtime using something like
```ts
    import { request } from '@nativescript-community/perms';
    await request('camera');
```

After that:
```ts
    const documentScanner = new DocumentScanner();
    try {
        const result: string[] | any[] /* UIImage[] on iOS */ = await documentScanner.startScan();
        console.log('scan result', result);
    } catch (error) {
        console.error(error);
    }
```

You can see the options in the typings.

### iOS 

On ios the result is an array of `UIImage`


## Demos
This repository includes Svelte demos. In order to run these execute the following in your shell:
```shell
$ git clone https://github.com/@nativescript-community/document-scanner
$ cd document-scanner
$ npm run i
$ npm run setup
$ npm run build
$ cd demo-svelte
$ ns run ios|android
```

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}