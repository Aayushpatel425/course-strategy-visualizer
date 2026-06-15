import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ⛳ Course Strategy Visualizer
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hole-builder" className="nav-link">
              Hole Builder
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/strategy" className="nav-link">
              Strategy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved-rounds" className="nav-link">
              Saved Rounds
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
