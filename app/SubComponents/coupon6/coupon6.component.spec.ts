import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupon6Component } from './coupon6.component';

describe('Coupon6Component', () => {
  let component: Coupon6Component;
  let fixture: ComponentFixture<Coupon6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coupon6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
