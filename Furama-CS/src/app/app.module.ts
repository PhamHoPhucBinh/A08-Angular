import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddNewContactDetailComponent } from './contact/add-new-contact-detail/add-new-contact-detail.component';
import { AddNewContractComponent } from './contact/add-new-contract/add-new-contract.component';
import { AddNewContractDetailComponent } from './contact/add-new-contract-detail/add-new-contract-detail.component';
import { ListUsingServiceComponent } from './contact/list-using-service/list-using-service.component';
import { RegisterServiceComponent } from './contact/register-service/register-service.component';
import { AddNewCustomerComponent } from './customer/add-new-customer/add-new-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { AddNewEmployeeComponent } from './employee/add-new-employee/add-new-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddNewServiceComponent } from './service/add-new-service/add-new-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewContactDetailComponent,
    AddNewContractComponent,
    AddNewContractDetailComponent,
    ListUsingServiceComponent,
    RegisterServiceComponent,
    AddNewCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    AddNewEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
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
