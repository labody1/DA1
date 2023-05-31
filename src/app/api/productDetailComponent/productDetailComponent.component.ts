import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/api/product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productDetailComponent',
  templateUrl: './productDetailComponent.component.html',
  styleUrls: ['./productDetailComponent.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  Product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = '';
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.getProductById();
  }

  getProductById() {
    this.productService.getProductById(this.productId)
      .subscribe((product: Product) => {
        this.Product = product;
      });
  }

}

