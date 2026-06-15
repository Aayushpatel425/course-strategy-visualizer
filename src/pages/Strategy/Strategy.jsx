import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useStrategy } from '../../hooks/useStrategy'
import { SAMPLE_HOLES } from '../../data/sampleCourses'
import { getClubById } from '../../data/clubs'
import StrategyCard from '../../components/StrategyCard/StrategyCard'
import ShotVisualizer from '../../components/ShotVisualizer/ShotVisualizer'
import WindIndicator from '../../components/WindIndicator/WindIndicator'
import './Strategy.css'

export function Strategy() {
  const { user } = useUser()
  const { generateStrategy, generateRoundStrategy, strategy, loading } = useStrategy()
  const [selectedHole, setSelectedHole] = useState(null)
  const [viewMode, setViewMode] = useState('single')

  const handleSelectHole = (holeId) => {
    const hole = SAMPLE_HOLES.find((h) => h.id === holeId)
    setSelectedHole(hole)
    generateStrategy(hole)
    setViewMode('single')
  }

  const handleGenerateRound = () => {
    generateRoundStrategy(SAMPLE_HOLES)
    setViewMode('round')
  }

  return (
    <div className="strategy">
      <h1>Strategy Advisor</h1>

      <div className="strategy-controls">
        <button className="btn" onClick={handleGenerateRound}>
          📊 View Round Strategy
        </button>
      </div>

      {viewMode === 'round' && strategy && !loading && (
        <section className="round-strategy">
          <h2>Full Round Strategy</h2>
          <div className="round-summary">
            <div className="summary-box">
              <span className="label">Total Par</span>
              <span className="value">{strategy.totalPar}</span>
            </div>
            <div className="summary-box">
              <span className="label">Expected Score</span>
              <span className="value">{strategy.totalExpectedScore}</span>
            </div>
            <div className="summary-box">
              <span className="label">Expected Handicap</span>
              <span className="value">{strategy.handicap}</span>
            </div>
          </div>

          <div className="holes-strategies">
            <h3>Hole-by-Hole Strategies</h3>
            <div className="holes-list">
              {strategy.holes.map((holeStrategy) => (
                <div key={holeStrategy.hole} className="hole-strategy-summary">
                  <div className="hole-number">Hole {holeStrategy.hole}</div>
                  <div className="hole-stats">
                    <span>Par {holeStrategy.par}</span>
                    <span>{holeStrategy.distance}yd</span>
                  </div>
                  <div className="club-recommendation">
                    {getClubById(holeStrategy.recommendedClub)?.name}
                  </div>
                  <div className="expected-score">
                    Expected: {holeStrategy.expectedScore} strokes
                  </div>
                  <button
                    className="btn btn-small"
                    onClick={() => handleSelectHole(holeStrategy.hole)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {viewMode === 'single' && (
        <section className="single-strategy">
          <div className="holes-selector">
            <h2>Select a Hole</h2>
            <div className="hole-buttons">
              {SAMPLE_HOLES.map((hole) => (
                <button
                  key={hole.id}
                  className={`hole-select-btn ${selectedHole?.id === hole.id ? 'active' : ''}`}
                  onClick={() => handleSelectHole(hole.id)}
                >
                  {hole.number}
                </button>
              ))}
            </div>
          </div>

          {selectedHole && strategy && !loading && (
            <div className="strategy-details">
              <StrategyCard strategy={strategy} />

              <div className="strategy-grid">
                <div className="strategy-section">
                  <WindIndicator windSpeed={8} windDirection="NW" />
                </div>

                <div className="strategy-section">
                  <ShotVisualizer
                    club={strategy.recommendedClub}
                    distance={user.clubDistances[strategy.recommendedClub]}
                    accuracy={0.8}
                    dispersion={15}
                  />
                </div>
              </div>

              <section className="detailed-analysis">
                <h2>Detailed Analysis</h2>
                <div className="analysis-content">
                  <div className="analysis-box">
                    <h3>Club Distances</h3>
                    <ul>
                      {strategy.allRecommendations?.slice(0, 5).map((rec) => (
                        <li key={rec.clubId}>
                          <strong>{rec.clubName}:</strong> {rec.distance}yd
                          <span className="suitability">
                            Suitability: {rec.suitability.toFixed(0)}%
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="analysis-box">
                    <h3>Playing Strategy</h3>
                    <ol>
                      {strategy.tips?.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </section>
            </div>
          )}

          {loading && <p className="loading">Generating strategy...</p>}

          {!selectedHole && !loading && (
            <div className="empty-state">
              <p>Select a hole to see strategy recommendations</p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}

export default Strategy
