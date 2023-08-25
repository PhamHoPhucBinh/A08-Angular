import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {DirectionNeed} from "../model/directionNeed";

@Injectable({
  providedIn: 'root'
})
export class DirectionNeedService {
  private readonly API_URL = 'http://localhost:3000/directionNeeds';

  constructor(private httpClient: HttpClient) {
  }

  getAllDirectionNeed(): Observable<DirectionNeed[]> {
    return this.httpClient.get<DirectionNeed[]>(this.API_URL);
  }

  getDirectionNeedById(id: number): Observable<DirectionNeed> {
    return this.httpClient.get<DirectionNeed>(`${this.API_URL}/${id}`);
  }
}
