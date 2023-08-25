import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {CustomerType} from "../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private readonly API_URL = 'http://localhost:3000/customerTypes';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }

  getCustomerTypeById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(`${this.API_URL}/${id}`);
  }
}
