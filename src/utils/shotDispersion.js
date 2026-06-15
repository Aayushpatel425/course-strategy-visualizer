/**
 * Calculate shot dispersion pattern (accuracy spread)
 * @param {number} handicap - Player handicap
 * @param {number} baseDispersion - Base dispersion in yards (default 15)
 * @returns {number} Dispersion in yards
 */
export function calculateDispersion(handicap, baseDispersion = 15) {
  // Higher handicap = more dispersion
  return baseDispersion + handicap * 0.5
}

/**
 * Generate random shot result within dispersion
 * @param {number} dispersion - Dispersion in yards
 * @returns {object} Shot result with x, y offset
 */
export function generateShotDispersion(dispersion) {
  const angle = Math.random() * Math.PI * 2
  const distance = Math.random() * dispersion

  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
  }
}

/**
 * Calculate miss probability based on dispersion and target
 * @param {number} dispersion - Dispersion in yards
 * @param {number} targetWidth - Width of target in yards
 * @returns {number} Miss probability between 0 and 1
 */
export function calculateMissProbability(dispersion, targetWidth) {
  if (targetWidth >= dispersion * 2) return 0.05
  if (targetWidth >= dispersion) return 0.15
  if (targetWidth >= dispersion / 2) return 0.35
  return 0.65
}

/**
 * Get accuracy description based on player handicap
 * @param {number} handicap - Player handicap
 * @returns {string} Accuracy description
 */
export function getAccuracyDescription(handicap) {
  if (handicap < 5) return 'Professional'
  if (handicap < 10) return 'Excellent'
  if (handicap < 15) return 'Good'
  if (handicap < 20) return 'Average'
  return 'Beginner'
}
