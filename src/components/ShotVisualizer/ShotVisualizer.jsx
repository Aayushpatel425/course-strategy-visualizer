import { getClubById } from '../../data/clubs'
import './ShotVisualizer.css'

export function ShotVisualizer({
  club,
  distance = 0,
  accuracy = 0.8,
  dispersion = 10,
}) {
  const clubData = getClubById(club)

  return (
    <div className="shot-visualizer">
      <div className="visualizer-header">
        <h4>Shot Visualization</h4>
        {clubData && <span className="club-name">{clubData.name}</span>}
      </div>

      <div className="shot-canvas">
        <svg viewBox="0 0 400 300" width="100%" height="200">
          {/* Fairway background */}
          <rect x="0" y="0" width="400" height="300" fill="#e0f2fe" />
          <polygon points="150,0 250,0 280,300 120,300" fill="#4ade80" opacity="0.7" />

          {/* Dispersion circle */}
          <circle
            cx="200"
            cy="250"
            r={dispersion * 2}
            fill="#fbbf24"
            opacity="0.3"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Shot path */}
          <line
            x1="200"
            y1="250"
            x2="200"
            y2={250 - (distance / 10)}
            stroke="#ef4444"
            strokeWidth="3"
          />

          {/* Landing zone */}
          <circle
            cx="200"
            cy={250 - (distance / 10)}
            r={8}
            fill="#ef4444"
            opacity="0.8"
          />

          {/* Target */}
          <circle cx="200" cy="30" r="12" fill="#22c55e" opacity="0.6" />
          <circle cx="200" cy="30" r="8" fill="#16a34a" opacity="0.8" />
        </svg>
      </div>

      <div className="shot-stats">
        <div className="stat">
          <span className="stat-label">Distance</span>
          <span className="stat-value">{distance.toFixed(0)} yd</span>
        </div>
        <div className="stat">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">{(accuracy * 100).toFixed(0)}%</span>
        </div>
        <div className="stat">
          <span className="stat-label">Dispersion</span>
          <span className="stat-value">±{dispersion} yd</span>
        </div>
      </div>
    </div>
  )
}

export default ShotVisualizer
