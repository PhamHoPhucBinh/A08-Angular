import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeleteConfirmationDialogComponent} from "../delete-confirmation-dialog/delete-confirmation-dialog.component";
import {TeacherListComponent} from "./teacher-list/teacher-list.component";
import {TeacherCreateComponent} from "./teacher-create/teacher-create.component";
import {TeacherEditComponent} from "./teacher-edit/teacher-edit.component";


const routes: Routes = [{
  path: 'list',
  component: TeacherListComponent
}, {
  path: 'create',
  component: TeacherCreateComponent
}, {
  path: 'edit/:id',
  component: TeacherEditComponent
}, {
  path: 'delete/:id',
  component: DeleteConfirmationDialogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
