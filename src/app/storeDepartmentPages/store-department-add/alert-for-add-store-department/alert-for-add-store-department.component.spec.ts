import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertForAddStoreDepartmentComponent } from './alert-for-add-store-department.component';

describe('AlertForAddStoreDepartmentComponent', () => {
  let component: AlertForAddStoreDepartmentComponent;
  let fixture: ComponentFixture<AlertForAddStoreDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertForAddStoreDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertForAddStoreDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
