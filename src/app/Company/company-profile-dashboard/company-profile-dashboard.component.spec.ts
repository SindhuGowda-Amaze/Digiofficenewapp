import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileDashboardComponent } from './company-profile-dashboard.component';

describe('CompanyProfileDashboardComponent', () => {
  let component: CompanyProfileDashboardComponent;
  let fixture: ComponentFixture<CompanyProfileDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
