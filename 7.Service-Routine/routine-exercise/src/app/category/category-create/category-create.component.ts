import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {ca} from "date-fns/locale";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;
  currentList: Category[];

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
    this.categoryForm = this.fb.group({
      categoryId: [, Validators.required],
      categoryName: [, Validators.required]
    });

    categoryService.getAll().subscribe(categories => {
      this.currentList = categories as Category[];
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const category = this.categoryForm.value;
    console.log(category, 'abcbcbcb');
    const postCategoryRequestObj = {
      id: this.currentList.length + 1,
      categoryName: category.categoryName
    };
    console.log('DEbugging', postCategoryRequestObj);
    this.categoryService.saveCategory(postCategoryRequestObj).subscribe(() => {
      this.categoryForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['/category/list']);
    }, e => {
      console.log(e);
    });
  }
}
