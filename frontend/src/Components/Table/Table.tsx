import React, { useCallback, useMemo, useEffect, useRef } from 'react';
import MaterialUITable from '@material-ui/core/Table';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';

import './style.scss';
import {
  useTable,
  useFilters,
  useSortBy,
  TableState,
  UseTableOptions,
  UseFiltersOptions,
  UseFiltersState,
  UseSortByOptions,
  UseSortByState,
  useExpanded,
  UseExpandedOptions,
  UseExpandedRowProps,
  Row,
  Column,
  useFlexLayout,
  usePagination,
  PluginHook,
  UsePaginationOptions,
  UsePaginationState,
  UsePaginationInstanceProps,
  UseTableInstanceProps,
  TableInstance,
  useRowSelect,
  UseRowSelectRowProps,
  UseRowSelectOptions,
  UseRowSelectInstanceProps,
  UseRowSelectState,
  UseTableCellProps,
  UseTableRowProps,
} from 'react-table';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { TablePaginationActions } from './TablePaginationActions';
import { TableProps, TableColumnProps, TableColumnOptions } from './types';

const useStyles = makeStyles((theme) => ({
  expandIcon: {
    margin: '-12px -12px',
  },
  checkBox: {
    margin: '-9px 0',
  },
  table: {
    minWidth: '750px',
  },
  paper: {
    width: '100%',
    overflowY: 'auto',
    maxHeight: '100vh',
    height: '100%',
  },
  footer: {
    zIndex: 1,
    bottom: '0px',
    left: '0px',
    right: '0px',
    width: '100%',
    position: 'sticky',
    background: theme.palette.background.paper,
  },
}));

export const Table: React.FC<TableProps> = <T extends object>(props: TableProps<T>) => {
  const {
    expandable,
    selection,
    pagination,
    sortBy,
    pageCount,
    data,
    selectedRowIds,
    pageSize,
    rowKey,
    loading,
    isMultiSort,
    renderExpandedComponent,
    onPageChange,
    filters: propsFilters,
    onSortChange: propsOnSortChange,
    onRowSelected: propsOnRowSelected,
    onFilterChange: propsOnFilterChange,
    columns: propsColumns,
  } = props;
  const classes = useStyles();
  const tableRef = useRef<HTMLTableElement>(null);

  const hasSortBy = props.hasOwnProperty('sortBy');
  const hasFilters = props.hasOwnProperty('filters');
  const hasPagination = props.hasOwnProperty('pagination');
  const hasOnPageChange = props.hasOwnProperty('onPageChange');
  const hasSelectedRowIds = props.hasOwnProperty('selectedRowIds');

  const onRowSelected = useCallback(
    (row: UseRowSelectRowProps<T> & Row<T> & UseTableRowProps<T>, value: boolean) => {
      const id = (row.original as any)[rowKey];
      if (hasSelectedRowIds) {
        const newSelectedRows: any = { ...selectedRowIds };
        if (value) {
          newSelectedRows[id] = true;
        } else {
          delete newSelectedRows[id];
        }
        propsOnRowSelected?.(newSelectedRows);
      } else {
        row.toggleRowSelected(value);
      }
    },
    [hasSelectedRowIds, rowKey, selectedRowIds, propsOnRowSelected],
  );

  const columns = useMemo(() => {
    const columns = propsColumns.map(
      ({ sortable, Filter, Header, ...rest }) =>
        ({
          ...rest,
          disableSortBy: !sortable,
          disableFilters: !Filter,
          Filter,
          Header: Header ?? <div style={{ minWidth: rest.minWidth, maxWidth: rest.maxWidth }} />,
        } as TableColumnOptions<T>),
    );

    if (expandable) {
      columns.unshift({
        id: 'expander',
        minWidth: 60,
        maxWidth: '60px' as any,
        Cell: (cell: UseTableCellProps<T>) => {
          const row = cell.row as Row<T> & UseExpandedRowProps<T>;
          return (
            <IconButton className={classes.expandIcon} {...row.getToggleRowExpandedProps()}>
              {row.isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          );
        },
      });
    }
    if (selection) {
      columns.unshift({
        id: 'selection',
        minWidth: 60,
        maxWidth: '60px' as any,
        Cell: (cell: UseTableCellProps<T>) => {
          const row = cell.row as UseRowSelectRowProps<T> & Row<T> & UseTableRowProps<T>;
          return (
            <Checkbox
              className={classes.checkBox}
              {...row.getToggleRowSelectedProps()}
              checked={row.isSelected}
              onChange={(e) => onRowSelected(row, e.target.checked)}
            />
          );
        },
      });
    }
    return columns as Column<T>[];
  }, [propsColumns, expandable, classes, selection, onRowSelected]);

  const tableHooks: PluginHook<T>[] = [useFilters, useSortBy];
  if (expandable) {
    tableHooks.push(useExpanded);
  }
  if (pagination) {
    tableHooks.push(usePagination);
  }
  if (selection) {
    tableHooks.push(useRowSelect);
  }
  tableHooks.push(useFlexLayout);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    page,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    toggleAllRowsSelected,
    isAllRowsSelected,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      getRowId: (row: any) => row[rowKey],
      manualSortBy: !!propsOnSortChange,
      manualFilters: !!propsOnFilterChange,
      manualPagination: !!onPageChange,
      manualRowSelectedKey: rowKey,
      pageCount: pageCount ?? 0,
      useControlledState: (state1: any) =>
        ({
          ...state1,
          sortBy: sortBy ?? state1.sortBy,
          filters: propsFilters ?? state1.filters,
          selectedRowIds: selectedRowIds ?? state1.selectedRowIds,
        } as TableState<T> & UseFiltersState<T> & UseSortByState<T> & UseRowSelectState<T>),
      expandSubRows: false,
      initialState: {
        pageIndex: 0,
        pageSize: pageSize ?? 0,
        selectedRowIds: selectedRowIds || {},
      },
    } as UseTableOptions<T> &
      UseFiltersOptions<T> &
      UseSortByOptions<T> &
      UseExpandedOptions<T> &
      UseRowSelectOptions<T> &
      UsePaginationOptions<T>,
    ...tableHooks,
  ) as TableInstance<T> & UseTableInstanceProps<T> & UsePaginationInstanceProps<T> & UseRowSelectInstanceProps<T>;

  if (expandable && !renderExpandedComponent) {
    throw Error('Table: you must provide renderExpandedComponent property if the table is expandable');
  }
  if (hasSortBy && !propsOnSortChange) {
    throw Error('Table: you must provide onSortChange property if sortBy is controlled');
  }
  if (hasFilters && !propsOnFilterChange) {
    throw Error('Table: you must provide onFilterChange property if filters is controlled');
  }
  if (hasPagination && !pageSize) {
    throw Error('Table: you must provide pageSize property if pagination enabled');
  }
  if (hasOnPageChange && !pageCount) {
    throw Error('Table: you must provide pageCount property if onPageChange is controlled');
  }

  const tableState = state as UseSortByState<T> & UseFiltersState<T> & UsePaginationState<T> & UseRowSelectState<T>;

  const onSortChange = useCallback(
    (column: TableColumnProps<T>) => {
      if (hasSortBy) {
        const sortBy = isMultiSort ? tableState.sortBy.filter(({ id }) => id !== column.id) : [];
        if (!column.isSorted) {
          sortBy.push({ id: column.id, desc: false });
        } else if (!column.isSortedDesc) {
          sortBy.push({ id: column.id, desc: true });
        }
        propsOnSortChange?.(sortBy);
      } else {
        if (column.isSorted && column.isSortedDesc) {
          column.clearSortBy();
        } else {
          column.toggleSortBy(column.isSorted, isMultiSort ?? false);
        }
      }
    },
    [hasSortBy, isMultiSort, tableState.sortBy, propsOnSortChange],
  );

  const onFilterChange = useCallback(
    (column: TableColumnProps<T>, filterValue?: any) => {
      if (hasFilters) {
        const filters = tableState.filters.filter(({ id }) => id !== column.id);
        if (filterValue != null) {
          filters.push({ id: column.id, value: filterValue });
        }
        propsOnFilterChange?.(filters);
      } else {
        column.setFilter(filterValue);
      }
    },
    [propsOnFilterChange, hasFilters, tableState.filters],
  );

  const onToggleAllRowsSelected = useCallback(
    (value: boolean) => {
      if (hasSelectedRowIds) {
        const selectedIds = data.reduce((p, n: any) => ({ ...p, [n[rowKey]]: true }), {});
        propsOnRowSelected?.(value ? selectedIds : {});
      } else {
        toggleAllRowsSelected(value);
      }
    },
    [hasSelectedRowIds, data, rowKey, propsOnRowSelected, toggleAllRowsSelected],
  );

  useEffect(() => {
    if (!hasSortBy) propsOnSortChange?.(tableState.sortBy);
  }, [hasSortBy, propsOnSortChange, tableState.sortBy]);

  useEffect(() => {
    if (!hasFilters) propsOnFilterChange?.(tableState.filters);
  }, [hasFilters, propsOnFilterChange, tableState.filters]);

  useEffect(() => {
    tableRef.current?.querySelector('.table-tbody')?.scroll?.({ top: 0, left: 0, behavior: 'smooth' });
    onPageChange?.(tableState.pageSize, tableState.pageIndex);
  }, [onPageChange, tableState.pageSize, tableState.pageIndex]);

  useEffect(() => {
    if (!hasSelectedRowIds) propsOnRowSelected?.(tableState.selectedRowIds as any);
  }, [hasSelectedRowIds, propsOnRowSelected, tableState.selectedRowIds]);

  const onPageChangeHandler = (page: number) => {
    if (page > tableState.pageIndex) {
      nextPage();
    } else {
      previousPage();
    }
  };

  return (
    <Paper className={classes.paper}>
      <MaterialUITable className={classes.table} ref={tableRef} {...getTableProps()}>
        <TableHead
          headerGroups={headerGroups}
          onSortChange={onSortChange}
          onFilterChange={onFilterChange}
          toggleAllRowsSelected={onToggleAllRowsSelected}
          isAllRowsSelected={isAllRowsSelected}
          selectedFlatRows={selectedFlatRows}
        />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
          loading={loading}
          rows={(pagination ? page : rows) as (Row<T> & UseExpandedRowProps<T>)[]}
          renderExpandedComponent={renderExpandedComponent}
        />
      </MaterialUITable>
      {pagination === 'pages' && (
        <TablePagination
          className={classes.footer}
          rowsPerPageOptions={[]}
          component='div'
          count={rows.length}
          rowsPerPage={tableState.pageSize}
          page={tableState.pageIndex}
          onChangePage={(e, page) => onPageChangeHandler(page)}
          ActionsComponent={(props) => (
            <TablePaginationActions {...props} gotoPage={gotoPage} pageOptions={pageOptions} />
          )}
        />
      )}
    </Paper>
  );
};
