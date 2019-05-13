import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponApp3Component } from './coupon-app3.component';

describe('CouponApp3Component', () => {
  let component: CouponApp3Component;
  let fixture: ComponentFixture<CouponApp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponApp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponApp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
