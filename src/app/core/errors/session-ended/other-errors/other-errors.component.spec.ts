import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherErrorsComponent } from './other-errors.component';

describe('OtherErrorsComponent', () => {
  let component: OtherErrorsComponent;
  let fixture: ComponentFixture<OtherErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
