import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesHomeComponent } from './categories-home.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoriesHomeComponent', () => {
  let component: CategoriesHomeComponent;
  let fixture: ComponentFixture<CategoriesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ CategoriesHomeComponent ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
