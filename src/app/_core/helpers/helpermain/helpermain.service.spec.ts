import { TestBed } from '@angular/core/testing';

import { HelpermainService } from './helpermain.service';

describe('HelpermainService', () => {
  let service: HelpermainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpermainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
