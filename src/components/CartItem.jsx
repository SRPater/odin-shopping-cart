import Button from "./Button"
import { Trash2, Plus, Minus } from 'lucide-react'

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex items-center gap-6 py-6">
      <img
        src={item.image}
        alt={item.title}
        className="h-24 w-24 object-contain"
      />

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
          {item.title}
        </h2>
        <p className="text-gray-500">${item.price.toFixed(2)} each</p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="rounded-md border border-gray-300 p-1 hover:bg-gray-100"
          aria-label="decrease quantity"
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </Button>

        <span className="w-8 text-center font-medium">{item.quantity}</span>

        <Button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="rounded-md border border-gray-300 p-1 hover:bg-gray-100"
          aria-label="increase quantity"
        >
          <Plus size={16} />
        </Button>
      </div>

      <div className="w-24 text-right font-bold text-gray-800">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <Button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
        aria-label="remove item"
      >
        <Trash2 size={20} />
      </Button>
    </div>
  )
}

export default CartItem
