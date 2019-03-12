import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
var userData = { "res": "authenticated", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoic291bXlhcmdoYS5zaW5oYTJAbWluZHRyZWUuY29tIiwidXNlcklkIjoiNWM3ZDVlNzA4MjRhMjkyODRjYjMyZTJlIiwicGVybWlzc2lvbnMiOnsiY29tbWVudHMiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZUFueSI6dHJ1ZSwiZGVsZXRlIjp0cnVlfSwicG9zdCI6eyJjcmVhdGUiOnRydWUsInJlYWQiOnRydWUsInVwZGF0ZSI6dHJ1ZSwiZGVsZXRlIjp0cnVlLCJsaWtlIjp0cnVlLCJkaXNsaWtlIjp0cnVlfSwiY2F0ZWdvcnkiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sInBlcm1pc3Npb25zIjp7InVwZGF0ZSI6dHJ1ZX19LCJpYXQiOjE1NTIzNzA5MDIsImV4cCI6MTU1MjM3NDUwMn0._t0IxD47JKCkiIdbXBAEUwxaRfAbP-PmQ07y_o2EpBc", "userId": "5c7d5e70824a29284cb32e2e", "username": "Sam", "emailId": "soumyargha.sinha2@mindtree.com", "permissions": { "comments": { "create": true, "read": true, "update": true, "deleteAny": true, "delete": true }, "post": { "create": true, "read": true, "update": true, "delete": true, "like": true, "dislike": true }, "category": { "create": true, "read": true, "update": true, "delete": true }, "permissions": { "update": true } }, "expiry": "1h" };
var user = {
  emailId: 'ssss',
  password: 'new'
}
import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  fit('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
    expect(service.BASE_URL).toBe(environment.REGISTRATION_BASE_URL);
  });

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, LoginService],
      (httpMock: HttpTestingController, service: LoginService) => {
        service.loginUser(user).subscribe(data => {
          expect(data.body).toEqual(user);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/login');
        expect(req.request.method).toEqual('POST');
        req.flush(user);
      })
  );
  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, LoginService],
      (httpMock: HttpTestingController, service: LoginService) => {
        localStorage.setItem(service.itemKey, '123');
        localStorage.setItem('permissions', '123');
        localStorage.setItem('admin', 'true');
        service.logoutUser();
        expect(service.logoutUser()).toBe("{ \"loggedOut\": true }");
      })
  );

});
