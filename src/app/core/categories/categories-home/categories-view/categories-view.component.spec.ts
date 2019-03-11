import { FacadeService } from './../../../services/facade.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesViewComponent } from './categories-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

var allCategories = [
  
  {
    "_id": "5c7d5fde213e25232864dbe0",
    "name": "Politics",
    "updatedAt": "2019-03-04T17:26:54.262Z",
    "createdAt": "2019-03-04T17:26:54.262Z",
    "__v": 0
  }
];

var userData = {"res":"authenticated","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoic291bXlhcmdoYS5zaW5oYTJAbWluZHRyZWUuY29tIiwidXNlcklkIjoiNWM3ZDVlNzA4MjRhMjkyODRjYjMyZTJlIiwicGVybWlzc2lvbnMiOnsiY29tbWVudHMiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZUFueSI6dHJ1ZSwiZGVsZXRlIjp0cnVlfSwicG9zdCI6eyJjcmVhdGUiOnRydWUsInJlYWQiOnRydWUsInVwZGF0ZSI6dHJ1ZSwiZGVsZXRlIjp0cnVlLCJsaWtlIjp0cnVlLCJkaXNsaWtlIjp0cnVlfSwiY2F0ZWdvcnkiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sInBlcm1pc3Npb25zIjp7InVwZGF0ZSI6dHJ1ZX19LCJpYXQiOjE1NTIyOTA3MzgsImV4cCI6MTU1MjI5NDMzOH0.Q7xROqAfa6I_HoHlZvWNpFNlJOfbes5A3BACJMileA4","userId":"5c7d5e70824a29284cb32e2e","username":"Sam","emailId":"soumyargha.sinha2@mindtree.com","permissions":{"comments":{"create":true,"read":true,"update":true,"deleteAny":true,"delete":true},"post":{"create":true,"read":true,"update":true,"delete":true,"like":true,"dislike":true},"category":{"create":true,"read":true,"update":true,"delete":true},"permissions":{"update":true}},"expiry":"1h"};
var guestPermission = {"comments":{"create":false,"read":true,"update":false,"deleteAny":false,"delete":false},"post":{"create":false,"read":true,"update":false,"delete":false,"like":false,"dislike":false},"category":{"create":false,"read":true,"update":false,"delete":false},permissions: Object({ update: true })};

class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');

}

class MockedFacadeService {
  getUserDataFromLocalStorage() {
    return false;
  }
  getGuestPermissionsFromLocalStorage() {
    return guestPermission;
  }
  getCategories() {
    return of(allCategories);
  }
}

describe('CategoriesViewComponent', () => {
  let component: CategoriesViewComponent;
  let fixture: ComponentFixture<CategoriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule, RouterTestingModule, HttpClientModule],
      declarations: [CategoriesViewComponent],
      providers: [
      { provide: Router, useClass: MockRouter }, {provide: FacadeService, useClass: MockedFacadeService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.allCategories).toBe(allCategories);
    expect(component.currentPermissions).toEqual(guestPermission);
    spyOn(MockedFacadeService.prototype,'getUserDataFromLocalStorage').and.callFake(()=>{return userData});
    component.ngOnInit();
    expect(component.allCategories).toBe(allCategories);
    expect(component.currentPermissions).toEqual(userData.permissions);
    spyOn(MockedFacadeService.prototype,'getCategories').and.callFake(()=>{return throwError('Error')});
    component.ngOnInit();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/');
  });

  fit('should call navigate with correct params', () => {
    component.editThis("5c7d5fde213e25232864dbe0");
    expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/categories/edit'], { queryParams: { id: "5c7d5fde213e25232864dbe0" } });
  });

});
