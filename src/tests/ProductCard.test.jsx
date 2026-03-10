import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from '../components/ProductCard'

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 10.00,
    image: 'test.jpg',
  }

  it('renders product details correctly', () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$10.00')).toBeInTheDocument()
  })

  it('increments and decrements quantity', async() => {
    const user = userEvent.setup()
    render(<ProductCard product={mockProduct} />)

    const input = screen.getByRole('spinbutton')
    const plusBtn = screen.getByRole('button', { name: /increase quantity/i })
    const minusBtn = screen.getByRole('button', { name: /decrease quantity/i })

    expect(input.value).toBe('1')

    await user.click(plusBtn)
    expect(input.value).toBe('2')

    await user.click(minusBtn)
    expect(input.value).toBe('1')
  })

  it('allows manual input of quantity', async() => {
    const user = userEvent.setup()
    render(<ProductCard product={mockProduct} />)

    const input = screen.getByRole('spinbutton')

    await user.click(input)
    await user.keyboard('{Control>}{a}{/Control}5')

    expect(input.value).toBe('5')
  })

  it('does not allow quantity to go below 1', async() => {
    const user = userEvent.setup()
    render(<ProductCard product={mockProduct} />)

    const minusBtn = screen.getByRole('button', { name: /decrease quantity/i })
    const input = screen.getByRole('spinbutton')

    await user.click(minusBtn)
    expect(input.value).toBe('1')
  })
})
