import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAccountComponent } from './Account/account-login/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountCreateComponent } from './Account/account-create/account-create.component';
import { HomeComponent } from './home/home.component';
import { BillComponentComponent } from './Components/bill-component/bill-component.component';
import { FilterComponentComponent } from './Components/filter-component/filter-component.component';
import { OverviewComponentComponent } from './Components/overview-component/overview-component.component';
import { GraphComponentComponent } from './Components/graph-component/graph-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAccountComponent,
    NavBarComponent,
    AccountCreateComponent,
    HomeComponent,
    BillComponentComponent,
    FilterComponentComponent,
    OverviewComponentComponent,
    GraphComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
