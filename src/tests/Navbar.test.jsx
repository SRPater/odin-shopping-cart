import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

describe('Navbar Component', () => {
  it('renders the store name and navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    )

    expect(screen.getByText(/odin-store/i)).toBeInTheDocument()
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/shop/i)).toBeInTheDocument()
    expect(screen.getByText(/cart/i)).toBeInTheDocument()
  })

  it('does not display the badge when cartCount is 0', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    )

    const badge = container.querySelector('span.bg-red-500')
    expect(badge).not.toBeInTheDocument()
  })

  it('displays the correct count in the badge when cartCount > 0', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={5} />
      </MemoryRouter>
    )

    const badge = screen.getByText('5')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-red-500')
  })

  it('is sticky at the top of the screen', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    )

    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('sticky', 'top-0', 'z-50')
  })
})
