import { Link } from 'react-router-dom'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <h1>⛳ Course Strategy Visualizer</h1>
        <p className="tagline">
          Play smarter golf with data-driven strategy recommendations
        </p>
      </section>

      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Your Profile</h3>
            <p>
              Set your handicap and club distances. The app learns your game to
              make personalized recommendations.
            </p>
            <Link to="/profile" className="btn">
              Go to Profile
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏌️</div>
            <h3>Build Holes</h3>
            <p>
              Choose from sample courses and visualize holes with hazards. See
              exactly where the water, bunkers, and trees are.
            </p>
            <Link to="/hole-builder" className="btn">
              Build a Hole
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Get Strategy</h3>
            <p>
              Get intelligent club recommendations based on distance, hazards,
              and wind conditions. Play the smart shot.
            </p>
            <Link to="/strategy" className="btn">
              View Strategy
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Saved Rounds</h3>
            <p>
              Keep track of your game. View saved strategies and recommendations
              from previous rounds.
            </p>
            <Link to="/saved-rounds" className="btn">
              View Rounds
            </Link>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>About This App</h2>
        <div className="info-content">
          <p>
            Course Strategy Visualizer is a tool designed to help golfers of all
            skill levels play smarter. By understanding your club distances and
            course hazards, the app recommends the best clubs for each shot.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>Club distance tracking and management</li>
            <li>Interactive hole visualization with hazard mapping</li>
            <li>Smart club recommendations</li>
            <li>Wind indicator for real conditions</li>
            <li>Shot dispersion analysis</li>
            <li>Risk assessment for each shot</li>
          </ul>
          <h3>Getting Started</h3>
          <ol>
            <li>Visit your Profile and enter your club distances</li>
            <li>Go to Hole Builder and select a course</li>
            <li>Check the Strategy page for club recommendations</li>
            <li>Track your saved rounds</li>
          </ol>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Play Smarter?</h2>
        <p>Start by setting up your profile with your club distances.</p>
        <Link to="/profile" className="btn btn-large">
          Get Started
        </Link>
      </section>
    </div>
  )
}

export default Home
