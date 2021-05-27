import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDepatmentsComponent } from './store-depatments.component';

describe('StoreDepatmentsComponent', () => {
  let component: StoreDepatmentsComponent;
  let fixture: ComponentFixture<StoreDepatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDepatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDepatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
