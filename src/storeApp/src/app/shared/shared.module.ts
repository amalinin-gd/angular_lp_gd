import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckboxComponent,
    RadioButtonGroupComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CheckboxComponent,
    RadioButtonGroupComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
