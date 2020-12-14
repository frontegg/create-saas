import React, { FC } from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import './style.scss';

type Theme = 'primary' | 'secondary' | 'danger' | 'disabled' | 'default';

interface LoaderProps extends React.HTMLAttributes<HTMLElement> {
  center?: boolean;
  variant?: Theme;
  size?: number;
}

const mapper = (props: LoaderProps): CircularProgressProps => {
  const { className, center, variant, color, ...rest } = props;
  const variantColor = variant === 'danger' || variant === 'disabled' || variant === 'default' ? 'inherit' : variant;
  return {
    className: classNames(className, { 'loader-centered': center }),
    color: variantColor,
    ...rest,
  };
};

export const Loader: FC<LoaderProps & { size?: number }> = (props) => {
  return <CircularProgress {...mapper(props)} size={props.size} />;
};
