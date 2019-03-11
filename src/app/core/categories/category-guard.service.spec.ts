import { LoginService } from 'src/app/core/login/login.service';
import { FacadeService } from './../services/facade.service';
import { TestBed } from '@angular/core/testing';

import { CategoryGuardService } from './category-guard.service';
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

describe('CategoryGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMock },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    expect(service).toBeTruthy();
  });


  fit('can activate test', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    service.canActivate();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/');
  })
});

describe('CategoryGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    expect(service).toBeTruthy();
  });


  fit('can activate test', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    service.canActivate();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/');
  })
});

describe('CategoryGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
    { provide: FacadeService, useClass: FacadeMockTwo },
    { provide: Router, useClass: MockRouter }]
  }));

  fit('should be created', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    expect(service).toBeTruthy();
  });


  fit('can activate test', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    service.canActivate();
    expect(service.canActivate()).toBeTruthy();
  })

  fit('can activate test', () => {
    const service: CategoryGuardService = TestBed.get(CategoryGuardService);
    service.canActivate();
  })
});

