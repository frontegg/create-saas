import React, { FC } from 'react';
import { ReactComponent as Compass } from './svg/compass.svg';
import { ReactComponent as Users } from './svg/users.svg';
import { ReactComponent as Pulse } from './svg/pulse.svg';
import { ReactComponent as Clock } from './svg/clock.svg';
import { ReactComponent as Bounce } from './svg/bounce.svg';
import { ReactComponent as Search } from './svg/search.svg';
import { ReactComponent as RightArrow } from './svg/right-arrow.svg';
import { ReactComponent as RightArrow2 } from './svg/right-arrow-2.svg';
import { ReactComponent as DoubleRightArrow } from './svg/double-right-arrow.svg';
import { ReactComponent as LeftArrow } from './svg/left-arrow.svg';
import { ReactComponent as LeftArrow2 } from './svg/left-arrow-2.svg';
import { ReactComponent as DoubleLeftArrow } from './svg/double-left-arrow.svg';
import { ReactComponent as Cog } from './svg/cog.svg';
import { ReactComponent as Home } from './svg/home.svg';
import { ReactComponent as Hamburger } from './svg/hamburger.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as Settings } from './svg/settings.svg';
import { ReactComponent as Twitter } from './svg/twitter.svg';
import { ReactComponent as User } from './svg/user.svg';
import { ReactComponent as Linkedin } from './svg/linkedin.svg';
import { ReactComponent as Comment } from './svg/comment.svg';
import { ReactComponent as Instagram } from './svg/instagram.svg';
import { ReactComponent as Maps } from './svg/maps.svg';
import { ReactComponent as Box } from './svg/box.svg';

import { IconProps, SVGsType } from './types';

export const SVGs: SVGsType<JSX.IntrinsicElements | any> = {
  compass: Compass,
  pulse: Pulse,
  clock: Clock,
  search: Search,
  bounce: Bounce,
  users: Users,
  cog: Cog,
  'right-arrow': RightArrow,
  'double-right-arrow': DoubleRightArrow,
  'right-arrow-2': RightArrow2,
  'left-arrow': LeftArrow,
  'double-left-arrow': DoubleLeftArrow,
  'left-arrow-2': LeftArrow2,
  home: Home,
  hamburger: Hamburger,
  facebook: Facebook,
  settings: Settings,
  twitter: Twitter,
  user: User,
  linkedin: Linkedin,
  comment: Comment,
  instagram: Instagram,
  maps: Maps,
  box: Box,
};

export const Icon: FC<IconProps> = ({ type, ...props }) => React.createElement(SVGs[type], props);
