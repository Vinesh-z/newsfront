import { KeysPipe } from './../group-pipe.pipe';
import { FacadeService } from './../../services/facade.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/core/login/login.service';
import * as $ from 'jquery';
import { RegistrationGroupComponent } from './registration-group.component';

class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');

}

var gr =     {
  "_id": "5c84eb2ecb36e82f046396dc",
  "name": "Auditor",
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
          "update": true
      }
  },
  "updatedAt": "2019-03-10T18:31:38.050Z",
  "createdAt": "2019-03-10T10:47:10.497Z",
  "__v": 0
}

var groups = [gr];
var grTwo =     {
  "_id": "5c84eb2ecb36e82f046396dn",
  "name": "Auditor",
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
          "update": true
      }
  },
  "updatedAt": "2019-03-10T18:31:38.050Z",
  "createdAt": "2019-03-10T10:47:10.497Z",
  "__v": 0
}

var groupsTwo = [grTwo];

class MockedFacadeService {
  getGroups() {
    return of(groups);
  }
  saveGroup(data) {
    return of(gr);
  }
  updateGroup(data) {
    return of(gr);
  }
}
class ActivatedRouteMockTwo {
  queryParams = new Observable(observer => {
    const urlParams = {
      id: '5c84eb2ecb36e82f046396dc'
    }
    observer.next(urlParams);
    observer.complete();
  });
}

class ActivatedRouteMock {
  queryParams = new Observable(observer => {
    const urlParams = {
      notId: '5c84eb2ecb36e82f046396dc'
    }
    observer.next(urlParams);
    observer.complete();
  });
}

const locationStub = {
  back: jasmine.createSpy('back')
}
describe('RegistrationGroupComponent', () => {
  let component: RegistrationGroupComponent;
  let fixture: ComponentFixture<RegistrationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule], 
      declarations: [ RegistrationGroupComponent ],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
        { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMockTwo
        }, { provide: Location, useValue: locationStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.allGroups.length).toEqual(groups.length);
    expect(component.allGroupsLoaded).toBeTruthy();
  });

  fit('should edit group', () => {
    component.editGroup('abc');
    expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/register/edit-group'], { queryParams: { id: "abc" } });
  });

  fit('should save group', () => {
    component.saveGroup('Auditor');
    expect(component.wrongDetails).toBeTruthy();
    component.saveGroup('New Group');
    expect(component.wrongDetails).toBeFalsy();
  });
});
