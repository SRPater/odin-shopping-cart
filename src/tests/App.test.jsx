import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

vi.mock('../pages/Shop', () => ({
  default: () => <div><h1>Shop Our Collection</h1></div>,
}))

vi.mock('../pages/Cart', () => ({
  default: () => <div><h1>Your Shopping Cart</h1></div>,
}))

describe('App Routing', () => {
  it('navigates to shop and cart pages correctly', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /welcome/i }))
      .toBeInTheDocument()
    
    const shopLink = screen.getByRole('link', { name: /shop/i })
    await user.click(shopLink)
    expect(screen.getByRole('heading', { name: /shop/i })).toBeInTheDocument()

    const cartLink = screen.getByRole('link', { name: /cart/i })
    await user.click(cartLink)
    expect(screen.getByRole('heading', { name: /your shopping cart/i }))
      .toBeInTheDocument()
  })
})
