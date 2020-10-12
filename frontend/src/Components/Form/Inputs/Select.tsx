import React from 'react';
import { Label } from 'reactstrap';
import classNames from 'classnames';

export type OptionType = {
  value: string | number | readonly string[] | undefined;
  label: React.ReactNode;
};

type SelectProps = {
  label: string;
  name: string;
  valid?: boolean;
  signature: string;
  className: string;
  options?: OptionType[];
};

export const Select: React.FC<SelectProps> = (props) => {
  const { label, name, valid = false, signature, className, options = [] } = props;
  return (
    <div className={className}>
      <Label className='form-check-label mr-sm-2'>{label}</Label>

      <select
        className={classNames('form-control', 'form-input', 'mb-2', 'mr-sm-2', {
          'border-green-500': valid,
          'border-red-500': !valid,
        })}
        name={name}>
        {options.map((option: OptionType, i: number) => {
          return (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          );
        })}
      </select>
      <div
        className={classNames('text-xs', 'mr-sm-2', {
          'text-green-500': valid,
          'text-red-500': !valid,
        })}>
        {signature}
      </div>
    </div>
  );
};
