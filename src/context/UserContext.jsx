import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Golf Player',
    handicap: 10,
    clubDistances: {
      driver: 250,
      '3wood': 230,
      '5wood': 210,
      '2iron': 210,
      '3iron': 200,
      '4iron': 190,
      '5iron': 180,
      '6iron': 170,
      '7iron': 160,
      '8iron': 150,
      '9iron': 140,
      pw: 130,
      sw: 110,
      lw: 100,
    },
  })

  const updateUserName = (name) => {
    setUser((prev) => ({ ...prev, name }))
  }

  const updateHandicap = (handicap) => {
    setUser((prev) => ({ ...prev, handicap }))
  }

  const updateClubDistance = (club, distance) => {
    setUser((prev) => ({
      ...prev,
      clubDistances: {
        ...prev.clubDistances,
        [club]: distance,
      },
    }))
  }

  const updateAllClubDistances = (distances) => {
    setUser((prev) => ({
      ...prev,
      clubDistances: distances,
    }))
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUserName,
        updateHandicap,
        updateClubDistance,
        updateAllClubDistances,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
