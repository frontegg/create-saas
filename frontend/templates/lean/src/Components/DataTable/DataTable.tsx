import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  InputAdornment,
  Checkbox,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import TablePaginationActions from '../Table/TablePaginationActions';
import EnhancedTableHead from '../Table/EnhancedTableHead';
import FilterInput from '../FilterInput/FilterInput';
import FilterButton from '../FilterButton/FilterButton';
import './DataTable.scss';

import { ITableData, IData, IOrder, IColumn, ISearchData } from './types';

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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: IOrder,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const DataTable = (props: ITableData) => {
  const { columns, rows } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState<IOrder>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IData>(columns[0].id);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [dataRows, setDataRows] = React.useState<IData[]>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filterTypes, setFilterType] = React.useState<string[]>([]);
  const [filters, setFilters] = React.useState<ISearchData>({
    name: '',
    code: '',
    population: '',
    size: '',
    density: '',
  });

  React.useEffect(() => {
    setDataRows((prevState) => [...prevState, ...rows]);
  }, [rows]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const freeSearch = (value: string) => {
    setDataRows(
      rows.filter((el: any) => {
        for (const key in el) {
          if (typeof el[key] === 'string') {
            if (el[key].toLowerCase().includes(value.toLowerCase())) {
              return el;
            }
          } else {
            if (String(el[key]).includes(value)) {
              return el;
            }
          }
        }
        return false;
      }),
    );
  };

  const setFilter = (param: string, value: string) => {
    setFilters((prevState: ISearchData) => ({ ...prevState, [param]: value }));
  };

  React.useEffect(() => {
    if (!!filters) {
      const filter = (element: string, key: string) => {
        if (element) {
          return element.toLowerCase().includes(filters[key as keyof IData].toLowerCase());
        }
        return true;
      };

      setDataRows(
        rows.filter((el: any) => {
          for (const key in filters) {
            if (!filter(el[key].toString(), key)) return false;
          }

          return true;
        }),
      );
    }
  }, [filters, rows]);

  const deleteFilter = (value: string, param: string) => {
    setFilterType((prevState: string[]) => [...prevState.filter((el: string) => el !== value)]);
    setFilters((prevState: ISearchData) => ({ ...prevState, [param]: '' }));
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
          <FilterButton
            items={columns.map((el: IColumn) => el.label)}
            setFilterType={setFilterType}
            filterTypes={filterTypes}
          />
        </div>
        <div className='datatable-filters'>
          {columns.map((column: IColumn) => (
            <FilterInput
              filterValue={filters[column.id]}
              setFilter={setFilter}
              columnId={column.id}
              deleteFilter={deleteFilter}
              key={column.id}
              filterTypes={filterTypes}
              type='text'
              placeholder={column.label}
            />
          ))}
        </div>
        <Table stickyHeader aria-label='sticky table' className={classes.table}>
          <EnhancedTableHead
            columns={columns}
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(dataRows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((dataRow, index) => {
                const isItemSelected = isSelected(dataRow.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, dataRow.name)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={dataRow.name}
                    selected={isItemSelected}>
                    <TableCell padding='checkbox'>
                      <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    {columns.map((column) => {
                      const value = dataRow[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
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

export default DataTable;
