import React from 'react';
import {
  LineChart as RechartsLineChart,
  LineChartProps as RechartsLineChartProps,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface LineChartProps extends RechartsLineChartProps {
  data: ReadonlyArray<any>;
  showGrid?: boolean;
  showLegend?: boolean;
  xAxis: { type: any };
  line: {
    strokeWidth: number;
    type: any;
    activeDot: { r: number };
  };
  colors: string[];
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const { width, height, data, xAxis, line, showGrid, colors } = props;

  return (
    <ResponsiveContainer>
      <RechartsLineChart width={width} height={height}>
        {showGrid ? <CartesianGrid strokeDasharray='3 3' /> : null}
        <XAxis dataKey='category' type={xAxis.type} allowDuplicatedCategory={false} axisLine={false} tickLine={false} />
        <YAxis dataKey='value' axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend verticalAlign='top' />
        {data.map(({ data, name }, index: number) => (
          <Line
            strokeWidth={line.strokeWidth}
            legendType='circle'
            type={line.type}
            stroke={colors[index % colors.length]}
            dataKey='value'
            data={data}
            name={name}
            key={name}
            activeDot={line.activeDot}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
