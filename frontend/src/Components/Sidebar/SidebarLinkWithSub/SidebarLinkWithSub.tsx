import React from 'react';
import './SidebarLinkWithSub.scss';
import classNames from 'classnames';
import { Icon } from '../../Icon';

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
      <Icon type='compass' className='icon' />
      <div className='label'>{label}</div>
      <Icon type='right-arrow' className={classNames('arrow', activeClass)} />
    </div>
  );
};

export default SidebarLinkWithSub;
