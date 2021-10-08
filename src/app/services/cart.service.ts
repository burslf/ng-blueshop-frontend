import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Cart } from '../model/cart'

@Injectable ({
    providedIn: 'root'
})

export class CartService {
    _cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
        products: [],
        totalItems: 0,
        totalPrice: 0,
    });
    cart$ = this._cart.asObservable()
    
    constructor(private cookie: CookieService) {
        if(this.cookie.get('cart')) {
            console.log('exist cart in cookie')
            const cookieCart = this.cookie.get('cart')
            const parsedCart = JSON.parse(cookieCart)
            this._cart.next(parsedCart)
        }
    }

    get cart(): Cart {
        return this._cart.getValue()
    }

    setProduct(newProduct:any){
        this._cart.next(newProduct);
        console.log(this.cart.products.length)
        if(this.cart.products.length == 0) {
            this.cookie.deleteAll()
        }

    }
}