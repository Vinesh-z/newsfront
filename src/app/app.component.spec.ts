import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SocketsService } from './core/shared/sockets.service';
import { Router, NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { LoginService } from './core/login/login.service';
import { FacadeService } from './core/services/facade.service';
import { Component } from '@angular/core';
import { SearchService } from './shared/search.service';
import { NewsService } from './shared/news.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

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
        /*SocketsService,*/{provide: NavigationEnd, useClass: navigationEndMock}, LoginService,
        FacadeService, Component, SearchService, NewsService
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
