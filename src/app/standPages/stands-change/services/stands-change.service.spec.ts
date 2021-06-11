import { TestBed } from '@angular/core/testing';

import { StandsChangeService } from './stands-change.service';

describe('StandsChangeService', () => {
  let service: StandsChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandsChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
