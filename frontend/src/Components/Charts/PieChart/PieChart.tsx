import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  PieChartProps as RechartsPieChartProps,
} from 'recharts';

export interface PieChartProps extends RechartsPieChartProps {
  pie?: {
    cx?: number;
    cy?: number;
    startAngle?: number;
    endAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    paddingAngle?: number;
  };
  colors: string[];
}

const PieChart: React.FC<PieChartProps> = (props: PieChartProps) => {
  const { width, height, data = [], colors, pie } = props;

  return (
    <RechartsPieChart width={width} height={height}>
      <Tooltip />
      <Legend />
      <Pie
        data={data}
        cx={pie?.cx}
        cy={pie?.cy}
        innerRadius={pie?.innerRadius}
        outerRadius={pie?.outerRadius}
        fill='#8884d8'
        paddingAngle={pie?.paddingAngle}
        dataKey='value'>
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </RechartsPieChart>
  );
};

export default PieChart;
