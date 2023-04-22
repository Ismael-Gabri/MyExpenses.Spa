import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAccountComponent } from './Account/account-login/login-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
