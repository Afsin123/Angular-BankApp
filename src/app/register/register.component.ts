import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.registerForm.get('uname')?.errors);
    
    if (this.registerForm.valid) {
      var uname = this.registerForm.value.uname;
      var password = this.registerForm.value.password;
      var acno = this.registerForm.value.acno;
      //console.log(this.registerForm);

      var result = this.ds.register(acno, uname, password);
      if (result) {
        alert("Registration Successful!!")
        this.router.navigateByUrl("")
      }
      else {
        alert("User already exist!!!! Log in ")
        this.router.navigateByUrl("")
      }

    }
    else{
      alert("Invalid Form")
    }
    // alert("Register clicked!!")

  }
}
