export type PieData = {
  name: string;
  value: number | string;
}[];

export type PieSettingsProps = {
  width?: number;
  height?: number;
  pie?: {
    cx?: number;
    cy?: number;
    startAngle?: number;
    endAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    paddingAngle?: number;
  };
  customColors: string[];
};

export interface PieChartProps {
  data: PieData;
  settings?: PieSettingsProps;
}

export const pieChartDataDefault: PieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

export const pieChartDefaultSettings: PieSettingsProps = {
  width: 300,
  height: 400,
  pie: {
    cx: 120,
    cy: 200,
    startAngle: 0,
    endAngle: 0,
    innerRadius: 60,
    outerRadius: 80,
    paddingAngle: 1,
  },
  customColors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
};
