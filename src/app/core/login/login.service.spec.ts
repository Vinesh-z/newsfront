import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
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
  });

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, LoginService],
      (httpMock: HttpTestingController, service: LoginService) => {
        service.loginUser(user).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/login');
        expect(req.request.method).toEqual('POST');
        req.flush(of(user));
      })
  );
  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, LoginService],
      (httpMock: HttpTestingController, service: LoginService) => {
        service.logoutUser();
      })
  );


});
