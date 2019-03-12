import { FacadeService } from './../../services/facade.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'angular-6-social-login';
import { RegistrationHomeComponent } from './registration-home.component';
export const LOCATION_TOKEN = new InjectionToken<Location>('Window location object');
class ActivatedRouteMock {
  queryParams = new Observable(observer => {
    const urlParams = {
      id: '5c7d5fde213e25232864dbe0'
    }
    observer.next(urlParams);
    observer.complete();
  });
}

const locationStub = {
  back: jasmine.createSpy('back')
}

class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');
}

var resHeader = {
  headers: new HttpHeaders({
    'authorization': 'ssss'
  })
};


var res = {
 "userId": "5c7ec2ad8e406e5120cb78a0",
  "username": "sss",
  "emailId": "ss@ss.com"
}

class MockedFacadeService {

  registerUser(requestData): Observable<any> {
    return of(res);
  }

  getUserDataFromLocalStorage() {
    return false;
  }

  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  setUserPermissionsInLocalStorage(res) {
    return true;
  }

  getUserPermissionsFromLocalStorage() {
    return true;
  }

  setUserDataInLocalStorage(res) {
    return true;
  }

}
class MockedFacadeServiceOverriddenTwo {

  registerUser(requestData): Observable<any> {
    return throwError('error!');
  }

}
class MockedFacadeServiceOverridden {

  registerUser(requestData): Observable<any> {
    return throwError('error!');
  }

  getUserDataFromLocalStorage() {
    return false;
  }

  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  setUserPermissionsInLocalStorage(res) {
    return true;
  }

  getUserPermissionsFromLocalStorage() {
    return false;
  }

  setUserDataInLocalStorage(res) {
    return true;
  }

}

class MockedFacadeServiceOverriddenThree {

  loginUser(requestData): Observable<any> {
    return of(res);
  }

  getUserDataFromLocalStorage() {
    return false;
  }

  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  setUserPermissionsInLocalStorage(res) {
    return true;
  }

  getUserPermissionsFromLocalStorage() {
    return false;
  }

  setUserDataInLocalStorage(res) {
    return true;
  }

}

class GoogleLoginProviderMock {
  PROVIDER_ID: '1234'
}
var googleData = {
  email: "raynormanemma@gmail.com",
  id: "101790026440813784452"
  , idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmMDIyYTQ5ZTk3ODYxNDhhZDBlMzc5Y2M4NTQ4NDRlMzZjM2VkYzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTUzNzMxNjQ2Mzg5LWRmNGgya243dHQ2cWg4YzNyZTAwOGsyNnY2M2toMDZmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTUzNzMxNjQ2Mzg5LWRmNGgya243dHQ2cWg4YzNyZTAwOGsyNnY2M2toMDZmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxNzkwMDI2NDQwODEzNzg0NDUyIiwiZW1haWwiOiJyYXlub3JtYW5lbW1hQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoicGhWeTRhZ0tXemdwcjJHQ0RUeU5OQSIsIm5hbWUiOiJSYXkgTm9ybWFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSFZoR3BqYklKQ28vQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZkRnZWN3VngwcHZsaEV2NHAwa19RMVRRUDhLQS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiUmF5IiwiZmFtaWx5X25hbWUiOiJOb3JtYW4iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU1MjAyODIwNCwiZXhwIjoxNTUyMDMxODA0LCJqdGkiOiI5YmIyMjIxMDZkYWRkMDZlMmMzZTk0MDUxN2Q2NWFiYTBlZTRkMzU2In0.cI8AXPogpWq11eyeFuIqj2IUcOJKA1_yf_pw9BR4U8crrjYBJrTc42jsr6YjwxWS1J7r30V7mbRehKX5mXO3SOuPPspl_ffIslpRRUg1zfdklEtm11zN3BuQXRNYaDr87oVSXe_vzdEt4s1i2y9N0nt1bg1qoXD-e00JDpUjd_Fs4_gDDjOLS2tMv0Ldb_JGq07D4Ill8UVW6Gf89mVIw56bfe8R7bm3jf1LWtc0Jf4VU5ulaoeGV3eSBVYE7LHg_Ekg7-ELRWZtllxLOFZtnQhg6TjMir6NMgvHyQGwt-ESeZO0s5LL1S-adnkRdNWd4LxYbt9VRaIslaaS3bVwnw"
  , image: "https://lh5.googleusercontent.com/-HVhGpjbIJCo/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfDgecwVx0pvlhEv4p0k_Q1TQP8KA/s96-c/photo.jpg"
  , name: "Ray Norman",
  provider: "google",
  token: "ya29.GmLGBpcJCGO9M01jRH4L3c5vxWmUUELPbDsMNwQ8wXq7v9TvLpBKNJu44vcpDWlN9jqC8FVTJO4Nv47L"
}
class AuthServiceMock {
  signIn(social) {
    return new Promise((resolve, reject) => {
      resolve(googleData);
    });
  }
}



describe('RegistrationHomeComponent', () => {
  let component: RegistrationHomeComponent;
  let fixture: ComponentFixture<RegistrationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [ RegistrationHomeComponent ],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
        { provide: Router, useClass: MockRouter }, { provide: AuthService, useClass: AuthServiceMock }, { provide: Router, useClass: MockRouter }, {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }, {
          provide: AuthService,
          useClass: AuthServiceMock
        }, { provide: Location, useValue: locationStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.addUserForm).toBeDefined();
  });

  fit('should add user', () => {
    component.addUserForm.patchValue({
      username: 'ssssssss',
      emailId: 'ssssssbbbbb@dddd.com',
      password: 'password',
      groupId: '5c59ab429b64fd14cc9ed84c'
    });
    component.onAddUser('password');
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/');
  });

  fit('should add user', () => {
    component.wrongDetails = true;
    component.addUserForm.patchValue({
      username: 's',
      emailId: '@.com',
      password: '',
      groupId: '5c59ab429b64fd14cc9ed84c'
    });
    component.onAddUser('password');
    expect(component.detailsCorrectlyFilled).toBeFalsy();
  });

  fit('should go back when clicked', () => {
    component.goBack();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/');
  });

});

describe('RegistrationHomeComponent', () => {
  let component: RegistrationHomeComponent;
  let fixture: ComponentFixture<RegistrationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [ RegistrationHomeComponent ],
      providers: [{ provide: FacadeService, useClass: MockedFacadeServiceOverridden },
        { provide: Router, useClass: MockRouter }, { provide: AuthService, useClass: AuthServiceMock }, { provide: Router, useClass: MockRouter }, {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }, {
          provide: AuthService,
          useClass: AuthServiceMock
        }, { provide: Location, useValue: locationStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should add user', () => {
    component.addUserForm.patchValue({
      username: 'ssssssss',
      emailId: 'ssssssbbbbb@dddd.com',
      password: 'password',
      groupId: '5c59ab429b64fd14cc9ed84c'
    });
    component.onAddUser('password');
  });

});
