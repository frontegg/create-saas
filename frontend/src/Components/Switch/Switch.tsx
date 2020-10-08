import React from 'react';
import MaterialUISwitch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import './Switch.scss';
import classNames from 'classnames';

interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  textLabel: string;
  trackColor: string;
  sliderColor: string;
  name: string;
  check?: boolean;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const { className, label, textLabel, sliderColor, trackColor, name, check, value, onChange } = props;
  const [checked, setChecked] = React.useState(check || value || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setChecked(!checked);
  };

  const CustomSwitch = withStyles({
    switchBase: {
      color: 'rgb(238, 238, 238)',
      '&$checked': {
        color: sliderColor,
      },
      '&$checked + $track': {
        backgroundColor: trackColor,
      },
    },
    checked: {},
    track: {},
  })(MaterialUISwitch);

  return (
    <div className={classNames('form-switch', 'd-flex', 'justify-content-between', className)}>
      <div className={classNames({ 'switcher-wrapper': !label })}>
        <div className='label'>{label}</div>
        <div className='text-label'>{textLabel}</div>
      </div>
      <div>
        <CustomSwitch
          checked={checked}
          onChange={handleChange}
          value={checked}
          name={name}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
    </div>
  );
};

export default Switch;
