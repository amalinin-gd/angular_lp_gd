import {HomeComponent} from "./pages/home/home.component";
import {Routes} from '@angular/router';
import {LoginPageComponent} from "./pages/login/login-page/login-page.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
