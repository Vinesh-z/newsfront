import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsHomeComponent } from './posts-home.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('PostsHomeComponent', () => {
  let component: PostsHomeComponent;
  let fixture: ComponentFixture<PostsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ PostsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
