import { Component, OnInit } from "@angular/core";
import { OrderFeaturesService } from "./order-features.service";
import { DataService } from "../core/services/data.service";

@Component({
  selector: "app-order-features",
  templateUrl: "./order-features.component.html",
  styleUrls: ["./order-features.component.scss"]
})
export class OrderFeaturesComponent implements OnInit {
  constructor(
    public orderService: OrderFeaturesService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  saveLastValue(id: number) {
    this.dataService.saveValue(id);
  }

  getOrders() {
    this.orderService.getOrders();
  }
}
