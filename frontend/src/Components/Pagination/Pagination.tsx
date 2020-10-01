import React from 'react';
import { usePagination, UsePaginationProps } from '@material-ui/lab/Pagination';
import './Pagination.scss';
import { CircleButton } from '../Button';

type Props = {
  first?: JSX.Element | string;
  last?: JSX.Element | string;
  prev?: JSX.Element | string;
  next?: JSX.Element | string;
  numberComponent?: React.ComponentType<any> | React.ElementType<any>;
  numberRender?: (props: React.HTMLAttributes<HTMLElement>) => JSX.Element;
  count?: number;
  perScreen?: number;
} & React.HTMLAttributes<HTMLElement> &
  UsePaginationProps;

export const Base: React.FC<Props> = ({
  first,
  last,
  prev = 'Previous',
  next = 'Next',
  count = 1,
  page = 1,
  numberComponent = 'button',
  numberRender,
  ...props
}) => {
  const { items } = usePagination({
    count,
    showFirstButton: !!first,
    showLastButton: !!last,
    siblingCount: Infinity,
    ...props,
  });
  return (
    <div className={props.className}>
      <ul className='d-inline-flex list-style-none m-0 p-0 align-items-center flex-wrap'>
        {items.map(({ type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            const NumberComponent: React.ElementType<any> = numberRender ? numberRender : numberComponent;
            children = (
              <NumberComponent
                active={selected}
                className={`${selected ? 'active' : ''}`}
                style={{ fontWeight: selected ? 'bold' : undefined }}
                {...item}>
                {item.page}
              </NumberComponent>
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

const DefaultPagination: React.FC<Props> = ({ className, children, count, page, prev, next, first, last }) => {
  return (
    <Base
      defaultPage={page}
      first={first}
      last={last}
      prev={prev}
      next={next}
      className={className}
      numberRender={(props) => (
        <CircleButton
          {...props}
          outline
          className={`ml-2 font-bold text-xs w-8 h-8 shadow-none ${props.className}`}
          hoverClassName='bg-grey-200'
          activeClassName='text-white font-bold bg-blue-500'>
          {props.children}
        </CircleButton>
      )}
      count={count}
    />
  );
};

export default DefaultPagination;
