import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupon1Component } from './coupon1.component';

describe('Coupon1Component', () => {
  let component: Coupon1Component;
  let fixture: ComponentFixture<Coupon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coupon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
