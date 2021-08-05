import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = ""
  password = ""
  acno = ""

  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    password:['']
  })


  constructor(private ds: DataService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    var uname = this.registerForm.value.uname;
    var password = this.registerForm.value.password;
    var acno = this.registerForm.value.acno;
    //console.log(this.registerForm);
    

    var result = this.ds.register(acno, uname, password);
    if (result) {
      alert("Registration Successful!!")
      this.router.navigateByUrl("")
    }
      else{
        alert("User already exist!!!! Log in ")
      }


    // alert("Register clicked!!")

  }

}
