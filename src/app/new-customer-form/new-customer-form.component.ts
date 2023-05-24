import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../shared/customer';


@Component({
  selector: 'app-new-customer-form',
  templateUrl: './new-customer-form.component.html',
  styleUrls: ['./new-customer-form.component.css']
})


export class NewCustomerFormComponent implements OnInit {

  @Output() submitCustomer = new EventEmitter<Customer>();
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      iban: ['', Validators.required],
    });
  }


  submitForm() {
    const formValue = this.customerForm.value;
    const name = formValue.name;
    const iban = formValue.iban;
    const newCustomer: Customer = {...formValue};

    this.submitCustomer.emit(newCustomer);
    this.customerForm.reset();
  }

  ngOnInit(): void {
  }

}

