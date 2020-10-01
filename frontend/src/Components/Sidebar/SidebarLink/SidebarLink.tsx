import React from 'react';
import './SidebarLink.scss';
import { NavLink } from 'react-router-dom';
import { sidebarLinkType } from '../types';

const SidebarLink: React.FC<sidebarLinkType> = (link) => {
  const { path, label } = link;
  return (
    <NavLink to={path} className='sidebarLink' activeClassName='activeLink'>
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
    </NavLink>
  );
};

export default SidebarLink;
