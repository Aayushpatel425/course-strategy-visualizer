import { useState } from 'react'
import { SAMPLE_COURSES, SAMPLE_HOLES } from '../../data/sampleCourses'
import { SAMPLE_HAZARDS } from '../../data/hazards'
import HoleMap from '../../components/HoleMap/HoleMap'
import './HoleBuilder.css'

export function HoleBuilder() {
  const [selectedCourse, setSelectedCourse] = useState(SAMPLE_COURSES[0].id)
  const [selectedHole, setSelectedHole] = useState(SAMPLE_HOLES[0].id)

  const course = SAMPLE_COURSES.find((c) => c.id === selectedCourse)
  const hole = SAMPLE_HOLES.find((h) => h.id === selectedHole)

  return (
    <div className="hole-builder">
      <h1>Hole Builder</h1>

      <div className="builder-container">
        <aside className="builder-sidebar">
          <section className="selector-section">
            <h3>Select Course</h3>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(parseInt(e.target.value))}
              className="course-select"
            >
              {SAMPLE_COURSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            {course && (
              <div className="course-info">
                <p>
                  <strong>{course.location}</strong>
                </p>
                <p>Par {course.par} · {course.holes} holes</p>
              </div>
            )}
          </section>

          <section className="selector-section">
            <h3>Select Hole</h3>
            <div className="holes-grid">
              {SAMPLE_HOLES.map((h) => (
                <button
                  key={h.id}
                  className={`hole-btn ${selectedHole === h.id ? 'active' : ''}`}
                  onClick={() => setSelectedHole(h.id)}
                  title={`Hole ${h.number}, Par ${h.par}`}
                >
                  {h.number}
                </button>
              ))}
            </div>
          </section>

          {hole && (
            <section className="hole-details">
              <h3>Hole {hole.number} Details</h3>
              <div className="detail-row">
                <span className="label">Par:</span>
                <span className="value">{hole.par}</span>
              </div>
              <div className="detail-row">
                <span className="label">Length:</span>
                <span className="value">{hole.length} yards</span>
              </div>
              <div className="detail-row">
                <span className="label">Handicap:</span>
                <span className="value">{hole.handicap}</span>
              </div>
            </section>
          )}
        </aside>

        <main className="builder-main">
          {hole ? (
            <>
              <HoleMap hole={hole} hazards={SAMPLE_HAZARDS} />
              <section className="hole-description">
                <h2>Hole Description</h2>
                <p>{hole.description}</p>
                <div className="hazard-list">
                  <h3>Hazards on this hole:</h3>
                  <ul>
                    {SAMPLE_HAZARDS.map((hazard) => (
                      <li key={hazard.id}>{hazard.description}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </>
          ) : (
            <div className="empty-state">
              <p>Select a hole to view details</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default HoleBuilder
