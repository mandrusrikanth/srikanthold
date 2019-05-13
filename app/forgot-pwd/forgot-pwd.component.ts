import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../UserService';
import { LoginAccount } from '../LoginAccount';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  [x: string]: any;
  password:any;
  check=true;
  checks=false;

  constructor(private fb: FormBuilder,private route:Router,private service: UserService) { }
loginAccount : LoginAccount=new LoginAccount();
value:any;
result:any;
ngOnInit() {
  this.loginForm=this.fb.group(
{
  name: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(3) ]]


})}

onClick()
{
  this.password=null;
  this.service.forgotPassword(this.loginAccount)
  .subscribe((response) =>
    {
      console.log("in response")
      console.log(response)
      this.password=response.password
      console.log(response);
      if(this.password != null)
      {
        this.checks=true;
        this.check=true;

      }
      else{
        this.check=false;
        this.checks=false;
      }
  });
   
   }
  }
