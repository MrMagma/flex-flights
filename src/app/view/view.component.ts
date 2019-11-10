import { Component, OnInit } from '@angular/core';

import { PagesService } from '../pages.service';
import { pageIds } from "../page-ids.js";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  orders = [{
    source: "LAX",
    destination: "LUV",
    date: "11/7/2019",
    results: ["fuck shit"]
  },{
    source: "CAL",
    destination: "OHA",
    date: "11/5/2019",
    results: []
  }];

  constructor(private pages: PagesService) { }

  getDaysLeft(order) {
    return Math.ceil(7 - ((new Date()).getTime() - (new Date(order.date)).getTime()) / (1000 * 60 * 60 * 24));
  }

  viewOrder(order) {
    console.log(order);
    this.pages.setPage(pageIds.VIEW_ORDER);
  }

  createClick() {
    this.pages.setPage(pageIds.CREATE);
  }

  ngOnInit() {
  }

}
