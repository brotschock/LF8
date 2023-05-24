import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Customer, CustomerList } from "../shared/customer";
import { CustomerService } from "../shared/customer.service";

@Component({
  selector: "app-projektleiter",
  templateUrl: "./projektleiter.component.html",
  styleUrls: ["./projektleiter.component.css"]
})
export class ProjektleiterComponent implements OnInit {
 show = 'buttons';
  customers$?: Observable<CustomerList>;

  constructor(private cs: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.cs.getCustomers();
  }
}
