import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeslineAppComponent} from './timesline-app/timesline-app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUdpateComponent} from './product/product-udpate/product-udpate.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';


// @ts-ignore
const routes: Routes = [
  {
    path: 'timelines',
    component: TimeslineAppComponent
  }, {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/update/:id',
    component: ProductUdpateComponent
  }, {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
