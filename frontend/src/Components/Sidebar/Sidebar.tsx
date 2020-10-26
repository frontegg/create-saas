import React from 'react';
import SidebarHeadline from './SidebarHeadline';
import SidebarLink from './SidebarLink';
import Image from '../Image';
import SidebarLinkWithSub from './SidebarLinkWithSub';
import { links, LinkType } from './links';
import classNames from 'classnames';
import './Sidebar.scss';

const Sidebar: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const { className } = props;
  const isHeadline = (link: LinkType) => {
    return link.header !== undefined;
  };

  const isSidebarLink = (link: LinkType) => {
    return link.path !== undefined;
  };

  const isSidebarLinkWithSub = (link: LinkType) => {
    return link.sublinks !== undefined;
  };

  const renderSidebarLinks = (sidebarLinkItem: LinkType[], parentPath: string = '') => {
    return (
      <ul>
        {sidebarLinkItem.map((link: LinkType, index: number) => {
          if (isHeadline(link)) {
            const { header } = link;
            return (
              <li className='li-headline' key={index}>
                <SidebarHeadline key={index} header={header} />
              </li>
            );
          }
          if (isSidebarLinkWithSub(link)) {
            const { sublinks, path, label } = link;
            return (
              <li className='submenu' key={index}>
                <SidebarLinkWithSub key={index} label={label} />
                {sublinks && renderSidebarLinks(sublinks, parentPath + path)}
              </li>
            );
          }
          if (isSidebarLink(link)) {
            const { path, ...rest } = link;
            return (
              <li className='li' key={index}>
                <SidebarLink key={index} path={parentPath + path} {...rest} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    );
  };

  return (
    <div className={classNames('sidebar', className)}>
      <div className='logo'>
        <a className='d-flex flex-row align-items-center justify-content-start space-x-2' href='/'>
          <Image src='/images/logo.png' />
          <span>Frontegg</span>
        </a>
      </div>
      <div className='links-container'>{renderSidebarLinks(links)}</div>
      <label htmlFor='collapsing' className='ml-4 mr-4 text-right cursor-pointer'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          height='20'
          width='20'
          xmlns='http://www.w3.org/2000/svg'>
          <line x1='3' y1='12' x2='21' y2='12' />
          <line x1='3' y1='6' x2='21' y2='6' />
          <line x1='3' y1='18' x2='21' y2='18' />
        </svg>
      </label>
    </div>
  );
};

export default Sidebar;
