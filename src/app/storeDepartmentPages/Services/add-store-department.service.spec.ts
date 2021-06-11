import { TestBed } from '@angular/core/testing';

import { AddStoreDepartmentService } from './add-store-department.service';

describe('AddStoreDepartmentService', () => {
  let service: AddStoreDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStoreDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
