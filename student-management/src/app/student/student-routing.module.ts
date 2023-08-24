import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {EditComponent} from './student-edit/edit.component';
import {DeleteConfirmationDialogComponent} from '../delete-confirmation-dialog/delete-confirmation-dialog.component';


const routes: Routes = [{
  path: 'list',
  component: StudentListComponent
}, {
  path: 'create',
  component: StudentCreateComponent
}, {
  path: 'edit/:id',
  component: EditComponent
},{
  path: 'delete/:id',
  component: DeleteConfirmationDialogComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule {
}
