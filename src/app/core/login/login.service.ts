import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_HEADERS } from 'src/app/utilities/header.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  BASE_URL = environment.REGISTRATION_BASE_URL;
  itemKey = "userData";
  sessionTimedOut: boolean = false;
  userLoggedIn: boolean = false;
  constructor(private httpClient: HttpClient) { }

  loginUser(data): Observable<any> {
    return this.httpClient.post(this.BASE_URL + '/user/login', data, POST_HEADERS);
  }

  logoutUser() {
    localStorage.removeItem(this.itemKey);
    localStorage.removeItem("permissions");
    if (!localStorage.getItem(this.itemKey) && !localStorage.getItem("permissions")) {
      if(localStorage.getItem('admin')) {
        localStorage.removeItem('admin');
      }
      this.userLoggedIn = false;
      return "{ \"loggedOut\": true }";
    }
    else {
      return "{ \"loggedOut\": false }";
    }
  }

  setUserDataInLocalStorage(res) {
    localStorage.setItem(this.itemKey, JSON.stringify(res));
    if (localStorage.getItem(this.itemKey)) {
      if (JSON.parse(localStorage.getItem(this.itemKey)).permissions.comments.deleteAny) {
        localStorage.setItem('admin', "true");
      }
      this.userLoggedIn = true;
    }
  }

  isAdmin(): any {
    if(localStorage.getItem('admin'))
      return true;
    else
      return false;
  }

  getUserDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("userData"));
  }

  setUserPermissionsInLocalStorage(res) {
    localStorage.setItem("permissions", JSON.stringify(res));
  }

  getUserPermissionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("permissions"));
  }

  fetchGuestPermissions() {
    return this.httpClient.get(this.BASE_URL + '/permission/fetch');
  }

  setGuestPermissions(permission) {
    localStorage.setItem("guestPermissions", JSON.stringify(permission));
    if (localStorage.getItem("guestPermissions")) {
      this.userLoggedIn = false;
    }
  }

  resetGuestPermissions() {
    localStorage.removeItem("guestPermissions");
    localStorage.removeItem("permissions");
  }

  getGuestPermissionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("guestPermissions"));
  }

  validateGoogle(data): Observable<any> {
    return this.httpClient.post('http://localhost:3000' + '/login/google-login', data, POST_HEADERS);
  }


}
