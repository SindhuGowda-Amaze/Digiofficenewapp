import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSSFormComponent } from './sssform.component';

describe('SSSFormComponent', () => {
  let component: SSSFormComponent;
  let fixture: ComponentFixture<SSSFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSSFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
