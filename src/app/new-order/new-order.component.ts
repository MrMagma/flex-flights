import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PagesService } from '../pages.service';
import { pageIds } from "../page-ids.js";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  source: string = "";
  destination: string = "";

  constructor(private pages: PagesService, private https: HttpClient) { }

  ngOnInit() {
  }

  placeOrder() {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
    let body = new URLSearchParams();
    body.set("userId", window["userID"]);
    let date = new Date();
    body.set("startDate", "2019-11-10");
    body.set("origin", this.source);
    body.set("destination", this.destination);
    this.pages.setPage(pageIds.VIEW_ORDERS);
    this.https.post("https://flexflights.herokuapp.com/createOrder", body.toString(), {headers: headers}).subscribe((stuff) => {
      console.log(stuff);
    });
    this.pages.setPage(pageIds.VIEW_ORDERS);
  }

}
