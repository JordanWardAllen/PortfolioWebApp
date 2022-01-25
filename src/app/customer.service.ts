import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';


@Injectable()
export class CustomerService {

  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8080/api/v1/customer/';
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl + "getCustomers");
  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customersUrl + "addCustomer", customer);
  }
}