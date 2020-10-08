import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import Switch from '../../Components/Switch';
import './SettingsButton.scss';

type SettingsButtonProps<T = boolean> = {
  settings: {
    label: string;
    state: any;
  }[];
};

const SettingsButton: React.FC<SettingsButtonProps> = (props: SettingsButtonProps) => {
  const { settings } = props;
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prevState) => !prevState);
  return (
    <Dropdown className='settings position-fixed pl-2 d-none d-md-block' isOpen={open} toggle={toggle}>
      <DropdownToggle className='btn-dropdown-settings'>
        <SettingsIcon />
      </DropdownToggle>
      <DropdownMenu>
        {settings.map((item, index: number) => {
          const [state, setState] = item.state;
          return (
            <div key={index} className='settings-item flex-row'>
              <Switch
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
