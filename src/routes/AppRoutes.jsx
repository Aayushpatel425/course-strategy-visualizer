import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import HoleBuilder from '../pages/HoleBuilder/HoleBuilder'
import Strategy from '../pages/Strategy/Strategy'
import SavedRounds from '../pages/SavedRounds/SavedRounds'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/hole-builder" element={<HoleBuilder />} />
      <Route path="/strategy" element={<Strategy />} />
      <Route path="/saved-rounds" element={<SavedRounds />} />
    </Routes>
  )
}

export default AppRoutes
