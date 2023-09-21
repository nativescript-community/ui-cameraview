import { Directive, ElementRef, HostListener, Inject, NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor, registerElement } from '@nativescript/angular';
import { View } from '@nativescript/core';
import { CameraView } from '@nativescript-community/ui-cameraview';

registerElement('CameraView', () => CameraView);

// const CHECKED_VALUE_ACCESSOR = {
//     provide: NG_VALUE_ACCESSOR,
//     useExisting: forwardRef(() => CheckedValueAccessor),
//     multi: true
// };

// export type CheckableView = { checked: boolean } & View;

// /**
//  * The accessor for setting checked property and listening to changes that is used by the
//  * {@link NgModel} directives.
//  *
//  *  ### Example
//  *  ```
//  *  <CheckBox [(ngModel)]="model.test">
//  *  ```
//  */
// @Directive({
//     selector:
//         'CheckBox[ngModel], CheckBox[formControlName], CheckBox[formControl], checkBox[ngModel], checkBox[formControlName], checkBox[formControl], check-box[ngModel], check-box[formControlName], check-box[formControl]',
//     providers: [CHECKED_VALUE_ACCESSOR]
// })
// export class CheckedValueAccessor extends BaseValueAccessor<CheckableView> {
//     constructor(@Inject(ElementRef) elementRef: ElementRef) {
//         super(elementRef.nativeElement);
//     }

//     @HostListener('checkedChange', ['$event'])
//     public checkedChangeListener(event: any) {
//         this.onChange(event.value);
//     }

//     public onTouched = () => {};

//     public writeValue(value: any): void {
//         this.view.checked = value;
//     }

//     public registerOnTouched(fn: () => void): void {
//         this.onTouched = fn;
//     }
// }

// @NgModule({
//     declarations: [CheckedValueAccessor],
//     providers: [],
//     imports: [FormsModule],
//     exports: [FormsModule, CheckedValueAccessor]
// })
// export class CheckBoxModule {}
