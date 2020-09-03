import * as React from 'react';
import { Input } from 'reactstrap';
import './NavBar.scss';
import ProfileImage from '../ProfileImage';

const NavBar: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => {
    return (
        <div className={`NavBar ${className}`}>
            <div className="logo d-none d-md-flex">
                    <a className="d-flex flex-row align-items-center justify-content-start" href="/">
                        <img src="/images/logo.png" alt=""/>
                        <span>Frontegg</span>
                    </a>
            </div>
            <label htmlFor="collapsing" className="ml-4">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"  height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </label>
            <svg className="search-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <Input className="search-field" type="text" placeholder="Search..."/>
            <ProfileImage image="/images/profile.jpeg"/>
        </div>
    )
}

export default NavBar