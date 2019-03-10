import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRolesComponent } from './registration-roles.component';

describe('RegistrationRolesComponent', () => {
  let component: RegistrationRolesComponent;
  let fixture: ComponentFixture<RegistrationRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
