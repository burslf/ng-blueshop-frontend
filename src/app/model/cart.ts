/**
 * Created by Andrew on 7/30/2017.
 */
import {Product} from "./product";

interface ProductCart {
        id: string,
        title: string,
        picture: string,
        price: number,
        quantity: number
        size: string,
}

export interface Cart {
    products:ProductCart[],
    totalItems: number,
    totalPrice: number
}

export const cart: Cart = {
    products: [
        
    ],
    totalItems: 0,
    totalPrice: 0,
}