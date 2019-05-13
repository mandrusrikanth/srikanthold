import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/paymentservice';
import { LoginAccount } from 'src/app/LoginAccount';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/UserService';
@Component({
  selector: 'app-coupon1',
  templateUrl: './coupon1.component.html',
  styleUrls: ['./coupon1.component.css']
})
export class Coupon1Component implements OnInit {

  loginAccount:LoginAccount=new LoginAccount();
 
  constructor(private route: Router,private service:PaymentService,private userservice:UserService) 
  { }
result:any;
submitted:boolean=false;
  ngOnInit() {
   
  }
  buyNow()
  {
 this.route.navigateByUrl("coupon-app2");
  }
  OnCart()
  {
    this.submitted=true
    this.loginAccount.imageUrl="https://i.ytimg.com/vi/3TGCcyqUzI8/maxresdefault.jpg";
    this.loginAccount.price=3;
    this.loginAccount.username=this.userservice.value.username;
  console.log("addcart");
  console.log(this.loginAccount);
    this.service.addCart(this.loginAccount).subscribe((response) =>{ 
  this.result=response
  console.log(this.result);
});
this.route.navigateByUrl("get-cart");  
}}