import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_HEADERS } from 'src/app/utilities/header.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  
  BASE_URL = environment.REGISTRATION_BASE_URL;
  constructor(private httpClient: HttpClient) {}

  registerUser(data) {
    return this.httpClient.post(this.BASE_URL + '/user/register', data, POST_HEADERS);
  }

  updateUser(data) {
    return this.httpClient.post(this.BASE_URL + '/user/update-details', data, POST_HEADERS);
  }

  registerAdminUser(data) {
    return this.httpClient.post(this.BASE_URL + '/user/register/admin', data, POST_HEADERS);
  }

  getRoles() {
    return this.httpClient.get(this.BASE_URL + '/user/all/allroles');
  }

  changeRole(data) {
    return this.httpClient.post(this.BASE_URL + '/user/roles/change', data, POST_HEADERS);
  }

  getUserByEmailId(data) {
    return this.httpClient.post(this.BASE_URL + '/user/email', data, POST_HEADERS);
  }

  getAllUsers() {
    return this.httpClient.get(this.BASE_URL + '/user/get/all');
  }

  getGroups() {
    return this.httpClient.get(this.BASE_URL + '/group/allgroups/all');
  }

}
