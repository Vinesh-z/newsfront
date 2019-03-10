import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupComponent } from './registration-group.component';

describe('RegistrationGroupComponent', () => {
  let component: RegistrationGroupComponent;
  let fixture: ComponentFixture<RegistrationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
