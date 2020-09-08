import * as React from 'react';
import { usePagination, UsePaginationItem, UsePaginationProps } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import './Pagination.scss';
import { CircleButton } from '../Button';

type Props = {
    first?: JSX.Element | string,
    last?: JSX.Element | string,
    prev?: JSX.Element | string,
    next?: JSX.Element | string,
    // numberComponent?: new() => React.ComponentType<React.HTMLAttributes<HTMLElement>> | React.ElementType,
    numberComponent?: JSX.Element,
    count?: number,
    current?: number,
    perScreen?: number 
} & React.HTMLAttributes<HTMLElement> & UsePaginationProps;

const useStyles = makeStyles({
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
    },
  });

const Pagination:React.FC<Props> = ({
    first = "first",
    last = "last",
    prev = "Previous",
    next = "Next",
    count = 1,
    numberComponent = "button",
}) => {
    const classes = useStyles();
    const { items } = usePagination({
        count: count,
    });
    return (
        <div>
          <ul className={classes.ul}>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;
              const NumberComponent = numberComponent;
    
              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                children = (
                  <NumberComponent className={`${selected ? "active" : ""}`} style={{ fontWeight: selected ? 'bold' : undefined}} {...item}>
                    {page}
                  </NumberComponent>
                );
              } else if (type === "first"){
                children = (
                  <button className="mr-2" type="button" {...item}>
                    {first}
                  </button>
                );
              } else if (type === "last") {
                children = (
                    <button className="ml-2" type="button" {...item}>
                      {last}
                    </button>
                  );
              } else if (type === "next"){
                children = (
                  <button className="ml-2" type="button" {...item}>
                    {next}
                  </button>
                );
              } else if (type === "previous") {
                children = (
                    <button className="mr-2" type="button" {...item}>
                      {prev}
                    </button>
                  );
              }
    
              return <li key={index}>{children}</li>;
            })}
          </ul>
        </div>
      );
}

export default Pagination;