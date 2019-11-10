import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  @Input() source: string;
  @Input() destination: string;
  @Input() date: string;
  @Input() flights: Array<{duration: string, seats: number, flightNumber: string, date: string, price: number}>;

  constructor() { }

  ngOnInit() {
  }

}
