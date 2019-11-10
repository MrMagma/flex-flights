import { Component, OnInit } from '@angular/core';

import { PagesService } from '../pages.service';
import { pageIds } from "../page-ids.js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pageIds = pageIds;

  constructor(private pages: PagesService) { }

  ngOnInit() {
  }

  signUpClick() {
    this.pages.setPage(pageIds.SIGNUP);
  }

  logInClick() {
    this.pages.setPage(pageIds.LOGIN);
  }

  landingClick() {
    this.pages.setPage(pageIds.LANDING);
  }

}
