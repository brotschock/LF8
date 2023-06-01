import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Customer } from "../shared/customer";
import { CustomerService } from "../shared/customer.service";

@Component({
  selector: "app-new-customer-form",
  templateUrl: "./new-customer-form.component.html",
  styleUrls: ["./new-customer-form.component.css"]
})
export class NewCustomerFormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private cs: CustomerService, private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      iban: ["", Validators.required]
    });
  }

  onSubmit(): void {
    const formValue = this.customerForm.value;
    const name = formValue.name;
    const iban = formValue.iban;
    const newCustomer: Customer = { iban: iban, name: name, id: 0 };
    this.cs.postNewCustomer(newCustomer);
    this.customerForm.reset();
  }

  ngOnInit(): void {}
}
