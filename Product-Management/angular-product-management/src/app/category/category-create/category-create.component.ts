import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService,
              private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id: [, Validators.required],
      categoryName: ['', Validators.required]
    })
  }

  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(() => {
      alert('create successfully!');
      this.router.navigate(['/category/list']);
      // this.productForm.reset();
    }, e => console.log(e));
  }
}
