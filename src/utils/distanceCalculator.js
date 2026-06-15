/**
 * Calculate remaining distance after a shot
 * @param {number} currentDistance - Distance to target
 * @param {number} shotDistance - Distance traveled by the shot
 * @returns {number} Remaining distance
 */
export function calculateRemainingDistance(currentDistance, shotDistance) {
  const remaining = currentDistance - shotDistance
  return Math.max(0, remaining)
}

/**
 * Calculate how many shots needed to reach target
 * @param {number} distanceToHole - Distance to the hole
 * @param {number} clubDistance - Average distance for the club
 * @returns {number} Number of shots needed
 */
export function calculateShotsToHole(distanceToHole, clubDistance) {
  if (clubDistance <= 0) return Infinity
  return Math.ceil(distanceToHole / clubDistance)
}

/**
 * Calculate if a club can reach the target distance
 * @param {number} clubDistance - Average distance for the club
 * @param {number} targetDistance - Distance to target
 * @param {number} variance - Variance in distance (default 20 yards)
 * @returns {boolean} Whether the club can reach the target
 */
export function canReachDistance(clubDistance, targetDistance, variance = 20) {
  return clubDistance + variance >= targetDistance
}

/**
 * Calculate the distance range for a club
 * @param {number} clubDistance - Average distance for the club
 * @param {number} variance - Variance in distance (default 20 yards)
 * @returns {object} Object with min and max distance
 */
export function getDistanceRange(clubDistance, variance = 20) {
  return {
    min: Math.max(0, clubDistance - variance),
    max: clubDistance + variance,
  }
}

/**
 * Calculate optimal distance for approach shot
 * @param {number} distanceToHole - Distance to the hole
 * @returns {number} Optimal approach distance
 */
export function getOptimalApproachDistance(distanceToHole) {
  // Aim to be within 50 yards for optimal approach
  const optimalRange = 50
  return Math.max(0, distanceToHole - optimalRange)
}
