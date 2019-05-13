import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupon4Component } from './coupon4.component';

describe('Coupon4Component', () => {
  let component: Coupon4Component;
  let fixture: ComponentFixture<Coupon4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coupon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
