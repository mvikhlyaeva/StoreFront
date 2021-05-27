import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDepartmentGetSchemeComponent } from './store-department-get-scheme.component';

describe('StoreDepartmentGetSchemeComponent', () => {
  let component: StoreDepartmentGetSchemeComponent;
  let fixture: ComponentFixture<StoreDepartmentGetSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDepartmentGetSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDepartmentGetSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
