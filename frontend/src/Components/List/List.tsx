import React from 'react';
import './List.scss';
import { CircularBadge } from '../Badge';
type Props = {
  right?: number | string;
  left?: JSX.Element | string;
  leftClassName?: string;
  rightClassName?: string;
} & React.HTMLAttributes<HTMLElement>;

const Base: React.FC<Props> = ({
  right,
  left = '',
  children,
  className = '',
  leftClassName = '',
  rightClassName = '',
}) => {
  return (
    <div className={`list d-flex flex-row p-2 align-items-center ${className}`}>
      <div className='flex-shrink-0'>
        {typeof left === 'string' ? (
          <CircularBadge className={`mr-3 font-bold text-lg ${leftClassName}`} size='large'>
            {left}
          </CircularBadge>
        ) : (
          left
        )}
      </div>
      <div className='flex-grow-1 align-self-start'>{children}</div>
      <div className='flex-shrink-0 d-flex'>
        {typeof right === 'number' ? (
          <CircularBadge className={`ml-3 align-self-center ${rightClassName}`} size='small'>
            {right}
          </CircularBadge>
        ) : (
          <span className={`align-self-start text-xs text-grey-500 ${rightClassName}`}>{right}</span>
        )}
      </div>
    </div>
  );
};
const List: React.FC<Props> = (props) => {
  return <Base {...props}>{props.children}</Base>;
};

export default List;
