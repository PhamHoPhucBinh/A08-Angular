import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterCreateComponent } from './register-create/register-create.component';
import { RegisterEditComponent } from './register-edit/register-edit.component';
import { RegisterListComponent } from './register-list/register-list.component';


@NgModule({
  declarations: [RegisterCreateComponent, RegisterEditComponent, RegisterListComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
