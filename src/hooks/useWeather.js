import { useState, useEffect } from 'react'

export function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!latitude || !longitude) return

    const fetchWeather = async () => {
      setLoading(true)
      try {
        // TODO: Connect to real weather API
        // For now, use mock data
        const mockWeather = {
          temperature: 72,
          windSpeed: 8,
          windDirection: 'NW',
          condition: 'Partly Cloudy',
        }
        setWeather(mockWeather)
      } catch (err) {
        setError('Failed to load weather data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [latitude, longitude])

  return { weather, loading, error }
}
