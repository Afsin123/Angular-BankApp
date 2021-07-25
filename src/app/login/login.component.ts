import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim ="Your banking partner"
  accnum="account number"
  acno=""
  password=""

  user:any ={
    1000:{acno: 1000, username:"Akhil", password :"userone", balance:2000},
    1001:{acno: 1000, username:"Anhil", password :"usertwo", balance:3000},
    1002:{acno: 1000, username:"Akhila", password :"userthree", balance:1000},
    1003:{acno: 1000, username:"Neena", password :"userfour", balance:4000},
    1004:{acno: 1000, username:"Susha", password :"userfive", balance:5000}
  }
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    // alert("Login Clicked")
    var acno= this.acno;
    var pswd = this.password;
    let accDetails = this.user;
    if(acno in accDetails){
      if(pswd == accDetails[acno]["password"])
      {
        alert("Login Successful")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("Incorrect Username/accno")
    }

    



  }
  accChange(event:any){
    console.log(event.target.value);
    this.acno= event.target.value;
    
  }
  pswdChange(event:any){
    console.log(event.target.value);
    this.password= event.target.value;
  }
}
