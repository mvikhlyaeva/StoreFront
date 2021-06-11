import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDepartmentAddComponent } from './store-department-add.component';

describe('StoreDepartmentAddComponent', () => {
  let component: StoreDepartmentAddComponent;
  let fixture: ComponentFixture<StoreDepartmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDepartmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDepartmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
