export interface IColumn {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
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
    name: string
    code: string
    population: string
    size: string
    density: string
}

export interface ITablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export interface ITableData {
    columns: IColumn[]
    rows: IData[]
}

export interface IEnhancedTableProps {
    columns: IColumn[]
    classes: any;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: IOrder;
    orderBy: string;
    rowCount: number;
}

export type IOrder = 'asc' | 'desc';