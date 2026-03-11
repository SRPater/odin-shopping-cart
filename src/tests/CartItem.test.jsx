import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartItem from '../components/CartItem'

describe('CartItem Component', () => {
  const mockItem = {
    id: 1,
    title: 'Test Product',
    price: 10.00,
    quantity: 2,
    image: 'test.jpg',
  }

  const mockRemove = vi.fn()
  const mockUpdate = vi.fn()

  it('renders item details correctly', () => {
    render(
      <CartItem
        item={mockItem}
        removeFromCart={mockRemove}
        updateQuantity={mockUpdate}
      />
    )

    expect(screen.getByText(/test product/i)).toBeInTheDocument()
    expect(screen.getByText(/\$20.00/i)).toBeInTheDocument()
  })

  it('calls updateQuantity when plus or minus buttons is clicked', async() => {
    const user = userEvent.setup()
    render(
      <CartItem
        item={mockItem}
        removeFromCart={mockRemove}
        updateQuantity={mockUpdate}
      />
    )

    const plusBtn = screen.getByRole('button', { name: /increase quantity/i })
    const minusBtn = screen.getByRole('button', { name: /decrease quantity/i })

    await user.click(plusBtn)
    expect(mockUpdate).toHaveBeenCalledWith(1, 3)

    await user.click(minusBtn)
    expect(mockUpdate).toHaveBeenCalledWith(1, 1)
  })

  it('calls removeFromCart when remove button is clicked', async() => {
    const user = userEvent.setup()
    render(
      <CartItem
        item={mockItem}
        removeFromCart={mockRemove}
        updateQuantity={mockUpdate}
      />
    )

    const removeBtn = screen.getByRole('button', { name: /remove item/i })
    await user.click(removeBtn)
    expect(mockRemove).toHaveBeenCalledWith(1)
  })
})
