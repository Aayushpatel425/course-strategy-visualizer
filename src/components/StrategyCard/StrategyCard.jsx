import { getClubById } from '../../data/clubs'
import { getRiskColor, getRiskDescription } from '../../utils/riskCalculator'
import './StrategyCard.css'

export function StrategyCard({ strategy, onSelect }) {
  const recommendedClub = getClubById(strategy.recommendedClub)

  return (
    <div className="strategy-card card">
      <h3>Hole {strategy.hole}</h3>
      <div className="strategy-header">
        <div className="par-box">
          <span className="label">Par</span>
          <span className="value">{strategy.par}</span>
        </div>
        <div className="distance-box">
          <span className="label">Distance</span>
          <span className="value">{strategy.distance}yd</span>
        </div>
        <div className="shots-box">
          <span className="label">Shots</span>
          <span className="value">{strategy.shotsNeeded}</span>
        </div>
      </div>

      <div className="recommended-club">
        <span className="label">Recommended Club</span>
        <span className="club-name">{recommendedClub?.name}</span>
      </div>

      <div className="tips-section">
        <h4>Playing Tips</h4>
        <ul className="tips-list">
          {strategy.tips?.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>

      {strategy.allRecommendations && (
        <div className="all-recommendations">
          <h4>Club Options</h4>
          <ul className="options-list">
            {strategy.allRecommendations.map((rec, idx) => (
              <li key={idx} className="option-item">
                <span className="club-option">{rec.clubName}</span>
                <span className="suitability">{rec.suitability.toFixed(0)}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {onSelect && (
        <button className="btn" onClick={onSelect}>
          View Details
        </button>
      )}
    </div>
  )
}

export default StrategyCard
