export type Category =
  | 'Fruits'
  | 'Vegetables'
  | 'Dairy'
  | 'Bakery'
  | 'Beverages'

export type Product = {
  id: string
  name: string
  category: Category
  price: number
  image: string
  unit: string
}

export type CartLine = {
  productId: string
  quantity: number
}
