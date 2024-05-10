import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnequallyComponent } from './unequally.component';

describe('UnequallyComponent', () => {
  let component: UnequallyComponent;
  let fixture: ComponentFixture<UnequallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnequallyComponent]
    });
    fixture = TestBed.createComponent(UnequallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
