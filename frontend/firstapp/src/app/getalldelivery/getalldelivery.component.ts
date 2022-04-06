
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-getalldelivery',
  templateUrl: './getalldelivery.component.html',
  styleUrls: ['./getalldelivery.component.css']
})
export class GetalldeliveryComponent{
  orders_details:any=[];
  start =0;
 
  constructor(private http:HttpClient) { this.orders_details.push([]) }
  
  allOrders() {
      console.log("got details")
      this.http.get("http://localhost:3000/delivery/"+this.start).subscribe((orders_details: any) =>{
      this.orders_details = orders_details;
      console.log(orders_details)
      this.start=this.start+2
    });

  }

}
