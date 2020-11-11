import React from 'react';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Table } from '../../../Components/Table';
import { ProgressBar } from '../../../Components/ProgressBar';
import { ITableColumnProps } from '../../../Components/Table/types';

export const columns: ITableColumnProps[] = [
  {
    accessor: 'country',
    Header: 'Country',
    sortable: true,
  },
  {
    accessor: 'activeUsers',
    Header: 'Active Users',
    sortable: true,
  },
  {
    accessor: 'teamMembers',
    Header: 'Team Members',
    Cell: (props: any) => (
      <AvatarGroup max={6}>
        {props.value.map((src: string, index: number) => (
          <Avatar className='avatar-image' alt='avatar' src={src} key={index} />
        ))}
      </AvatarGroup>
    ),
  },
  {
    accessor: 'progress',
    Header: 'Progress',
    Cell: ({ value }: any) => (
      <div style={{ width: '100%' }}>
        {' '}
        <ProgressBar value={value} />
      </div>
    ),
  },
];

function createData(country: string, activeUsers: number, teamMembers: string[], progress: number) {
  return { country, activeUsers, teamMembers, progress };
}

export const rows = [
  createData(
    'India',
    1324171354,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    100,
  ),
  createData(
    'China',
    1403500365,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    54,
  ),
  createData(
    'Italy',
    60483973,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    49,
  ),
  createData(
    'United States',
    327167434,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    92,
  ),
  createData(
    'Canada',
    37602103,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    74,
  ),
  createData(
    'Australia',
    25475400,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    29,
  ),
  createData(
    'Germany',
    83019200,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    84,
  ),
  createData(
    'Ireland',
    4857000,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    57,
  ),
  createData(
    'Mexico',
    126577691,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    19,
  ),
  createData(
    'Japan',
    126317000,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    8,
  ),
  createData(
    'France',
    67022000,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    29,
  ),
  createData(
    'United Kingdom',
    67545757,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    67,
  ),
  createData(
    'Russia',
    146793744,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    6,
  ),
  createData(
    'Nigeria',
    200962417,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    34,
  ),
  createData(
    'Brazil',
    210147125,
    [
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    ],
    63,
  ),
];

const columns2: ITableColumnProps[] = [
  {
    accessor: 'country',
    Header: 'Country',
    sortable: true,
  },
  {
    accessor: 'activeUsers',
    Header: 'Active Users',
    sortable: true,
  },
  {
    accessor: 'teamMembers',
    Header: 'Team Members',
    Cell: (props: any) => (
      <AvatarGroup max={6}>
        {props.value.map((src: string, index: number) => (
          <Avatar className='avatar-image' alt='avatar' src={src} key={index} />
        ))}
      </AvatarGroup>
    ),
  },
  {
    accessor: 'progress',
    Header: 'Progress',
    Cell: ({ value }: any) => (
      <div style={{ width: '100%' }}>
        {' '}
        <ProgressBar value={value} />
      </div>
    ),
  },
];
const TablePage: React.FC = () => {
  return (
    <div className='table-page'>
      <div className='section-title'>
        <div className='category'>TABLES</div>
        <div className='section-name'>Table Example</div>
      </div>

      <Table
        data={rows}
        totalData={rows.length}
        selection='multi'
        onRowSelected={(selected) => {
          console.log(selected);
        }}
        columns={columns2}
        rowKey='country'
        pagination='pages'
        pageSize={5}
      />
    </div>
  );
};

export default TablePage;
