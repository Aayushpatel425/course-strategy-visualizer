export const HAZARD_TYPES = {
  WATER: 'water',
  SAND: 'sand',
  ROUGH: 'rough',
  OB: 'out_of_bounds',
  TREES: 'trees',
}

export const SAMPLE_HAZARDS = [
  {
    id: 1,
    type: HAZARD_TYPES.WATER,
    position: { x: 100, y: 150 },
    size: { width: 200, height: 50 },
    description: 'Water hazard on the left',
  },
  {
    id: 2,
    type: HAZARD_TYPES.SAND,
    position: { x: 300, y: 250 },
    size: { width: 80, height: 80 },
    description: 'Bunker near green',
  },
  {
    id: 3,
    type: HAZARD_TYPES.TREES,
    position: { x: 50, y: 100 },
    size: { width: 30, height: 30 },
    description: 'Trees on left side',
  },
  {
    id: 4,
    type: HAZARD_TYPES.ROUGH,
    position: { x: 350, y: 100 },
    size: { width: 150, height: 200 },
    description: 'Rough on right side',
  },
]

export function getHazardColor(type) {
  const colors = {
    [HAZARD_TYPES.WATER]: '#3b82f6',
    [HAZARD_TYPES.SAND]: '#fbbf24',
    [HAZARD_TYPES.ROUGH]: '#92400e',
    [HAZARD_TYPES.OB]: '#000000',
    [HAZARD_TYPES.TREES]: '#22863a',
  }
  return colors[type] || '#999999'
}

export function getHazardLabel(type) {
  const labels = {
    [HAZARD_TYPES.WATER]: 'Water',
    [HAZARD_TYPES.SAND]: 'Sand Bunker',
    [HAZARD_TYPES.ROUGH]: 'Rough',
    [HAZARD_TYPES.OB]: 'Out of Bounds',
    [HAZARD_TYPES.TREES]: 'Trees',
  }
  return labels[type] || 'Hazard'
}
