import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-udpate',
  templateUrl: './product-udpate.component.html',
  styleUrls: ['./product-udpate.component.css']
})
export class ProductUdpateComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  //
  // constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     this.id = +paramMap.get('id');
  //     const product = this.getProduct(this.id);
  //     this.productForm = new FormGroup({
  //       id: new FormControl(product.id),
  //       name: new FormControl(product.name),
  //       price: new FormControl(product.price),
  //       description: new FormControl(product.price),
  //     });
  //   });
  // }
  constructor(
    private productService: ProductService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = this.formBuilder.group({
        id: [product.id],
        name: ['product.name', Validators.required],
        price: [product.price],
        description: [product.description]
      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('update successfully');
  }
}
