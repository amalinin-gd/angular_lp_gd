import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from './app.routes';
import {LoginModule} from "./pages/login/login.module";

import {reducer} from './store/reducer';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      storeApp: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
