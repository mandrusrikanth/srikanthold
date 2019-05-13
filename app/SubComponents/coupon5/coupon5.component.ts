import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PaymentService } from 'src/app/paymentservice';
import { LoginAccount } from 'src/app/LoginAccount';
import { UserService } from 'src/app/UserService';



@Component({
  selector: 'app-coupon5',
  templateUrl: './coupon5.component.html',
  styleUrls: ['./coupon5.component.css']
})
export class Coupon5Component implements OnInit {

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
    this.loginAccount.imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomTmp8XDKwWXWYvkqzSd_sgAb-Zufj_dLdHSzJcCj09lNonXk";
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