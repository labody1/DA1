import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialExampleModule} from './material.module';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProductService } from './api/product.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './api/product.component/product.component.component';
import { ProductDetailComponent } from './api/productDetailComponent/productDetailComponent.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    NotFoundPageComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    CommonModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
