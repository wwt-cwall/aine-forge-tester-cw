import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  it('renders with dark mode icon when theme is dark', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle theme="dark" onToggle={mockToggle} />)
    
    const button = screen.getByRole('button', { name: /switch to light mode/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('☀️')
  })

  it('renders with light mode icon when theme is light', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle theme="light" onToggle={mockToggle} />)
    
    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('🌙')
  })

  it('calls onToggle when clicked', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle theme="dark" onToggle={mockToggle} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockToggle).toHaveBeenCalledTimes(1)
  })

  it('has proper accessibility attributes', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle theme="dark" onToggle={mockToggle} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
    expect(button).toHaveAttribute('title', 'Switch to light mode')
  })
})
