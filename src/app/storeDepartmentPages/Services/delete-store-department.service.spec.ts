import { TestBed } from '@angular/core/testing';

import { DeleteStoreDepartmentService } from './delete-store-department.service';

describe('DeleteStoreDepartmentService', () => {
  let service: DeleteStoreDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteStoreDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
