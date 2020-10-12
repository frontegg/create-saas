import React from 'react';

interface UIScreenPageProps extends React.HTMLAttributes<HTMLElement> {
  category?: string;
}

const UIScreenPage: React.FC<UIScreenPageProps> = (props) => {
  const { category = 'UI Elements', children } = props;
  return (
    <div className='ui-screen-page'>
      <div className='text-xs uppercase font-light text-gray-500'>{category}</div>
      {children}
    </div>
  );
};

export default UIScreenPage;
