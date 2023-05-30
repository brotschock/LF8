import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "./address";
import { Customer, CustomerList } from "./customer";
import { ProjectList } from "./project";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerList> {
    return this.http.get<CustomerList>(this.url + "/customers");
  }

  getProjectsForId(id: number): Observable<ProjectList> {
    if (id == 2345) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            data: [
              { name: "Stullen schmieren", id: 99, timespan: "Juli 2023 - Dezember 2023", budget: 120000, customerId: 2345 }
            ]
          });
          observer.complete();
        }, 600);
      });
    } else if (id == 4) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            data: [{ name: "Tisch abwischen", id: 22, timespan: "Januar 2023 - August 2023", budget: 3000000, customerId: 4 }]
          });
          observer.complete();
        }, 600);
      });
    } else {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            data: [
              { name: "Stullen schmieren", id: 99, timespan: "Juli 2023 - Dezember 2023", budget: 120000, customerId: 2345 },
              { name: "Tisch abwischen", id: 22, timespan: "Januar 2023 - August 2023", budget: 3000000, customerId: 4 }
            ]
          });
          observer.complete();
        }, 600);
      });
    }
  }

  getAddress(customerId: number): Observable<Address> {
    console.log(customerId);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          id: 45,
          street: "Finkenweg",
          housenumber: 30,
          plz: "01309",
          city: "Dresden"
        });
        observer.complete();
      }, 600);
    });
  }
}
