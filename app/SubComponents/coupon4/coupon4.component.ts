import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PaymentService } from 'src/app/paymentservice';
import { LoginAccount } from 'src/app/LoginAccount';
import { UserService } from 'src/app/UserService';


@Component({
  selector: 'app-coupon4',
  templateUrl: './coupon4.component.html',
  styleUrls: ['./coupon4.component.css']
})
export class Coupon4Component implements OnInit {
  loginAccount:LoginAccount=new LoginAccount();
 result:any;
 submitted:boolean=false;
  constructor(private route: Router,private service:PaymentService,private userservice:UserService) 
  { }

  ngOnInit() {
  }
  buyNow()
  {
  
    this.route.navigateByUrl("coupon-app2");
  }


  OnCart()
  {
    this.submitted=true
    this.loginAccount.imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HHXwYbmDs4PM2ZWRrg376rtzRlycdCskK7KnU75-z0FtKVMKZA";
    this.loginAccount.price=6;
    this.loginAccount.username=this.userservice.value.username;
  console.log("addcart");
  console.log(this.loginAccount);
    

this.service.addCart(this.loginAccount).subscribe((response) =>{ 
  this.result=response
  console.log(this.result);
});
this.route.navigateByUrl("get-cart");  
}}