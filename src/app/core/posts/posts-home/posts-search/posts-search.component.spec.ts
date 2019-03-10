import { LoaderComponent } from './../../../../shared/loader/loader/loader.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { FacadeService } from './../../../services/facade.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/core/login/login.service';
import * as $ from 'jquery';
import { PostsSearchComponent } from './posts-search.component';
import { SearchService } from 'src/app/shared/search.service';
export const LOCATION_TOKEN = new InjectionToken<Location>('Window location object');


class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');

}

var allCats = [
  {
    "_id": "5c7d5fde213e25232864dbe0",
    "name": "Politics",
    "updatedAt": "2019-03-04T17:26:54.262Z",
    "createdAt": "2019-03-04T17:26:54.262Z",
    "__v": 0
  }
]

var searchedPosts = [
  {
    "_index": "posts",
    "_type": "post",
    "_id": "5c7d5fde213e25232864dbe0",
    "_score": 6.2198,
    "_source": {
      "title": "America's newest crew capsule rockets toward space station",
      "content": "this is a sample article. news article. sample",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "location": "US",
      "userId": "5c7d5e70824a29284cb32e2e",
      "updatedAt": "2019-03-05T21:11:43.747Z",
      "createdAt": "2019-03-05T21:11:43.416Z",
      "postImage": "1551820303570imagedbdc7a0c-d5d9-4aa8-a537-bbc92e60a713 (1).jpg"
    }
  },
  {
    "_index": "posts",
    "_type": "post",
    "_id": "5c7d5fde213e25232864dbe0",
    "_score": 5.2198,
    "_source": {
      "title": "America's newest crew capsule rockets toward space station",
      "content": "this is a sample article. news article. samples",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "location": "US",
      "userId": "5c7d5e70824a29284cb32e2e",
      "updatedAt": "2019-03-05T21:11:43.747Z",
      "createdAt": "2019-03-05T21:11:43.416Z"
    }
  },
  {
    "_index": "posts",
    "_type": "post",
    "_id": "5c7d5fde213e25232864dbe0",
    "_score": 5.2198,
    "_source": {
      "title": "America's newest crew capsule rockets toward space station",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "location": "US",
      "userId": "5c7d5e70824a29284cb32e2e",
      "updatedAt": "2019-03-05T21:11:43.747Z",
      "createdAt": "2019-03-05T21:11:43.416Z",
      "urlToImage": "thistest.jpg"
    }
  },
]

class MockedFacadeService {
  searchPosts(data) {
    return of({ body: searchedPosts });
  }

  getCategories(id) {
    return of(allCats);
  }

  getUserDataFromLocalStorage() {
    return { res: true, permissions: { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } } };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
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

class ActivatedRouteMockTwo {
  queryParams = new Observable(observer => {
    const urlParams = {
      notid: '5c7d5fde213e25232864dbe0'
    }
    observer.next(urlParams);
    observer.complete();
  });
}


class ActivatedRouteMock {
  queryParams = new Observable(observer => {
    const urlParams = {
      categoryId: '5c7d5fde213e25232864dbe0',
      first: 1,
      second: 9
    }
    observer.next(urlParams);
    observer.complete();
  });
}

class LoginServiceMock {
  getUserDataFromLocalStorage() {
    return { res: true };
  }
  userLoggedIn = true;
}

const locationStub = {
  back: jasmine.createSpy('back')
}
class SearchServiceMock {
  searchKeySet = true;
}

describe('PostsSearchComponent', () => {
  let component: PostsSearchComponent;
  let fixture: ComponentFixture<PostsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, FroalaEditorModule, FroalaViewModule],
      declarations: [PostsSearchComponent, LoaderComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }, { provide: LoginService, useClass: LoginServiceMock }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, { provide: Location, useValue: locationStub }, { provide: SearchService, useClass: SearchServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should navigate to details', () => {
    component.navigateToDetails('5c7d5fde213e25232864dbe0');
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/details/'+'5c7d5fde213e25232864dbe0');
  });

});
