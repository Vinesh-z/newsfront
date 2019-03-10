import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCreatedComponent } from './posts-created.component';

describe('PostsCreatedComponent', () => {
  let component: PostsCreatedComponent;
  let fixture: ComponentFixture<PostsCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
