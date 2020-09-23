export interface IColumn {
  id: keyof IData;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export interface IData {
  name: string;
  code: string;
  population: string | number;
  size: string | number;
  density: string | number;
}

export interface ISearchData {
  name: string;
  code: string;
  population: string;
  size: string;
  density: string;
}

export interface ITableData {
  columns: IColumn[];
  rows: IData[];
}

export type IOrder = 'asc' | 'desc';
