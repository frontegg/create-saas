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
    numberComponent?: React.ComponentType<any> | React.ElementType<any>,
    numberRender?: (props: React.HTMLAttributes<HTMLElement>) => JSX.Element,
    count?: number,
    current?: number,
    perScreen?: number 
} & React.HTMLAttributes<HTMLElement> & UsePaginationProps;


const Pagination:React.FC<Props> = ({
    first,
    last,
    prev = "Previous",
    next = "Next",
    count = 1,
    numberComponent = "button",
    numberRender
}) => {
    const { items } = usePagination({
        count: count,
        showFirstButton: !!first,
        showLastButton: !!last
    });
    return (
        <div>
          <ul className="d-inline-flex list-style-none m-0 p-0 align-items-center">
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;
            
              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                let NumberComponent: React.ElementType<any> = numberComponent;
                if (numberRender)
                {
                    NumberComponent = numberRender;
                }
                else NumberComponent = numberComponent;
                children = (
                    <NumberComponent className={`${selected ? "active" : ""}`} style={{ fontWeight: selected ? 'bold' : undefined}} {...item}>
                        {page}
                    </NumberComponent>
                );
              } else if (type === "first"){
                children = (
                  <button className="mr-2" type="button" {...item}>
                    {first || type}
                  </button>
                );
              } else if (type === "last") {
                children = (
                    <button className="ml-2" type="button" {...item}>
                      {last || type}
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