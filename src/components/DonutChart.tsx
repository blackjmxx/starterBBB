import React from 'react';

interface DonutChartProps {
  colors: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ colors }) => {
  const data = [40, 35, 25];
  const total = data.reduce((acc, val) => acc + val, 0);
  let currentAngle = 0;

  const paths = data.map((value, index) => {
    const angle = (value / total) * 360;
    const x1 = Math.cos((currentAngle * Math.PI) / 180) * 80 + 100;
    const y1 = Math.sin((currentAngle * Math.PI) / 180) * 80 + 100;
    const x2 = Math.cos(((currentAngle + angle) * Math.PI) / 180) * 80 + 100;
    const y2 = Math.sin(((currentAngle + angle) * Math.PI) / 180) * 80 + 100;
    
    const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${angle > 180 ? 1 : 0} 1 ${x2} ${y2} Z`;
    currentAngle += angle;
    
    return (
      <path
        key={index}
        d={path}
        fill={colors[index % colors.length]}
        opacity="0.9"
      />
    );
  });

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="rgb(197, 198, 182)"
        strokeWidth="30"
        opacity="0.2"
      />
      <g transform="rotate(-90 100 100)">
        {paths}
      </g>
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-3xl font-bold"
        fill="rgb(1, 5, 40)"
      >
        {total}
      </text>
    </svg>
  );
};

export default DonutChart;