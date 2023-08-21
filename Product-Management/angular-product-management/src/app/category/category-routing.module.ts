import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "../product/product-list/product-list.component";
import {ProductCreateComponent} from "../product/product-create/product-create.component";
import {ProductEditComponent} from "../product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "../product/product-delete/product-delete.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";


const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  }, {
    path: 'create',
    component: CategoryCreateComponent
  }, {
    path: 'edit/:id',
    component: CategoryEditComponent
  }, {
    path: 'delete/:id',
    component: CategoryDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
