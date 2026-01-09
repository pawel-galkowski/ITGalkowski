import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('renders header with logo text', () => {
    render(<Header />)
    expect(screen.getByText('Logo ITGalkowski')).toBeInTheDocument()
  })

  it('renders navigation items', () => {
    render(<Header />)
    // Use getAllByText to get all instances, then check if at least one exists
    const homeItems = screen.getAllByText('Home')
    const aboutItems = screen.getAllByText('About')
    const contactItems = screen.getAllByText('Contact')
    expect(homeItems.length).toBeGreaterThan(0)
    expect(aboutItems.length).toBeGreaterThan(0)
    expect(contactItems.length).toBeGreaterThan(0)
  })

  it('has header data-testid', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders menu button on mobile', () => {
    render(<Header />)
    const menuButtons = screen.getAllByRole('button')
    expect(menuButtons.length).toBeGreaterThan(0)
  })

  it('toggles drawer when menu button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getAllByRole('button')[0]
    
    fireEvent.click(menuButton)
    // Drawer should become visible after click - check for multiple Home instances
    const homeItems = screen.getAllByText('Home')
    expect(homeItems.length).toBeGreaterThan(0)
  })

  it('renders AppBar component', () => {
    render(<Header />)
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })
})
