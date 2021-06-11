import { TestBed } from '@angular/core/testing';

import { GetStandsService } from './get-stands.service';

describe('GetStandsService', () => {
  let service: GetStandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
