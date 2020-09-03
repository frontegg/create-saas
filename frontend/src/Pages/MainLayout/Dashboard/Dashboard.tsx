import * as React from 'react';
import Widget from '../Widget';
import DataTableComponent from '../../../Components/TableComponents';
import { IData, IColumn } from '../../../Components/TableComponents/DataTableComponent/types'

const columns: IColumn[] = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 170
  },
  {
    id: 'code',
    label: 'ISO\u00a0Code',
    minWidth: 100
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

function createData(name: string, code: string, population: number, size: number): IData {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const widgets = [
    {
        label: "USERS",
        value: "588",
        icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current text-grey-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
        className: "flex-row justify-content-between"
    },
    {
        label: "SESSIONS",
        value: "435",
        icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current text-grey-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
        className: "flex-row justify-content-between"
    },
    {
        label: "BOUNCE RATE",
        value: "40.5%",
        icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current text-grey-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
        className: "flex-row justify-content-between"
    },
    {
        label: "SESSION DURATION",
        value: "1m 24s",
        icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current text-grey-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        className: "flex-row justify-content-between"
    },
    {
        label: "something else",
        value: "some value",
        className: "flex-row justify-content-between"
    },
]

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard d-flex flex-row flex-wrap justify-content-start">
            {widgets.map( (item, index) => {
                return <Widget key={index} {...item}/>
            })}
            <Widget>
                <DataTableComponent columns={columns} rows={rows}/>
            </Widget>
        </div>
        
    )
}
export default Dashboard