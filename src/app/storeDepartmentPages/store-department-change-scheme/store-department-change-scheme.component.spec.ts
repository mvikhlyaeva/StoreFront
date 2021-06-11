import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDepartmentChangeSchemeComponent } from './store-department-change-scheme.component';

describe('StoreDepartmentChangeSchemeComponent', () => {
  let component: StoreDepartmentChangeSchemeComponent;
  let fixture: ComponentFixture<StoreDepartmentChangeSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDepartmentChangeSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDepartmentChangeSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
