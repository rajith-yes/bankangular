import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageComponent } from './percentage.component';

describe('PercentageComponent', () => {
  let component: PercentageComponent;
  let fixture: ComponentFixture<PercentageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentageComponent]
    });
    fixture = TestBed.createComponent(PercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
