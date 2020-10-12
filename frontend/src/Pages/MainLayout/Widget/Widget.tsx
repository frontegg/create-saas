import React from 'react';
import classNames from 'classnames';
import './Widget.scss';

interface WidgetProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  value?: string;
  icon?: React.ReactElement;
  col?: boolean;
}

const Widget: React.FC<WidgetProps> = (props) => {
  const { col, label = '', value = '', icon, className = '', style = {}, children } = props;
  return (
    <div className={classNames('widget', 'd-flex', 'mr-2', 'mb-4', className)} style={style}>
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
