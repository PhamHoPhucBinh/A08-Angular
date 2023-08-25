import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly API_URL = 'http://localhost:3000/categories';
  constructor(private httpClient: HttpClient) { }
  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL);
  }
  getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.API_URL}/${id}`);
  }
}
