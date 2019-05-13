import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponApp2Component } from './coupon-app2.component';

describe('CouponApp2Component', () => {
  let component: CouponApp2Component;
  let fixture: ComponentFixture<CouponApp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponApp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
