import React from 'react';
import {
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChartProps as RechartsScatterChartProps,
} from 'recharts';
import { CustomizedDot, CustomizedLegend } from './ScatterChartDot';

export interface ScatterChartProps extends RechartsScatterChartProps {
  data?: any;
  showGrid?: boolean;
  strokeColor?: string;
  fillColor?: string;
  scatterName?: string;
  colors: string[];
}

const ScatterChart: React.FC<ScatterChartProps> = (props: ScatterChartProps) => {
  const { data, width, height, showGrid, strokeColor, fillColor, scatterName } = props;

  return (
    <ResponsiveContainer>
      <RechartsScatterChart width={width} height={height}>
        {showGrid ? <CartesianGrid strokeDasharray='3 3' /> : null}
        <XAxis type='number' dataKey='x' name={data?.xname} tickLine={false} />
        <YAxis type='number' dataKey='y' name={data?.yname} tickLine={false} />
        <Tooltip />
        <Legend
          verticalAlign='top'
          content={<CustomizedLegend strokeColor={strokeColor} fillColor={fillColor} scatterName={scatterName} />}
        />
        <Scatter
          name={scatterName}
          data={data.lineChartData}
          shape={<CustomizedDot strokeColor={strokeColor} fillColor={fillColor} r={6} cx={10} cy={10} />}
        />
      </RechartsScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChart;
