import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { scatterChartDataDefault, scatterChartDefaultSettings, ScatterChartProps } from './ScatterChartDataDefault';
import CustomizedDot, { CustomizedLegend } from './ScatterChartDot';

const LineChart: React.FC<ScatterChartProps> = ({
  data = scatterChartDataDefault,
  settings = scatterChartDefaultSettings,
}) => {
  const width = settings.width || scatterChartDefaultSettings.width;
  const height = settings.height || scatterChartDefaultSettings.height;
  const isEnableGrid = settings.isEnableGrid || scatterChartDefaultSettings.isEnableGrid;
  const strokeColor = settings.strokeColor || scatterChartDefaultSettings.strokeColor;
  const fillColor = settings.fillColor || scatterChartDefaultSettings.fillColor;
  const scatterName = settings.scatterName || scatterChartDefaultSettings.scatterName;

  return (
    <ResponsiveContainer>
      <ScatterChart width={width} height={height}>
        {isEnableGrid ? <CartesianGrid strokeDasharray='3 3' /> : null}
        <XAxis type='number' dataKey='x' name={data.xname} tickLine={false} />
        <YAxis type='number' dataKey='y' name={data.yname} tickLine={false} />
        <Tooltip />
        <Legend
          verticalAlign='top'
          content={<CustomizedLegend strokeColor={strokeColor} fillColor={fillColor} scatterName={scatterName} />}
        />
        <Scatter
          name={scatterName}
          data={data.lineChartData}
          shape={<CustomizedDot strokeColor={strokeColor} fillColor={fillColor} />}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
