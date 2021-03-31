import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  public items!: Cart;
  constructor(private cartService: CartService, private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.cartService._cart.subscribe(res => this.items = res)
    console.log(this.items)
  }

  removeItem(id:string, size:string) {
    const numOfItems = this.items.products.filter(item => item.id === id && item.size === size)[0].quantity
    console.log('numofItems' + numOfItems)
    const totalItemsPrice = this.items.products.filter(item => item.id === id && item.size === size)[0].price * numOfItems
    console.log('totalprice' + totalItemsPrice)
    const newItems = {
      products: this.items.products.filter(item => item.id !== id || (item.id == id && item.size !== size)),
      totalItems: this.items.totalItems - numOfItems,
      totalPrice: this.items.totalPrice - totalItemsPrice
    }
    this.cookie.set('cart', JSON.stringify(newItems))
    this.cartService.setProduct(newItems)
    console.log(this.items)
  }

  removeOne(quantity:number, id:string, size:string) {
    if (quantity > 1) {
      const totalItemsPrice = this.items.products.filter(item => item.id === id && item.size === size)[0].price
      const newProducts = this.items.products.map(item => {
        if(item.id === id && item.size === size) {
          item.quantity = item.quantity - 1
          return item
        }
        return item
      })
      const newItems = {
        products: newProducts,
        totalItems: this.items.totalItems - 1,
        totalPrice: this.items.totalPrice - totalItemsPrice
      }
      this.cookie.set('cart', JSON.stringify(newItems))
      this.cartService.setProduct(newItems)
      console.log(this.items)
    }else {
      console.log('impossible');
    }
  }

  addOne(id:string, size:string) {
    const itemPrice = this.items.products.filter(item => item.id === id && item.size === size)[0].price
    const newProducts = this.items.products.map(item => {
      if(item.id === id && item.size === size) {
        item.quantity = item.quantity + 1
        return item
      }
      return item
    })
    const newItems = {
      products: newProducts,
      totalItems: this.items.totalItems + 1,
      totalPrice: this.items.totalPrice + itemPrice
    }
    this.cookie.set('cart', JSON.stringify(newItems))
    this.cartService.setProduct(newItems)
    console.log(this.items)
  }
}



