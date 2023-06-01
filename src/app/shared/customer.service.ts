import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "./address";
import { Customer, CustomerList } from "./customer";
import { ProjectList, Project } from "./project";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  url: string = "http://127.0.0.1:8080";

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<CustomerList> {
    return this.http.get<CustomerList>(this.url + "/customers");
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + "/customers/" + id);
  }

  getAllProjects(): Observable<ProjectList> {
    return this.http.get<ProjectList>(this.url + "/projects");
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.url + "/projects/" + id);
  }

  getProjectsByCustomerId(id: number): Observable<ProjectList> {
    console.log("Getting from: " + this.url + "/projects?customer=" + id)
    return this.http.get<ProjectList>(this.url + "/projects?customer=" + id);
  }

  getAddressByCustomerId(customerId: number): Observable<Address> {
    return this.http.get<Address>(this.url + "/address?customer=" + customerId);
  }

  postNewCustomer(newCustomer: Customer): void {
    this.http.post<Customer>(this.url + "/customers", { name: newCustomer.name, iban: newCustomer.iban }).subscribe();
  }
}
