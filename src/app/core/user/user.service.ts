import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_HEADERS } from 'src/app/utilities/header.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  BASE_URL = environment.REGISTRATION_BASE_URL;
  constructor(private httpClient: HttpClient) {}


  getUsernameById(id): any {
    return this.httpClient.get(this.BASE_URL + '/user/' + id);
  }


}
