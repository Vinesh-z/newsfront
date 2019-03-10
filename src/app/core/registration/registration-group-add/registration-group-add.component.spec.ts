import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupAddComponent } from './registration-group-add.component';

describe('RegistrationGroupAddComponent', () => {
  let component: RegistrationGroupAddComponent;
  let fixture: ComponentFixture<RegistrationGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
