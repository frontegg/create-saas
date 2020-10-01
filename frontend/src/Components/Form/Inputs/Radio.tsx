import React from 'react';
import { Label, Input } from 'reactstrap';
import classNames from 'classnames';

type RadioProps = {
  label: string;
  name: string;
  valid?: boolean;
  placeholder: string;
  className: string;
  signature: string;
  values: string[];
};

const Radio: React.FC<RadioProps> = (props) => {
  const { label, name, valid = false, placeholder, signature, className, values } = props;

  return (
    <div className={className}>
      <div>
        <Label>{label}</Label>
      </div>

      {values.map((value: string, i: number) => (
        <div className='custom-control custom-control-inline custom-radio' key={i}>
          <Input
            className={classNames('form-check-input', 'custom-control-input', {
              'border-green-500': valid,
              'border-red-500': !valid,
            })}
            placeholder={placeholder}
            type='radio'
            name={name}
            value={value}
            id={name + i + value}
          />
          <Label
            className={classNames('form-check-label', 'custom-control-label', {
              'text-green-500': valid,
              'text-red-500': !valid,
            })}
            htmlFor={name + i + value}>
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

export default Radio;
