import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandInputCardComponent } from './stand-input-card.component';

describe('StandInputCardComponent', () => {
  let component: StandInputCardComponent;
  let fixture: ComponentFixture<StandInputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandInputCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
