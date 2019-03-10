import { FacadeService } from './../../../services/facade.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CategoriesEditComponent } from './categories-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
var cat = {
  "_id": "5c7d5fde213e25232864dbe0",
  "name": "Politics",
  "updatedAt": "2019-03-04T17:26:54.262Z",
  "createdAt": "2019-03-04T17:26:54.262Z",
  "__v": 0
};

export const LOCATION_TOKEN = new InjectionToken<Location>('Window location object');


class MockRouter {
  navigateByUrl(url: string) { return url; }
  navigate = jasmine.createSpy('navigate');

}
class MockedFacadeService {

  updateCategory(id: any) {
    return of(cat);
  }

  getUserDataFromLocalStorage() {
    return false;
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  getCategoryById(id) {
    return of(cat);
  }


}

class MockedFacadeServiceForError {
  getUserDataFromLocalStorage() {
    return false;
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  getCategoryById(id) {
    return throwError('error!');
  }

}



class ActivatedRouteMock {
  queryParams = new Observable(observer => {
    const urlParams = {
      id: '5c7d5fde213e25232864dbe0'
    }
    observer.next(urlParams);
    observer.complete();
  });
}

const locationStub = {
  back: jasmine.createSpy('back')
}

describe('CategoriesEditComponent', () => {
  let component: CategoriesEditComponent;
  let fixture: ComponentFixture<CategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [CategoriesEditComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, {provide: Location, useValue: locationStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  TestBed.overrideProvider(FacadeService, { useValue: new MockedFacadeServiceForError() });
  fit('should create', () => {
    expect(component).toBeTruthy();

  });

  fit('should update a category', () => {
    component.addCategoryForm.value.categoryName = 'Politics New';
    component.onAddCategory();

  })

  fit('should be clicked', () => {
    component.goBack();
    const location = fixture.debugElement.injector.get(Location);
    expect(location.back).toHaveBeenCalled();
});

});

describe('CategoriesEditComponent', () => {
  let component: CategoriesEditComponent;
  let fixture: ComponentFixture<CategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [CategoriesEditComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeServiceForError },
      { provide: Router, useClass: MockRouter }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, {provide: Location, useValue: locationStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

});

