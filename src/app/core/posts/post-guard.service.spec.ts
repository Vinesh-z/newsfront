import { LoginService } from 'src/app/core/login/login.service';
import { FacadeService } from './../services/facade.service';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PostGuardService } from './post-guard.service';
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
describe('PostGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMock },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  it('should be created', () => {
    const service: PostGuardService = TestBed.get(PostGuardService);
    expect(service).toBeTruthy();
  });

  fit('can activate test', () => {
    const service: PostGuardService = TestBed.get(PostGuardService);
    service.canActivate();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalled();
  })

});
describe('PostGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
    { provide: FacadeService, useClass: FacadeMock },
    { provide: Router, useClass: MockRouter }]
  }));

  it('should be created', () => {
    const service: PostGuardService = TestBed.get(PostGuardService);
    expect(service).toBeTruthy();
  });

  fit('can activate test', () => {
    const service: PostGuardService = TestBed.get(PostGuardService);
    service.canActivate();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalled();
  })

});

describe('PostGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: LoginService, useClass: LoginMockTwo },
    { provide: FacadeService, useClass: FacadeMockTwo },
    { provide: Router, useClass: MockRouter }]
  }));

  it('should be created', () => {
    const service: PostGuardService = TestBed.get(PostGuardService);
    expect(service).toBeTruthy();
  });

  fit('can activate test', () => {
    const service: PostGuardService = TestBed.get(PostGuardService);
    service.canActivate();
    expect(service.canActivate).toBeTruthy();
  })

});