/**
 * Created by Andrew on 7/30/2017.
 */
import {Product} from "./product";

interface ProductOrder {
        id: string,
        title: string,
        picture: string,
        price: number,
        quantity: number
        size: string,
}

export interface Cart {
    products:ProductOrder[],
    totalItems: number,
    totalPrice: number
}

export const cart: Cart = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
}