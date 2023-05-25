import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../shared/customer.service';


@Component({
  selector: 'app-stringtest',
  templateUrl: './stringtest.component.html',
  styleUrls: ['./stringtest.component.css']
})
export class StringtestComponent {
  customerId = 0;
  customerName = '';
  show = 'customers';

  customers$?: Observable<String>;

  constructor(private cs: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.cs.getTestString();
  }
}
