import { Component, OnInit } from '@angular/core';


import { pageIds } from "./page-ids.js";
import { PagesService } from './pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  styles = {
    landing: {
      top: "0",
      left: "0"
    },
    // login: {
    //   top: "0",
    //   left: "100%"
    // },
    signup: {
      top: "0",
      left: "100%"
    },
    orders: {
      top: "0",
      left: "200%"
    },
    view: {
      top: "0",
      left: "300%"
    },
    create: {
      top: "100%",
      left: "300%"
    }
  }
  pageIds = pageIds;
  previousPage = pageIds.LANDING
  constructor(private pages: PagesService) {
  }

  ngOnInit() {
    this.pages.getPage().subscribe(page => {
      switch (this.previousPage) {
        case pageIds.LOGIN:
          break;
        case pageIds.SIGNUP:
          if (page == pageIds.VIEW_ORDERS) {
            this.styles.landing.left = "-200%";
            this.styles.signup.left = "-100%";
            this.styles.orders.left = "0";
            this.styles.view.left = "100%";
            this.styles.create.left = "100%";
          }
          break;
        case pageIds.LANDING:
          if (page == pageIds.LOGIN) {
            this.styles.landing.left = "-100%";
            this.styles.signup.left = "0";
            this.styles.orders.left = "100%";
            this.styles.view.left = "200%";
            this.styles.create.left = "200%";
            
          } else if (page == pageIds.SIGNUP) {
            this.styles.landing.left = "-100%";
            this.styles.signup.left = "0";
            this.styles.orders.left = "100%";
            this.styles.view.left = "200%";
            this.styles.create.left = "200%";
          }
          break;
        case pageIds.VIEW_ORDERS:
          if (page == pageIds.CREATE) {
            
            this.styles.landing.left = "-300%";
            this.styles.signup.left = "-200%";
            this.styles.orders.left = "-100%";
            this.styles.view.left = "0";
            this.styles.create.left = "0";
            this.styles.view.top = "-100%";
            this.styles.create.top = "0";
          } else if (page == pageIds.VIEW_ORDER) {
            this.styles.landing.left = "-300%";
            this.styles.signup.left = "-200%";
            this.styles.orders.left = "-100%";
            this.styles.view.left = "0";
            this.styles.create.left = "0";
          }
          break;
        case pageIds.VIEW_ORDER:
          break;
        case pageIds.CREATE:
          if (page == pageIds.VIEW_ORDERS) {
            this.styles.landing.left = "-200%";
            this.styles.signup.left = "-100%";
            this.styles.view.left = "100%";
            this.styles.create.left = "100%";
            this.styles.orders.left = "0";
            setTimeout(_ => {
              this.styles.view.top = "0";
              this.styles.create.top = "100%";
            }, 500);
          }
          break;
      }
      this.previousPage = page;
    });
  }

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
