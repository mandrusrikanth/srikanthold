import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { PaymentService } from 'src/app/paymentservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAccount } from 'src/app/LoginAccount';
import { UserService } from 'src/app/UserService';

@Component({
  selector: 'app-coupon-app2',
  templateUrl: './coupon-app2.component.html',
  styleUrls: ['./coupon-app2.component.css']
})
export class CouponApp2Component implements OnInit {
  [x: string]: any;

  constructor(private fb: FormBuilder,private route:Router,private paymentservice:PaymentService,private userService:UserService) { }
  regForm: FormGroup;
  submitted:boolean=false;
result:any;
response:any;
 loginAccount:LoginAccount=new LoginAccount();
   ngOnInit() {
    this.regForm = this.fb.group({
   
     accountno:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
     password:['',[ Validators.required,Validators.maxLength(15),Validators.minLength(6)]]

  });

  }
  
  onPayment(){
    this.submitted=true
   this.loginAccount.username=this.userService.value.username;

   this.loginAccount.imageUrl=this.paymentservice.copName;
      console.log("in payment() method")
      console.log(this.payment)
      console.log(this.loginAccount)
      this.paymentservice.userPayment(this.loginAccount)
          .subscribe((response) =>{ 
            this.result=response
            console.log(this.result);
          });
         
             this.route.navigateByUrl("coupon-app3");  
       }
     
}