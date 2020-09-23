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
  Avatar,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import ProgressBar from '../ProgressBar';

import SearchIcon from '@material-ui/icons/Search';
import TablePaginationActions from '../Table/TablePaginationActions';
import EnhancedTableHead from '../Table/EnhancedTableHead';
import './RegularTable.scss';

import { ITableData, IData, IOrder, IColumn, IDataRow } from './types';

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
    cellPadding: {
      padding: '5px',
    },
    imageSize: {
      width: '50px',
      height: '50px',
      marginLeft: '-20px',
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

function stableSort(array: any[], comparator: (a: any, b: any) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [any, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const RegularTable = (props: ITableData) => {
  const { columns, rows } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState<number>(0);
  const [order, setOrder] = React.useState<IOrder>('asc');
  const [orderBy, setOrderBy] = React.useState<string>(columns[0].id);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [dataRows, setDataRows] = React.useState<IData[]>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

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
      const newSelecteds = rows.map((n: any) => n.country);
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
          if (key !== 'teamMembers') {
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
        }
        return false;
      }),
    );
  };

  const DataRow = ({ column: { id, align }, value }: IDataRow) => {
    switch (id) {
      case 'teamMembers':
        return (
          <TableCell key={id} align={align} className={classes.cellPadding}>
            <AvatarGroup max={6}>
              {value.map((el: any, index: number) => (
                <Avatar className={classes.imageSize} alt='Remy Sharp' src={el} key={index} />
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
              .map((dataRow, index: number) => {
                const isItemSelected = isSelected(dataRow.country);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, dataRow.country)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={dataRow.country}
                    selected={isItemSelected}>
                    <TableCell padding='checkbox'>
                      <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>

                    {columns.map((column: IColumn, key: number) => {
                      const value = dataRow[column.id];
                      return <DataRow column={column} value={value} key={key} />;
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

export default RegularTable;
