export const CLUBS = [
  { id: 'driver', name: 'Driver', type: 'wood', averageDistance: 250 },
  { id: '3wood', name: '3 Wood', type: 'wood', averageDistance: 230 },
  { id: '5wood', name: '5 Wood', type: 'wood', averageDistance: 210 },
  { id: '2iron', name: '2 Iron', type: 'iron', averageDistance: 210 },
  { id: '3iron', name: '3 Iron', type: 'iron', averageDistance: 200 },
  { id: '4iron', name: '4 Iron', type: 'iron', averageDistance: 190 },
  { id: '5iron', name: '5 Iron', type: 'iron', averageDistance: 180 },
  { id: '6iron', name: '6 Iron', type: 'iron', averageDistance: 170 },
  { id: '7iron', name: '7 Iron', type: 'iron', averageDistance: 160 },
  { id: '8iron', name: '8 Iron', type: 'iron', averageDistance: 150 },
  { id: '9iron', name: '9 Iron', type: 'iron', averageDistance: 140 },
  { id: 'pw', name: 'Pitching Wedge', type: 'wedge', averageDistance: 130 },
  { id: 'sw', name: 'Sand Wedge', type: 'wedge', averageDistance: 110 },
  { id: 'lw', name: 'Lob Wedge', type: 'wedge', averageDistance: 100 },
]

export function getClubById(id) {
  return CLUBS.find((club) => club.id === id)
}

export function getClubsByType(type) {
  return CLUBS.filter((club) => club.type === type)
}

export function getClubName(id) {
  const club = getClubById(id)
  return club ? club.name : id
}
