// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  it('renders with initial value of 0 by default', () => {
    render(<Counter />)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
  })

  it('renders with custom initial value', () => {
    render(<Counter initialValue={10} />)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  it('increments the count when + button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByLabelText('Increment')
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
  })

  it('decrements the count when − button is clicked', () => {
    render(<Counter />)
    const decrementButton = screen.getByLabelText('Decrement')
    fireEvent.click(decrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1')
  })

  it('resets to initial value when Reset button is clicked', () => {
    render(<Counter initialValue={5} />)
    const incrementButton = screen.getByLabelText('Increment')
    const resetButton = screen.getByLabelText('Reset')
    
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('7')
    
    fireEvent.click(resetButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5')
  })

  it('uses custom step value', () => {
    render(<Counter step={5} />)
    const incrementButton = screen.getByLabelText('Increment')
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5')
  })

  it('displays formatted countdown label in m:ss format', () => {
    render(<Counter initialValue={65} />)
    expect(screen.getByTestId('counter-label')).toHaveTextContent('1:05')
  })

  it('updates formatted countdown label when count changes', () => {
    render(<Counter />)
    const incrementButton = screen.getByLabelText('Increment')
    
    expect(screen.getByTestId('counter-label')).toHaveTextContent('0:00')
    
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-label')).toHaveTextContent('0:01')
  })
})
