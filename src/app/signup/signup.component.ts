import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PagesService } from '../pages.service';
import { pageIds } from "../page-ids.js";

const validator = require("email-validator");

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  submitAllowed: boolean = false;
  email: string = "";
  emailValid: boolean = true;
  phone: string = "";
  phoneValid: boolean = true;
  password: string = "";
  passwordVerification: string = "";

  constructor(private pages: PagesService, private https: HttpClient) { }

  ngOnInit() {
  }

  validateForm() {
    this.emailValid = validator.validate(this.email) || this.email.length == 0;
    this.phoneValid = /^[0-9]{10}$/.test(this.phone) || this.phone.length == 0;
    this.submitAllowed = this.emailValid && this.email.length > 0 && this.password.length > 0 &&
      this.phoneValid && this.password == this.passwordVerification;
  }

  emailChange(event: any) {
    this.email = event.target.value;
    this.validateForm();
  }

  phoneChange(event: any) {
    this.phone = event.target.value;
    this.validateForm();
  }

  passwordChange(event: any) {
    this.password = event.target.value;
    this.validateForm();
  }

  passwordVerificationChange(event: any) {
    this.passwordVerification = event.target.value;
    this.validateForm();
  }

  attemptSignup() {
    if (this.submitAllowed) {
      let headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
      let body = new URLSearchParams();
      body.set("email", this.email);
      body.set("password", this.password);
      body.set("phoneNumber", this.phone);
      this.pages.setPage(pageIds.VIEW_ORDERS);
      this.https.post("https://flexflights.herokuapp.com/createUser", body.toString(), {headers: headers}).subscribe((stuff) => {
        window["userID"] = stuff;
      });
    }
  }

}
