import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [PostCreateComponent, PostEditComponent, PostListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
