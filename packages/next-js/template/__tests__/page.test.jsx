import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText('BOILERPLATE WIZARD - Next.js + JavaScript')
    expect(heading).toBeInTheDocument()
  })

  it('displays the technology stack', () => {
    render(<Home />)
    expect(screen.getByText('Next.js 14.0.3')).toBeInTheDocument()
    expect(screen.getByText('React 18.2.0')).toBeInTheDocument()
    expect(screen.getByText('App Router')).toBeInTheDocument()
  })

  it('shows the description text', () => {
    render(<Home />)
    const description = screen.getByText('A modern Next.js foundation with essential tools')
    expect(description).toBeInTheDocument()
  })
})
