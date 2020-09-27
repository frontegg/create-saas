import React from 'react';
import './SidebarHeadline.scss';
import { sidebarHeadlineType } from '../types';

const SidebarHeadline: React.FC<sidebarHeadlineType> = ({ header }) => {
  return (
    <div className='sideBarHeadLine'>
      <div>{header}</div>
    </div>
  );
};

export default SidebarHeadline;
