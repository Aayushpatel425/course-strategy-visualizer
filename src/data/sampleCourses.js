export const SAMPLE_COURSES = [
  {
    id: 1,
    name: 'Pebble Beach Golf Links',
    location: 'California, USA',
    par: 72,
    holes: 18,
  },
  {
    id: 2,
    name: 'Augusta National',
    location: 'Georgia, USA',
    par: 72,
    holes: 18,
  },
  {
    id: 3,
    name: 'St Andrews',
    location: 'Scotland',
    par: 72,
    holes: 18,
  },
  {
    id: 4,
    name: 'Torrey Pines',
    location: 'California, USA',
    par: 72,
    holes: 18,
  },
  {
    id: 5,
    name: 'Whistling Straits',
    location: 'Wisconsin, USA',
    par: 72,
    holes: 18,
  },
]

export const SAMPLE_HOLES = [
  {
    id: 1,
    number: 1,
    par: 4,
    handicap: 15,
    length: 365,
    description: 'A short par 4 to start. Water hazard on the left side.',
  },
  {
    id: 2,
    number: 2,
    par: 4,
    handicap: 13,
    length: 425,
    description: 'Moderate length par 4 with out of bounds on the right.',
  },
  {
    id: 3,
    number: 3,
    par: 3,
    handicap: 17,
    length: 160,
    description: 'Short par 3 over water. Usually one club down.',
  },
  {
    id: 4,
    number: 4,
    par: 5,
    handicap: 1,
    length: 565,
    description: 'Long par 5. Reachable in two with good shots.',
  },
  {
    id: 5,
    number: 5,
    par: 4,
    handicap: 11,
    length: 445,
    description: 'Challenging par 4. Bunkers protect the green.',
  },
]

export function getCourseById(id) {
  return SAMPLE_COURSES.find((course) => course.id === id)
}

export function getHoleById(id) {
  return SAMPLE_HOLES.find((hole) => hole.id === id)
}

export function getHolesByPar(par) {
  return SAMPLE_HOLES.filter((hole) => hole.par === par)
}
