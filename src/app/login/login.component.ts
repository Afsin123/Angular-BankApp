import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

  
  constructor( private router:Router, private ds: DataService) {}
  

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

    let accDetails = this.ds.user;
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
