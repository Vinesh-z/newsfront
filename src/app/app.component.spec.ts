import { AppModule } from './app.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SocketsService } from './core/shared/sockets.service';
import { Router, NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { FacadeService } from './core/services/facade.service';
import { Component } from '@angular/core';
import { SearchService } from './shared/search.service';
import { NewsService } from './shared/news.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/core/login/login.service';
import * as $ from 'jquery';

var userData = {"res":"authenticated","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoic291bXlhcmdoYS5zaW5oYTJAbWluZHRyZWUuY29tIiwidXNlcklkIjoiNWM3ZDVlNzA4MjRhMjkyODRjYjMyZTJlIiwicGVybWlzc2lvbnMiOnsiY29tbWVudHMiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZUFueSI6dHJ1ZSwiZGVsZXRlIjp0cnVlfSwicG9zdCI6eyJjcmVhdGUiOnRydWUsInJlYWQiOnRydWUsInVwZGF0ZSI6dHJ1ZSwiZGVsZXRlIjp0cnVlLCJsaWtlIjp0cnVlLCJkaXNsaWtlIjp0cnVlfSwiY2F0ZWdvcnkiOnsiY3JlYXRlIjp0cnVlLCJyZWFkIjp0cnVlLCJ1cGRhdGUiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sInBlcm1pc3Npb25zIjp7InVwZGF0ZSI6dHJ1ZX19LCJpYXQiOjE1NTIyOTA3MzgsImV4cCI6MTU1MjI5NDMzOH0.Q7xROqAfa6I_HoHlZvWNpFNlJOfbes5A3BACJMileA4","userId":"5c7d5e70824a29284cb32e2e","username":"Sam","emailId":"soumyargha.sinha2@mindtree.com","permissions":{"comments":{"create":true,"read":true,"update":true,"deleteAny":true,"delete":true},"post":{"create":true,"read":true,"update":true,"delete":true,"like":true,"dislike":true},"category":{"create":true,"read":true,"update":true,"delete":true},"permissions":{"update":true}},"expiry":"1h"};

class LoginMock {
  userLoggedIn = false;
  isAdmin() {
    return true;
  }
}

class LoginMockTwo {
  userLoggedIn = true;
}

class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');
}

class FacadeMock {
  getUserDataFromLocalStorage() {
    return userData;
  }
  resetGuestPermissions() {
    return true;
  }
  setGuestPermissions(guestPermission) {
    return true;
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    class fakeouter {
      navigateByUrl = jasmine.createSpy('navigateByUrl');
      shouldReuseRoute = jasmine.createSpy('routeReuseStrategy.shouldReuseRoute');
    }
    class navigationEndMock {
      public shouldReuseRoute = false;
    } 
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        FormsModule, ReactiveFormsModule,
        HttpClientModule
        
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        /*SocketsService,*/{provide: NavigationEnd, useClass: navigationEndMock}, {provide: LoginService, useClass: LoginMock},
        {provide: FacadeService, useClass: FacadeMock}, Component, SearchService, NewsService
      ]
    }).compileComponents();
  }));

  fit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  fit(`should have as title 'newsapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('newsapp');
  });

  fit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('News App');
  });
});
