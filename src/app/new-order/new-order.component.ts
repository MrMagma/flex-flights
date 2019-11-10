import { Component, OnInit } from '@angular/core';

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

  constructor(private pages: PagesService) { }

  ngOnInit() {
  }

  placeOrder() {
    this.pages.setPage(pageIds.VIEW_ORDERS);
  }

}
