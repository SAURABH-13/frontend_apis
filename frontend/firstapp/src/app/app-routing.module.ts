import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import{GetalldeliveryComponent} from '../app/getalldelivery/getalldelivery.component'

const routes: Routes = [
  {path: 'allOrders', component:GetalldeliveryComponent}
   
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
