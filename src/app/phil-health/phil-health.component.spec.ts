import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilHealthComponent } from './phil-health.component';

describe('PhilHealthComponent', () => {
  let component: PhilHealthComponent;
  let fixture: ComponentFixture<PhilHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
