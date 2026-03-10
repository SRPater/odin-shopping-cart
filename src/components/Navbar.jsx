import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white p-6 shadow-md">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">ODIN-STORE</Link>
      </div>
      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="flex items-center hover:text-blue-600">
            <ShoppingCart className="mr-2" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
