import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProductComponent } from './api/product.component/product.component.component';
import { ProductDetailComponent } from './api/productDetailComponent/productDetailComponent.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'categories', component: CategoryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'list', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
