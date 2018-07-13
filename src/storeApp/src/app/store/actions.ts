import { Action, Store } from '@ngrx/store';
import LoginRequest from './models/loginRequest.model';
import LoginResponse from "./models/loginResponse.model";

export const LOGIN = '[APP STORE]Login';
export const LOGGED_IN = '[APP Store] Logged In';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: LoginRequest){}
}

export class LoggedIn implements Action {
  readonly type = LOGGED_IN;
  constructor(public payload: LoginResponse){}
}

export type Actions = Login | LoggedIn;
