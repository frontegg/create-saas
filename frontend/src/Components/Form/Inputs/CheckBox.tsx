import React from 'react';
import { Label, Input } from 'reactstrap';
import classNames from 'classnames';

type CheckBoxProps = {
  label: string;
  name: string;
  valid?: boolean;
  placeholder: string;
  signature: string;
  className: string;
  values: string[];
};

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { label, name, valid = false, placeholder, signature, className, values } = props;

  return (
    <div className={className}>
      <div>
        <Label>{label}</Label>
      </div>

      {values.map((value: string, i: number) => (
        <div className='custom-control custom-control-inline custom-checkbox' key={i}>
          <Input
            className={classNames('form-input', 'custom-control-input', {
              'border-green-500 is-valid': valid,
              'border-red-500 is-invalid': !valid,
            })}
            placeholder={placeholder}
            type='checkbox'
            name={name}
            value={value}
            id={name + i + value}
          />
          <Label className='form-check-label custom-control-label' htmlFor={name + i + value}>
            {value}
          </Label>
        </div>
      ))}
      <div
        className={classNames('text-xs', {
          'text-green-500': valid,
          'text-red-500': !valid,
        })}>
        {signature}
      </div>
    </div>
  );
};

export default CheckBox;
