import React, { FC, useMemo } from 'react';
import { Table, useSearch } from '@frontegg/react-core';
import { useLocation } from 'react-router-dom';
import { columns, IAnomaliesRecord, rows } from './consts';

const filterFunction = (allData: IAnomaliesRecord[], regexp: RegExp, isEmpty: boolean) =>
  isEmpty
    ? allData
    : allData.filter(
        ({ type, message, service, api }) =>
          regexp.test(type) || regexp.test(message) || regexp.test(service) || regexp.test(api),
      );

export const Anomalies: FC = () => {
  const { hash = '' } = useLocation();

  const data = useMemo(() => {
    const cleanHash = hash.replace('#', '');
    if (cleanHash.trim()) {
      const reg = new RegExp(`${cleanHash.toLowerCase()}`, 'i');
      return rows.filter(({ service }) => reg.test(service));
    }
    return rows;
  }, [hash]);

  const [filterData, Search] = useSearch({ filteredBy: 'id', data, filterFunction, placeholder: 'Search ...' });

  return (
    <div>
      <div className='fe-connectivity-component'>{Search}</div>
      <Table rowKey='id' columns={columns} data={filterData} totalData={rows.length} />
    </div>
  );
};
