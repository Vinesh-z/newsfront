

import { TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/core/login/login.service';
import { FacadeService } from './../services/facade.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationGuardService } from './registration-guard.service';
class FacadeMock {
  getUserDataFromLocalStorage() {
    return {
      permissions: {
        post: {
          create: false
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

describe('RegistrationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMock },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

});


