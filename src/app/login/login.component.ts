import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your banking partner"
  accnum = "account number"
  acno = "Enter acc/no here"
  password = ""

  user: any = {
    1000: { acno: 1000, username: "Akhil", password: "userone", balance: 2000 },
    1001: { acno: 1000, username: "Anhil", password: "usertwo", balance: 3000 },
    1002: { acno: 1000, username: "Akhila", password: "userthree", balance: 1000 },
    1003: { acno: 1000, username: "Neena", password: "userfour", balance: 4000 },
    1004: { acno: 1000, username: "Susha", password: "userfive", balance: 5000 }
  }
  constructor( private router:Router) {}
  

  ngOnInit(): void {
  }
  // login(a:any, p:any){
  //   // alert("Login Clicked")
  //   var acno= a.value;
  //   console.log(a.value);

  //   var pswd = p.value;
  //   console.log(p.value);

  //   let accDetails = this.user;
  //   if(acno in accDetails){
  //     if(pswd == accDetails[acno]["password"])
  //     {
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else{
  //     alert("Incorrect Username/accno")
  //   }


  login() {
    // alert("Login Clicked")
    var acno = this.acno;

    var pswd = this.password;

    let accDetails = this.user;
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        alert("Login Successful")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Incorrect Username/accno")
    }
  }
  
  // accChange(event:any){
  //   console.log(event.target.value);
  //   this.acno= event.target.value;

  // }
  // pswdChange(event:any){
  //   console.log(event.target.value);
  //   this.password= event.target.value;
  // }
}
