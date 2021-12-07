import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhillHealthFormComponent } from './phill-health-form.component';

describe('PhillHealthFormComponent', () => {
  let component: PhillHealthFormComponent;
  let fixture: ComponentFixture<PhillHealthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhillHealthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhillHealthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
