import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8081/api/v1/customer/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.customersUrl + "getUsers");
  }

  public save(user: User) {
    return this.http.post<User>(this.customersUrl + "addUser", user);
  }

  public findOne(user: User) {
    return this.http.post<User>(this.customersUrl + "getUser", user);
  }
}
