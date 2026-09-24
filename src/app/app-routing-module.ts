import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { ContactComponent } from './contact/contact';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalogComponent } from './product-catalog/product-catalog';
import { GroupCustomersComponent } from './group-customers/group-customers';


const routes: Routes = [
  { path: "binding-property", component: BindingPropertyComponent },
  { path: "binding-class", component: BindingClassComponent },
  { path: "binding-style", component: BindingStyleComponent },
  { path: "contact", component: ContactComponent },
  { path: "binding-event", component: BindingEventComponent },
  { path: "binding-2-way", component: BindingTwoWayComponent },
  { path: "danh-sach-san-pham", component: ProductListComponent },
  { path: "product-dropdown-list", component: ProductDropdownListComponent },
  { path: "product-list-call-service", component: ProductListCallServiceComponent },
  { path: "product-list-call-http-service", component: ProductListCallHttpServiceComponent },
  { path: "product-http-handle-error-service", component: ProductHttpHandleErrorServiceComponent },
  { path: "service-product-image-event", component: ServiceProductImageEventComponent },
  { path: "service-product-image-event/:id", component: ServiceProductImageEventDetailComponent },
  { path: "product-catalog", component: ProductCatalogComponent },
  { path: "group-customers", component: GroupCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
