import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartDataDefault, lineChartDefaultSettings, LineChartProps } from './lineChartDataDefault';

const LineChartComponent: React.FC<LineChartProps> = ({
  data = lineChartDataDefault,
  settings = lineChartDefaultSettings,
}) => {
  const width = settings.width || lineChartDefaultSettings.width;
  const height = settings.height || lineChartDefaultSettings.height;
  const isEnableGrid = settings.isEnableGrid || lineChartDefaultSettings.isEnableGrid;
  const xType = settings.xaxis?.type || lineChartDefaultSettings.xaxis?.type;
  const chartLine = settings.line || lineChartDefaultSettings.line;
  const colors = settings.colors || lineChartDefaultSettings.colors;

  return (
    <ResponsiveContainer>
      <LineChart width={width} height={height}>
        {isEnableGrid ? <CartesianGrid strokeDasharray='3 3' /> : null}
        <XAxis dataKey='category' type={xType} allowDuplicatedCategory={false} axisLine={false} tickLine={false} />
        <YAxis dataKey='value' axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend verticalAlign='top' />

        {data.map((line, i) => (
          <Line
            strokeWidth={chartLine?.strokeWidth}
            legendType='circle'
            type={chartLine?.type}
            stroke={colors[i % colors.length]}
            dataKey='value'
            data={line.data}
            name={line.name}
            key={line.name}
            activeDot={chartLine?.activeDot}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
