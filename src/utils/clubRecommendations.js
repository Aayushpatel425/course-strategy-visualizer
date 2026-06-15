import { CLUBS } from '../data/clubs'
import { calculateShotsToHole, canReachDistance } from './distanceCalculator'

/**
 * Get recommended club for a specific distance
 * @param {number} distance - Distance to target in yards
 * @param {object} clubDistances - User's club distances
 * @returns {string} Recommended club ID
 */
export function getRecommendedClub(distance, clubDistances) {
  let closestClub = 'pw'
  let closestDifference = Math.abs(clubDistances['pw'] - distance)

  for (const club of CLUBS) {
    const clubDistance = clubDistances[club.id]
    if (clubDistance === undefined) continue

    const difference = Math.abs(clubDistance - distance)
    if (difference < closestDifference) {
      closestDifference = difference
      closestClub = club.id
    }
  }

  return closestClub
}

/**
 * Get all clubs that can reach a distance
 * @param {number} distance - Distance to reach
 * @param {object} clubDistances - User's club distances
 * @returns {array} Array of club IDs that can reach the distance
 */
export function getClubsForDistance(distance, clubDistances) {
  const reachableClubs = []

  for (const club of CLUBS) {
    const clubDistance = clubDistances[club.id]
    if (clubDistance === undefined) continue

    if (canReachDistance(clubDistance, distance)) {
      reachableClubs.push(club.id)
    }
  }

  return reachableClubs
}

/**
 * Rank clubs by suitability for a distance
 * @param {number} distance - Distance to target
 * @param {object} clubDistances - User's club distances
 * @returns {array} Array of clubs ranked by suitability
 */
export function rankClubsByDistance(distance, clubDistances) {
  const rankedClubs = []

  for (const club of CLUBS) {
    const clubDistance = clubDistances[club.id]
    if (clubDistance === undefined) continue

    const difference = Math.abs(clubDistance - distance)
    rankedClubs.push({
      clubId: club.id,
      clubName: club.name,
      distance: clubDistance,
      difference,
      suitability: 100 - Math.min(100, difference * 2),
    })
  }

  return rankedClubs.sort((a, b) => b.suitability - a.suitability)
}

/**
 * Get club sequence to reach distance in multiple shots
 * @param {number} distance - Total distance to cover
 * @param {object} clubDistances - User's club distances
 * @returns {array} Sequence of recommended clubs
 */
export function getClubSequence(distance, clubDistances) {
  const sequence = []
  let remainingDistance = distance

  while (remainingDistance > 0) {
    const recommended = getRecommendedClub(remainingDistance, clubDistances)
    const clubDist = clubDistances[recommended]

    sequence.push({
      club: recommended,
      distance: Math.min(clubDist, remainingDistance),
    })

    remainingDistance -= clubDist
  }

  return sequence
}
