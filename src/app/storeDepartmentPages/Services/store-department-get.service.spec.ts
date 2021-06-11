import { TestBed } from '@angular/core/testing';

import { StoreDepartmentGetService } from './store-department-get.service';

describe('StoreDepartmentGetService', () => {
  let service: StoreDepartmentGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDepartmentGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
