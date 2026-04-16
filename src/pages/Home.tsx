import { Link } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { useCart } from '../context/CartContext'

const featured = PRODUCTS.slice(0, 8)

export function Home() {
  const { addToCart } = useCart()

  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-cream-200 bg-gradient-to-br from-cream-100 via-cream-50 to-white">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold-400/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-leaf-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20">
          <div className="max-w-xl text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-leaf-600">
              Farm-fresh picks
            </p>
            <h1 className="font-heading text-4xl leading-tight text-leaf-700 sm:text-5xl lg:text-6xl">
              Groceries that taste like{' '}
              <span className="text-gold-500">sunshine</span> on the table.
            </h1>
            <p className="mt-4 max-w-md text-lg text-ink-500">
              Seasonal produce, small-batch bakery, and everyday staples —
              curated for a calmer, kinder cart.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-full bg-leaf-600 px-8 py-3.5 font-semibold text-cream-50 shadow-md transition hover:bg-leaf-700 hover:shadow-lg active:scale-[0.98]"
            >
              Shop Now
            </Link>
          </div>
          <div className="hidden shrink-0 sm:block sm:w-[280px] lg:w-[340px]">
            <div className="aspect-square overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 text-left">
          <h2 className="font-heading text-3xl text-leaf-700">Shop by aisle</h2>
          <p className="mt-2 text-ink-500">
            Tap a mood — we will fill your basket with the good stuff.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to={`/shop?category=${encodeURIComponent(cat)}`}
              className="group flex items-center gap-4 rounded-2xl border border-cream-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-leaf-500/30 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 font-heading text-xl text-gold-500 transition group-hover:bg-leaf-600 group-hover:text-cream-50">
                {cat[0]}
              </span>
              <div className="text-left">
                <p className="font-heading text-xl text-ink-700 group-hover:text-leaf-700">
                  {cat}
                </p>
                <p className="text-sm text-ink-500">Browse {cat.toLowerCase()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-200 bg-white/60 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-2 text-left sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl text-leaf-700">Featured today</h2>
              <p className="mt-2 text-ink-500">Eight favorites our regulars reach for first.</p>
            </div>
            <Link
              to="/shop"
              className="text-sm font-semibold text-leaf-600 underline-offset-4 transition hover:text-leaf-700 hover:underline"
            >
              View all products
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
