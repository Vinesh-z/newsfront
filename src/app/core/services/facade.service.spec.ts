import { TestBed } from '@angular/core/testing';

import { FacadeService } from './facade.service';

describe('FacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  fit('should be created', () => {
    const service: FacadeService = TestBed.get(FacadeService);
    expect(service).toBeTruthy();
  });
});
