import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {EnterOrderComponent} from './enter-order/enter-order.component';
import {OrderDetailsFinalComponent} from './order-details-final/order-details-final.component';
import {FinalizedOrderComponent} from './finalized-order/finalized-order.component';
import {OrderListComponent} from './order-list/order-list.component';
const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "product-details", component: ProductDetailsComponent},
  {path: "customer-details", component: CustomerDetailsComponent},
  {path: "enter-order", component: EnterOrderComponent},
  {path: "order-details", component: OrderDetailsFinalComponent},
  {path: "finalize-details", component: FinalizedOrderComponent},
  {path: "OrderListComponent", component: OrderListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
