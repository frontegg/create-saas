import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { PieChartProps, pieChartDataDefault, pieChartDefaultSettings } from './PieChartDataDefault';

const PieChartComponent: React.FC<PieChartProps> = ({
  data = pieChartDataDefault,
  settings = pieChartDefaultSettings,
}) => {
  const width = settings.width || pieChartDefaultSettings.width;
  const height = settings.height || pieChartDefaultSettings.height;
  const pie = settings.pie || pieChartDefaultSettings.pie;
  const colors = settings.customColors || pieChartDefaultSettings.customColors;

  return (
    <PieChart width={width} height={height}>
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
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
