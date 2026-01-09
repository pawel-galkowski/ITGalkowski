import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageTiles from './ImageTiles'

describe('ImageTiles Component', () => {
  it('renders ImageList component', () => {
    render(<ImageTiles />)
    // Check for at least one image in the list
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('displays all service titles', () => {
    render(<ImageTiles />)
    expect(screen.getByText('Custom Web Application Development')).toBeInTheDocument()
    expect(screen.getByText('Responsive Frontend Design')).toBeInTheDocument()
    expect(screen.getByText('Backend API Integration')).toBeInTheDocument()
    expect(screen.getByText('Full-stack JavaScript Consultation')).toBeInTheDocument()
  })

  it('displays all service descriptions', () => {
    render(<ImageTiles />)
    expect(screen.getByText(/Expertly crafted, dynamic web solutions/)).toBeInTheDocument()
    expect(screen.getByText(/Create stunning, responsive interfaces/)).toBeInTheDocument()
    expect(screen.getByText(/Streamline your operations with robust/)).toBeInTheDocument()
    expect(screen.getByText(/Leverage expert guidance on JavaScript/)).toBeInTheDocument()
  })

  it('renders correct number of image tiles', () => {
    render(<ImageTiles />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('displays images with correct alt text', () => {
    render(<ImageTiles />)
    expect(screen.getByAltText('Custom Web Application Development')).toBeInTheDocument()
    expect(screen.getByAltText('Responsive Frontend Design')).toBeInTheDocument()
    expect(screen.getByAltText('Backend API Integration')).toBeInTheDocument()
    expect(screen.getByAltText('Full-stack JavaScript Consultation')).toBeInTheDocument()
  })

  it('images have proper src attributes', () => {
    render(<ImageTiles />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      const src = img.getAttribute('src')
      expect(src).toBeTruthy()
      expect(src).toContain('media.gettyimages.com')
    })
  })

  it('displays service bar with title and subtitle', () => {
    render(<ImageTiles />)
    const titleElements = screen.getAllByText(/Development|Design|Integration|Consultation/)
    expect(titleElements.length).toBeGreaterThan(0)
  })
})
