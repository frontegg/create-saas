import React from 'react';
import './SidebarLinkWithSub.scss';
import { sidebarLinkWithSubType } from '../types';

const SidebarLinkWithSub: React.FC<sidebarLinkWithSubType> = ({ icon, label }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return (
    <div
      className={`sidebarLinkWithSub ${isOpen ? 'activeLink' : ''}`}
      onClick={(e: React.MouseEvent) => {
        setOpen(!isOpen);
      }}>
      <div className='icon'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='12' cy='12' r='10' />
          <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'></polygon>
        </svg>
      </div>
      <div className='label'>{label}</div>
      <svg
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`arrow ${isOpen ? 'activeLink' : ''}`}
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'>
        <polyline points='9 18 15 12 9 6' />
      </svg>
    </div>
  );
};

export default SidebarLinkWithSub;
