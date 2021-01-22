import React, { FC } from 'react';
import { Table, useSearch } from '@frontegg/react-core';
import { columns, rows } from './consts';

import './Services.scss';

export const Services: FC = () => {
  const [filterData, Search] = useSearch({ filteredBy: 'name', data: rows });

  return (
    <div>
      <div className='fe-connectivity-component'>{Search}</div>
      <Table rowKey='id' columns={columns} data={filterData} totalData={rows.length} />
    </div>
  );
};
