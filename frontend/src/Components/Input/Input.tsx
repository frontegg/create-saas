import React from 'react';
import './Input.scss';

type InputProps = {
  label?: string;
  placeholder?: string;
  type: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value: any;
};

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, type, onChange, value, placeholder } = props;
  return (
    <div className='input-element'>
      <div className='label'>{label}</div>
      <input className='input-field' type={type} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};

export default Input;
