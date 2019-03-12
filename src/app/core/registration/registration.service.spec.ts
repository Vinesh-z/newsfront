import { FacadeService } from './../services/facade.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { RegistrationService } from './registration.service';
var user = {
  username: '1234',
  emailId: 'ssss',
  password: 'new'
}
var group = {
  "_id": "5c85f1417af6b63c409ce138",
  "name": "New Auditor",
  "permissions": {
    "comments": {
      "create": false,
      "read": true,
      "update": false,
      "deleteAny": false,
      "delete": false
    },
    "post": {
      "create": false,
      "read": true,
      "update": false,
      "delete": false,
      "like": false,
      "dislike": false
    },
    "category": {
      "create": false,
      "read": true,
      "update": false,
      "delete": false
    },
    "permissions": {
      "update": false
    }
  },
  "__v": 0
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
          expect(data.body).toEqual(user);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/register');
        expect(req.request.method).toEqual('POST');
        req.flush(user);
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.registerAdminUser(user).subscribe(data => {
          expect(data.body).toEqual(user);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/register/admin');
        expect(req.request.method).toEqual('POST');
        req.flush(user);
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.updateUser(user).subscribe(data => {
          expect(data.body).toEqual(user);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/update-details');
        expect(req.request.method).toEqual('POST');
        req.flush(user);
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        var roles = [];
        service.getRoles().subscribe(data => {
          expect(data).toEqual(roles);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/all/allroles');
        expect(req.request.method).toEqual('GET');
        req.flush(roles);
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        var dataRole = {};
        service.changeRole(dataRole).subscribe(data => {
          expect(data.body).toEqual(dataRole);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/roles/change');
        expect(req.request.method).toEqual('POST');
        req.flush(dataRole);
      })
  );



  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.getGroups().subscribe(data => {
          expect(data).toEqual([group]);
        });
        const req = httpMock.expectOne('http://localhost:3001/group/allgroups/all');
        expect(req.request.method).toEqual('GET');
        req.flush([group]);
      })
  );

  fit('expects service to save group',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.saveGroup(group).subscribe(data => {
          expect(data.body).toEqual(group);
        });
        const req = httpMock.expectOne('http://localhost:3001/group/new');
        expect(req.request.method).toEqual('POST');
        req.flush(group);
      })
  );

  fit('expects service to update group',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        service.updateGroup(group).subscribe(data => {
          expect(data.body).toEqual(group);
        });
        const req = httpMock.expectOne('http://localhost:3001/group/update/update-group');
        expect(req.request.method).toEqual('POST');
        req.flush(group);
      })
  );

  fit('expects service to update group',
    inject([HttpTestingController, RegistrationService],
      (httpMock: HttpTestingController, service: RegistrationService) => {
        var data = {
          groupId: '123',
          userId: '123'
        }
        service.changeGroupOfUser(data).subscribe(data => {
          expect(data.body).toEqual(user);
        });
        const req = httpMock.expectOne('http://localhost:3001/user/change-group/user-group');
        expect(req.request.method).toEqual('POST');
        req.flush(user);
      })
  );

  fit('expects service to fetch all groups',
  inject([HttpTestingController, RegistrationService],
    (httpMock: HttpTestingController, service: RegistrationService) => {
      service.getAllUsers().subscribe(data => {
        expect(data).toEqual([user]);
      });
      const req = httpMock.expectOne('http://localhost:3001/user/get/all');
      expect(req.request.method).toEqual('GET');
      req.flush([user]);
    })
);

fit('expects service to fetch user by email id',
inject([HttpTestingController, RegistrationService],
  (httpMock: HttpTestingController, service: RegistrationService) => {
    service.getUserByEmailId('aa@ffff.com').subscribe(data => {
      expect(data.body).toEqual(user);
    });
    const req = httpMock.expectOne('http://localhost:3001/user/email');
    expect(req.request.method).toEqual('POST');
    req.flush(user);
  })
);


});
