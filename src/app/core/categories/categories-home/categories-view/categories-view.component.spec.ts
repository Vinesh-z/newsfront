import { FacadeService } from './../../../services/facade.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesViewComponent } from './categories-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
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

class MockRouter {
  navigateByUrl(url: string) { return url; }
  navigate = jasmine.createSpy('navigate');

}

class MockedFacadeService {
  getUserDataFromLocalStorage() {
    return false;
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
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
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }]
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
  });

  fit('should call navigate with correct params', () => {
    component.editThis("5c7d5fde213e25232864dbe0");
    expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/categories/edit'], { queryParams: { id: "5c7d5fde213e25232864dbe0" } });
  });

});
