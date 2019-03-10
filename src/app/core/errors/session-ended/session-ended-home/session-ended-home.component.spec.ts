import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEndedHomeComponent } from './session-ended-home.component';

describe('SessionEndedHomeComponent', () => {
  let component: SessionEndedHomeComponent;
  let fixture: ComponentFixture<SessionEndedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionEndedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEndedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
