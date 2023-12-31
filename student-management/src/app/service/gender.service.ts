import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private readonly API_URL = 'http://localhost:3000/genders';

  constructor(private httpClient: HttpClient) {
  }

  getAllGender(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(this.API_URL);
  }

  getGenderById(id: number): Observable<Gender> {
    return this.httpClient.get<Gender>(`${this.API_URL}/${id}`);
  }
}
