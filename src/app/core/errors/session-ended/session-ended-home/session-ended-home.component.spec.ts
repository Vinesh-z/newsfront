import { FacadeService } from './../../../services/facade.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'angular-6-social-login';
import { SessionEndedHomeComponent } from './session-ended-home.component';

class FacadeMock {
  errorGenerated = true;
}

class FacadeMockTwo {
  errorGenerated = false;
}

describe('SessionEndedHomeComponent', () => {
  let component: SessionEndedHomeComponent;
  let fixture: ComponentFixture<SessionEndedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ SessionEndedHomeComponent ],
      providers: [{provide: FacadeService, useClass: FacadeMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEndedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
