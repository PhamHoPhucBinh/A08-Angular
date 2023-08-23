import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentCreateComponent} from "./student-create/student-create.component";


const routes: Routes = [{
  path: 'list',
  component: StudentListComponent
}, {
  path: 'create',
  component: StudentCreateComponent
},]
// }, {
//   path: 'edit/:id',
//   component: StudentEditComponent
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule {
}
