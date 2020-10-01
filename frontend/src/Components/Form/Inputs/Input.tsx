import React from 'react';
import { Label, Input as ReactstrapInput } from 'reactstrap';
import classNames from 'classnames';

type InputProps = {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'password' | 'email';
  inline?: boolean;
  valid: boolean;
  placeholder: string;
  className: string;
  signature: string;
};

const Input: React.FC<InputProps> = (props) => {
  const { label, name, valid = false, placeholder, className, inline = false, signature, type = 'text' } = props;

  const borderClassNames = classNames('form-input', 'mb-2', 'mr-sm-2', {
    'border-green-500': valid,
    'border-red-500': !valid,
  });
  const textClassNames = classNames('text-xs', 'mr-sm-2', {
    'text-green-500': valid,
    'text-red-500': !valid,
  });

  return (
    <div className={classNames('input-field', className)}>
      {inline ? (
        <div className='form-inline'>
          <Label className='form-check-label mr-sm-2'>{label}</Label>
          <ReactstrapInput className={borderClassNames} placeholder={placeholder} type={type} name={name} />
          <div className={textClassNames}>{signature}</div>
        </div>
      ) : (
        <>
          <Label className='form-check-label mr-sm-2'>{label}</Label>
          <ReactstrapInput className={borderClassNames} placeholder={placeholder} type={type} name={name} />
          <div className={textClassNames}>{signature}</div>
        </>
      )}
    </div>
  );
};

export default Input;
