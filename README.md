<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/ui-cameraview</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/ui-cameraview?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/ui-cameraview.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/ui-cameraview"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/ui-cameraview.svg" height="20"/></a>
	</p>

<p align="center">
  <b>A CameraView allowing custom live processing for NativeScript</b></br>
  <sub><sub>
</p>

<br />


| <img src="https://github.com/nativescript-community/ui-cameraview/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/ui-cameraview/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |


[](#table-of-contents)


[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
	* [Usage](#usage)
* [Plain NativeScript](#plain-nativescript)
	* [XML](#xml)
* [NativeScript + Angular](#nativescript--angular)
* [NativeScript + Vue](#nativescript--vue)
* [Demos](#demos)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos-1)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/ui-cameraview`

### Usage


[](#plain-nativescript)


[](#plain-nativescript)

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


[](#nativescript--angular)


[](#nativescript--angular)

## NativeScript + Angular

```typescript
import { registerElement } from 'nativescript-angular/element-registry';
import { CameraView } from '@nativescript-community/ui-cameraview';
registerElement('CameraView', () => CameraView);
```

```html
<CameraView width="100" height="100"></CameraView>
```


[](#nativescript--vue)


[](#nativescript--vue)

## NativeScript + Vue

```javascript
import Vue from 'nativescript-vue';
(<any>Vue).registerElement('CameraView', () => require('@nativescript-community/ui-cameraview').CameraView);

```

```html
<CameraView  width="100" height="100"/>
```



[](#demos)


[](#demos)

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


[](#demos-and-development)


[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).

[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```

[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).