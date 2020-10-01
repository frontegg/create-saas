import React from 'react';
import './Dropdowns.scss';
import Dropdown, { Dropup, Dropleft, Dropright } from '../../../../../Components/Dropdown';
import Widget from '../../../Widget';

const DropdownMenu: React.FC = () => {
  return (
    <div className='d-flex flex-wrap text-center w-64'>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
          <polyline points='9 22 9 12 15 12 15 22' />
        </svg>
        <span className='text-xs'>Home</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
          <circle cx='12' cy='7' r='4' />
        </svg>
        <span className='text-xs'>Account</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
        </svg>
        <span className='text-xs'>Comments</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='12' cy='12' r='3' />
          <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' />
        </svg>
        <span className='text-xs'>Settings</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
          <circle cx='12' cy='10' r='3' />
        </svg>
        <span className='text-xs'>Maps</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
        </svg>
        <span className='text-xs'>Twitter</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
        </svg>
        <span className='text-xs'>Facebook</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
          <line x1='17.5' y1='6.5' x2='17.5' y2='6.5' />
        </svg>
        <span className='text-xs'>Instagram</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-current text-xl'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
          <rect x='2' y='9' width='4' height='12' />
          <circle cx='4' cy='4' r='2' />
        </svg>
        <span className='text-xs'>LinkedIn</span>
      </div>
    </div>
  );
};
const Dropdowns: React.FC = () => {
  return (
    <div className='Dropdowns'>
      <div className='text-xl font-bold mb-3'>Dropdowns</div>
      <Widget className='w-100 flex-column'>
        <div className='text-sm font-light text-gray-500'>Dropdowns</div>
        <div className='text-sm font-bold mb-3'>
          <span className='capitalize'>bottom position</span>
        </div>
        <div className='d-flex flex-row justify-content-evenly w-100'>
          <Dropdown color='primary' className='w-25' label='Left dropdown'>
            <DropdownMenu />
          </Dropdown>
          <Dropdown color='primary' className='w-25' right label='Right dropdown'>
            <DropdownMenu />
          </Dropdown>
        </div>
      </Widget>
      <Widget className='w-100 flex-column'>
        <div className='text-sm font-light text-gray-500'>Dropdowns</div>
        <div className='text-sm font-bold mb-3'>
          <span className='capitalize'>left position</span>
        </div>
        <div className='d-flex flex-row justify-content-evenly w-100'>
          <Dropleft color='primary' className='w-25' label='Start dropleft'>
            <DropdownMenu />
          </Dropleft>
          <Dropleft color='primary' className='w-25' label='End dropleft' right>
            <DropdownMenu />
          </Dropleft>
        </div>
      </Widget>
      <Widget className='w-100 flex-column'>
        <div className='text-sm font-light text-gray-500'>Dropdowns</div>
        <div className='text-sm font-bold mb-3'>
          <span className='capitalize'>right position</span>
        </div>
        <div className='d-flex flex-row justify-content-evenly w-100'>
          <Dropright color='primary' className='w-25' label='Start dropright'>
            <DropdownMenu />
          </Dropright>
          <Dropright color='primary' className='w-25' label='End dropright' right>
            <DropdownMenu />
          </Dropright>
        </div>
      </Widget>
      <Widget className='w-100 flex-column'>
        <div className='text-sm font-light text-gray-500'>Dropdowns</div>
        <div className='text-sm font-bold mb-3'>
          <span className='capitalize'>top position</span>
        </div>
        <div className='d-flex flex-row justify-content-evenly w-100'>
          <Dropup color='primary' className='w-25' label='Left dropup'>
            <DropdownMenu />
          </Dropup>
          <Dropup color='primary' className='w-25' label='Right dropup' right>
            <DropdownMenu />
          </Dropup>
        </div>
      </Widget>
    </div>
  );
};

export default Dropdowns;
