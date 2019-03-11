import { LoginGuardService } from './login-guard.service';
import { LoginService } from 'src/app/core/login/login.service';
import { FacadeService } from './../services/facade.service';
import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class FacadeMock {
  getUserDataFromLocalStorage() {
    return {
      permissions: {
        category: {
          create: false
        }
      }
    }
  }
}
class FacadeMockTwo {
  getUserDataFromLocalStorage() {
    return {
      permissions: {
        category: {
          create: true
        }
      }
    }
  }
}
class LoginMock {
  userLoggedIn = false;
}

class LoginMockTwo {
  userLoggedIn = true;
}

class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');

}

describe('LoginGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMock },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: LoginGuardService = TestBed.get(LoginGuardService);
    expect(service).toBeTruthy();
  });


  fit('can activate test', () => {
    const service: LoginGuardService = TestBed.get(LoginGuardService);
    service.canActivate();
    expect(service.canActivate()).toBeTruthy();
  })
});


describe('LoginGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: LoginGuardService = TestBed.get(LoginGuardService);
    expect(service).toBeTruthy();
  });


  fit('can activate test', () => {
    const service: LoginGuardService = TestBed.get(LoginGuardService);
    service.canActivate();
    expect(service.canActivate()).toBeFalsy();
  })

});

