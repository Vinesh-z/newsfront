import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPermissionsComponent } from './registration-permissions.component';

describe('RegistrationPermissionsComponent', () => {
  let component: RegistrationPermissionsComponent;
  let fixture: ComponentFixture<RegistrationPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
