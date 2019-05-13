import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor(private userservice:UserService) { }
  result:any;
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers()
  {
       this.userservice.getUserDetails().subscribe((response) =>{ 
        console.log("in response")
        console.log(response)
        this.result=response;
      });
    }

}
