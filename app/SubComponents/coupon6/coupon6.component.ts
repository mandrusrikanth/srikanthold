import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PaymentService } from 'src/app/paymentservice';
import { LoginAccount } from 'src/app/LoginAccount';
import { UserService } from 'src/app/UserService';



@Component({
  selector: 'app-coupon6',
  templateUrl: './coupon6.component.html',
  styleUrls: ['./coupon6.component.css']
})
export class Coupon6Component implements OnInit {

  loginAccount:LoginAccount=new LoginAccount();
 
  constructor(private route: Router,private service:PaymentService,private userservice:UserService) 
  { }
result:any;
  ngOnInit() {
  }
  submitted:boolean=false;
  buyNow()
  {
    
    this.route.navigateByUrl("coupon-app2");
  }


  OnCart()
  {
    this.submitted=true
    this.loginAccount.imageUrl="https://theshazworld.files.wordpress.com/2017/09/21766944_1496146063778602_1895551401_o.png?w=400&h=200&crop=1";
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