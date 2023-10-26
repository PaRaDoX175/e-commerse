import { Component, OnInit } from "@angular/core";
import { OrderFeaturesService } from "../order-features.service";
import { BreadcrumbService } from "xng-breadcrumb";
import { DataService } from "src/app/core/services/data.service";
import { Order } from "src/app/shared/models/order";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"]
})
export class OrderDetailsComponent implements OnInit {
  orderLength = 0;
  order?: Order;
  previousUrl?: string;

  constructor(
    public orderService: OrderFeaturesService,
    private bcService: BreadcrumbService,
    private dataService: DataService
  ) {
    this.bcService.set("@orderDetails", " ");
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.orderLength = this.orderService.orders.length;
    if (this.orderLength !== 0) {
      this.dataService.saveValue(this.orderLength);
    }

    const sessionLength = this.dataService.getLastValue();

    this.orderService
      .getOrderById(this.orderLength == 0 ? sessionLength : this.orderLength)
      .subscribe({
        next: order => {
          this.bcService.set(
            "@orderDetails",
            `Order #${this.orderLength == 0 ? sessionLength : this.orderLength}`
          );
          this.order = order;
        }
      });
  }
}
