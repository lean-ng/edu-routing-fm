import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExratesShellComponent } from './exrates-shell.component';

describe('ExratesShellComponent', () => {
  let component: ExratesShellComponent;
  let fixture: ComponentFixture<ExratesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExratesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExratesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
