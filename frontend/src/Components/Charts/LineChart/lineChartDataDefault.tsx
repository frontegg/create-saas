import * as React from 'react';

export type Props =  
{
  name: string,
  color?: string,
  data: {
    category: string | number,
    value: string | number,
  }[]
}[]

export type SettingsProps = {
  width?:  number,
  height?: number,
  isEnableGrid?: boolean,
  line?: {
    strokeWidth?: string | number,
    type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | undefined,
    activeDot?: Boolean | React.ReactElement | Function | {
      stroke?: string,
      strokeWidth?: string | number,
      r?: number
    }
  }
}

export interface LineChartProps {
  data: Props,
  settings?: SettingsProps
}

export const lineChartDataDefault: Props =
[
  {
    name: 'Line 1',
    data: [
      { category: 'Jan', value: 0 },
      { category: 'Feb', value: 2500 },
      { category: 'Mar', value: 5000 },
      { category: 'Apr', value: 7500 },
      { category: 'May', value: 10000 }
    ]
  }
]

export const lineChartDefaultSettings: SettingsProps = {
  width:  500,
  height: 300,
  isEnableGrid: false,
  line: {
    strokeWidth: 2,
    type:  'monotone',
    activeDot: {
      r: 6
    }
  }
}