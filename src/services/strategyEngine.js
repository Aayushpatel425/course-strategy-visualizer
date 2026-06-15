import { getRecommendedClub, rankClubsByDistance } from '../utils/clubRecommendations'
import { calculateShotsToHole } from '../utils/distanceCalculator'
import { calculateShotRisk } from '../utils/riskCalculator'

/**
 * Generate a strategy for playing a hole
 * @param {object} hole - Hole data
 * @param {object} clubDistances - User's club distances
 * @returns {object} Strategy recommendation
 */
export function generateHoleStrategy(hole, clubDistances) {
  const distanceToHole = hole.length
  const recommendedClub = getRecommendedClub(distanceToHole, clubDistances)
  const rankingClubs = rankClubsByDistance(distanceToHole, clubDistances)
  const shotsNeeded = calculateShotsToHole(distanceToHole, clubDistances[recommendedClub])

  return {
    hole: hole.number,
    par: hole.par,
    distance: distanceToHole,
    recommendedClub,
    shotsNeeded,
    allRecommendations: rankingClubs.slice(0, 5),
    expectedScore: shotsNeeded,
    tips: generateTipsForHole(hole, clubDistances),
  }
}

/**
 * Generate playing tips for a hole
 * @param {object} hole - Hole data
 * @param {object} clubDistances - User's club distances
 * @returns {array} Array of tip strings
 */
export function generateTipsForHole(hole, clubDistances) {
  const tips = []

  if (hole.par === 3) {
    tips.push('Par 3 - Aim for the center of the green')
    tips.push('Consider using one club down for control')
  } else if (hole.par === 4) {
    tips.push('Par 4 - Think about two-shot strategy')
    tips.push('Position your first shot for best approach angle')
  } else if (hole.par === 5) {
    tips.push('Par 5 - Plan your three-shot strategy')
    tips.push('Avoid the hazards with smart club selection')
  }

  if (hole.description && hole.description.includes('water')) {
    tips.push('⚠️ Water hazard present - be conservative')
  }

  if (hole.description && hole.description.includes('out of bounds')) {
    tips.push('⚠️ Out of bounds nearby - stay center')
  }

  return tips
}

/**
 * Calculate expected score for a round
 * @param {array} holes - Array of hole data
 * @param {object} clubDistances - User's club distances
 * @returns {object} Round scoring prediction
 */
export function calculateExpectedRound(holes, clubDistances) {
  let totalExpectedScore = 0
  let totalPar = 0

  const strategies = holes.map((hole) => {
    const strategy = generateHoleStrategy(hole, clubDistances)
    totalExpectedScore += strategy.expectedScore
    totalPar += hole.par
    return strategy
  })

  return {
    holes: strategies,
    totalExpectedScore,
    totalPar,
    handicap: totalExpectedScore - totalPar,
  }
}

/**
 * Get confidence level for a strategy
 * @param {number} shotsNeeded - Shots needed
 * @param {number} par - Hole par
 * @returns {number} Confidence score 0-100
 */
export function getConfidenceLevel(shotsNeeded, par) {
  const diff = par - shotsNeeded
  if (diff > 0) return 95
  if (diff === 0) return 70
  if (diff === -1) return 40
  return 20
}
