import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ORDER_DETAILS_DATA} from '../enter-order/enter-order.component';
const ORDER_DETAILS_SCHEMA: any  = {
  "itemCode": "text",
  "customerName": "text",
  "phoneNumber": "number",
  "description": "text",
  "productCode": "text",
  "price": "number",
  "quantity": "text",
  "discount": "text",
  "instructions": "text",

}
@Component({
  selector: 'app-order-details-final',
  templateUrl: './order-details-final.component.html',
  styleUrls: ['./order-details-final.component.css']
})
export class OrderDetailsFinalComponent implements OnInit {
  orderDetailsDisplayedCoulmns: string[] = ['itemCode', 'customerName', 'phoneNumber', 'description', 'productCode', 'price', 'quantity', 'discount', 'instructions', 'edit']
  ORDER_DETAILS_DATA = ORDER_DETAILS_DATA;
  orderDetailsDataSource = new MatTableDataSource(this.ORDER_DETAILS_DATA)
  


  constructor() { }

  
  ngOnInit(): void {
    console.log(this.ORDER_DETAILS_DATA);
  }

}
