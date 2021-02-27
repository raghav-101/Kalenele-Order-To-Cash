import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) { }

  public getOrderList(){
    return this.http.get("http://127.0.0.1:5000/orderList");
  }
}
