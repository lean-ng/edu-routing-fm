import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExratesWelcomeComponent } from './exrates-welcome.component';

describe('ExratesWelcomeComponent', () => {
  let component: ExratesWelcomeComponent;
  let fixture: ComponentFixture<ExratesWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExratesWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExratesWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
