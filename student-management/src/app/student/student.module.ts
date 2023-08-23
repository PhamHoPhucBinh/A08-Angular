import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentCreateComponent } from './student-create/student-create.component';
import { EditComponent } from './student-edit/edit.component';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [StudentCreateComponent, EditComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
