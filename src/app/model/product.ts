import { CheckboxControlValueAccessor } from "@angular/forms"
interface ShippingDetails {
    weight: number,
    width: number,
    height: number,
    depth: number
}

interface Pricing {
    price: number,
    currency: string
}

interface Options {

}
interface Quantity {
  color:string
}
export interface Product {
    id: string
    sku?: string,
    title: string,
    description?: string,
    shipping_details?: ShippingDetails,
    quantity?: number,
    pricing: Pricing,
    options?: Options,
    picture: string
}

const productExample: Product = {
  id: '5324nhjfb32h3gf353bfgd23',
  sku: "111445GB3",
  title: "Simple T-Shirt",
  description: "A t-shirt made with 100% cotton ...",
  shipping_details: {
    weight: 350,
    width: 10,
    height: 10,
    depth: 1
  },
  quantity: 99,
  pricing: {
    price: 1000,
    currency: "USD"
  },
  options: {

  },
  picture: ''
}


// interface SuccessMessage {
//  acknowledged: boolean,
//  insertedId: string
// }

// const successExample: SuccessMessage = {
//   acknowledged: true,
//   insertedId: "600e814359ba901629a14e13"
// }

