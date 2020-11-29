import React from 'react';
import './SidebarLink.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../Icon';

type SidebarLinkProps = {
  path?: string;
  label?: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = (props: SidebarLinkProps) => {
  const { path = '', label } = props;
  return (
    <NavLink to={path} className='sidebar-link' activeClassName='active-link'>
      <Icon type='compass' className='icon' />
      <div className='label'>{label}</div>
    </NavLink>
  );
};

export default SidebarLink;
