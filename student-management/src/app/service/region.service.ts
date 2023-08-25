import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {Region} from "../model/region";

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private readonly API_URL = 'http://localhost:3000/regions';

  constructor(private httpClient: HttpClient) {
  }

  getAllRegion(): Observable<Region[]> {
    return this.httpClient.get<Region[]>(this.API_URL);
  }

  getRegionById(id: number): Observable<Region> {
    return this.httpClient.get<Region>(`${this.API_URL}/${id}`);
  }
}
