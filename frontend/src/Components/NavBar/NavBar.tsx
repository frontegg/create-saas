import React from 'react';
import { Input } from 'reactstrap';
import './NavBar.scss';
import ProfileImage from '../ProfileImage';
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';
import SettingsSidebar from '../SettingsSidebar';
import { Notifications } from '@frontegg/react';
import { useAuth } from '@frontegg/react-auth';
import classNames from 'classnames';

type NavBarProps = {
  className?: string;
  handleThemeChange: (value: 'light' | 'dark' | 'navbar' | 'sidebar') => void;
  palletType: string;
  settings: { label: string; state: any }[];
  handleChangeNavbar: (value: string, param: string, theme: string) => void;
};

const NavBar = (props: NavBarProps) => {
  const { className, handleChangeNavbar, handleThemeChange, palletType, settings } = props;
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className={classNames('nav-bar', className)}>
      <div className='logo d-none d-md-flex'>
        <a className='d-flex flex-row align-items-center justify-content-start' href='/'>
          <img src='/images/logo.png' alt='' />
          <span>Frontegg</span>
        </a>
      </div>
      <label htmlFor='collapsing' className='ml-4'>
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
      <svg
        className='search-icon'
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        height='1.2em'
        width='1.5em'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='11' cy='11' r='8' />
        <line x1='21' y1='21' x2='16.65' y2='16.65' />
      </svg>
      <Input className='search-field' type='text' placeholder='Search...' />
      <ProfileImage src='/images/profile.jpeg' />
      {isAuthenticated && (
        <div className='frontegg-notifications'>
          <Notifications />
        </div>
      )}
      <IconButton color='primary' onClick={() => setOpen(!open)}>
        <SettingsIcon fontSize='inherit' />
      </IconButton>
      <SettingsSidebar
        open={open}
        toggle={() => setOpen(!open)}
        handleThemeChange={handleThemeChange}
        palletType={palletType}
        settings={settings}
        handleChangeNavbar={handleChangeNavbar}
      />
    </div>
  );
};

export default NavBar;
