import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryUpdateComponent} from "./category-update/category-update.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'update/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'delete/:id',
    component: CategoryDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
