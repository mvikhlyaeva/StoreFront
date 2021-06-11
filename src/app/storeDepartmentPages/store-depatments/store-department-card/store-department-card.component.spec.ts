import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDepartmentCardComponent } from './store-department-card.component';

describe('StoreDepartmentCardComponent', () => {
  let component: StoreDepartmentCardComponent;
  let fixture: ComponentFixture<StoreDepartmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDepartmentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDepartmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
