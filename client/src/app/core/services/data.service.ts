import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private key = "lastValue";

  constructor() {}

  saveValue(value: number) {
    sessionStorage.setItem(this.key, JSON.stringify(value));
  }

  getLastValue() {
    const storedValue = sessionStorage.getItem(this.key);
    return storedValue ? JSON.parse(storedValue) : null;
  }
}
