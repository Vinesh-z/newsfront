import { ProfileguardService } from './profileguard.service';
import { TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/core/login/login.service';
import { FacadeService } from './../services/facade.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
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

describe('ProfileGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMock },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service:  ProfileguardService = TestBed.get(ProfileguardService);
    expect(service).toBeTruthy();
  });
  fit('can activate test', () => {
    const service: ProfileguardService = TestBed.get(ProfileguardService);
    service.canActivate();
    expect(service.canActivate()).toBeFalsy();
    
  })
});

describe('ProfileGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: ProfileguardService = TestBed.get(ProfileguardService);
    expect(service).toBeTruthy();
  });
  fit('can activate test', () => {
    const service: ProfileguardService = TestBed.get(ProfileguardService);
    service.canActivate();
    expect(service.canActivate).toBeTruthy();
  })
});

