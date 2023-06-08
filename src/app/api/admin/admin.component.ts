import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }

}
