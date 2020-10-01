import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    hide: {
      display: 'none',
    },
    closeBtn: {
      cursor: 'pointer',
    },
  }),
);

interface FilterInputProps {
  type: string;
  columnId: string;
  placeholder: string;
  filterTypes: string[];
  filterValue: string;
  deleteFilter: (value: string, param: string) => void;
  setFilter: (param: string, value: string) => void;
}

export default function FilterInput(props: FilterInputProps) {
  const { columnId, placeholder, filterTypes, deleteFilter, setFilter, filterValue } = props;
  const classes = useStyles();

  const visible = React.useMemo(() => filterTypes.some((filterType: string) => filterType === placeholder), [
    filterTypes,
    placeholder,
  ]);

  return (
    <form
      className={classNames({
        [classes.root]: visible,
        [classes.hide]: !visible,
      })}
      noValidate
      autoComplete='off'
      onSubmit={(e) => e.preventDefault()}>
      <TextField
        variant='outlined'
        label={`Search ${placeholder}`}
        placeholder={placeholder}
        InputLabelProps={{ shrink: true }}
        value={filterValue}
        onChange={(e) => setFilter(columnId, e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position='end'
              className={classes.closeBtn}
              onClick={() => deleteFilter(placeholder, columnId)}>
              <CloseIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
