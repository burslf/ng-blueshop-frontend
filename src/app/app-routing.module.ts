import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminHomeComponent } from './pages/admin/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product-details/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminProductsComponent } from './pages/admin/products/products.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { DataAnalysisComponent } from './pages/admin/data-analysis/data-analysis.component';
import { NewProductComponent } from './pages/admin/products/new-product/new-product.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'collection/:categoryname', component: ClothingComponent},
      {path: 'collection/:categoryname/:id', component: ProductComponent},
      {path: 'admin', component: AdminComponent, children: [
        {path: '', component: AdminHomeComponent},
        {path: 'products', component: AdminProductsComponent},
        {path: 'products/new-product', component: NewProductComponent},
        {path: 'orders', component: OrdersComponent},
        {path: 'data-analysis', component: DataAnalysisComponent},        
      ]},
      
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
