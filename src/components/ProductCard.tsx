import type { Product } from '../types'
import { formatCurrency } from '../utils/currency'

type Props = {
  product: Product
  onAdd: (productId: string) => void
}

export function ProductCard({ product, onAdd }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-leaf-500/25 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-leaf-700 shadow-sm backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 text-left">
        <h3 className="font-heading text-lg leading-snug text-ink-700 transition group-hover:text-leaf-700">
          {product.name}
        </h3>
        <p className="text-sm text-ink-500">{product.unit}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <p className="font-heading text-xl text-leaf-700">
            {formatCurrency(product.price)}
          </p>
          <button
            type="button"
            onClick={() => onAdd(product.id)}
            className="rounded-full bg-leaf-600 px-4 py-2 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-leaf-700 hover:shadow active:scale-[0.98]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
