import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../shared/address';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
    @Input() customerId : number = 0;
    @Input() customerName : string = '';
    address$?: Observable<Address>;
    constructor(private cs: CustomerService) {}
    
    ngOnInit(): void {
      this.address$ = this.cs.getAddress(this.customerId);
    }
  
  }
