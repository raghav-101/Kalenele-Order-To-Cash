import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface OrderDetails{
  itemCode: string;
  customerName: string;
  phoneNumber: string;
  description: string;
  productCode: string;
  price: string;
  quantity: string;
  discount: string;
  instructions: string;
}
export const ORDER_DETAILS_DATA: OrderDetails[] = [

];

@Component({
  selector: 'app-enter-order',
  templateUrl: './enter-order.component.html',
  styleUrls: ['./enter-order.component.css']
})

export class EnterOrderComponent implements OnInit {
  itemCode: any;
  customerName: any;
  phoneNumber: any;
  description: any;
  productCode: any;
  price: any;
  quantity: any;
  discount: any;
  instructions: any;
  getAllInputValue(item: any, item1: any, item2: any, item3: any, item5: any, item6: any, item7: any, item8: any, item9: any,){
    this.itemCode = item.value
    this.customerName= item1.value
    this.phoneNumber = item2.value
    this.description = item3.value
    this.productCode = item5.value
    this.price = item6.value
    this.quantity = item7.value
    this.discount = item8.value
    this.instructions = item9.value
    ORDER_DETAILS_DATA.push({
      itemCode: this.itemCode, customerName: this.customerName, phoneNumber: this.phoneNumber,  description: this.description, productCode: this.productCode, price: this.price, quantity: this.quantity, discount: this.discount, instructions: this.instructions
    })
    console.log(ORDER_DETAILS_DATA);
    return this.itemCode, this.customerName, this.phoneNumber, this.description, this.productCode, this.price, this.quantity, this.discount, this.instructions;
  };

 


  
  

  orderDetailsDisplayedCoulmns: string[] = ['itemCode', 'customerName', 'phoneNumber', 'description', 'productCode', 'price', 'quantity', 'discount', 'instructions']
  orderDetailsDataSource = new MatTableDataSource(ORDER_DETAILS_DATA) 
  constructor() { }
  

  ngOnInit(): void {

  }
  
}

