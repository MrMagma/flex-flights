import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  source: string;
  destination: string;
  date: string;
  flights: Array<{duration: string, seats: number, flightNumber: string, date: string, price: number}>;

  order;

  constructor() {
    setInterval(_=>{
      if (window["order"] != null) {
        this.order = window["order"];
      }
    }, 500)
  }

  ngOnInit() {
  }

}
