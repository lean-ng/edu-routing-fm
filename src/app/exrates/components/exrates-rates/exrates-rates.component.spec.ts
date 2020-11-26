import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExratesRatesComponent } from './exrates-rates.component';

describe('ExratesRatesComponent', () => {
  let component: ExratesRatesComponent;
  let fixture: ComponentFixture<ExratesRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExratesRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExratesRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
