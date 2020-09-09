import * as React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { lineChartDataDefault, lineChartDefaultSettings, LineChartProps } from './lineChartDataDefault'

const LineChartComponent: React.FC<LineChartProps> = ({
  data = lineChartDataDefault,
  settings = lineChartDefaultSettings
}) => {
  const width = settings.width || lineChartDefaultSettings.width
  const height = settings.height || lineChartDefaultSettings.height
  const isEnableGrid = settings.isEnableGrid || lineChartDefaultSettings.isEnableGrid
  const chartLine = settings.line || lineChartDefaultSettings.line

  return (
    <LineChart width={width} height={height}>
      {isEnableGrid
        ? <CartesianGrid strokeDasharray="3 3" />
        : null
      }
      <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} axisLine={false} tickLine={false} />
      <YAxis dataKey="value" axisLine={false} tickLine={false} />
      <Tooltip />
      <Legend verticalAlign="top" />
      
      {data.map(line => (
        <Line strokeWidth={chartLine?.strokeWidth} legendType="circle" type={chartLine?.type} stroke={line.color} dataKey="value" data={line.data} name={line.name} key={line.name} activeDot={chartLine?.activeDot} />
      ))}
    </LineChart>
  );
}

export default LineChartComponent; 