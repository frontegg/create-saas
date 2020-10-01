import React from 'react';
import {
  BarChart as RechartsBarChart,
  BarChartProps as RechartsBarChartProps,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface BarChartProps extends RechartsBarChartProps {
  data: ReadonlyArray<any>;
  showGrid?: boolean;
  showLegend?: boolean;
  colors: string[];
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const { width, height, data, barSize, barCategoryGap, showGrid, showLegend, colors } = props;
  return (
    <ResponsiveContainer>
      <RechartsBarChart
        width={width}
        height={height}
        data={data}
        barSize={barSize}
        barCategoryGap={barCategoryGap}
        margin={{
          top: 5,
          right: 30,
          left: 10,
          bottom: 5,
        }}>
        {showGrid ? <CartesianGrid strokeDasharray='3 3' /> : null}
        <XAxis dataKey='name' axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip cursor={false} />
        {showLegend ? <Legend /> : null}
        {Object.keys(data[0]).map((key: string, index: number) => {
          return key !== 'name' ? <Bar dataKey={key} key={key} fill={colors[(index - 1) % colors.length]} /> : null;
        })}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
