import { TestBed } from '@angular/core/testing';

import { InvestorsService } from './investors.service';

describe('InvestorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestorsService = TestBed.get(InvestorsService);
    expect(service).toBeTruthy();
  });
});
