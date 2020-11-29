export type IconType =
  | 'users'
  | 'pulse'
  | 'clock'
  | 'search'
  | 'bounce'
  | 'cog'
  | 'user'
  | 'home'
  | 'instagram'
  | 'maps'
  | 'hamburger'
  | 'comment'
  | 'settings'
  | 'twitter'
  | 'linkedin'
  | 'facebook'
  | 'box'
  | 'right-arrow'
  | 'left-arrow'
  | 'right-arrow-2'
  | 'left-arrow-2'
  | 'double-left-arrow'
  | 'double-right-arrow'
  | 'compass';

export interface IconProps {
  type: IconType;
  onClick?: () => void;
  className?: string;
  style?: {};
}

export type SVGsType<T> = { [key in IconType]: T };
