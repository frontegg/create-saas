export interface IColumn {
  id: keyof IData;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export interface IData {
  country: string;
  activeUsers: number;
  teamMembers: string[];
  progress: number;
}

export interface ITableData {
  columns: IColumn[];
  rows: IData[];
}

export interface IEnhancedTableProps {
  columns: IColumn[];
  classes: any;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: IOrder;
  orderBy: string;
  rowCount: number;
}

export interface IDataRow {
  column: IColumn;
  value: any;
}

export type IOrder = 'asc' | 'desc';
