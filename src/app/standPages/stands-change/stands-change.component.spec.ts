import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandsChangeComponent } from './stands-change.component';

describe('StandsChangeComponent', () => {
  let component: StandsChangeComponent;
  let fixture: ComponentFixture<StandsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandsChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
