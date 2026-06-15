import './WindIndicator.css'

export function WindIndicator({ windSpeed = 8, windDirection = 'NW' }) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  const directionIndex = directions.indexOf(windDirection)
  const rotation = directionIndex * 45

  const getWindDescription = (speed) => {
    if (speed < 5) return 'Calm'
    if (speed < 10) return 'Light'
    if (speed < 15) return 'Moderate'
    if (speed < 20) return 'Strong'
    return 'Very Strong'
  }

  return (
    <div className="wind-indicator">
      <div className="wind-compass">
        <svg viewBox="0 0 100 100" width="120" height="120">
          {/* Cardinal directions */}
          <text x="50" y="10" textAnchor="middle" fontWeight="bold">
            N
          </text>
          <text x="90" y="55" textAnchor="middle" fontWeight="bold">
            E
          </text>
          <text x="50" y="95" textAnchor="middle" fontWeight="bold">
            S
          </text>
          <text x="10" y="55" textAnchor="middle" fontWeight="bold">
            W
          </text>

          {/* Compass circle */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="#d1d5db" strokeWidth="1" />

          {/* Wind direction arrow */}
          <g transform={`rotate(${rotation} 50 50)`}>
            <polygon
              points="50,15 45,35 50,32 55,35"
              fill="#ef4444"
              opacity="0.8"
            />
          </g>

          {/* Center circle */}
          <circle cx="50" cy="50" r="4" fill="#1f2937" />
        </svg>
      </div>

      <div className="wind-info">
        <div className="wind-speed">
          <span className="label">Wind Speed</span>
          <span className="value">{windSpeed} mph</span>
        </div>
        <div className="wind-desc">
          <span className="description">{getWindDescription(windSpeed)}</span>
          <span className="direction">From {windDirection}</span>
        </div>
      </div>
    </div>
  )
}

export default WindIndicator
