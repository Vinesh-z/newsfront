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
import { RegistrationGroupEditComponent } from './registration-group-edit.component';
export const LOCATION_TOKEN = new InjectionToken<Location>('Window location object');


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

describe('RegistrationGroupEditComponent', () => {
  let component: RegistrationGroupEditComponent;
  let fixture: ComponentFixture<RegistrationGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule], 
      declarations: [ RegistrationGroupEditComponent, KeysPipe ],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
        { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMockTwo
        }, { provide: Location, useValue: locationStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.groupId).toBe('5c84eb2ecb36e82f046396dc');
    expect(component.thisGroupLoaded).toBeTruthy();
    spyOn(MockedFacadeService.prototype,'getGroups').and.callFake(()=>{return of([]);});
    component.ngOnInit();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/register/groups');
    
  });
  
  fit('should update group', () => {
    component.updateGroup('testgroup');    
    spyOn(MockedFacadeService.prototype,'getGroups').and.callFake(()=>{return of(groupsTwo);});
    component.ngOnInit();
    component.updateGroup('Auditor');
    expect(component.wrongDetails).toBeTruthy();
  });

});

describe('RegistrationGroupEditComponent', () => {
  let component: RegistrationGroupEditComponent;
  let fixture: ComponentFixture<RegistrationGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule], 
      declarations: [ RegistrationGroupEditComponent, KeysPipe ],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
        { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }, { provide: Location, useValue: locationStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/register/groups');
    
  });
  

});

