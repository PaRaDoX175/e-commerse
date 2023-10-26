import { Component, HostListener, OnInit } from "@angular/core";
import { OrderFeaturesService } from "src/app/order-features/order-features.service";

@Component({
  selector: "app-checkout-success",
  templateUrl: "./checkout-success.component.html",
  styleUrls: ["./checkout-success.component.scss"]
})
export class CheckoutSuccessComponent implements OnInit {
  constructor(public orderService: OrderFeaturesService) {}

  ngOnInit(): void {
    this.getLastIndex();
  }

  private getLastIndex() {
    this.orderService.getOrders();
  }
}
