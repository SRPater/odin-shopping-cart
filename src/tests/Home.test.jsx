import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

describe('Home Page', () => {
  it('renders the correct heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /welcome/i }))
      .toBeInTheDocument()
  })
})
