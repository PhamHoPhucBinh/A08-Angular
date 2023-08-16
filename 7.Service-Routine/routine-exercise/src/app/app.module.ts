import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeslineAppComponent } from './timesline-app/timesline-app.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductUdpateComponent } from './product/product-udpate/product-udpate.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    TimeslineAppComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductUdpateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
