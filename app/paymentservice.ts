import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cartPojo';
import { LoginAccount } from './LoginAccount';
@Injectable({
    providedIn: 'root'
  })
export class PaymentService
{
  copName:any;
value:any;
    private baseUrl = 'http://localhost:8888/getcoupon/payment';
    private paymentUrl='http://localhost:8888/addcoupon/payment';
    private addCartUrl='http://localhost:8888/add/cart';
    private getCartUrl='http://localhost:8888/get/cart';
  result: any;
    constructor(private http: HttpClient) { }

    userPayment(payment: Object): Observable<Object> {
  
      console.log(payment)
      
      return this.http.post(`${this.paymentUrl}` +'/coupon/add1', payment);
     
     }
     getUser(): Observable<Object> {
  
   
      console.log("inresponse")
      
      return this.http.get(`${this.baseUrl}`+'/coupon/getCoupon');
     
     
     }
    
     addCart(cart:Object):Observable<Object>
     {
      return this.http.post(`${this.addCartUrl}` +'/coupon/addcart', cart);
     }

     getCart():Observable<Object> {
  
   
      console.log("inresponse")
      
      return this.http.get(`${this.getCartUrl}`+'/coupon/getCart');

     
    }

    
    }
