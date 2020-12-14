import React, { useMemo } from 'react';
import MaterialUIBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import HomeIcon from '@material-ui/icons/Home';

type LinkType = {
  href?: string;
  label?: string;
};

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  showHomeIcon?: boolean;
  homeIcon?: React.ReactNode;
  links: LinkType[];
}

const buildLink = (link: LinkType, index: number): React.ReactNode => {
  const { href, label } = link;
  if (href) {
    return (
      <Link color='inherit' href={href} key={index}>
        {label}
      </Link>
    );
  }
  return (
    <span className='font-bold' key={index}>
      {label}
    </span>
  );
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
  const { separator = '/', links, showHomeIcon, homeIcon } = props;
  const linkElements = useMemo(() => links.map((link, index: number) => buildLink(link, index)), [links]);

  return (
    <div className='relative'>
      <MaterialUIBreadcrumbs separator={separator} aria-label='breadcrumb'>
        {showHomeIcon && (homeIcon || <HomeIcon />)}
        <Link color='inherit' href='/'>
          Home
        </Link>
        {linkElements}
      </MaterialUIBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
