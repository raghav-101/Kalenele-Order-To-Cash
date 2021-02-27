import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import {ORDER_DETAILS_DATA} from '../enter-order/enter-order.component';

@Component({
  selector: 'app-finalized-order',
  templateUrl: './finalized-order.component.html',
  styleUrls: ['./finalized-order.component.css']
})

export class FinalizedOrderComponent implements OnInit {
  postData = JSON.stringify(ORDER_DETAILS_DATA)
  constructor(private http: HttpClient) { }

  json: any;
  ngOnInit(): void {
    this.http.post("http://127.0.0.1:5000/kalenelePost" ,this.postData.toString(),).toPromise().then((resp)=> {
      console.warn(resp);
    })
    console.log(this.postData);
    
  }
  

}
