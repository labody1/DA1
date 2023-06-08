import { ProductService } from './../product.service';
import { IProduct } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: IProduct;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (product: IProduct) => {
          this.product = product;
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else {
      console.error('ID sản phẩm không hợp lệ');
    }
  }
}
