import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { CartDrawer } from './components/CartDrawer'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { About } from './pages/About'
import { useCart } from './context/CartContext'

function Shell() {
  const { itemCount } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="flex min-h-svh flex-col">
      <Header cartCount={itemCount} onOpenCart={() => setCartOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="border-t border-cream-200 bg-cream-100/80 py-8 text-center text-sm text-ink-500">
        <p className="font-heading text-leaf-700">Groshop</p>
        <p className="mt-1">Made for demo purposes — © {new Date().getFullYear()}</p>
      </footer>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Shell />
      </CartProvider>
    </BrowserRouter>
  )
}
