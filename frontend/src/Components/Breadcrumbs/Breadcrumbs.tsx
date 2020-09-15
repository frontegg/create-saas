import * as React from 'react';
import './Breadcrumbs.scss';
import { Breadcrumbs as B, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

type LinkType = {
    href?: string,
    label?: string,
}

type Props = {
    separator?: JSX.Element | string
    home?: boolean
    links: LinkType[]
} & React.HTMLAttributes<HTMLElement>

const Breadcrumbs:React.FC<Props> = ({separator="/", links, home}) => {
    return <div className="Breadcrumbs">
        <B separator={separator} aria-label="breadcrumb">
        {home && <HomeIcon/>}
        <Link color="inherit" href="/">
          Home
        </Link>
        {links.map(({href, label}) => {
        if(href)
        return <Link color="inherit" href={href} >
            {label}
          </Link>
        else return <span className="font-bold">{label}</span>
        })}
      </B>
    </div>
}

export default Breadcrumbs;