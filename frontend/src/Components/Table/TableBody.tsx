import React from 'react';
import { TableBody as MaterialUITableBody, TableRow, TableCell, makeStyles } from '@material-ui/core';
import { Row, TableBodyPropGetter, TableBodyProps, UseExpandedRowProps } from 'react-table';
import { TableExpandable } from './TableExpandable';
import { Loader } from '../Loader';

type TableTBodyProps<T extends object> = {
  loading?: boolean;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps;
  prepareRow: (row: Row<T>) => void;
  rows: (Row<T> & UseExpandedRowProps<T>)[];
  renderExpandedComponent?: (data: T, index: number) => React.ReactNode;
};

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cell: {
    wordWrap: 'break-word',
    display: 'flex',
    alignItems: 'center',
  },
});

export const TableBody: React.FC<TableTBodyProps<any>> = <T extends object>(props: TableTBodyProps<T>) => {
  const { getTableBodyProps, prepareRow, rows, renderExpandedComponent, loading } = props;
  const classes = useRowStyles();

  return (
    <>
      <MaterialUITableBody className='table-tbody' {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <React.Fragment key={row.getRowProps().key}>
              <TableRow className={classes.root} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.id.includes('expander') || cell.column.id.includes('selection')) {
                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                  }
                  return (
                    <TableCell className={classes.cell} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableExpandable
                isExpanded={row.isExpanded}
                row={row}
                renderExpandedComponent={renderExpandedComponent}
              />
            </React.Fragment>
          );
        })}

        {loading && rows.length === 0 && (
          <TableRow>
            <TableCell align='center'>
              <Loader size={24} />
            </TableCell>
          </TableRow>
        )}
      </MaterialUITableBody>
      {loading && rows.length > 0 && <Loader center size={24} />}
    </>
  );
};
