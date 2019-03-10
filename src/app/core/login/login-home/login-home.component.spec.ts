import { FacadeService } from './../../services/facade.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginHomeComponent } from './login-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'angular-6-social-login';
import { LoginService } from '../login.service';
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
  navigateByUrl(url: string) { return url; }
  navigate = jasmine.createSpy('navigate');

}

var resHeader = {
  headers: new HttpHeaders({
    'authorization': 'ssss'
  })
};


var res = {
  headers: new HttpHeaders({
    'authorization': 'ssss'
  }),
  "res": "authenticated",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoic3NAc3MuY29tIiwidXNlcklkIjoiNWM3ZWMyYWQ4ZTQwNmU1MTIwY2I3OGEwIiwicGVybWlzc2lvbnMiOnsiY29tbWVudHMiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZUFueSI6dHJ1ZSwiZGVsZXRlIjp0cnVlfSwicG9zdCI6eyJjcmVhdGUiOnRydWUsInJlYWQiOnRydWUsInVwZGF0ZSI6dHJ1ZSwiZGVsZXRlIjp0cnVlLCJsaWtlIjp0cnVlLCJkaXNsaWtlIjp0cnVlfSwiY2F0ZWdvcnkiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZSI6dHJ1ZX19LCJpYXQiOjE1NTE5ODc0MjUsImV4cCI6MTU1MTk5MTAyNX0.yl0tDwAZXJAoicoTNmA5LKsGg8ZqBn-Z0fJsgRqAdS4",
  "userId": "5c7ec2ad8e406e5120cb78a0",
  "username": "sss",
  "emailId": "ss@ss.com",
  "permissions": {
    "comments": {
      "create": true,
      "read": true,
      "update": true,
      "deleteAny": true,
      "delete": true
    },
    "post": {
      "create": true,
      "read": true,
      "update": true,
      "delete": true,
      "like": true,
      "dislike": true
    },
    "category": {
      "create": true,
      "read": true,
      "update": true,
      "delete": true
    }
  },
  "expiry": "1h"
}

class MockedFacadeService {

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
    return true;
  }

  setUserDataInLocalStorage(res) {
    return true;
  }

}
class MockedFacadeServiceOverriddenTwo {

  loginUser(requestData): Observable<any> {
    return throwError('error!');
  }

}
class MockedFacadeServiceOverridden {

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

class LoginServiceMock {
  validateGoogle() {
    return of(res);
  }
}

describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [LoginHomeComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }, { provide: AuthService, useClass: AuthServiceMock }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, {
        provide: AuthService,
        useClass: AuthServiceMock
      }, { provide: Location, useValue: locationStub }, {
        provide: LoginService,
        useClass: LoginServiceMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {

    expect(component).toBeTruthy();
    component.loginForm.value.emailId = 'soumyargha.sinha2@ssssss.com';
    console.log('hahahahass' + component.loginForm.get('emailId'));
    component.loginForm.value.password = 'ssss';
  });

  fit('should google login', () => {
    component.socialSignIn('google');
  });


  fit('should go back when clicked', () => {
    component.goBack();
    const location = fixture.debugElement.injector.get(Location);
    expect(location.back).toHaveBeenCalled();
  });
  fit('on Login', () => {
    component.loginForm.patchValue({
      emailId: 'soumyargha.sinha2@ssssss.com',
      password: 'ssss',
    });
    component.onLogin();
  });



});

describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [LoginHomeComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
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
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    component.loginForm.value.emailId = 'soumyargha.sinha2@ssssss.com';
    component.loginForm.value.password = 'ssss';
  });

  fit('should go back when clicked', () => {
    component.goBack();
    const location = fixture.debugElement.injector.get(Location);
    expect(location.back).toHaveBeenCalled();
  });
  
  fit('on Login', () => {
    component.loginForm.patchValue({
      emailId: 'soumyargha.sinha2@ssssss.com',
      password: 'ssss',
    });
    component.onLogin();
  });

});

describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [LoginHomeComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeServiceOverridden },
      { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
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
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  fit('on Login', () => {
    component.loginForm.patchValue({
      emailId: 'ss',
      password: '',
    });
    component.onLogin();
    component.loginForm.patchValue({
      emailId: 'ss@ss.com',
      password: 'ssss',
    });
    component.onLogin();
  });



});


describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [LoginHomeComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeServiceOverriddenTwo },
      { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
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
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  fit('on Login', () => {
    component.loginForm.patchValue({
      emailId: 'ss@ss.com',
      password: 'ssss',
    });
    component.onLogin();
  });



});

describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [LoginHomeComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeServiceOverridden },
      { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, {
        provide: AuthService,
        useClass: AuthServiceMock
      },{
        provide: LoginService,
        useClass: LoginServiceMock
      }, { provide: Location, useValue: locationStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  fit('should google login', () => {
    component.socialSignIn('google');
  });

});