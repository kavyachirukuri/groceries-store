import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Honeycrisp Apples',
    category: 'Fruits',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80&auto=format&fit=crop',
    unit: 'per kg',
  },
  {
    id: '2',
    name: 'Heirloom Tomatoes',
    category: 'Vegetables',
    price: 60,
    image:
      'https://images.unsplash.com/photo-1546470427-e262649cacab?w=600&q=80&auto=format&fit=crop',
    unit: 'per kg',
  },
  {
    id: '3',
    name: 'Baby Spinach',
    category: 'Vegetables',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80&auto=format&fit=crop',
    unit: 'per pack',
  },
  {
    id: '4',
    name: 'Whole Milk',
    category: 'Dairy',
    price: 68,
    image:
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&q=80&auto=format&fit=crop',
    unit: 'per liter',
  },
  {
    id: '5',
    name: 'Greek Yogurt',
    category: 'Dairy',
    price: 95,
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&auto=format&fit=crop',
    unit: 'per tub',
  },
  {
    id: '6',
    name: 'Sourdough Loaf',
    category: 'Bakery',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop',
    unit: 'each',
  },
  {
    id: '7',
    name: 'Butter Croissants',
    category: 'Bakery',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&auto=format&fit=crop',
    unit: 'per pack (4)',
  },
  {
    id: '8',
    name: 'Fresh Orange Juice',
    category: 'Beverages',
    price: 140,
    image:
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80&auto=format&fit=crop',
    unit: 'per liter',
  },
  {
    id: '9',
    name: 'Cold Brew Coffee',
    category: 'Beverages',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop',
    unit: 'per bottle',
  },
  {
    id: '10',
    name: 'Fairtrade Bananas',
    category: 'Fruits',
    price: 55,
    image:
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80&auto=format&fit=crop',
    unit: 'per kg',
  },
  {
    id: '11',
    name: 'Ripe Avocados',
    category: 'Vegetables',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1523049673851-edbfdca6f128?w=600&q=80&auto=format&fit=crop',
    unit: 'each',
  },
  {
    id: '12',
    name: 'Free Range Eggs',
    category: 'Dairy',
    price: 95,
    image:
      'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80&auto=format&fit=crop',
    unit: 'per dozen',
  },
]

export const CATEGORIES = [
  'Fruits',
  'Vegetables',
  'Dairy',
  'Bakery',
  'Beverages',
] as const

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
