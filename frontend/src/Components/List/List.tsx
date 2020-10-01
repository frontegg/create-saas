import React from 'react';
import { CircularBadge } from '../Badge';
import classNames from 'classnames';

interface ListProps extends React.HTMLAttributes<HTMLElement> {
  right?: number | string;
  left?: React.ReactElement | string;
  leftClassName?: string;
  rightClassName?: string;
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const { right, children, left, className = '', leftClassName = '', rightClassName = '' } = props;
  return (
    <div className={classNames('relative', 'd-flex', 'flex-row', 'p-2', 'align-items-center', className)}>
      <div className='flex-shrink-0'>
        {typeof left === 'string' ? (
          <CircularBadge className={classNames('mr-3', 'font-bold', 'text-lg', leftClassName)} size='large'>
            {left}
          </CircularBadge>
        ) : (
          left
        )}
      </div>
      <div className='flex-grow-1 align-self-start'>{children}</div>
      <div className='flex-shrink-0 d-flex'>
        {typeof right === 'number' ? (
          <CircularBadge className={classNames('ml-3', 'align-self-center', rightClassName)} size='small'>
            {right}
          </CircularBadge>
        ) : (
          <span className={classNames('align-self-start', 'text-xs', 'text-grey-500', rightClassName)}>{right}</span>
        )}
      </div>
    </div>
  );
};

export { List };
