import { TestBed } from '@angular/core/testing';

import { GetSchemeService } from './get-scheme.service';

describe('GetSchemeService', () => {
  let service: GetSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
