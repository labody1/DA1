import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductComponent } from './api/product.component/product.component.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './api/productDetail/productDetail.component';
import { AdminComponent } from './api/admin/admin.component';
const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'list', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
