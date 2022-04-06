import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetalldeliveryComponent } from './getalldelivery/getalldelivery.component';
import { GetalljoindeliveryComponent } from './getalljoindelivery/getalljoindelivery.component';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { GetbyreturnorderdeliveryComponent } from './getbyreturnorderdelivery/getbyreturnorderdelivery.component';
import { GetdetailsbyidComponent } from './getdetailsbyid/getdetailsbyid.component';
import { GetdetailsgreaterthanComponent } from './getdetailsgreaterthan/getdetailsgreaterthan.component';
import { GetpaymentComponent } from './getpayment/getpayment.component';
import { GetstatusdeliveryComponent } from './getstatusdelivery/getstatusdelivery.component';
import { GetstatuswithdetailsdeliveryComponent } from './getstatuswithdetailsdelivery/getstatuswithdetailsdelivery.component';
import { InsertdeliveryComponent } from './insertdelivery/insertdelivery.component';
import { InsertpaymentdetailsComponent } from './insertpaymentdetails/insertpaymentdetails.component';
import { RemovedeliveryComponent } from './removedelivery/removedelivery.component';
import { RemovepaymentComponent } from './removepayment/removepayment.component';
import { UpdatedeliveryComponent } from './updatedelivery/updatedelivery.component';
import { UpdatepymentComponent } from './updatepyment/updatepyment.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GetalldeliveryComponent,
    GetalljoindeliveryComponent,
    GetbyidComponent,
    GetbyreturnorderdeliveryComponent,
    GetdetailsbyidComponent,
    GetdetailsgreaterthanComponent,
    GetpaymentComponent,
    GetstatusdeliveryComponent,
    GetstatuswithdetailsdeliveryComponent,
    InsertdeliveryComponent,
    InsertpaymentdetailsComponent,
    RemovedeliveryComponent,
    RemovepaymentComponent,
    UpdatedeliveryComponent,
    UpdatepymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
