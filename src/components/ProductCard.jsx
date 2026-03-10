import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import Button from './Button'

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  return (
    <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-blue-600 mb-4">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-center gap-1 mb-4 bg-gray-100 rounded-lg p-1">
            <Button
              onClick={handleDecrement}
              className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-600"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </Button>

            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="w-14 h-8 text-center font-bold text-gray-700 bg-white border border-gray-200 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <Button
              onClick={handleIncrement}
              className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-600"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </Button>
          </div>

          <Button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex gap-2 shadow-sm"
            onClick={() => addToCart(product, quantity)}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
