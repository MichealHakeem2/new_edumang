import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { StudentpageComponent } from './Pages/studentpage/studentpage.component';
import { ParentpageComponent } from './Pages/parentpage/parentpage.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { FooterComponent } from './Pages/Partials/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { PasswordValidatorDirective } from './password-validator.directive';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ParentRegisterComponent } from './parent-register/parent-register.component';
import { ParentPaymentComponent } from './parent-payment/parent-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentpageComponent,
    ParentpageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PasswordValidatorDirective,
    ParentLoginComponent,
    StudentRegisterComponent,
    ParentRegisterComponent,
    ParentPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
