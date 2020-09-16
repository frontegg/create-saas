import * as React from 'react';
import './Badge.scss';

type Props = {
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    color?: string,
    outline?: boolean
    circular?: boolean
}

const Badge:React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
        small = false,
        medium = false,
        large = false,
        outline = false,
        circular = false,
        color = "primary",
        className = "",
        children 
    }) => {
    let size = 0;
    if (small) size = 1;
    if (medium) size = 2;
    if (large) size = 3;
    return <span 
            className={`badge Badge
            ${className}
            ${circular ? `circular w-h-${size}` : `px-1 py-${size}`}
            ${outline ? `text-${color} border border-${color}` :
            `badge-${color}`}`}>
                {children}
            </span>
}

export const CircularBadge:React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props) => 
{
    return <Badge {...props} circular className={`${props.className}  rounded-circle`}/>
}

export default Badge;