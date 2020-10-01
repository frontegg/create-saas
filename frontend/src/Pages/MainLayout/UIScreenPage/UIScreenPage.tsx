import React from 'react';
import './UIScreenPage.scss';

type Props = {
  category?: string;
};
const UIScreenPage: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({ category = 'UI Elements', children }) => {
  return (
    <div className='uiScreenPage'>
      <div className='text-xs uppercase font-light text-gray-500'>{category}</div>
      {children}
    </div>
  );
};

export default UIScreenPage;
