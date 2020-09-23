import React from 'react';
import RegularTable from '../../../Components/RegularTable';
import SidebarCategory from '../../../Components/SidebarCategory';
import { IData, IColumn } from '../../../Components/RegularTable/types';
import { IItemsList } from '../../../Components/SidebarCategory/types';
import Paper from '@material-ui/core/Paper';

export const columns: IColumn[] = [
  {
    id: 'country',
    label: 'COUNTRY',
    minWidth: 170,
  },
  {
    id: 'activeUsers',
    label: 'ACTIVE USERS',
    minWidth: 100,
  },
  {
    id: 'teamMembers',
    label: 'TEAM MEMBERS',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'progress',
    label: 'PROGRESS',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

function createData(country: string, activeUsers: number, teamMembers: string[], progress: number): IData {
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

const itemsList: IItemsList = {
  buttons: [
    {
      label: 'Inbox',
      badge: 3,
    },
    {
      label: 'Sent',
      badge: 0,
    },
    {
      label: 'Important',
      badge: 5,
    },
    {
      label: 'Drafts',
      badge: 0,
    },
    {
      label: 'Tags',
      badge: 1,
    },
    {
      label: 'Trash',
      badge: 0,
    },
  ],
  categories: ['Social', 'Notifications', 'Promotions'],
  labels: ['Documents', 'Work', 'Clients', 'Projects'],
};

const SidebarCategoryTable: React.FC = () => {
  return (
    <div className='sampleformpage'>
      <div className='section-title'>
        <div className='category'>TABLES</div>
        <div className='section-name'>Sidebar category table</div>
      </div>
      <Paper elevation={0} className='main-row'>
        <SidebarCategory itemsList={itemsList} />
        <RegularTable columns={columns} rows={rows} />
      </Paper>
    </div>
  );
};

export default SidebarCategoryTable;
