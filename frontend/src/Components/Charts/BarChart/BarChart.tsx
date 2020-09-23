import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { barChartDefaultData, BarChartProps, barChartDefaultSettings } from './BarChartDataDefault';

const BarChart: React.FC<BarChartProps> = ({ data = barChartDefaultData, settings = barChartDefaultSettings }) => {
  const width = settings.width || barChartDefaultSettings.width;
  const height = settings.height || barChartDefaultSettings.height;
  const isEnableGrid = settings.isEnableGrid || barChartDefaultSettings.isEnableGrid;
  const isEnableLegend = barChartDefaultSettings.isEnableLegend;
  const colors = settings.colors || barChartDefaultSettings.colors;
  return (
    <ResponsiveContainer>
      <RechartsBarChart
        width={width}
        height={height}
        data={data}
        barSize={settings.barSize}
        barCategoryGap={settings.barCategoryGap}
        margin={{
          top: 5,
          right: 30,
          left: 10,
          bottom: 5,
        }}>
        {isEnableGrid ? <CartesianGrid strokeDasharray='3 3' /> : null}
        <XAxis dataKey='name' axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip cursor={false} />
        {isEnableLegend ? <Legend /> : null}
        {Object.keys(data[0]).map((keyName, i) =>
          keyName !== 'name' ? <Bar dataKey={keyName} key={keyName} fill={colors[(i - 1) % colors.length]} /> : null,
        )}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
