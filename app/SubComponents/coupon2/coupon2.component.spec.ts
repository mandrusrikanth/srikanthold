import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupon2Component } from './coupon2.component';

describe('Coupon2Component', () => {
  let component: Coupon2Component;
  let fixture: ComponentFixture<Coupon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coupon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
