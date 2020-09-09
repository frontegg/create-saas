import * as React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { lineChartDataDefault, Props } from './ScatterChartDataDefault'
import CustomizedDot, {CustomizedLegend} from './ScatterChartDot'

const LineChartComponent: React.FC<Props> = ({
  lineChartData = lineChartDataDefault.lineChartData
}) => {
  return (
    <ScatterChart
      width={500}
      height={300}
      margin={{top: 5, right: 30, left: 0, bottom: 5}}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis type="number" dataKey="x" name="stature" tickLine={false} />
      <YAxis type="number" dataKey="y" name="weight" tickLine={false} />
      <Tooltip />
      <Legend verticalAlign="top" content={<CustomizedLegend />} />
      <Scatter name="A school" data={lineChartData} shape={<CustomizedDot/>} />
    </ScatterChart>
  );
}

export default LineChartComponent; 