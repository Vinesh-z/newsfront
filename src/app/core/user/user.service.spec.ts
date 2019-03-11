import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

var user = {
  "_id" : "5c7ec2ad8e406e5120cb78a0",
  "username" : "sssssssss",
  "emailId" : "soumyargha.ssinha2@mindtree.com",
  "password" : "$2a$10$SYUd5vTCy98BVCFx7ekuzuFj3.Fx9sev7WAfmfG.t0Ad7y126es92",
  "groupId" : "5c7d5e65824a29284cb32e2c",
  "roleName" : "Admin",
  "__v" : 0
}
describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  fit('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
    expect(service.BASE_URL).toBe(environment.REGISTRATION_BASE_URL);
  });


  fit('expects service to fetch data with proper sorting',
  inject([HttpTestingController, UserService],
    (httpMock: HttpTestingController, service: UserService) => {
      service.getUsernameById('5c7ec2ad8e406e5120cb78a0').subscribe(data => {
        expect(data).toEqual(user);
      });
      const req = httpMock.expectOne('http://localhost:3001/user/5c7ec2ad8e406e5120cb78a0');
      expect(req.request.method).toEqual('GET');
      req.flush(user);
    })
);
});
