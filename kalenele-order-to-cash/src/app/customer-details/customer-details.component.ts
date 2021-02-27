import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {CustomerDetails} from 'src/customerDetails';
import { CustomerDetailsService } from '../customer-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  ELEMENT_DATA : CustomerDetails[] = [];
  customerDetailsDisplayedColumns: string[] = ['customer', 'firstName', 'lastName', 'address', 'phoneNumber', 'city'];
  customerDetailsDataSource = new MatTableDataSource<CustomerDetails>(this.ELEMENT_DATA);
  constructor(private service: CustomerDetailsService) { }

  ngOnInit(): void {
    
      let resp = this.service.getCustomerDetails();
      resp.subscribe(report=>this.customerDetailsDataSource.data=report  as CustomerDetails[])
  }
}
