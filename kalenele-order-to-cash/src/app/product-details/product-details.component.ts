import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDetails } from 'src/productDetails';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ELEMENT_DATA : ProductDetails[] = [];
  productDetailsDisplayedColumns: string[] = ['brand', 'itemCode', 'description', 'sellingPrice', 'store', 'sobha'];
  productDetailsDataSource = new MatTableDataSource<ProductDetails>(this.ELEMENT_DATA);
  constructor(private service: ProductDetailsService) { }

  ngOnInit(): void {
    
      let resp = this.service.getProductDetails();
      resp.subscribe(report=>this.productDetailsDataSource.data=report  as ProductDetails[])
  }
  

}
