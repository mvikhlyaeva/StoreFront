import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandCardComponent } from './stand-card.component';

describe('StandCardComponent', () => {
  let component: StandCardComponent;
  let fixture: ComponentFixture<StandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
