import { LoginService } from 'src/app/core/login/login.service';
import { FacadeService } from './../services/facade.service';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminRegistrationGuardService } from './admin-registration.service';
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

var permission = {
  permissions: {
    post: {
      create: true
    }
  }
}

class FacadeMockTwo {
  getUserDataFromLocalStorage() {
    return {
      permissions: {
        post: {
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
describe('AdminRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMock },
      { provide: FacadeService, useClass: FacadeMock },
      { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: AdminRegistrationGuardService = TestBed.get(AdminRegistrationGuardService);
    expect(service).toBeTruthy();
  });

  fit('can activate test', () => {
    const service: AdminRegistrationGuardService = TestBed.get(AdminRegistrationGuardService);
    service.canActivate();
    //    expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/categories/edit'], { queryParams: { id: "5c7d5fde213e25232864dbe0" } });
    expect(service.canActivate()).toBeFalsy();
  })
});
describe('AdminRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
      { provide: FacadeService, useClass: FacadeMock },
      { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: AdminRegistrationGuardService = TestBed.get(AdminRegistrationGuardService);
    expect(service).toBeTruthy();
  });

  fit('can activate test', () => {
    const service: AdminRegistrationGuardService = TestBed.get(AdminRegistrationGuardService);
    service.canActivate();
    expect(service.canActivate()).toBeFalsy();
    spyOn(FacadeMock.prototype,'getUserDataFromLocalStorage').and.callFake(()=>{return permission});
    service.canActivate();
    expect(service.canActivate()).toBeTruthy();
  })
});