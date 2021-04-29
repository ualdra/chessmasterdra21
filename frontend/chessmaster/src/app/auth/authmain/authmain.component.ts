import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authmain',
  templateUrl: './authmain.component.html',
  styleUrls: ['./authmain.component.css']
})
export class AuthmainComponent implements OnInit {

  username: String;
  password: String;
  repassword: String;


  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  validate(){
    console.log("username: " + this.username);
    console.log("password: " + this.password);

  }

  register(){
    console.log("username: " + this.username);
    console.log("password: " + this.password);

  }

}
