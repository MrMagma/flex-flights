import { Component } from '@angular/core';

import { pageIds } from "./page-ids.js";
import { PagesService } from './pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageIds = pageIds;
  constructor(private pages: PagesService) { }

  results = [{duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150},
  {duration: "1 hour", seats: 1, flightNumber: '69', date: '11/9/2019', price: 150}];
  title = 'hackutd19f';
}
