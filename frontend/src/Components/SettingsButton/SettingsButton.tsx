import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelSwitch from '../../Components/Switch';
import './SettingsButton.scss';

type SettingsButtonProps<T = boolean> = {
  settings: {
    label: string;
    state: any;
  }[];
};

const SettingsButton: React.FC<SettingsButtonProps> = (props: SettingsButtonProps) => {
  const { settings } = props;
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown className='settings position-fixed pl-2 d-none d-md-block' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className='btn-dropdown-settings'>
        <SettingsIcon />
      </DropdownToggle>
      <DropdownMenu>
        {settings.map((item, index) => {
          const [state, setState] = item.state;
          return (
            <div className='settingsItem flex-row'>
              <LabelSwitch
                className='w-100 p-2'
                label=''
                textLabel={item.label}
                name=''
                trackColor='rgb(144, 202, 249)'
                sliderColor='rgb(33, 150, 243)'
                check={state}
                value={state}
                onChange={() => setState(!state)}
              />
            </div>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
export default SettingsButton;
