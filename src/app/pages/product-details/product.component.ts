import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';
import { clothing } from '../../model/clothes'

interface Size {
  value: string | null;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public selectedSize!: string;
  public selectedProduct: any = clothing.filter(p => p.id === this.route.snapshot.queryParamMap?.get('id'))[0]
  public cart: Cart|null = null;

  size: Size = {
    value: null 
  }

  constructor(private route: ActivatedRoute, private cookie: CookieService, private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.selectedSize)
    this.cartService._cart.subscribe(res => this.cart = res)
  }
  openSnackBar(){
    this._snackBar.open('Added to cart !', 'Close', {
      duration: 1300
    })
  }
  
  selectSize(size:string) {
    this.size.value = size
    this.selectedSize = size
  }

  addProduct() {
    if(this.selectedSize) {
      if(this.cartService.cart.products.find(p => p.id === this.selectedProduct.id && p.size === this.selectedSize)){
        const mappedProduct = this.cartService.cart.products.map(p => {
          if (p.id === this.selectedProduct.id && p.size === this.selectedSize){
            p.quantity = p.quantity + 1
            return p
          } else {
            return p
          } 
        })
        const newProduct = {
          products: mappedProduct,
          totalItems: this.cartService.cart.totalItems + 1,
          totalPrice: this.cartService.cart.totalPrice + this.selectedProduct.price
        }
        this.cookie.set('cart', JSON.stringify(newProduct))
        this.cartService.setProduct(newProduct)
      } else {
        const newProduct = {
          products: [...this.cartService.cart.products, {
            id: this.selectedProduct.id,
            title: this.selectedProduct.title,
            price: this.selectedProduct.price,
            quantity: 1,
            size: this.selectedSize,
            picture: this.selectedProduct.picture,
          }],
          totalItems: this.cartService.cart.totalItems + 1,
          totalPrice: this.cartService.cart.totalPrice + this.selectedProduct.price
        }
        this.cartService.setProduct(newProduct)
        this.cookie.set('cart', JSON.stringify(newProduct))
        }
    }
  }
}
