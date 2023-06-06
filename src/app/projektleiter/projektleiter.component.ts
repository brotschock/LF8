import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerList } from "../shared/customer";
import { CustomerService } from "../shared/customer.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-projektleiter",
  templateUrl: "./projektleiter.component.html",
  styleUrls: ["./projektleiter.component.css"]
})
export class ProjektleiterComponent implements OnInit {
  show = "buttons";
  auth = false;
  wrong = false;
  authForm: FormGroup;

  customers$?: Observable<CustomerList>;

  constructor(private cs: CustomerService, private fb: FormBuilder) {
    this.authForm = this.fb.group({password:["", Validators.required]});

  }

  ngOnInit(): void {
    this.customers$ = this.cs.getAllCustomers();
  }

  checkPassword() {
    const formValue = this.authForm.value;
    const password = formValue.password;
    this.authForm.reset();
    if (password === "prolei") {
      this.auth = true;
      this.wrong = false;
    } else {
      this.wrong = true;
    }
  }
}
