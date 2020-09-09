import * as React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { lineChartDataDefault, lineChartDefaultSettings, LineChartProps } from './lineChartDataDefault'

const LineChartComponent: React.FC<LineChartProps> = ({
  data = lineChartDataDefault,
  settings = lineChartDefaultSettings
}) => {
  return (
    <LineChart width={settings.width} height={settings.height}>
      {settings.isEnableGrid 
        ? <CartesianGrid strokeDasharray="3 3" />
        : null
      }
      <XAxis dataKey="category" type="category" padding={{ left: 0, right: 0 }} allowDuplicatedCategory={false} axisLine={false} tickLine={false} />
      <YAxis dataKey="value" axisLine={false} tickLine={false} />
      <Tooltip />
      <Legend verticalAlign="top" />
      
      {data.map(line => (
        <Line strokeWidth="2" legendType="circle" type="monotone" stroke={line.color} dataKey="value" data={line.data} name={line.name} key={line.name} activeDot={{ r: 6 }} />
      ))}
    </LineChart>
  );
}

export default LineChartComponent; 