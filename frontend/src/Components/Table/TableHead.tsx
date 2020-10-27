import React from 'react';
import { TableColumnProps } from './types';
import { HeaderGroup, TableSortByToggleProps } from 'react-table';
import {
  TableHead as MaterialUITableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Checkbox,
  Box,
  makeStyles,
} from '@material-ui/core';
import { TableFilterColumn } from './TableFilterColumn';

const useStyles = makeStyles((theme) => ({
  checkBox: {
    margin: '-9px 0',
  },
  head: {
    '& > *': {
      position: 'sticky',
      top: '0px',
      zIndex: 1,
      background: theme.palette.background.paper,
    },
  },
}));

type TableTHeadProps<T extends object> = {
  headerGroups: HeaderGroup<T>[];
  onSortChange?: (column: TableColumnProps<T>) => void;
  onFilterChange?: (column: TableColumnProps<T>, filterValue?: any) => void;
  toggleAllRowsSelected?: (value: boolean) => void;
  isAllRowsSelected?: boolean;
  selectedFlatRows?: T[];
};

export const TableHead: React.FC<TableTHeadProps<any>> = <T extends object>(props: TableTHeadProps<T>) => {
  const {
    headerGroups,
    onSortChange,
    onFilterChange,
    toggleAllRowsSelected,
    selectedFlatRows,
    isAllRowsSelected,
  } = props;
  const classes = useStyles();

  return (
    <MaterialUITableHead className={classes.head}>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((c) => {
            const column = c as TableColumnProps<T>;
            if (column.id === 'selection') {
              return (
                <TableCell {...column.getHeaderProps()}>
                  <Checkbox
                    className={classes.checkBox}
                    indeterminate={!isAllRowsSelected && (selectedFlatRows ?? []).length > 0}
                    checked={isAllRowsSelected}
                    onChange={() => toggleAllRowsSelected?.(!isAllRowsSelected)}
                  />
                </TableCell>
              );
            }
            return (
              <TableCell
                padding='default'
                {...column.getHeaderProps(
                  column.getSortByToggleProps((p: Partial<TableSortByToggleProps>) => ({
                    ...p,
                    onClick: column.canSort ? () => onSortChange?.(column) : undefined,
                  })),
                )}>
                <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='nowrap'>
                  <Box display='flex' flexGrow='1'>
                    {column.canSort ? (
                      <TableSortLabel
                        className='sort-label'
                        active={column.isSorted}
                        direction={column.isSortedDesc ? 'desc' : 'asc'}>
                        {column.render('Header')}
                      </TableSortLabel>
                    ) : (
                      <>{column.render('Header')}</>
                    )}
                  </Box>
                  {column.canFilter && <TableFilterColumn column={column} onFilterChange={onFilterChange} />}
                </Box>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </MaterialUITableHead>
  );
};
