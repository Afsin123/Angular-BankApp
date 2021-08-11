import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""
  currentAcc =""

  user: any = {
    1000: { acno: 1000, username: "Akhil", password: "userone", balance: 2000, transaction:[] },
    1001: { acno: 1001, username: "Anil", password: "usertwo", balance: 3000, transaction:[] },
    1002: { acno: 1002, username: "Akhila", password: "userthree", balance: 1000, transaction:[] },
    1003: { acno: 1003, username: "Neena", password: "userfour", balance: 4000, transaction:[] },
    1004: { acno: 1004, username: "Susha", password: "userfive", balance: 5000, transaction:[] }
  }

  constructor() {
    this.getDetails()
   } 

  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.user))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
      }
  }
  getDetails(){
    if(localStorage.getItem("user")){
      this.user= JSON.parse(localStorage.getItem("user") ||'' )
    }
    
    if( localStorage.getItem("currentUser") ){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") ||'' )
    }
    
    if( localStorage.getItem("currentAcc") ){
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") ||'' )
    }
  }

  getTransaction(){
    return this.user[this.currentAcc].transaction
    
  }
  login(acno: any, password:any){
    let accDetails =  this.user; 
    if (acno in accDetails) {
      if (password == accDetails[acno]["password"]) {
      this.currentUser= accDetails[acno]["username"]
      // console.log(this.currentUser);
        this.currentAcc=acno
      this.saveDetails()
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
        balance:0, 
        transaction:[]
      }
      this.saveDetails()
      return true;
    }

  }

  deposit(acno:any, password:any, amount: any){

    var amt = parseInt(amount)

    let accDetails = this.user
    if (acno in accDetails){
      if( password == accDetails[acno]["password"]){
        accDetails[acno]["balance"]+= amt

        accDetails[acno].transaction.push({
          amt:amt,
          type: "CREDIT "
        } )

        this.saveDetails()
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

        accDetails[acno].transaction.push({
          amt:amt,
          type: "DEBIT "
        } )
        this.saveDetails() 
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
