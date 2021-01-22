import React from 'react';
import { TableColumnProps } from '@frontegg/react-core';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';

export interface IServicesRecord {
  id: number;
  name: string;
  status: 'Valid' | 'Overload' | 'Down';
  lastCall: string;
  callsAmount: string;
}

function randomStatus() {
  const random = Math.random() * Math.floor(3);
  return random > 2 ? 'Valid' : random > 1 ? 'Overload' : 'Down';
}

export const columns: TableColumnProps<IServicesRecord>[] = [
  {
    accessor: 'id',
    Header: 'ID',
    sortable: true,
  },
  {
    accessor: 'name',
    Header: 'Name',
    sortable: true,
  },
  {
    accessor: 'status',
    Header: 'Status',
    sortable: true,
    Cell: ({ value }) => <span className={`badge badge-soft-${value.toLowerCase()}`}>{value}</span>,
  },
  {
    accessor: 'lastCall',
    Header: 'Last Call',
    sortable: true,
  },
  {
    accessor: 'callsAmount',
    Header: 'Amount of calls today',
    sortable: true,
  },
  {
    accessor: 'clickInsights',
    Header: 'Click to see Anomalies for the microservice',
    sortable: false,
    Cell: ({ row }) => <Link to={`${routes.anomalies.path}#${row.original.name}`}>Link</Link>,
  },
  // {
  //   accessor: 'clickScan',
  //   Header: 'Click to scan Anomalies from the microservice',
  //   sortable: false,
  // },
];

export const rows: IServicesRecord[] = [
  {
    id: 1,
    name: 'Audits',
    status: randomStatus(),
    lastCall: 'yesterday',
    callsAmount: '44k',
  },
  {
    id: 2,
    name: 'Users',
    status: randomStatus(),
    lastCall: 'now',
    callsAmount: '55k',
  },
  {
    id: 3,
    name: 'Notifications',
    status: randomStatus(),
    lastCall: '10th September',
    callsAmount: '41k',
  },
  {
    id: 4,
    name: 'Other',
    status: randomStatus(),
    lastCall: 'today',
    callsAmount: '17k',
  },
];
