import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginModalComponent} from './components/login-modal/login-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPageComponent, LoginModalComponent],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule {
}
