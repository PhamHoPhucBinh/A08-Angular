import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {DirectionNeed} from '../model/directionNeed';

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

  searchPost(area: number, price: number, directionNeed: DirectionNeed): Observable<Post[]> {
    let paramArea = '';
    let paramDirectionNeed = '';
    let paramPrice = '';

    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (area != '') {
      paramArea = `area=${area}`;
    }

    // tslint:disable-next-line:triple-equals
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (price != '') {
      paramPrice = `&price.id=${price}`;
    }
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (directionNeed != 0) {
      paramDirectionNeed = `&directionNeed.id=${directionNeed}`;
    }

    return this.http.get<Post[]>(`${this.API_URL}?${paramArea}${paramPrice}${paramDirectionNeed}`);
  }
}
