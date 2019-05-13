import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './SubComponents/home/home.component';
import { LoginComponent } from './SubComponents/login/login.component';
import { SignUpComponent } from './SubComponents/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { NewCouponsComponent } from './SubComponents/new-coupons/new-coupons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Coupon1Component } from './SubComponents/coupon1/coupon1.component';
import { Coupon2Component } from './SubComponents/coupon2/coupon2.component';
import { Coupon3Component } from './SubComponents/coupon3/coupon3.component';
import { Coupon4Component } from './SubComponents/coupon4/coupon4.component';
import { Coupon5Component } from './SubComponents/coupon5/coupon5.component';
import { Coupon6Component } from './SubComponents/coupon6/coupon6.component';


import { CouponApp2Component } from './SubComponents/coupon-app2/coupon-app2.component';
import { CouponApp3Component } from './SubComponents/coupon-app3/coupon-app3.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CoupondetailsComponent } from './coupondetails/coupondetails.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { MyCouponsComponent } from './my-coupons/my-coupons.component';
import { GetCartComponent } from './get-cart/get-cart.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';





 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NewCouponsComponent,
    Coupon1Component,
    Coupon2Component,
    Coupon3Component,
    Coupon4Component,
    Coupon5Component,
    Coupon6Component,

    CouponApp2Component,
    CouponApp3Component,
    CoupondetailsComponent,
    ForgotPwdComponent,
    MyCouponsComponent,
    GetCartComponent,
    AdminloginComponent,
    GetUsersComponent,
    DeleteusersComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  
    
    RouterModule.forRoot( [
      

       {
        path: '',
        redirectTo:'/home',
        pathMatch:'full'
      }, 
      {
        path: 'home', 
        component:HomeComponent 
      },
      
      { 
        path: 'login',
        component:LoginComponent 
      },
      { 
        path: 'sign-up',
        component:SignUpComponent 
      },
      { 
        path: 'new-coupons',
        component:NewCouponsComponent 
      },
      { 
        path: 'coupon1',
        component:Coupon1Component
      },
      { 
        path: 'coupon2', 
        component:Coupon2Component 
      },
      
      { 
        path: 'coupon3', 
        component:Coupon3Component 
      },
      
      { 
        path: 'coupon4', 
        component:Coupon4Component 
      },
      
      { 
        path: 'coupon5', 
        component:Coupon5Component 
      },
      { 
        path: 'coupon6', 
        component:Coupon6Component 
      },

    
      { 
        path: 'coupon-app2', 
        component:CouponApp2Component 
      },
      { 
        path: 'coupon-app3', 
        component:CouponApp3Component 
      },
      {
        path:'coupondetails',
        component:CoupondetailsComponent
      },
      {
        path:'forgot-pwd',
        component:ForgotPwdComponent
      },
      {
        path:'my-coupons',
        component:MyCouponsComponent
      },
      {
        path:'get-cart',
        component:GetCartComponent
      },
      {
        path:'adminlogin',
        component:AdminloginComponent
      },
       {
        path:'get-users',
        component:GetUsersComponent
      },
      {
        path:'deleteusers',
        component:DeleteusersComponent
      }
]),

  
    
    CarouselModule.forRoot(),

  
    
    BsDropdownModule.forRoot()
    ],
  
  providers: [],
   bootstrap: [AppComponent] 
})
export class AppModule { }
