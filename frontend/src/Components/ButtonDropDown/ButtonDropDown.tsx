import React, { useMemo } from 'react';
import {
  ButtonDropdown as ReactstrapButtonDropdown,
  DropdownToggle as ReactstrapDropdownToggle,
  DropdownMenu as ReactstrapDropdownMenu,
  DropdownItem as ReactstrapDropdownItem,
} from 'reactstrap';

interface ButtonDropDownProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  items: string[];
}

const ButtonDropDown = (props: ButtonDropDownProps): React.ReactNode => {
  const { items, label } = props;
  const [dropdownOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const dropdownItemElements = useMemo(
    () =>
      items.map((item: string, index: number) => <ReactstrapDropdownItem key={index}>{item}</ReactstrapDropdownItem>),
    [items],
  );

  return (
    <ReactstrapButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <ReactstrapDropdownToggle caret>{label}</ReactstrapDropdownToggle>
      <ReactstrapDropdownMenu>{dropdownItemElements}</ReactstrapDropdownMenu>
    </ReactstrapButtonDropdown>
  );
};

export default ButtonDropDown;
