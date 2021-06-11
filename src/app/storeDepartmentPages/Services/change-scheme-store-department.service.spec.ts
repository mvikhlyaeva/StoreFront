import { TestBed } from '@angular/core/testing';

import { ChangeSchemeStoreDepartmentService } from './change-scheme-store-department.service';

describe('ChangeSchemeStoreDepartmentService', () => {
  let service: ChangeSchemeStoreDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSchemeStoreDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
