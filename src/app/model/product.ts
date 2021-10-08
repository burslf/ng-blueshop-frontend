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

interface Quantity {
  color: string;
  size: string,
  quantity: number
}

export interface Product {
    id: string
    sku?: string,
    title: string,
    category: string,
    picture: string
    description?: string,
    shipping_details?: ShippingDetails,
    pricing: Pricing,
    sizes: string[],
    colors?: string[],
    quantity?: Quantity[],

  }

const productExample: Product = {
  id: '5324nhjfb32h3gf353bfgd23',
  sku: "TSH00WHI",
  title: "Simple T-Shirt",
  category: '',
  picture: '',
  description: "A t-shirt made with 100% cotton ...",
  // shipping_details: {
  //   weight: 350,
  //   width: 10,
  //   height: 10,
  //   depth: 1
  // },
  pricing: {
    price: 29.99,
    currency: "ILS"
  },
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['black', 'white'],
  quantity: [
    {
      color: 'black',
      size : 'S',
      quantity: 25,
    },
    {
      color: 'black',
      size: 'M',
      quantity: 25
    },
    {
      color: 'black',
      size: 'L',
      quantity: 25
    },
    {
      color: 'black',
      size: 'XL',
      quantity: 25
    },
    {
      color: 'white',
      size : 'S',
      quantity: 25,
    },
    {
      color: 'white',
      size: 'M',
      quantity: 25
    },
    {
      color: 'white',
      size: 'L',
      quantity: 25
    },
    {
      color: 'white',
      size: 'XL',
      quantity: 25
    }, 
  ]
}


// interface SuccessMessage {
//  acknowledged: boolean,
//  insertedId: string
// }

// const successExample: SuccessMessage = {
//   acknowledged: true,
//   insertedId: "600e814359ba901629a14e13"
// }

