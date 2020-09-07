import * as React from 'react';
import './Dropdown.scss';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
type Direction = "up" | "down" | "left" | "right";
type Props = {
    label?: string | JSX.Element,
    caret?: boolean,
    direction?: Direction,
    color?: string,
    disabled?: boolean,
    size?: string
}
const Base:React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
    label = "Button dropdown",
    caret = true, 
    direction = "down",
    color = "",
    disabled = false,
    size = "",
    className = "",
    children}) => {
  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown className={className} direction={direction} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret={caret} color={color} size={size}>
        {label}
      </DropdownToggle>
      <DropdownMenu>
        {children}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

type DropdownProps = Pick<Props, Exclude<keyof Props, keyof {direction?:Direction}>>;

const Dropdown: React.FC<DropdownProps & React.HTMLAttributes<HTMLElement>> = (props) => {
    return <Base {...props}>
        {props.children}
    </Base>
}
export const Dropleft: React.FC<DropdownProps & React.HTMLAttributes<HTMLElement>> = (props) => {
    return <Base direction="left" {...props}>
        {props.children}
    </Base>
}
export const Dropright: React.FC<DropdownProps & React.HTMLAttributes<HTMLElement>> = (props) => {
    return <Base direction="right" {...props}>
        {props.children}
    </Base>
}
export const Dropup: React.FC<DropdownProps & React.HTMLAttributes<HTMLElement>> = (props) => {
    return <Base direction="up" {...props}>
        {props.children}
    </Base>
}

export default Dropdown;