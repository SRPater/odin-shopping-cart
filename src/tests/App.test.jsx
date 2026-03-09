import { render, screen } from '@testing-library/react'
import App from '../App';

describe('App component', () => {
  it('renders the correct heading', () => {
    render(<App />)
    expect(screen.getByRole('heading').textContent).toMatch(/storefront ready/i)
  })

  it('renders the shopping cart icon', () => {
    render(<App />)
    const icon = screen.getByTestId('shopping-cart-icon')
    expect(icon).toBeInTheDocument()
  })
})