export type Data = {
  lineChartData: {
    x: string | number;
    y: string | number;
    z?: string | number;
  }[];
  xname: string;
  yname: string;
  type?: 'number' | 'category';
};

export type SettingsProps = {
  width?: number;
  height?: number;
  isEnableGrid?: boolean;
  strokeColor?: string;
  fillColor?: string;
  scatterName?: string;
};

export interface ScatterChartProps {
  data: Data;
  settings?: SettingsProps;
}

export type CustomizedDotSettings = {
  strokeColor?: string;
  fillColor?: string;
  r?: string | number;
  strokeWidth?: number;
};

export const scatterChartDataDefault: Data = {
  lineChartData: [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ],
  xname: 'line 1',
  yname: 'line 2',
};

export const scatterChartDefaultSettings: SettingsProps = {
  width: 400,
  height: 400,
  isEnableGrid: false,
  strokeColor: 'red',
  fillColor: 'antiquewhite',
  scatterName: 'Example',
};

export const CustomizedDotDataDefault: CustomizedDotSettings = {
  strokeColor: 'red',
  fillColor: 'antiquewhite',
  r: 6,
  strokeWidth: 1,
};
