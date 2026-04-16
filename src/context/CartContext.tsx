import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CartLine } from '../types'
import { getProductById, PRODUCTS } from '../data/products'

const STORAGE_KEY = 'groshop-cart'

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  subtotal: number
  addToCart: (productId: string) => void
  increment: (productId: string) => void
  decrement: (productId: string) => void
  removeLine: (productId: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

function loadLines(): CartLine[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (x): x is CartLine =>
        typeof x === 'object' &&
        x !== null &&
        'productId' in x &&
        'quantity' in x &&
        typeof (x as CartLine).productId === 'string' &&
        typeof (x as CartLine).quantity === 'number' &&
        PRODUCTS.some((p) => p.id === (x as CartLine).productId),
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => loadLines())

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  const addToCart = useCallback((productId: string) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.productId === productId)
      if (i === -1) return [...prev, { productId, quantity: 1 }]
      const next = [...prev]
      next[i] = { ...next[i], quantity: next[i].quantity + 1 }
      return next
    })
  }, [])

  const increment = useCallback((productId: string) => {
    setLines((prev) =>
      prev.map((l) =>
        l.productId === productId
          ? { ...l, quantity: l.quantity + 1 }
          : l,
      ),
    )
  }, [])

  const decrement = useCallback((productId: string) => {
    setLines((prev) =>
      prev
        .map((l) =>
          l.productId === productId
            ? { ...l, quantity: l.quantity - 1 }
            : l,
        )
        .filter((l) => l.quantity > 0),
    )
  }, [])

  const removeLine = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const { itemCount, subtotal } = useMemo(() => {
    let count = 0
    let total = 0
    for (const line of lines) {
      const p = getProductById(line.productId)
      if (!p) continue
      count += line.quantity
      total += p.price * line.quantity
    }
    return { itemCount: count, subtotal: total }
  }, [lines])

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      addToCart,
      increment,
      decrement,
      removeLine,
    }),
    [lines, itemCount, subtotal, addToCart, increment, decrement, removeLine],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
