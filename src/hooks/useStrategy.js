import { useState } from 'react'
import { generateHoleStrategy, calculateExpectedRound } from '../services/strategyEngine'
import { useUser } from '../context/UserContext'

export function useStrategy() {
  const { user } = useUser()
  const [currentHole, setCurrentHole] = useState(null)
  const [strategy, setStrategy] = useState(null)
  const [loading, setLoading] = useState(false)

  const generateStrategy = (hole) => {
    setLoading(true)
    try {
      // Simulate API call delay
      setTimeout(() => {
        const newStrategy = generateHoleStrategy(hole, user.clubDistances)
        setStrategy(newStrategy)
        setCurrentHole(hole)
        setLoading(false)
      }, 300)
    } catch (error) {
      console.error('Error generating strategy:', error)
      setLoading(false)
    }
  }

  const generateRoundStrategy = (holes) => {
    setLoading(true)
    try {
      setTimeout(() => {
        const roundStrategy = calculateExpectedRound(holes, user.clubDistances)
        setStrategy(roundStrategy)
        setLoading(false)
      }, 300)
    } catch (error) {
      console.error('Error generating round strategy:', error)
      setLoading(false)
    }
  }

  const clearStrategy = () => {
    setStrategy(null)
    setCurrentHole(null)
  }

  return {
    currentHole,
    strategy,
    loading,
    generateStrategy,
    generateRoundStrategy,
    clearStrategy,
  }
}
