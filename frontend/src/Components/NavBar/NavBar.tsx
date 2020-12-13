import React from 'react';
import { Input } from 'reactstrap';
import './NavBar.scss';
import ProfileImage from '../ProfileImage';
import Image from '../Image';
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';
import SettingsSidebar from '../SettingsSidebar';
import { Notifications } from '@frontegg/react';
import { useAuth } from '@frontegg/react-auth';
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
  const { className, handleChangeNavbar, handleThemeChange, palletType, settings } = props;
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className={classNames('nav-bar', className)}>
      <div className='logo d-none d-md-flex'>
        <a className='d-flex flex-row align-items-center justify-content-start' href='/'>
          <Image src='/images/logo.png' />
        </a>
      </div>
      <Icon type='search' className='search-icon' />
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
