import { Component, OnInit } from '@angular/core';

const validator = require("email-validator");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  submitAllowed: boolean = false;
  email: string = "";
  emailValid: boolean = false;
  password: string = "";

  constructor() { }

  ngOnInit() {
  }

  validateForm() {
    this.emailValid = validator.validate(this.email);
    this.submitAllowed = this.emailValid && this.password.length > 0;
  }

  emailChange(event: any) {
    this.email = event.target.value;
    this.validateForm();
    console.log(this.emailValid);
  }

  passwordChange(event: any) {
    this.password = event.target.value;
    this.validateForm();
  }

  attemptLogin() {

  }

}
