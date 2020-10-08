import React from 'react';
import './Tab.scss';
import { NavItem, NavLink } from 'reactstrap';
import classNames from 'classnames';

interface TabItemProps extends React.HTMLAttributes<HTMLElement> {
  activeClass?: string;
  activeTab: string;
  tabId: string;
  toggle: (tab: string) => void;
}

export const TabItem: React.FC<TabItemProps> = (props) => {
  const { activeClass = '', activeTab, tabId, toggle, children, className = '' } = props;
  const isActive = activeTab === tabId;
  const NavItemContent = activeClass ? 'div' : NavLink;
  return (
    <NavItem className={classNames({ 'border-0 m-0 p-0 bg-white': activeClass })}>
      <NavItemContent
        className={classNames(className, 'cursor-pointer', { active: isActive, [activeClass]: isActive })}
        onClick={() => toggle(tabId)}>
        {children}
      </NavItemContent>
    </NavItem>
  );
};
