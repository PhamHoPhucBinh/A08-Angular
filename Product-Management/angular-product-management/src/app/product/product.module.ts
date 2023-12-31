import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductSearchComponent } from './product-search/product-search.component';


@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent, ProductEditComponent, ProductDeleteComponent, ProductSearchComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
