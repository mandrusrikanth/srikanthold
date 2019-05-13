import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/userAccount';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from 'src/app/UserService';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:Router,private userService: UserService) {}
  regForm: FormGroup;
  submitted:boolean=false;
   response:any;
  userAccount:UserAccount=new UserAccount();
  ngOnInit() {

    this.regForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(3) ]],
      email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
      phonenumber:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      password:['',[ Validators.required,Validators.maxLength(15),Validators.minLength(6),	Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')] ],
      confirmPassword:['', Validators.required ]
   });
  }
     onRegiter(){
        this.submitted=true;
        console.log(this.userAccount)
        this.userService.createUser(this.userAccount)
           .subscribe((response) =>{ 
            this.response=response
            console.log(this.response.password)});
            this.route.navigateByUrl("login");
     }
  }
