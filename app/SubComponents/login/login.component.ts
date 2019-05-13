import { Component, OnInit } from '@angular/core';
import { LoginAccount } from 'src/app/LoginAccount';
import { UserService } from 'src/app/UserService';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:Router,private service: UserService) { }
loginAccount : LoginAccount=new LoginAccount();

value:any;
submitted:boolean=false;
check: boolean = false;
response:any;
loginForm: FormGroup;



ngOnInit() {
  this.loginForm=this.fb.group(
{
  name: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(3) ]],
password:['',[Validators.required,Validators.maxLength(15),Validators.minLength(6)]]

})}

onLogin(){
  this.submitted=true;
  console.log(this.loginAccount)
 
    this.service.validateUser(this.loginAccount)
    .subscribe((response) =>
    {
      if(response!=null)
      {
        localStorage.setItem('Role','customer');
        localStorage.setItem('uname',response['username']);
        
         
        this.route.navigateByUrl("home");
      }
      else{
        this.route.navigateByUrl("sign-up");
      }
      this.value=response;
      console.log("inresponse vale")
      console.log(this.value)
      this.service.userDetails(this.value);

      console.log(response), error => console.log(error)});
  
    console.log(this.loginAccount)
   
    
   }
}
