import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../paymentservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit {
result:any;
  constructor(private route:Router,private cartservice:PaymentService) { }

  ngOnInit() {
    this. getCartDetails();
    
  }
  getCartDetails()
  {
  this.cartservice.getCart().subscribe((response) =>{ 
    console.log("in response")
    console.log(response)
  console.log("hiiiiii");
    this.result=response;
  });
 }

 buyNow()
 {
  this.route.navigateByUrl("coupon-app2");
 }

 readValue(key)
 {
   return localStorage.getItem(key);
 }
}
