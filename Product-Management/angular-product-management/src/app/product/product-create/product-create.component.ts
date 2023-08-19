import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService,
              private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [, Validators.required],
      productName: ['', Validators.required],
      price: [''],
      details: [''],
      category: ['']
    });
    this.getAllCategory();
  }
  submit() {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.saveProduct(product).subscribe(() => {
      alert('Tạo thành công');
      this.router.navigate(['/product/list']);
      // this.productForm.reset();
    }, e => console.log(e));
  }

  private getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
}
