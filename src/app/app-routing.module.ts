import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';

const routes: Routes = [
  {path: "", redirectTo: 'list-orders', pathMatch: 'full'},
  {path: 'list-orders', component: ListOrdersComponent,},
  {path: 'create-orders', component: CreateOrderComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
