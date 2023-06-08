import { IProduct } from './product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }
  getProductById(id: string): Observable<IProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IProduct>(url);
  }
}
