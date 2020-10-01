import React from 'react';

import {
  Dropdown as ReactstrapDropdown,
  DropdownProps as ReactstrapDropdownProps,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

interface DropdownProps extends ReactstrapDropdownProps {
  label: string | JSX.Element;
  caret?: boolean;
  right?: boolean;
  color?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { caret, color, size, label, right, className, children, direction = 'down' } = props;
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  return (
    <ReactstrapDropdown className={className} direction={direction} isOpen={open} toggle={toggle}>
      <DropdownToggle caret={caret} color={color} size={size}>
        {label}
      </DropdownToggle>
      <DropdownMenu right={right}>{children}</DropdownMenu>
    </ReactstrapDropdown>
  );
};

export { Dropdown };
