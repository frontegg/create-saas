import React from 'react';
import './InputElement.scss';

type Props = {
  label: string;
  type: any; // TOOD - replace this
  setState: React.Dispatch<any>;
  value: any;
};

const InputElement: React.FC<Props> = ({ label, type, setState, value }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setState(e.currentTarget.value);
  };
  return (
    <div className='inputElement'>
      <div className='label'>{label}</div>
      <input className='inputField' type={type} onChange={handleChange} value={value} />
    </div>
  );
};

export default InputElement;
