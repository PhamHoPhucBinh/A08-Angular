import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gender} from "../model/gender";
import {Education} from "../model/education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private readonly API_URL = 'http://localhost:3000/educations';

  constructor(private httpClient: HttpClient) {
  }

  getAllEducation(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.API_URL);
  }

  getEducationById(id: number): Observable<Education> {
    return this.httpClient.get<Education>(`${this.API_URL}/${id}`);
  }
}
