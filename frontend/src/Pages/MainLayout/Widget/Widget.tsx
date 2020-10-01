import React from 'react';
import './Widget.scss';

type Props = {
  label?: string;
  value?: string;
  icon?: JSX.Element;
  col?: boolean;
};

const Widget: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  col,
  label,
  value,
  icon,
  className = '',
  style = {},
  children,
}) => {
  return (
    <div className={`widget d-flex mr-2 mb-4 ${className}`} style={style}>
      <div className='d-flex flex-column'>
        <div className='label'>{label}</div>
        <div className='value'>{value}</div>
      </div>
      <div className='icon'>{icon}</div>
      {col ? <div className='d-flex flex-column w-100'>{children}</div> : children}
    </div>
  );
};
export default Widget;
