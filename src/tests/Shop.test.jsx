import { render, screen } from '@testing-library/react'
import Shop from '../pages/Shop'

describe('Shop Page', () => {
  it('renders the shop heading', () => {
    render(<Shop />)
    const heading = screen.getByRole('heading', { name: /shop our collection/i})
    expect(heading).toBeInTheDocument()
  })

  it('shows the loading state initially', () => {
    render(<Shop />)
    expect(screen.getByText(/loading products/i)).toBeInTheDocument()
  })
})