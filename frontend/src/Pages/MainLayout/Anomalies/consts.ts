import { TableColumnProps } from '@frontegg/react-core';

export interface IAnomaliesRecord {
  id: number;
  api: string;
  time: string;
  type: string;
  message: string;
  service: string;
}

export const columns: TableColumnProps<IAnomaliesRecord>[] = [
  {
    accessor: 'time',
    Header: 'Time',
    sortable: true,
  },
  {
    accessor: 'type',
    Header: 'Type',
    sortable: true,
  },
  {
    accessor: 'message',
    Header: 'Message',
    sortable: true,
  },
  {
    accessor: 'service',
    Header: 'Service',
    sortable: true,
  },
  {
    accessor: 'api',
    Header: 'API',
    sortable: true,
  },
];
const now = '11:40 AM';
export const rows: IAnomaliesRecord[] = [
  {
    id: 1,
    time: now,
    type: 'error',
    message: 'Insight message',
    service: 'Audits',
    api: 'GET /audits/',
  },
  {
    id: 2,
    time: now,
    type: 'security',
    message: 'next message',
    service: 'Notifications',
    api: 'PUT /notifications/',
  },
  {
    id: 3,
    time: now,
    type: 'anomaly',
    message: 'message',
    service: 'Users',
    api: 'GET /users/',
  },
  {
    id: 4,
    time: now,
    type: 'general',
    message: 'test',
    service: 'Subscriptions',
    api: 'POST /subscriptions/',
  },
];
