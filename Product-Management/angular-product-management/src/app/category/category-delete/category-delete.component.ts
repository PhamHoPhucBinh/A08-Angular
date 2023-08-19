import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryId: number;
  category: Category;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.categoryId = +paramMap.get('id');
      this.getCategory(this.categoryId);
    });
  }

  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.category = category;
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      alert('delete succesfully!');
      this.router.navigate(['/category/list']);
    }, e => {
      console.log(e);
    });
  }

  cancel() {
    this.router.navigate(['/category/list']);
  }
}
