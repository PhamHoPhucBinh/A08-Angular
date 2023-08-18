import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      categories.forEach(c => {
        console.log('Expected Category.id', c.id);
        console.log('Actual Category', c);
      });

      this.categories = categories;
    });
  }
}
