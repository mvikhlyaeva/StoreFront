import { TestBed } from '@angular/core/testing';

import { GetAllStoreDepartmentService } from './get-all-store-department.service';

describe('GetAllStoreDepartmentService', () => {
  let service: GetAllStoreDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllStoreDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
