export type TableOrderType = 'asc' | 'desc';

export type AlignType = 'right' | 'left';

export type RowType = {
  country: string;
  activeUsers: number;
  teamMembers: string[];
  progress: number;
};

export type ColumnTypes = keyof RowType;

export type ColumnType = {
  id: ColumnTypes;
  label: string;
  minWidth?: number;
  align?: AlignType;
};

export type TableProps = {
  columns: ColumnType[];
  rows: RowType[];
};
