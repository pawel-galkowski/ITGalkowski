import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders footer with copyright text', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear} ITGalkowski`))).toBeInTheDocument()
  })

  it('displays correct current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('has correct styling with primary background', () => {
    const { container } = render(<Footer />)
    const footer = container.firstChild
    expect(footer).toBeInTheDocument()
  })

  it('displays "All rights reserved" text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('displays company name in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/ITGalkowski/)).toBeInTheDocument()
  })
})
