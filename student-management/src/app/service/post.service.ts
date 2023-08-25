import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";
import {Teacher} from "../model/teacher";
import {Gender} from "../model/gender";
import {DirectionNeed} from "../model/directionNeed";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL);
  }

  savePost(post): Observable<Post> {
    return this.http.post<Post>(this.API_URL, post);
  }

  findById(id: number): Observable<Post> {
    return this.http.get<Post>(`${(this.API_URL)}/${id}`);
  }

  searchPost(area: number, directionNeed: DirectionNeed, price: number,): Observable<Post[]> {
    let paramArea = '';
    let paramDirectionNeed = '';
    let paramPrice = '';
    // tslint:disable-next-line:triple-equals
    // @ts-ignore
    if (area != '') {
      paramArea = `area=${area}`;
    }
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (directionNeed != 0) {
      paramDirectionNeed = `&directionNeed.id=${directionNeed}`;
    }
    // @ts-ignore
    if (price != '') {
      paramPrice = `&price.id=${price}`;
    }
    return this.http.get<Post[]>(`${this.API_URL}?${paramArea}${paramDirectionNeed}${paramPrice}`);
  }
}
