import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderListDetails } from 'src/order-list';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  ELEMENT_DATA : OrderListDetails[] = [];
  apiDisplayedColumns: string[] = ['customerName', 'phoneNumber', 'productCode', 'price', 'quantity', 'discount'];
  apiDataSource = new MatTableDataSource<OrderListDetails>(this.ELEMENT_DATA);
  constructor(private service: OrderListService) { }

  ngOnInit(): void {
    this.getAllReports();
  }
  public getAllReports(){
    let resp = this.service.getOrderList();
    resp.subscribe(report=> this.apiDataSource.data = report as OrderListDetails[])
  }

}
