import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
    this.categoryForm = this.fb.group({
      categoryId: [, Validators.required],
      categoryName: [, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(() => {
      this.categoryForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['/category/list']);
    }, e => {
      console.log(e);
    });
  }
}
