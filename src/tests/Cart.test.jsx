import { render, screen } from '@testing-library/react'
import Cart from '../pages/Cart'

describe('Cart Page', () => {
  it('renders empty cart message', () => {
    render(<Cart />)
    expect(screen.getByText(/your cart is currently empty/i))
      .toBeInTheDocument()
  })
})