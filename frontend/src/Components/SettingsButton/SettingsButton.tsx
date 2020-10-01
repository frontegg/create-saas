import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelSwitch from '../../Components/Switch';
import './SettingsButton.scss';
import { stateType } from '../../Components/SettingsButton/types';

type Props<T = boolean> = {
  settings: {
    label: string;
    state: stateType<T>;
  }[];
};

const SettingsButton: React.FC<Props> = ({ settings }) => {
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
                text_label={item.label}
                name=''
                track_color='rgb(144, 202, 249)'
                slider_color='rgb(33, 150, 243)'
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
