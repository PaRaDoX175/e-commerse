import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { OrderFeaturesComponent } from "./order-features.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";

const routes: Routes = [
  { path: "", component: OrderFeaturesComponent },
  {
    path: ":id",
    component: OrderDetailsComponent,
    data: { breadcrumb: { alias: "orderDetails" } }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderFeaturesRoutingModule {}
