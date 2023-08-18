import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productForm = this.fb.group({
      id: [, Validators.required],
      name: ['', Validators.required],
      price: [''],
      description: ['']
    });
  }


  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['/product/list']);
    }, e => {
      console.log(e);
    });
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(products => {
      this.products = products;
    });
  }

}
