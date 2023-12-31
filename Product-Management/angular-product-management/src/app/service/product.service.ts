import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  getAllProductsByCategory(categoryId: number) : Observable<Product[]> {
   return this.http.get<Product[]>(API_URL +   `/products?category.id=${categoryId}`)
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }
  editProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }

}
