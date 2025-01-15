import React from 'react';

interface BarChartProps {
  colors: string[];
}

const BarChart: React.FC<BarChartProps> = ({ colors }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const data = [
    [12, 19, 15, 8, 19, 15, 20],
    [8, 12, 10, 5, 13, 11, 15],
    [5, 8, 6, 3, 8, 7, 9]
  ];

  const maxValue = Math.max(...data.flat()) * 1.2;

  return (
    <svg width="100%" height="100%" viewBox="0 0 800 300">
      {/* Y-axis labels */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = (maxValue / 5) * (5 - i);
        return (
          <g key={i} color="rgb(1, 5, 40)" fill="rgb(0, 0, 0)" stroke="none">
            <line
              x1="40"
              y1={i * 50}
              x2="800"
              y2={i * 50}
              stroke="rgb(197, 198, 182)"
              strokeWidth="1"
              opacity="0.2"
            />
            <text
              x="30"
              y={i * 50}
              textAnchor="end"
              alignmentBaseline="middle"
              className="text-xs"
              fill="currentColor"
            >
              ${(y / 1000).toFixed(1)}k
            </text>
          </g>
        );
      })}

      {/* Bars */}
      {months.map((month, monthIndex) => (
        <g
          key={month}
          transform={`translate(${40 + monthIndex * 110}, 0)`}
          color="rgb(1, 5, 40)"
          fill="rgb(0, 0, 0)"
          stroke="none"
        >
          {data.map((series, seriesIndex) => {
            const height = (series[monthIndex] / maxValue) * 250;
            return (
              <rect
                key={seriesIndex}
                x={seriesIndex * 30}
                y={250 - height}
                width="20"
                height={height}
                fill={colors[seriesIndex % colors.length]}
                opacity="0.9"
              />
            );
          })}
          <text
            x="45"
            y="320"
            textAnchor="middle"
            className="text-xs"
            fill="currentColor"
          >
            {month}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default BarChart;