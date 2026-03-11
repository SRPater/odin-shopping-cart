import Button from '../components/Button'
import CartItem from '../components/CartItem'

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="mt-8">
          <p className="text-gray-600">Your cart is currently empty.</p>
        </div>
      ): (
        <div className="mt-8 grid gap-8">
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>

          <div className="flex flex-col items-end gap-4 pt-2">
            <div className="text-2xl font-semibold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <Button className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
