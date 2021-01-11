import React from 'react';
import { Input } from 'reactstrap';
import './NavBar.scss';
import Image from '../Image';
import { Notifications } from '@frontegg/react';
import { AccountDropdown } from '@frontegg/react-auth';
import classNames from 'classnames';
import { Icon } from '../Icon';

type NavBarProps = {
  className?: string;
  handleThemeChange: (value: 'light' | 'dark' | 'navbar' | 'sidebar') => void;
  palletType: string;
  settings: { label: string; state: any }[];
  handleChangeNavbar: (value: string, param: string, theme: string) => void;
};

const NavBar = (props: NavBarProps) => {
  const { className } = props;

  return (
    <div className={classNames('nav-bar', className)}>
      <div className='logo d-none d-md-flex'>
        <a className='d-flex flex-row align-items-center justify-content-start' href='/'>
          <Image src='/images/logo.png' />
        </a>
      </div>
      <Icon type='search' className='search-icon' />
      <Input className='search-field' type='text' placeholder='Search...' />

      <div className="account-wrapper" style={{display: 'flex'}}>
        <Notifications />
        <AccountDropdown />
      </div>
    </div>
  );
};

export default NavBar;
