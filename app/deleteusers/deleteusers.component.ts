import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { LoginAccount } from '../LoginAccount';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteusers',
  templateUrl: './deleteusers.component.html',
  styleUrls: ['./deleteusers.component.css']
})
export class DeleteusersComponent implements OnInit {
  check=true;
  checks=false;
  constructor(private fb: FormBuilder,private userservice:UserService,private route:Router) 
  {

   }
  
loginForm:any;


loginAccount:LoginAccount=new LoginAccount();
  ngOnInit() {
    this.loginForm=this.fb.group(
      {
        username: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(3) ]]
       })

  }
  

  onClick()
  {
    console.log("in onclick() method")
    this.userservice.deleteUsers(this.loginAccount.username).subscribe((response) =>
    {
  console.log(response)
  if(response == true)
      {
        this.checks=response;

      }
      else{
        this.check=response;
          }
   });
}}

