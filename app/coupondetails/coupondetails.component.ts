import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../paymentservice';
import { Cart } from '../cartPojo';
import { Router } from '@angular/router';
import { LoginAccount } from '../LoginAccount';
import { UserService } from '../UserService';
@Component({
  selector: 'app-coupondetails',
  templateUrl: './coupondetails.component.html',
  styleUrls: ['./coupondetails.component.css']
})
export class CoupondetailsComponent implements OnInit {
  [x: string]: any;

  result:any;
  constructor(private route:Router,private fb:FormBuilder,private cartservice:PaymentService,private service:UserService) { }
 value:any;
 code:any;
  loginAccount:LoginAccount=new LoginAccount();
  ngOnInit() {
 this.onCart();
  }

  onCart()
  {

   this.cartservice.getUser().subscribe((response) =>{ 
      console.log("in response")
      console.log(response)
    
      this.result=response;
    }); 

  }
readValue(key){
return localStorage.getItem(key);
}
}
