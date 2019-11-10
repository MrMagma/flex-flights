import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { LandingComponent } from './landing/landing.component';
import { PagesService } from './pages.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ViewComponent,
    NewOrderComponent,
    ViewOrderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
