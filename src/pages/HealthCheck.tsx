import { getHealthStatus } from './healthCheck'
import './HealthCheck.css'

function HealthCheck() {
  const health = getHealthStatus()

  return (
    <main className="health-check">
      <h1 className="health-check-title">🩺 Health Check</h1>
      <div className="health-check-card">
        <div className="health-check-row">
          <span className="health-check-label">Status</span>
          <span
            className="health-check-value health-check-status"
            data-testid="health-status"
          >
            {health.status}
          </span>
        </div>
        <div className="health-check-row">
          <span className="health-check-label">Version</span>
          <span className="health-check-value" data-testid="health-version">
            {health.version}
          </span>
        </div>
        <div className="health-check-row">
          <span className="health-check-label">Timestamp</span>
          <span className="health-check-value" data-testid="health-timestamp">
            {health.timestamp}
          </span>
        </div>
      </div>
    </main>
  )
}

export default HealthCheck
