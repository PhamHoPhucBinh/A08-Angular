import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gender} from '../model/gender';
import {Teacher} from '../model/teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private readonly API_URL = 'http://localhost:3000/teachers';

  constructor(private http: HttpClient) {
  }

  getAllTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.API_URL);
  }


  saveTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.API_URL, teacher);
  }


  findById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${(this.API_URL)}/${id}`);

  }

  editTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.API_URL}/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<Teacher> {
    return this.http.delete<Teacher>(`${(this.API_URL)}/${id}`);
  }

  // @ts-ignore
  searchTeacher(name: string, gender: Gender): Observable<Teacher[]> {
    let paramName = '';
    let paramGender = '';
    // tslint:disable-next-line:triple-equals
    if (name != '') {
      paramName = `teacherName=${name}`;
    }
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (gender != 0) {
      paramGender = `&gender.id=${gender}`;
    }
    return this.http.get<Teacher[]>(`${this.API_URL}?${paramName}${paramGender}`);
  }
}
