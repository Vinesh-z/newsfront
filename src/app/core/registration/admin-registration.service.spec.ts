import { TestBed } from '@angular/core/testing';

import { AdminRegistrationGuardService } from './admin-registration.service';

describe('AdminRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminRegistrationGuardService = TestBed.get(AdminRegistrationGuardService);
    expect(service).toBeTruthy();
  });
});
