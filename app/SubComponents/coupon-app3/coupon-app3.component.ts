import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cartPojo';



@Component({
  selector: 'app-coupon-app3',
  templateUrl: './coupon-app3.component.html',
  styleUrls: ['./coupon-app3.component.css']
})
export class CouponApp3Component implements OnInit {
  [x: string]: any;

  constructor() { }
cart:Cart=new Cart();
  ngOnInit() {
   
  

}
}
