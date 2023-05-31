import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/api//product.service';
import { Product } from 'src/app/api/product.model';

@Component({
  selector: 'app-product.component',
  templateUrl: './product.component.component.html',
  styleUrls: ['./product.component.component.css']
})
export class ProductComponent implements OnInit {
  Product: Product[] = [];

  constructor(private Productervice: ProductService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.Productervice.getProduct()
      .subscribe(Product => {
        this.Product = Product;
      });
  }

  createProduct(product: Product) {
    this.Productervice.createProduct(product)
      .subscribe(() => {
        this.getProduct(); // Lấy lại danh sách sau khi tạo mới
      });
  }

  updateProduct(product: Product) {
    this.Productervice.updateProduct(product)
      .subscribe(() => {
        this.getProduct(); // Lấy lại danh sách sau khi cập nhật
      });
  }

  deleteProduct(id: string) {
    this.Productervice.deleteProduct(id)
      .subscribe(() => {
        this.getProduct(); // Lấy lại danh sách sau khi xoá
      });
  }

}
