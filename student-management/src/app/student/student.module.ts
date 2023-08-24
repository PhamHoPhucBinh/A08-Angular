import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentCreateComponent } from './student-create/student-create.component';
import { EditComponent } from './student-edit/edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [StudentCreateComponent, EditComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
