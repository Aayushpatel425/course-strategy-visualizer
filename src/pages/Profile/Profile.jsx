import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { CLUBS } from '../../data/clubs'
import './Profile.css'

export function Profile() {
  const { user, updateUserName, updateHandicap, updateClubDistance } = useUser()
  const [name, setName] = useState(user.name)
  const [handicap, setHandicap] = useState(user.handicap)
  const [saved, setSaved] = useState(false)

  const handleSaveName = () => {
    updateUserName(name)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleSaveHandicap = () => {
    updateHandicap(parseInt(handicap))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleClubDistanceChange = (clubId, distance) => {
    updateClubDistance(clubId, parseInt(distance))
  }

  return (
    <div className="profile">
      <h1>Your Profile</h1>

      {saved && <div className="alert alert-success">Changes saved! ✓</div>}

      <section className="profile-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div className="input-group">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <button
              className="btn"
              onClick={handleSaveName}
              disabled={name === user.name}
            >
              Save
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="handicap">Handicap</label>
          <div className="input-group">
            <input
              id="handicap"
              type="number"
              value={handicap}
              onChange={(e) => setHandicap(e.target.value)}
              min="0"
              max="36"
            />
            <button
              className="btn"
              onClick={handleSaveHandicap}
              disabled={handicap == user.handicap}
            >
              Save
            </button>
          </div>
          <small>Current handicap helps personalize recommendations</small>
        </div>
      </section>

      <section className="profile-section">
        <h2>Club Distances</h2>
        <p className="hint">
          Edit your average distances for each club. These are used to recommend
          the best club for each shot.
        </p>

        <div className="clubs-grid">
          {CLUBS.map((club) => (
            <div key={club.id} className="club-distance-card">
              <label htmlFor={`club-${club.id}`}>{club.name}</label>
              <div className="club-distance-input">
                <input
                  id={`club-${club.id}`}
                  type="number"
                  value={user.clubDistances[club.id] || club.averageDistance}
                  onChange={(e) => handleClubDistanceChange(club.id, e.target.value)}
                  min="0"
                />
                <span className="unit">yd</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <h2>Stats Summary</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">Player Name</span>
            <span className="stat-value">{user.name}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Handicap</span>
            <span className="stat-value">{user.handicap}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Longest Club</span>
            <span className="stat-value">
              {Math.max(...Object.values(user.clubDistances))}yd
            </span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Shortest Club</span>
            <span className="stat-value">
              {Math.min(...Object.values(user.clubDistances))}yd
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
