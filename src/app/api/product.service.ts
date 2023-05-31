import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/api/product.model';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; // URL API của bạn

  constructor(private http: HttpClient) {}

  // Lấy danh sách các đối tượng
  getProduct() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Lấy một đối tượng theo ID
  getProductById(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  // Tạo một đối tượng mới
  createProduct(example: Product) {
    return this.http.post<Product>(this.apiUrl, example);
  }

  // Cập nhật đối tượng
  updateProduct(example: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${example.id}`, example);
  }

  // Xoá đối tượng
  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
