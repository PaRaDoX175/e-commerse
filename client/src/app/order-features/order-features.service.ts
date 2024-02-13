import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Order } from "../shared/models/order";

@Injectable({
  providedIn: "root"
})
export class OrderFeaturesService {
  baseUrl = environment.apiUrl;
  orders: Order[] = [];
  isCurrent = false;

  constructor(private http: HttpClient) {}

  getOrders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token");
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http
      .get<Order[]>(this.baseUrl + "orders", { headers })
      .subscribe({
        next: orders => {
          this.orders = orders;
        }
      });
  }

  getOrderById(id: number) {
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token");
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.get<Order>(this.baseUrl + "orders/" + id, { headers });
  }
}
