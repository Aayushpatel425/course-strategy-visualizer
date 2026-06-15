/**
 * Calculate risk level of a shot (0 to 1, where 1 is highest risk)
 * @param {number} distanceToHazard - Distance to nearest hazard in yards
 * @param {number} shotDistance - Distance of the shot
 * @returns {number} Risk level between 0 and 1
 */
export function calculateShotRisk(distanceToHazard, shotDistance) {
  if (distanceToHazard > shotDistance + 50) return 0
  if (distanceToHazard < shotDistance - 50) return 1

  const riskRange = shotDistance + 50 - (shotDistance - 50)
  const riskPosition = distanceToHazard - (shotDistance - 50)
  return 1 - riskPosition / riskRange
}

/**
 * Get risk description based on risk level
 * @param {number} riskLevel - Risk level between 0 and 1
 * @returns {string} Risk description
 */
export function getRiskDescription(riskLevel) {
  if (riskLevel < 0.2) return 'Very Low'
  if (riskLevel < 0.4) return 'Low'
  if (riskLevel < 0.6) return 'Medium'
  if (riskLevel < 0.8) return 'High'
  return 'Very High'
}

/**
 * Get risk color based on risk level
 * @param {number} riskLevel - Risk level between 0 and 1
 * @returns {string} Color hex code
 */
export function getRiskColor(riskLevel) {
  if (riskLevel < 0.2) return '#10b981'
  if (riskLevel < 0.4) return '#3b82f6'
  if (riskLevel < 0.6) return '#f59e0b'
  if (riskLevel < 0.8) return '#ef4444'
  return '#991b1b'
}

/**
 * Calculate penalty score for missing a shot
 * @param {number} riskLevel - Risk level of the shot
 * @returns {number} Penalty strokes (0-2)
 */
export function calculatePenalty(riskLevel) {
  if (riskLevel > 0.8) return 2
  if (riskLevel > 0.6) return 1
  return 0
}
