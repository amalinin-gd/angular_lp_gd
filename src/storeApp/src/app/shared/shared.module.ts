import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ]
})
export class SharedModule { }
