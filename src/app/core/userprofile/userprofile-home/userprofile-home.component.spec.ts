import { FacadeService } from './../../services/facade.service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken, Directive } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/core/login/login.service';
import * as $ from 'jquery';
import { UserprofileHomeComponent } from './userprofile-home.component';

class MockRouter {
  activate = jasmine.createSpy('activate');

}
@Directive({
  selector: '[routerLink], [routerLinkActive]'
})
class DummyRouterLinkDirective { }
class MockedFacadeServiceTwo {

  getCommentsByUserId(id) {
    return of(comments);
  }

  findLikesByUserId(id) {
    return of(likes);
  }
  findDislikesByUserId(id) {
    return of(dislikes);
  }
  getUserDataFromLocalStorage() {
    return false;
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

}

var likes = [
  {
    "_id": "5c7e44900a423e0bac80382b",
    "postId": "5c7d630e213e25232864dbe5",
    "userId": "5c7e4477824a29284cb32e2f",
    "updatedAt": "2019-03-05T09:42:40.075Z",
    "createdAt": "2019-03-05T09:42:40.075Z",
    "__v": 0
  }
]
var dislikes = [
  {
    "_id": "5c7e44900a423e0bac80382b",
    "postId": "5c7d630e213e25232864dbe5",
    "userId": "5c7e4477824a29284cb32e2f",
    "updatedAt": "2019-03-05T09:42:40.075Z",
    "createdAt": "2019-03-05T09:42:40.075Z",
    "__v": 0
  }
]
var comment = {
  "_id": "5c59834567027847c489d91b",
  "nestedComments": [
    {
      "nestedComments": [],
      "_id": "5c59834567027847c489d91b",
      "content": "haahahaahaahahaahahahahahah",
      "userId": "5c5729804cc4fa425c8e7b10"
    },
    {
      "nestedComments": [],
      "_id": "5c59b0ad14b03d26f4f3b510",
      "content": "hahaha hahahahahahahaha",
      "userId": "5c59af2d31c81d29e8e945e6"
    }
  ],
  "content": "haahahaah hahahaaha 123",
  "postId": "5c7d62cc213e25232864dbe4",
  "userId": "5c7e4477824a29284cb32e2f",
  "__v": 2
}
var comments = [
  comment
]

class MockedFacadeService {

  getCommentsByUserId(id) {
    return of(comments);
  }

  findLikesByUserId(id) {
    return of(likes);
  }
  findDislikesByUserId(id) {
    return of(dislikes);
  }
  getUserDataFromLocalStorage() {
    return { res: true, permissions: { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } } };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

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
describe('UserprofileHomeComponent', () => {
  let component: UserprofileHomeComponent;
  let fixture: ComponentFixture<UserprofileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, FroalaEditorModule, FroalaViewModule],
      declarations: [UserprofileHomeComponent, DummyRouterLinkDirective],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: LoginService, useClass: LoginServiceMock },
      { provide: ActivatedRoute },
      { provide: Location }, { provide: Router }
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

});

