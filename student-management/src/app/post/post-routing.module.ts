import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeleteConfirmationDialogComponent} from "../delete-confirmation-dialog/delete-confirmation-dialog.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostEditComponent} from "./post-edit/post-edit.component";


const routes: Routes = [{
  path: 'list',
  component: PostListComponent
}, {
  path: 'create',
  component: PostCreateComponent
}, {
  path: 'edit/:id',
  component: PostEditComponent
}, {
  path: 'delete/:id',
  component: DeleteConfirmationDialogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
