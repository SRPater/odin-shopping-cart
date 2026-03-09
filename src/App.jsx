import { ShoppingCart } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900">
      <header className="flex items-center gap-4 p-8 bg-white shadow-sm rounded-2xl">
        <ShoppingCart data-testid="shopping-cart-icon" className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold tracking-tight">
          Storefront Ready
        </h1>
      </header>
      <p className="mt-4 text-slate-500">
        Tailwind v4 and Lucide are officially online.
      </p>
    </div>
  )
}

export default App
