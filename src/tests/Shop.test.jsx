import { render, screen, waitFor } from '@testing-library/react'
import Shop from '../pages/Shop'

vi.mock('../components/ProductCard', () => ({
  default: ({ product }) => (
    <div data-testid="product-card">{product.title}</div>
  ),
}))

describe('Shop Page', () => {
  it('renders loading state initially', () => {
    render(<Shop />)
    expect(screen.getByText(/loading products.../i)).toBeInTheDocument()
  })

  it('renders products after succesful fetch', async() => {
    const mockProducts = [
      { id: 1, title: 'Fjallraven - Foldsack No. 1', price: 109.95, image: '' },
      { id: 2, title: 'Mens Casual Premium Slim Fit', price: 22.3, image: '' },
    ]

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts),
      })
    )

    render(<Shop />)

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(2)
    })

    expect(screen.getByText('Fjallraven - Foldsack No. 1')).toBeInTheDocument()
    expect(screen.getByText('Mens Casual Premium Slim Fit')).toBeInTheDocument()
  })

  it('renders error message on fetch failure', async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    )

    render(<Shop />)

    await waitFor(() => {
      expect(screen.getByText(/error:/i)).toBeInTheDocument()
    })
  })
})
