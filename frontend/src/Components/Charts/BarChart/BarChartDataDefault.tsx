export type BarData = {
  name: string | number;
  uv: string | number;
  pv: string | number;
  amt?: string | number;
}[];

export type BarSettingsProps = {
  width?: number;
  height?: number;
  barSize?: number;
  barCategoryGap?: number;
  isEnableGrid?: boolean;
  isEnableLegend?: boolean;
  colors: string[];
};

export interface BarChartProps {
  data: BarData;
  settings?: BarSettingsProps;
}

export const barChartDefaultData: BarData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const barChartDefaultSettings: BarSettingsProps = {
  width: 500,
  height: 300,
  isEnableGrid: false,
  isEnableLegend: false,
  colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
};
