import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderFeaturesComponent } from "./order-features.component";
import { OrderFeaturesRoutingModule } from "./order-features-routing.module";
import { SharedModule } from "../shared/shared.module";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [OrderFeaturesComponent, OrderDetailsComponent],
  imports: [CommonModule, OrderFeaturesRoutingModule, SharedModule, CoreModule]
})
export class OrderFeaturesModule {}
