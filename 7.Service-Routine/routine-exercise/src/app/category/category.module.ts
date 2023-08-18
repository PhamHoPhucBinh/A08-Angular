import {NgModule} from '@angular/core';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryRoutingModule} from "./category-routine.module";

@NgModule({
  declarations: [CategoryListComponent, CategoryCreateComponent, CategoryUpdateComponent, CategoryDeleteComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
