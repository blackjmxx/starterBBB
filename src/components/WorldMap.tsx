import React from 'react';

interface WorldMapProps {
  colors: string[];
}

const WorldMap: React.FC<WorldMapProps> = ({ colors }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 400">
      {/* Simplified world map path */}
      <path
        d="M100,200 Q400,150 700,200 T400,250 L100,200"
        fill="none"
        stroke="rgb(197, 198, 182)"
        strokeWidth="1"
        opacity="0.2"
      />
      
      {/* Activity points */}
      {[
        { x: 450, y: 180 },
        { x: 520, y: 220 },
        { x: 380, y: 250 },
        { x: 280, y: 150 },
        { x: 600, y: 200 }
      ].map((point, i) => (
        <g key={i} color="rgb(1, 5, 40)" fill="rgb(0, 0, 0)" stroke="none">
          <circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill={colors[0]}
            opacity="0"
            className="animate-ping"
            transform="scale(2)"
          />
          <circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill={colors[0]}
          />
        </g>
      ))}
      
      {/* Connection lines */}
      <path
        d="M450,180 L520,220 L380,250 L280,150 L600,200"
        fill="none"
        stroke={colors[1] || colors[0]}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
};

export default WorldMap;