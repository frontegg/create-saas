import React from 'react';
import classNames from 'classnames';
import './Badge.scss';

const SIZE_MAP = {
  small: 1,
  medium: 2,
  large: 3,
};

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  size: 'small' | 'medium' | 'large';
  color?: string;
  outline?: boolean;
  circular?: boolean;
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { size, outline = false, circular = false, color = 'primary', className = '', children } = props;

  const sizeNumber = SIZE_MAP[size];
  const outlineClasses = outline ? `text-${color} border border-${color}` : `badge-${color}`;
  const circularClasses = circular ? `circular size-${size}` : `px-1 py-${sizeNumber}`;
  const klassName = classNames('badge', className, outlineClasses, circularClasses);
  return <span className={klassName}>{children}</span>;
};

const CircularBadge: React.FC<BadgeProps> = (props: BadgeProps) => {
  return <Badge {...props} circular className={`${props.className} rounded-circle`} />;
};

export { Badge, CircularBadge };
