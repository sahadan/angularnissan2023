import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  //declare variables
  customerId: number=0;
  customerName: string ='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
