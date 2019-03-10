import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { RegistrationService } from './registration.service';
var user = {
  username: '1234',
  emailId: 'ssss',
  password: 'new'
}
describe('RegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  fit('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.registerUser(user).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/register');
        expect(req.request.method).toEqual('POST');
        req.flush(of(user));
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.registerAdminUser(user).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/register/admin');
        expect(req.request.method).toEqual('POST');
        req.flush(of(user));
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.updateUser(user).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/update-details');
        expect(req.request.method).toEqual('POST');
        req.flush(of(user));
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        var roles = [];
        service.getRoles().subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/all/allroles');
        expect(req.request.method).toEqual('GET');
        req.flush(of(roles));
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        var data = {};
        service.changeRole(data).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/roles/change');
        expect(req.request.method).toEqual('POST');
        req.flush(of(data));
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        
        service.getUserByEmailId('ssss').subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3001/user/email');
        expect(req.request.method).toEqual('POST');
        req.flush(of(user));
      })
  );



});
