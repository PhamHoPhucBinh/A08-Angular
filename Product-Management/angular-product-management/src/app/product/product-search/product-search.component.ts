// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
// @ts-ignore
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  categoryId: number
  products: Product[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.categoryId = +paramMap.get('categoryId');
      this.getProductsByCategory(this.categoryId);
    });
  }

  getProductsByCategory(id: number): void {
    this.productService.getAllProductsByCategory(id).subscribe(products => {
      this.products = products;
    });
  }

}
