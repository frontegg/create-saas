import React from 'react';
// import Switches from 'react-input-switch';
import Switches from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import './Switch.scss';

type SwitchProps = {
  label: string;
  text_label: string;
  track_color: string;
  slider_color: string;
  name: string;
  check?: boolean;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch: React.FC<SwitchProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  label,
  text_label,
  slider_color,
  track_color,
  name,
  check,
  value,
  onChange,
}) => {
  const [state, setState] = React.useState(check || value || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    setState(!state);
  };

  const CustomSwitch = withStyles({
    switchBase: {
      color: 'rgb(238, 238, 238)',
      '&$checked': {
        color: slider_color,
      },
      '&$checked + $track': {
        backgroundColor: track_color,
      },
    },
    checked: {},
    track: {},
  })(Switches);

  return (
    <div className={`form_switch d-flex justify-content-between ${className || ''}`}>
      <div className={`${label ? '' : 'switcher-wrapper'}`}>
        <div className='label'>{label}</div>
        <div className='text-label'>{text_label}</div>
      </div>
      <div>
        <CustomSwitch
          checked={state}
          onChange={handleChange}
          value={state || undefined}
          name={name}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
    </div>
  );
};

export default Switch;
