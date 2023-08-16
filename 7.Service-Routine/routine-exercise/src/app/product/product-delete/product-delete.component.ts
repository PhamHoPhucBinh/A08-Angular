import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = this.formBuilder.group({
        id: [product.id],
        name: [product.name],
        price: [product.price],
        description: [product.description]
      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  deleteProduct(id: number) {
    const product = this.productForm.value;
    this.productService.deleteProduct(id);
    alert('update successfully');
  }
}
