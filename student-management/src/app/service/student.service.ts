import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {Gender} from '../model/gender';

@Injectable({
  providedIn: 'root'
})


export class StudentService {
  private readonly API_URL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL);
  }


  saveStudent(student): Observable<Student> {
    return this.http.post<Student>(this.API_URL, student);
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${(this.API_URL)}/${id}`);

  }

  editStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.API_URL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${(this.API_URL)}/${id}`);
  }

  // @ts-ignore
  searchStudent(name: string, gender: Gender): Observable<Student[]> {
    let paramName = '';
    let paramGender = '';
    // tslint:disable-next-line:triple-equals
    if (name != '') {
      paramName = `studentName=${name}`;
    }
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (gender != 0) {
      paramGender = `&gender.id=${gender}`;
    }
    return this.http.get<Student[]>(`${this.API_URL}?${paramName}${paramGender}`);
  }
}
