import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/paymentservice';
import { UserService } from '../UserService';
import { LoginAccount } from '../LoginAccount';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})
export class MyCouponsComponent implements OnInit {

  constructor(private paymentservice:PaymentService,private service:UserService) { }
loginAccount:LoginAccount=new LoginAccount();
result:any;
  ngOnInit() {
    this.myCoupons();
  }


  myCoupons()
  {
   

  this.paymentservice.getUser().subscribe((response) =>{ 
    console.log("in response")
    console.log(response)
  
    this.result=response;
  }); 
 }
 readValue(key)
{
  return localStorage.getItem(key);
}
}
