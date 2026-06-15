import { CLUBS } from '../../data/clubs'
import './ClubSelector.css'

export function ClubSelector({ selectedClub, onSelect, clubDistances }) {
  const clubTypes = {
    wood: [],
    iron: [],
    wedge: [],
  }

  CLUBS.forEach((club) => {
    clubTypes[club.type].push(club)
  })

  return (
    <div className="club-selector">
      <h3>Select a Club</h3>

      {Object.entries(clubTypes).map(([type, clubs]) => (
        <div key={type} className="club-category">
          <h4 className="category-title">
            {type.charAt(0).toUpperCase() + type.slice(1)}s
          </h4>
          <div className="club-buttons">
            {clubs.map((club) => (
              <button
                key={club.id}
                className={`club-btn ${selectedClub === club.id ? 'active' : ''}`}
                onClick={() => onSelect(club.id)}
                title={`${club.name} - ${clubDistances?.[club.id] || club.averageDistance}yd`}
              >
                <span className="club-name">{club.name}</span>
                <span className="club-distance">
                  {clubDistances?.[club.id] || club.averageDistance}yd
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ClubSelector
