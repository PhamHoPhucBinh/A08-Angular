import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  onClickHandler(id: number){
    console.log("Category ID: ", id);
    this.router.navigate(['/categoryProduct',id]); //navigate to component by route path
  }

  private getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    })
  }
}
