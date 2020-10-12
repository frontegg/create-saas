import React from 'react';
import { usePagination, UsePaginationProps, UsePaginationItem } from '@material-ui/lab/Pagination';
import { CircleButton } from '../Button';
import classNames from 'classnames';

interface PaginationProps extends React.HTMLAttributes<HTMLElement>, UsePaginationProps {
  first?: React.ReactNode;
  last?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  onChange?: () => void;
  count?: number;
  perScreen?: number;
}

const generateEdgeComponent = (
  item: UsePaginationItem,
  first: React.ReactNode,
  last: React.ReactNode,
  prev: React.ReactNode,
  next: React.ReactNode,
): React.ReactNode => {
  const { type, ...rest } = item;
  if (['start-ellipsis', 'end-ellipsis'].includes(type)) {
    return '…';
  }
  let node: React.ReactNode = '';
  let className: string = '';
  if (type === 'first') {
    node = first || type;
    className = 'mr-2';
  } else if (type === 'last') {
    node = last || type;
    className = 'ml-2';
  } else if (type === 'next') {
    node = next;
    className = 'ml-2';
  } else if (type === 'previous') {
    node = prev;
    className = 'mr-2';
  }

  return (
    <button className={classNames('text-uppercase font-bold', className)} type='button' {...rest}>
      {node}
    </button>
  );
};

const generatePageComponent = (item: UsePaginationItem): React.ReactNode => {
  const { selected, page, onClick, disabled } = item;
  return (
    <CircleButton
      active={selected}
      outline
      className={classNames('ml-2', 'font-bold', 'text-xs', 'w-8', 'h-8', 'shadow-none', {
        active: selected,
      })}
      hoverClassName='bg-grey-200'
      activeClassName='text-white font-bold bg-blue-500'
      style={{ fontWeight: selected ? 'bold' : undefined }}
      onClick={onClick}
      disabled={disabled}>
      {page}
    </CircleButton>
  );
};

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { first, last, className, prev = 'Previous', next = 'Next', count = 1, page = 1, ...rest } = props;
  const { items } = usePagination({
    count,
    showFirstButton: !!first,
    showLastButton: !!last,
    siblingCount: Infinity,
    defaultPage: page,
    ...rest,
  });
  return (
    <div className={className}>
      <ul className='d-inline-flex list-style-none m-0 p-0 align-items-center flex-wrap'>
        {items.map((item, index) => {
          const { type } = item;
          if (type === 'page') {
            return <li key={index}>{generatePageComponent(item)}</li>;
          }
          return <li key={index}>{generateEdgeComponent(item, first, last, prev, next)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagination;
