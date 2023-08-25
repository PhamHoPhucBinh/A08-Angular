import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {UserNeed} from "../model/userNeed";

@Injectable({
  providedIn: 'root'
})
export class UserNeedService {
  private readonly API_URL = 'http://localhost:3000/userNeeds';

  constructor(private httpClient: HttpClient) {
  }

  getAllUserNeed(): Observable<UserNeed[]> {
    return this.httpClient.get<UserNeed[]>(this.API_URL);
  }

  getUserNeedById(id: number): Observable<UserNeed> {
    return this.httpClient.get<UserNeed>(`${this.API_URL}/${id}`);
  }
}
