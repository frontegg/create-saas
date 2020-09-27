import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

interface IButton {
  lable: string;
  items: string[];
}

const ButtonDropDown = (props: IButton) => {
  const [dropdownOpen, setOpen] = React.useState(false);

  const { items, lable } = props;

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{lable}</DropdownToggle>
      <DropdownMenu>
        {items.map((el: string, i: number) => (
          <DropdownItem key={i}>{el}</DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default ButtonDropDown;
