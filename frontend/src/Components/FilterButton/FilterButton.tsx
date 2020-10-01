import React from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

interface FilterButtonProps {
  items: string[];
  setFilterType: any;
  filterTypes: string[];
}

const FilterButton = (props: FilterButtonProps) => {
  const { items, setFilterType, filterTypes } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickFilters = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(currentTarget);
  };

  const handleCloseFilters = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls='simple-menu' aria-haspopup='true' onClick={handleClickFilters}>
        <FilterListIcon />
      </IconButton>

      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseFilters}>
        {items.map((item: string, index: number) => (
          <MenuItem
            onClick={() => {
              handleCloseFilters();
              setFilterType((prevState: any) => [...prevState, item]);
            }}
            disabled={filterTypes.some((filterType: string) => filterType === item)}
            key={index}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FilterButton;
