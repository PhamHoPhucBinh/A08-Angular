import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherCreateComponent } from './teacher-create/teacher-create.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [TeacherListComponent, TeacherCreateComponent, TeacherEditComponent],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule
    ]
})
export class TeacherModule { }
