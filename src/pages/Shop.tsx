import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { useCart } from '../context/CartContext'

const ALL = 'All' as const

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramCat = searchParams.get('category')
  const [active, setActive] = useState<string>(ALL)

  useEffect(() => {
    if (
      paramCat &&
      CATEGORIES.includes(paramCat as (typeof CATEGORIES)[number])
    ) {
      setActive(paramCat)
    } else {
      setActive(ALL)
    }
  }, [paramCat])

  const { addToCart } = useCart()

  const chips = useMemo(() => [ALL, ...CATEGORIES], [])

  const filtered = useMemo(() => {
    if (active === ALL) return PRODUCTS
    return PRODUCTS.filter((p) => p.category === active)
  }, [active])

  function selectChip(label: string) {
    setActive(label)
    if (label === ALL) {
      searchParams.delete('category')
      setSearchParams(searchParams, { replace: true })
    } else {
      setSearchParams({ category: label }, { replace: true })
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 text-left">
        <h1 className="font-heading text-4xl text-leaf-700">Shop the market</h1>
        <p className="mt-2 max-w-2xl text-ink-500">
          Filter by category and build your basket — everything here is mock data
          for a calm browsing experience.
        </p>
      </div>

      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Product categories"
      >
        {chips.map((label) => {
          const selected = active === label
          return (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => selectChip(label)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? 'border-leaf-600 bg-leaf-600 text-cream-50 shadow-sm'
                  : 'border-cream-200 bg-white text-ink-500 hover:border-leaf-500/40 hover:text-leaf-700'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-500">No products in this category.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      )}
    </div>
  )
}
