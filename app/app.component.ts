import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CouponsProject';


  readValue(key){
    console.log(key);
    return localStorage.getItem(key);
  }

  logout(){
    localStorage.setItem('Role','nothing');
  }

}
