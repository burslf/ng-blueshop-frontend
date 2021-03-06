import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { SidenavService } from './components/navbar/sidenav.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ProductComponent } from './pages/product-details/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ScrollDirDirective } from './services/scroll-dir.directive';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AdminProductsComponent } from './pages/admin/products/products.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { DataAnalysisComponent } from './pages/admin/data-analysis/data-analysis.component';
import { AdminHomeComponent } from './pages/admin/home/home.component';
import { NewProductComponent } from './pages/admin/products/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    PagesComponent,
    SidenavComponent,
    ClothingComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    MenuItemComponent,
    AdminComponent,
    AdminHomeComponent,
    ScrollDirDirective,
    AdminProductsComponent,
    OrdersComponent,
    DataAnalysisComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollToModule.forRoot()
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
