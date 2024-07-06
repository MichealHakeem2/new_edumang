import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ParentpageComponent } from './Pages/parentpage/parentpage.component';
import { StudentpageComponent } from './Pages/studentpage/studentpage.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ParentRegisterComponent } from './parent-register/parent-register.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { ParentPaymentComponent } from './parent-payment/parent-payment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home Page'},
  { path: 'register', component: StudentRegisterComponent, title: 'register Page'},
  { path: 'student/login', component: LoginComponent, title: 'login Page'},
  { path: 'parent/register', component: ParentRegisterComponent, title: 'register_parent Page'},
  { path: 'parent/login', component: ParentLoginComponent, title: 'login Page'},
  { path: 'parent', component: ParentpageComponent, title: 'Parent profile'},
  { path: 'parent/payment', component: ParentPaymentComponent, title: 'Parent payment page'},
  { path: 'student', component: StudentpageComponent, title: 'Student profile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
