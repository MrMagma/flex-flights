import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PagesService } from '../pages.service';
import { pageIds } from "../page-ids.js";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  orders = [];

  constructor(private pages: PagesService, private https: HttpClient) {
    pages.getPage().subscribe(_ => {
      if (_ == pageIds.VIEW_ORDERS) {
        setInterval(() => https.get("https://flexflights.herokuapp.com/getorders?userId=" + window["userID"]).subscribe(blegh => {
          this.orders = blegh;
          console.log(blegh);
        }), 2000);
      }
    });
  }

  getDaysLeft(order) {
    return Math.ceil(((new Date(order.endDate)).getTime() - (new Date()).getTime()) / (1000 * 60 * 60 * 24));
  }

  viewOrder(order) {
    window["order"] = order;
    this.pages.setPage(pageIds.VIEW_ORDER);
  }

  createClick() {
    this.pages.setPage(pageIds.CREATE);
  }

  ngOnInit() {
  }

}
