import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupon3Component } from './coupon3.component';

describe('Coupon3Component', () => {
  let component: Coupon3Component;
  let fixture: ComponentFixture<Coupon3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coupon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
