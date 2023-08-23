import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {environment} from "../../environments/environment";
import {Gender} from "../model/gender";

@Injectable({
  providedIn: 'root'
})


export class StudentService {
  private readonly API_URL = `${environment.apiURL}`;
  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL + '/students');
  }


  saveStudent(student): Observable<Student> {
    return this.http.post<Student>(this.API_URL + '/students', student);
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${(this.API_URL)}/students/${id}`);
  }

  editStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.API_URL}/students/${id}`, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${(this.API_URL)}/students/${id}`);
  }

  // @ts-ignore
  searchStudent(name: string, gender: Gender): Observable<Student[]> {
    let paramName = '';
    let paramGender = ''
    if (name != '') {
      paramName = `studentName=${name}`;
    }
    // @ts-ignore
    if (gender != 0) {
      paramGender = `studentGender=${gender}`
    }
    return this.http.get<Student[]>(`${this.API_URL})?${paramName}${paramGender}`);
  }
}
