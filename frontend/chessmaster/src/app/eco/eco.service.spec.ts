import { TestBed } from '@angular/core/testing';

import { EcoService } from './eco.service';

describe('EcoService', () => {
  let service: EcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
