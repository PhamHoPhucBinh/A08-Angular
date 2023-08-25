import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {Condition} from "../model/condition";

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  private readonly API_URL = 'http://localhost:3000/conditions';

  constructor(private httpClient: HttpClient) {
  }

  getAllCondition(): Observable<Condition[]> {
    return this.httpClient.get<Condition[]>(this.API_URL);
  }

  getConditionById(id: number): Observable<Condition> {
    return this.httpClient.get<Condition>(`${this.API_URL}/${id}`);
  }
}
