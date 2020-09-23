import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel, Checkbox } from '@material-ui/core';

const EnhancedTableHead = (props: any) => {
  const { columns, classes, order, orderBy, rowCount, onRequestSort, numSelected, onSelectAllClick } = props;

  const createSortHandler = (property: string | number) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {columns.map((column: any) => (
          <TableCell key={column.id} align={column.align} sortDirection={orderBy === column.id ? order : false}>
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}>
              {column.label}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
