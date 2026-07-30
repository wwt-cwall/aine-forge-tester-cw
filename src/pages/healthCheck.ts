export interface HealthStatus {
  status: string
  version: string
  timestamp: string
}

export function getHealthStatus(): HealthStatus {
  return {
    status: 'ok',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
  }
}
