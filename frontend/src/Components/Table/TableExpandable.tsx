import React from 'react';
import { Row } from 'react-table';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

type TableExpandableProps<T extends object> = {
  isExpanded: boolean;
  renderExpandedComponent?: (data: T, index: number) => React.ReactNode;
  row: Row<T>;
};
export const TableExpandable: React.FC<TableExpandableProps<any>> = <T extends object>(
  props: TableExpandableProps<T>,
) => {
  const { isExpanded, renderExpandedComponent, row } = props;

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={row.cells.length}>
        <Collapse in={isExpanded} timeout='auto' unmountOnExit>
          <Box margin='0 auto'>{renderExpandedComponent?.(row.original, row.index)}</Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
