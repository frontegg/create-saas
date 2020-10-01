import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Table as MaterialUITable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  InputAdornment,
  Checkbox,
  Avatar,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import ProgressBar from '../ProgressBar';

import SearchIcon from '@material-ui/icons/Search';
import TablePaginationActions from './TablePaginationActions';
import TableHead from './TableHead';
import './Table.scss';
import { ColumnType, RowType, TableOrderType, TableProps, ColumnTypes } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 500,
    },
    margin: {
      margin: theme.spacing(1),
      alignSelf: 'self-end',
    },
    container: {
      maxHeight: 440,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

function compare<T>(a: T, b: T, key: keyof T) {
  if (a[key] < b[key]) {
    return 1;
  }
  if (a[key] > b[key]) {
    return -1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: TableOrderType,
  key: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc' ? (a, b) => compare(a, b, key) : (a, b) => -compare(a, b, key);
}

function sortArray(array: any[], comparator: (a: any, b: any) => number) {
  return array.sort(comparator);
}

const generateTableRow = (column: ColumnType, value: any) => {
  const { id, align } = column;
  switch (id) {
    case 'teamMembers':
      return (
        <TableCell key={id} align={align} className='p-2'>
          <AvatarGroup max={6}>
            {value.map((src: string, index: number) => (
              <Avatar className='avatar-image' alt='avatar' src={src} key={index} />
            ))}
          </AvatarGroup>
        </TableCell>
      );
    case 'progress':
      return (
        <TableCell key={id} align={align}>
          <ProgressBar value={value} />
        </TableCell>
      );
    default:
      return (
        <TableCell key={id} align={align}>
          {value}
        </TableCell>
      );
  }
};

const Table = (props: TableProps) => {
  const { columns, rows } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState<number>(0);
  const [order, setOrder] = React.useState<TableOrderType>('asc');
  const [orderKey, setOrderKey] = React.useState<ColumnTypes>(columns[0].id);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [dataRows, setDataRows] = React.useState<RowType[]>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

  React.useEffect(() => {
    setDataRows((prevState) => [...prevState, ...rows]);
  }, [rows]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, key: ColumnTypes) => {
    const isAsc = orderKey === key && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderKey(key);
  };

  const selectRow = (event: React.MouseEvent<HTMLTableRowElement>, name: string) => {
    const selecedSet = new Set(selected);
    if (selecedSet.has(name)) {
      selecedSet.delete(name);
    } else {
      selecedSet.add(name);
    }
    setSelected(Array.from(selecedSet));
  };

  const selectAllRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(rows.map((row: RowType) => row.country));
      return;
    }
    setSelected([]);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const freeSearch = (term: string) => {
    setDataRows(
      rows.filter((row: RowType) => {
        const { teamMembers, ...rest } = row;
        for (const value of Object.values(rest)) {
          if (String(value).toLowerCase().includes(term.toLowerCase())) {
            return row;
          }
        }
        return false;
      }),
    );
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <div className='datatable-header'>
          <TextField
            className={classes.margin}
            id='input-with-icon-textfield'
            label='Search'
            onChange={(event) => freeSearch(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <MaterialUITable stickyHeader aria-label='sticky table' className={classes.table}>
          <TableHead
            columns={columns}
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderKey={orderKey}
            onSelectAllClick={selectAllRows}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {sortArray(dataRows, getComparator(order, orderKey))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((dataRow: RowType, index: number) => {
                const isItemSelected = isSelected(dataRow.country);
                const labelId = `table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => selectRow(event, dataRow.country)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={dataRow.country}
                    selected={isItemSelected}>
                    <TableCell padding='checkbox'>
                      <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    {columns.map((column: ColumnType) => generateTableRow(column, dataRow[column.id]))}
                  </TableRow>
                );
              })}
          </TableBody>
        </MaterialUITable>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableContainer>
    </Paper>
  );
};

export default Table;
