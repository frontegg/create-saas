import React from 'react';
import './Breadcrumbs.scss';
import { Breadcrumbs as MaterialUIBreadcrumbs, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

type LinkType = {
  href?: string;
  label?: string;
};

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  separator?: JSX.Element | string;
  showHome?: boolean;
  homeIcon?: JSX.Element | string;
  links: LinkType[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
  const { separator = '/', links, showHome, homeIcon } = props;
  return (
    <div className='breadcrumbs'>
      <MaterialUIBreadcrumbs separator={separator} aria-label='breadcrumb'>
        {showHome && (homeIcon || <HomeIcon />)}
        <Link color='inherit' href='/'>
          Home
        </Link>
        {links.map(({ href, label }, index: number) => {
          if (href)
            return (
              <Link color='inherit' href={href} key={index}>
                {label}
              </Link>
            );
          return (
            <span className='font-bold' key={index}>
              {label}
            </span>
          );
        })}
      </MaterialUIBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
