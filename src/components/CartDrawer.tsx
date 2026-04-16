import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/currency'

type Props = {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: Props) {
  const { lines, subtotal, increment, decrement } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal aria-label="Shopping cart">
      <button
        type="button"
        className="absolute inset-0 bg-ink-700/40 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
        aria-label="Close cart overlay"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-cream-200 bg-cream-50 shadow-2xl">
        <div className="flex items-center justify-between border-b border-cream-200 px-5 py-4">
          <h2 className="font-heading text-2xl text-leaf-700">Your cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-ink-500 transition hover:bg-cream-200 hover:text-ink-700"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="text-center text-ink-500">
              Your cart is empty. Browse the shop and add something fresh.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {lines.map((line) => {
                const product = getProductById(line.productId)
                if (!product) return null
                const lineTotal = product.price * line.quantity
                return (
                  <li
                    key={line.productId}
                    className="flex gap-3 rounded-xl border border-cream-200 bg-white p-3 shadow-sm"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="h-16 w-16 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-ink-700">{product.name}</p>
                      <p className="text-sm text-ink-500">
                        {formatCurrency(product.price)} × {line.quantity}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="inline-flex items-center rounded-full border border-cream-200 bg-cream-50">
                          <button
                            type="button"
                            className="px-2.5 py-1 text-lg leading-none text-leaf-700 transition hover:bg-cream-200"
                            onClick={() => decrement(line.productId)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            className="px-2.5 py-1 text-lg leading-none text-leaf-700 transition hover:bg-cream-200"
                            onClick={() => increment(line.productId)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <span className="ml-auto font-heading text-leaf-700">
                          {formatCurrency(lineTotal)}
                        </span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-cream-200 bg-white/80 px-5 py-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-between text-ink-500">
            <span>Order total</span>
            <span className="font-heading text-2xl text-leaf-700">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gold-500 py-3 font-semibold text-ink-700 shadow-sm transition hover:bg-gold-400 hover:shadow-md active:scale-[0.99]"
          >
            Checkout
          </button>
          <p className="mt-2 text-center text-xs text-ink-500">
            Demo checkout — no payment is processed.
          </p>
        </div>
      </aside>
    </div>
  )
}
