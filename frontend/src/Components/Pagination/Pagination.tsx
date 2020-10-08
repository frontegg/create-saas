import React from 'react';
import { usePagination, UsePaginationProps } from '@material-ui/lab/Pagination';
import { CircleButton } from '../Button';
import classNames from 'classnames';

interface PaginationProps extends React.HTMLAttributes<HTMLElement>, UsePaginationProps {
  first?: React.ReactElement | string;
  last?: React.ReactElement | string;
  prev?: React.ReactElement | string;
  next?: React.ReactElement | string;
  onChange?: () => void;
  count?: number;
  perScreen?: number;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { first, last, prev = 'Previous', next = 'Next', count = 1, page = 1, className, ...rest } = props;
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
        {items.map(({ type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <CircleButton
                active={selected}
                outline
                className={classNames('ml-2', 'font-bold', 'text-xs', 'w-8', 'h-8', 'shadow-none', className, {
                  active: selected,
                })}
                hoverClassName='bg-grey-200'
                activeClassName='text-white font-bold bg-blue-500'
                style={{ fontWeight: selected ? 'bold' : undefined }}
                {...item}>
                {item.page}
              </CircleButton>
            );
          } else if (type === 'first') {
            children = (
              <button className='mr-2 text-uppercase font-bold' type='button' {...item}>
                {first || type}
              </button>
            );
          } else if (type === 'last') {
            children = (
              <button className='ml-2 text-uppercase font-bold' type='button' {...item}>
                {last || type}
              </button>
            );
          } else if (type === 'next') {
            children = (
              <button className='ml-2 text-uppercase font-bold' type='button' {...item}>
                {next}
              </button>
            );
          } else if (type === 'previous') {
            children = (
              <button className='mr-2 text-uppercase font-bold' type='button' {...item}>
                {prev}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagination;
