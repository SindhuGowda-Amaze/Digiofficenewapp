import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproutPayrollComponent } from './sprout-payroll.component';

describe('SproutPayrollComponent', () => {
  let component: SproutPayrollComponent;
  let fixture: ComponentFixture<SproutPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SproutPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SproutPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
