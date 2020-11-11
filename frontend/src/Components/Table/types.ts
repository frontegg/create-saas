import React, { ComponentType, ReactNode } from 'react';
import {
  CellProps,
  HeaderGroup,
  Column,
  IdType,
  HeaderProps,
  UseTableColumnOptions,
  UseFiltersColumnOptions,
  UseSortByColumnOptions,
  UseRowSelectOptions,
  Renderer,
  UseFiltersColumnProps,
  UseSortByColumnProps,
  UseRowSelectInstanceProps,
} from 'react-table';

export interface ITableColumnProps<T extends object = any> {
  accessor?: string | IdType<T> | never;
  id?: string;
  Header?: Renderer<HeaderProps<T>>;
  Cell?: CellComponent;
  sortable?: boolean;
  Filter?: FilterComponent;
  minWidth?: string | number;
  maxWidth?: string | number;
}

export interface TableProps<T extends object = {}> {
  columns: ITableColumnProps<T>[];
  pagination?: 'pages' | 'infinite-scroll';
  onPageChange?: (pageSize: number, page: number) => void;
  pageCount?: number;
  pageSize?: number;
  toolbar?: boolean;
  loading?: boolean;
  emptyRowsPlaceholder?: ReactNode;
  selection?: 'single' | 'multi';
  onRowSelected?: (rowIds: Record<string | number, boolean>) => void;
  selectedRowIds?: Record<string | number, boolean>;
  expandable?: boolean;
  renderExpandedComponent?: (data: T, index: number) => React.ReactNode;
  tableHeader?: boolean;
  data: T[];
  totalData: number;
  rowKey: keyof T | string;
  isMultiSort?: boolean;
  sortBy?: TableSort[];
  onSortChange?: (sortBy: TableSort[]) => void;
  filters?: TableFilter[];
  onFilterChange?: (filters: TableFilter[]) => void;
}

export declare type CellComponent<T extends {} = any> = Renderer<CellProps<T>>;

export declare type FilterComponent<T = any> = ComponentType<{
  value: T | null;
  setFilterValue: (value: T | null) => void;
  closePopup?: () => void;
}>;

export interface TableSort {
  id: string;
  desc?: boolean;
}

export interface TableFilter {
  id: string;
  value: any;
}

export interface TableColumnFilterProps<T = {}> {
  type: 'text' | 'select';
  filterBy: string;
}

export declare type TableColumnProps<T extends object> = HeaderGroup<T> &
  UseSortByColumnProps<T> &
  UseFiltersColumnProps<T> &
  UseRowSelectInstanceProps<T> & {
    Filter: FilterComponent;
  };

export declare type TableColumnOptions<T extends object> = Column<T> &
  UseTableColumnOptions<T> &
  UseSortByColumnOptions<T> &
  UseFiltersColumnOptions<T> &
  UseRowSelectOptions<T>;
