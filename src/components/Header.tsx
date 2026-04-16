import { NavLink } from 'react-router-dom'

const linkClass =
  'rounded-full px-3 py-1.5 text-sm font-medium text-ink-500 transition hover:bg-cream-200/60 hover:text-leaf-700'

const activeClass = 'bg-cream-200 text-leaf-700'

type Props = {
  cartCount: number
  onOpenCart: () => void
}

export function Header({ cartCount, onOpenCart }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-cream-200/80 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-6">
        <NavLink
          to="/"
          className="justify-self-start font-heading text-xl tracking-tight text-leaf-700 transition hover:text-leaf-600 sm:text-2xl"
        >
          Groshop
        </NavLink>

        <button
          type="button"
          onClick={onOpenCart}
          className="relative col-start-2 row-start-1 flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-cream-200 bg-white text-leaf-700 shadow-sm transition hover:border-gold-400/60 hover:shadow-md active:scale-95 sm:col-start-3 sm:row-start-1"
          aria-label={`Open cart, ${cartCount} items`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M6 7h15l-1.5 9H7.5L6 7Zm0 0L5 3H2" />
            <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          </svg>
          {cartCount > 0 ? (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-bold text-ink-700 shadow">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          ) : null}
        </button>

        <nav
          className="col-span-2 flex flex-wrap items-center justify-center gap-1 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:justify-center sm:gap-2"
          aria-label="Main"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
