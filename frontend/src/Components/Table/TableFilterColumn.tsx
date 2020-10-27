import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Box, IconButton, Tooltip, makeStyles } from '@material-ui/core';
import { Popup } from '../Popup';
import { TableColumnProps } from './types';
import { useDebounce } from '../../hooks';

const useStyles = makeStyles((theme) => ({
  filterButton: {
    margin: '-16px 0',
  },
  filterIcon: {
    fontSize: '1.4rem',
  },
}));

type TableFilterColumnProps<T extends object = any> = {
  column: TableColumnProps<T>;
  onFilterChange?: (column: TableColumnProps<T>, value: any) => void;
};

export const TableFilterColumn: FC<TableFilterColumnProps> = <T extends object>({
  column,
  onFilterChange,
}: TableFilterColumnProps<T>) => {
  const [filterValue, setFilterValue] = useState(column.filterValue);
  const debounceFilters = useDebounce(filterValue, 500);
  const classes = useStyles();
  const popupRef = useRef<HTMLElement>(null);

  useEffect(() => {
    onFilterChange?.(column, debounceFilters);
  }, [column, debounceFilters, onFilterChange]);

  const closePopup = useCallback(() => {
    if (popupRef.current) {
      (popupRef.current.children[0] as any)?.click?.();
    }
  }, [popupRef]);

  const FilterComponent = column.Filter;
  return (
    <Box onClick={(e) => e.stopPropagation()}>
      <Popup
        ref={popupRef}
        content={
          <FilterComponent
            value={filterValue}
            setFilterValue={(value) => setFilterValue(value)}
            closePopup={closePopup}
          />
        }
        action={'click'}
        trigger={
          <Tooltip title='Filter list'>
            <IconButton
              className={classes.filterButton}
              color={!!filterValue ? 'primary' : undefined}
              aria-label='filter list'>
              <FilterListIcon className={classes.filterIcon} key={1} name='filters' />
            </IconButton>
          </Tooltip>
        }
      />
    </Box>
  );
};
