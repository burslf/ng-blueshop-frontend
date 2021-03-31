import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product-details/product.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'category/:categoryname', component: ClothingComponent},
      {path: ':categoryname/:id', component: ProductComponent},
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
