import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupon5Component } from './coupon5.component';

describe('Coupon5Component', () => {
  let component: Coupon5Component;
  let fixture: ComponentFixture<Coupon5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coupon5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
