import { getHazardColor, getHazardLabel } from '../../data/hazards'

export function HazardMarker({ hazard }) {
  const color = getHazardColor(hazard.type)
  const label = getHazardLabel(hazard.type)

  return (
    <g className="hazard-marker" title={label}>
      <rect
        x={hazard.position.x}
        y={hazard.position.y}
        width={hazard.size.width}
        height={hazard.size.height}
        fill={color}
        opacity="0.6"
      />
      <text
        x={hazard.position.x + hazard.size.width / 2}
        y={hazard.position.y + hazard.size.height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fill="white"
        fontWeight="bold"
      >
        {label}
      </text>
    </g>
  )
}

export default HazardMarker
