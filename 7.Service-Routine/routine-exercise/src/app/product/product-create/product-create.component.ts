import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private productService: ProductService,
              private router: Router, private categoryService: CategoryService) {
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
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }

}
