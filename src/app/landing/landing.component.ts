import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { pageIds } from "../page-ids.js";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private pages: PagesService) { }

  ngOnInit() {
  }

  signUpClick() {
    this.pages.setPage(pageIds.SIGNUP);
  }

  logInClick() {
    this.pages.setPage(pageIds.LOGIN);
  }

}
