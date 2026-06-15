import './SavedRounds.css'

export function SavedRounds() {
  const mockRounds = [
    {
      id: 1,
      course: 'Pebble Beach',
      date: '2024-06-10',
      score: 82,
      par: 72,
      handicap: 2,
    },
    {
      id: 2,
      course: 'Torrey Pines',
      date: '2024-06-08',
      score: 79,
      par: 72,
      handicap: -1,
    },
    {
      id: 3,
      course: 'Augusta National',
      date: '2024-06-05',
      score: 85,
      par: 72,
      handicap: 5,
    },
  ]

  const mockRecommendations = [
    {
      id: 1,
      hole: 1,
      course: 'Pebble Beach',
      recommendedClub: '7 Iron',
      distance: 160,
      result: 'Good shot - 12ft from pin',
      date: '2024-06-10',
    },
    {
      id: 2,
      hole: 3,
      course: 'Torrey Pines',
      recommendedClub: 'Driver',
      distance: 250,
      result: 'Excellent shot - fairway center',
      date: '2024-06-08',
    },
    {
      id: 3,
      hole: 5,
      course: 'Augusta',
      recommendedClub: '5 Wood',
      distance: 210,
      result: 'Fair shot - slight slice',
      date: '2024-06-05',
    },
  ]

  const getResultBadge = (result) => {
    if (result.includes('Excellent')) return 'badge-excellent'
    if (result.includes('Good')) return 'badge-good'
    if (result.includes('Fair')) return 'badge-fair'
    return 'badge-other'
  }

  return (
    <div className="saved-rounds">
      <h1>Saved Rounds & Recommendations</h1>

      <section className="rounds-section">
        <h2>Recent Rounds</h2>
        {mockRounds.length > 0 ? (
          <div className="rounds-grid">
            {mockRounds.map((round) => (
              <div key={round.id} className="round-card card">
                <div className="round-header">
                  <h3>{round.course}</h3>
                  <span className="round-date">
                    {new Date(round.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="round-stats">
                  <div className="stat">
                    <span className="label">Score</span>
                    <span className="value">{round.score}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Par</span>
                    <span className="value">{round.par}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Handicap</span>
                    <span className={`value ${round.handicap < 0 ? 'positive' : ''}`}>
                      {round.handicap > 0 ? '+' : ''}{round.handicap}
                    </span>
                  </div>
                </div>
                <button className="btn btn-small">View Round Details</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No saved rounds yet. Start playing and saving your games!</p>
          </div>
        )}
      </section>

      <section className="recommendations-section">
        <h2>Recent Recommendations</h2>
        {mockRecommendations.length > 0 ? (
          <div className="recommendations-list">
            {mockRecommendations.map((rec) => (
              <div key={rec.id} className="recommendation-card card">
                <div className="rec-header">
                  <div className="rec-info">
                    <h4>{rec.course} - Hole {rec.hole}</h4>
                    <span className="rec-date">
                      {new Date(rec.date).toLocaleDateString()}
                    </span>
                  </div>
                  <span className={`result-badge ${getResultBadge(rec.result)}`}>
                    {rec.result}
                  </span>
                </div>
                <div className="rec-details">
                  <div className="detail-item">
                    <span className="label">Club:</span>
                    <span className="value">{rec.recommendedClub}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Distance:</span>
                    <span className="value">{rec.distance}yd</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No recommendations saved yet. Use the Strategy Advisor to get started!</p>
          </div>
        )}
      </section>

      <section className="stats-section">
        <h2>Your Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="label">Rounds Played</span>
            <span className="value">{mockRounds.length}</span>
          </div>
          <div className="stat-card">
            <span className="label">Best Score</span>
            <span className="value">
              {Math.min(...mockRounds.map((r) => r.score))}
            </span>
          </div>
          <div className="stat-card">
            <span className="label">Average Score</span>
            <span className="value">
              {(
                mockRounds.reduce((sum, r) => sum + r.score, 0) / mockRounds.length
              ).toFixed(1)}
            </span>
          </div>
          <div className="stat-card">
            <span className="label">Best Handicap</span>
            <span className="value positive">
              {Math.min(...mockRounds.map((r) => r.handicap))}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SavedRounds
