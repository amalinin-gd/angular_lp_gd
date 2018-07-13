import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import LoginRequest from "../../store/models/loginRequest.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export default class AuthService {
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private httpClient: HttpClient) {}

  public login(loginData: LoginRequest):Observable<string> {
    return this.httpClient.post<string>(this.loginUrl, loginData);
  }
}
