import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import SidebarHeadline from './SidebarHeadline';
import SidebarLink from './SidebarLink';
import Image from '../Image';
import { routes } from '../../routes';
import { Icon } from '../Icon';
import './Sidebar.scss';

const Menu = (
  <ul>
    {[
      'core',
      'dashboard',
      'services',
      'anomalies',
      'administration',
      'profile',
      'team',
      'sso',
      'api',
      'webhooks',
      'events',
      'audits',
    ].map((key, idx) => {
      if (!routes[key]) return null;
      const { header, path, ...rest } = routes[key];
      if (header) {
        return (
          <li className='li-headline' key={idx}>
            <SidebarHeadline header={header} />
          </li>
        );
      }
      if (path) {
        return (
          <li className='li' key={idx}>
            <SidebarLink path={path} {...rest} />
          </li>
        );
      }
      return null;
    })}
  </ul>
);

const Sidebar: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <div className={classNames('sidebar', className)}>
      <div className='logo'>
        <a className='d-flex flex-row align-items-center justify-content-start space-x-2' href='/'>
          <Image src='/images/logo.svg' />
        </a>
      </div>
      <div className='links-container'>{Menu}</div>
      <label htmlFor='collapsing' className='ml-4 mr-4 text-right cursor-pointer'>
        <Icon type='hamburger' />
      </label>
    </div>
  );
};

export default Sidebar;
