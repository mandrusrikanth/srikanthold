import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PaymentService } from 'src/app/paymentservice';
import { LoginAccount } from 'src/app/LoginAccount';
import { UserService } from 'src/app/UserService';


@Component({
  selector: 'app-coupon3',
  templateUrl: './coupon3.component.html',
  styleUrls: ['./coupon3.component.css']
})
export class Coupon3Component implements OnInit {

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
    this.loginAccount.imageUrl="https://milestomemories.boardingarea.com/wp-content/uploads/2018/07/Walmart-Coupon-2.jpg";
    this.loginAccount.price=4;
    this.loginAccount.username=this.userservice.value.username;
 
    console.log("addcart");
    console.log(this.loginAccount);
    
     this.service.addCart(this.loginAccount).subscribe((response) =>{ 
  this.result=response
  console.log(this.result);
});
this.route.navigateByUrl("get-cart");  
}
}