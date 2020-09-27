import React from 'react';
import DataTableComponent from '../../../Components/DataTable';
import { IData, IColumn } from '../../../Components/DataTable/types';

const columns: IColumn[] = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
  },
  {
    id: 'code',
    label: 'ISO\u00a0Code',
    minWidth: 100,
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

const Datatable: React.FC = () => {
  return (
    <div className='sampleformpage'>
      <div className='section-title'>
        <div className='category'>TABLES</div>
        <div className='section-name'>Datatables</div>
      </div>
      <DataTableComponent columns={columns} rows={rows} />
    </div>
  );
};

export default Datatable;
