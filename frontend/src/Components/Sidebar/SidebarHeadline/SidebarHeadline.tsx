import React from 'react';
import './SidebarHeadline.scss';

type SidebarHeadlineProps = {
  header?: string;
};

const SidebarHeadline: React.FC<SidebarHeadlineProps> = (props: SidebarHeadlineProps) => {
  const { header } = props;
  return (
    <div className='sidebar-headline'>
      <div>{header}</div>
    </div>
  );
};

export default SidebarHeadline;
