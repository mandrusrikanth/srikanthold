import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class UserService
{
  islogin=false;
    private baseUrl = 'http://localhost:8888/signin/api';
    private signup='http://localhost:8888/signup/api';
    private forgetpwd='http://localhost:8888/forget/api';
    private adminUrl='http://localhost:8888/admin/api';
    private deleteUrl='http://localhost:8888/remove/admin';
    
    constructor(private http: HttpClient) { }
value:any;
    getUser(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
      }

      createUser(register: Object): Observable<Object> {
  
        console.log(register)
        
        return this.http.post(`${this.signup}` + `/customer/signup`, register);
       
       }
       validateUser(login: Object): Observable<Object> {
         console.log("dgdfdfdf");
        return this.http.post(`${this.baseUrl}` + `/customer/validate`, login);
      }


      
      getUserDetails(): Observable<Object> {
  
   
        console.log("inresponse")
        
        return this.http.get(`${this.deleteUrl}`+'/customer');
       
       
       }

      validateAdmin(login: Object): Observable<Object> {
        console.log("dgdfdfdf");
       return this.http.post(`${this.adminUrl}` + `/admin/validate`, login);
     }
      forgotPassword(pwd:any):Observable<any> {
        
          return this.http.post(`${this.forgetpwd}` + `/pwd/forget`, pwd);
        }

        deleteUsers(username:any):Observable<any> {
          console.log("hello "+username)
        console.log(`${this.deleteUrl}` + `/customer/${username}`)
          return this.http.delete(`${this.deleteUrl}` + `/customer/`+username);
        }

        
      updateUser(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
      }
     
      deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
      }
     
      getUserList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
      }
     
      getUserByAge(age: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/age/${age}`);
      }
     
      deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
      }

      userDetails(userName:String)
      {
        return this.value=userName;
      }
}