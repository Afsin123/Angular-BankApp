import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser="";

  user: any = {
    1000: { acno: 1000, username: "Akhil", password: "userone", balance: 2000 },
    1001: { acno: 1001, username: "Anil", password: "usertwo", balance: 3000 },
    1002: { acno: 1002, username: "Akhila", password: "userthree", balance: 1000 },
    1003: { acno: 1003, username: "Neena", password: "userfour", balance: 4000 },
    1004: { acno: 1004, username: "Susha", password: "userfive", balance: 5000 }
  }

  constructor() { }

  login(acno: any, password:any){
    let accDetails =  this.user; 
    if (acno in accDetails) {
      if (password == accDetails[acno]["password"]) {
      this.currentUser= accDetails[acno]["username"]
      // console.log(this.currentUser);
      
       return true;
        
      }
      else {
        
        return false;
      }
    }
    else {
      alert("Incorrect Username/accno")
      return false;
    }











    // let accDetails = this.user
    // if (acno in accDetails){
    //   if( password == accDetails[acno]["password"]){
    //     this.currentUser= accDetails[acno]["uname"]
        
        
    //     return true
    //   }
    //   else {
    //     alert("Incorrect Password")
    //     return false
    //   }
    // }
    // else {
    //   alert("Invalid User")
    //   return false
    // }
  }

  register( acno:any, username: any, password: any, ){

    let accDetails =  this.user;
    if(acno in accDetails){
     
      return false;
    }
    else{
      accDetails[acno] = {
        acno,
        username,
        password,
        balance:0
      }
      return true;
    }

  }

  deposit(acno:any, password:any, amount: any){

    var amt = parseInt(amount)

    let accDetails = this.user
    if (acno in accDetails){
      if( password == accDetails[acno]["password"]){
        accDetails[acno]["balance"]+= amt
        return accDetails[acno]["balance"]
      }
      else { 
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid User")
      return false
    }
  }

  withdraw(acno:any, password:any, amount: any){

    var amt = parseInt(amount)

    let accDetails = this.user
    if (acno in accDetails){
      if( password == accDetails[acno]["password"]){
        if(accDetails[acno]["balance"] >amt) { 
        accDetails[acno]["balance"]-= amt
        return accDetails[acno]["balance"]
      }
      else {
        alert(" Insufficient Balance ")
        return false
      }
      }
      else { 
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid User")
      return false
    }
  }


}
