import React from 'react';
import './SidebarLinkWithSub.scss';
import classNames from 'classnames';

type SidebarLinkWithSubProps = {
  label?: string;
};

const SidebarLinkWithSub: React.FC<SidebarLinkWithSubProps> = (props: SidebarLinkWithSubProps) => {
  const { label } = props;
  const [open, setOpen] = React.useState<boolean>(false);
  const activeClass = open ? 'active-link' : '';
  return (
    <div
      className={classNames('sidebar-link-with-sub', activeClass)}
      onClick={(e: React.MouseEvent) => {
        setOpen(!open);
      }}>
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
      <svg
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={classNames('arrow', activeClass)}
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'>
        <polyline points='9 18 15 12 9 6' />
      </svg>
    </div>
  );
};

export default SidebarLinkWithSub;
