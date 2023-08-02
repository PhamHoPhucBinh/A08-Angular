import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer/customer.component';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { InterfaceComponent } from './interface/interface.component';
import { ServiceComponent } from './service/service.component';
import { AddNewServiceComponent } from './service/add-new-service/add-new-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContractComponent,
    CustomerComponent,
    EmplyeeComponent,
    InterfaceComponent,
    ServiceComponent,
    AddNewServiceComponent,
    EditServiceComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
