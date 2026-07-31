import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import HealthCheck from './HealthCheck'
import { getHealthStatus } from './healthCheck'

describe('HealthCheck', () => {
  it('renders the page heading', () => {
    render(<HealthCheck />)
    expect(screen.getByText('🩺 Health Check')).toBeInTheDocument()
  })

  it('displays status as "ok"', () => {
    render(<HealthCheck />)
    expect(screen.getByTestId('health-status')).toHaveTextContent('ok')
  })

  it('displays the application version', () => {
    render(<HealthCheck />)
    expect(screen.getByTestId('health-version')).toHaveTextContent('0.1.0')
  })

  it('displays a timestamp', () => {
    render(<HealthCheck />)
    const timestamp = screen.getByTestId('health-timestamp')
    expect(timestamp.textContent).toMatch(/^\d{4}-\d{2}-\d{2}T/)
  })
})

describe('getHealthStatus', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T12:00:00.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns status "ok"', () => {
    expect(getHealthStatus().status).toBe('ok')
  })

  it('returns version "0.1.0"', () => {
    expect(getHealthStatus().version).toBe('0.1.0')
  })

  it('returns an ISO timestamp', () => {
    const { timestamp } = getHealthStatus()
    expect(timestamp).toBe('2024-01-15T12:00:00.000Z')
  })
})
