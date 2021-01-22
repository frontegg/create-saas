import React from 'react';
import './SidebarHeadline.scss';

type SidebarHeadlineProps = {
  header?: string;
};

const SidebarHeadline: React.FC<SidebarHeadlineProps> = ({ header }) => {
  return (
    <div className='sidebar-headline'>
      <div>{header}</div>
    </div>
  );
};

export default SidebarHeadline;
