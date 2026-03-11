import { render, screen } from '@testing-library/react'
import Cart from '../pages/Cart'

vi.mock('../components/CartItem', () => ({
  default: ({ item }) => <div data-testid="mock-cart-item">{item.title}</div>
}))

describe('Cart Page', () => {
  const mockCart = [
    { id: 1, title: 'Item 1', price: 10.50, quantity: 2 },
    { id: 2, title: 'Item 2', price: 5.00, quantity: 1 },
  ]

  it('renders empty cart message', () =>{
    render(<Cart cart={[]} />)
    expect(screen.getByText(/your cart is currently empty/i))
      .toBeInTheDocument()
  })

  it('renders the correct number of items', () => {
    render(<Cart cart={mockCart} />)
    const items = screen.getAllByTestId('mock-cart-item')
    expect(items).toHaveLength(2)
  })

  it('displays the correct total price', () => {
    render(<Cart cart={mockCart} />)
    expect(screen.getByText(/total: \$26.00/i)).toBeInTheDocument()
  })
})
