import React from 'react';
import { TableCell, TableHead as MaterialUITableHead, TableRow, TableSortLabel, Checkbox } from '@material-ui/core';
import { ColumnType, ColumnTypes, TableOrderType } from './types';

interface TableHeadProps {
  columns: ColumnType[];
  order: TableOrderType;
  classes: any;
  orderKey: ColumnTypes;
  rowCount: number;
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  onRequestSort: (event: React.MouseEvent<HTMLTableRowElement>, key: ColumnTypes) => void;
}

const TableHead = (props: TableHeadProps) => {
  const { columns, classes, order, orderKey, rowCount, onRequestSort, numSelected, onSelectAllClick } = props;

  const createSortHandler = (key: ColumnTypes) => (event: React.MouseEvent<HTMLTableRowElement>) => {
    onRequestSort(event, key);
  };

  return (
    <MaterialUITableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {columns.map(({ id, align, label }: any) => {
          const shouldOrder = orderKey === id;
          return (
            <TableCell key={id} align={align} sortDirection={shouldOrder ? order : false}>
              <TableSortLabel
                active={shouldOrder}
                direction={shouldOrder ? order : 'asc'}
                onClick={createSortHandler(id)}>
                {label}
                {shouldOrder ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </MaterialUITableHead>
  );
};

export default TableHead;
