import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  transactions:any

  constructor(public ds:DataService, private router: Router) { 
    this.transactions = this.ds.getTransaction()
    console.log(this.transactions);
    
  }

  ngOnInit(): void {
  }

}
