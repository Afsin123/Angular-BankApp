import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno = ""
  password =""
  amount =""

  acno1= ""
  password1 =""
  amount1 =""

  user=this.ds.currentUser;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }


  deposit(){

    var acno = this.acno;
    var password = this.password;
    var amount = this. amount;

    var result = this.ds.deposit(acno, password, amount)

    if(result){
      alert ( " Amount is "+ amount + "credited. New balance is"+ result)
    }
    
   
  }

  withdraw(){

    var acno1 = this.acno1;
    var password1 = this.password1;
    var amount1 = this. amount1;

    var result1 = this.ds.withdraw(acno1, password1, amount1)

    if(result1){
      alert ( " Amount is "+ amount1 + "debited from your account. New balance is"+ result1)
    }

    
  }
}
