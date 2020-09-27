import React from 'react';

type CallbackFunction = () => void;

export type Props = {
  name: string;
  data: {
    category: string | number;
    value: string | number;
  }[];
}[];

export type SettingsProps = {
  width?: number;
  height?: number;
  isEnableGrid?: boolean;
  xaxis?: {
    type: 'category' | 'number';
  };
  line?: {
    strokeWidth?: string | number;
    type?:
      | 'basis'
      | 'basisClosed'
      | 'basisOpen'
      | 'linear'
      | 'linearClosed'
      | 'natural'
      | 'monotoneX'
      | 'monotoneY'
      | 'monotone'
      | 'step'
      | 'stepBefore'
      | 'stepAfter'
      | undefined;
    activeDot?:
      | boolean
      | React.ReactElement
      | CallbackFunction
      | {
          stroke?: string;
          strokeWidth?: string | number;
          r?: number;
        };
  };
  colors: string[];
};

export interface LineChartProps {
  data: Props;
  settings?: SettingsProps;
}

export const lineChartDataDefault: Props = [
  {
    name: 'Line 1',
    data: [
      { category: 'Jan', value: 0 },
      { category: 'Feb', value: 2500 },
      { category: 'Mar', value: 5000 },
      { category: 'Apr', value: 7500 },
      { category: 'May', value: 10000 },
    ],
  },
];

export const lineChartDefaultSettings: SettingsProps = {
  width: 500,
  height: 300,
  isEnableGrid: false,
  xaxis: {
    type: 'category',
  },
  line: {
    strokeWidth: 2,
    type: 'monotone',
    activeDot: {
      r: 6,
    },
  },
  colors: ['#90caf9', '#4ca5f5'],
};
