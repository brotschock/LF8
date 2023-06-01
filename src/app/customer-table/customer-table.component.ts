import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerList } from "../shared/customer";
import { CustomerService } from "../shared/customer.service";

@Component({
  selector: "app-customer-table",
  templateUrl: "./customer-table.component.html",
  styleUrls: ["./customer-table.component.css"]
})
export class CustomerTableComponent {
  customerId = 0;
  customerName = "";
  show = "customers";

  customers$?: Observable<CustomerList>;

  constructor(private cs: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.cs.getAllCustomers();
  }
}
