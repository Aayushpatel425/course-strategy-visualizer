import { SAMPLE_HAZARDS } from '../../data/hazards'
import HazardMarker from '../HazardMarker/HazardMarker'
import './HoleMap.css'

export function HoleMap({ hole, hazards = SAMPLE_HAZARDS }) {
  return (
    <div className="hole-map">
      <div className="map-header">
        <h3>Hole {hole?.number}</h3>
        <span className="map-distance">{hole?.length}yd · Par {hole?.par}</span>
      </div>

      <div className="map-canvas">
        <svg
          className="golf-course-svg"
          viewBox="0 0 400 300"
          width="100%"
          height="300"
        >
          {/* Fairway */}
          <ellipse
            cx="200"
            cy="180"
            rx="60"
            ry="140"
            fill="#4ade80"
            opacity="0.8"
          />

          {/* Green */}
          <circle cx="200" cy="30" r="25" fill="#22c55e" opacity="0.9" />

          {/* Pin */}
          <line x1="200" y1="30" x2="200" y2="10" stroke="#ff0000" strokeWidth="2" />
          <circle cx="200" cy="10" r="3" fill="#ff0000" />

          {/* Render hazards */}
          {hazards.map((hazard) => (
            <HazardMarker key={hazard.id} hazard={hazard} />
          ))}

          {/* Tee */}
          <circle cx="200" cy="270" r="20" fill="#90ee90" opacity="0.7" />
          <text x="200" y="275" textAnchor="middle" fontSize="12" fill="#000">
            TEE
          </text>
        </svg>
      </div>

      {hole?.description && (
        <div className="hole-info">
          <p className="description">{hole.description}</p>
          <p className="handicap">Handicap: {hole.handicap}</p>
        </div>
      )}
    </div>
  )
}

export default HoleMap
