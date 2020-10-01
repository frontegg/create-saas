import React from 'react';
import './SidebarLink.scss';
import { NavLink } from 'react-router-dom';

type SidebarLinkProps = {
  path?: string;
  label?: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = (props: SidebarLinkProps) => {
  const { path = '', label } = props;
  return (
    <NavLink to={path} className='sidebar-link' activeClassName='active-link'>
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
          <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' />
        </svg>
      </div>
      <div className='label'>{label}</div>
    </NavLink>
  );
};

export default SidebarLink;
