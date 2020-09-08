import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { lineChartDataDefault } from './lineChartDataDefault'

type Props = {
  lineChartData: 
    {
      name: string,
      color?: string,
      data: {
        category: string | number,
        value: string | number,
      }[]
    }[]
}

const LineChartComponent: React.FC<Props> = ({
  lineChartData = lineChartDataDefault
}) => {
        return (
          <LineChart width={500} height={300}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="category" type="category" padding={{ left: 0, right: 0 }} allowDuplicatedCategory={false} />
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
            
            {lineChartData.map(line => (
              <Line type="monotone" stroke={line.color || '#4ca5f5'} dataKey="value" data={line.data} name={line.name} key={line.name} activeDot={{ r: 6 }} />
            ))}
          </LineChart>
        );
}

export default LineChartComponent; 