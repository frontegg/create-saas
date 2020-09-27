import React from 'react';
import './Pagination.scss';
import Pagination from '../../../../../Components/Pagination';
import Widget from '../../../Widget';

const Paginations: React.FC = () => {
  return (
    <div className='Paginations'>
      <div className='text-xl font-bold mb-3'>Paginations</div>
      <Widget col className='flex-wrap'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Pagination</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;Pagination /&gt;</code> component for pagination with numbers and text labels
            </span>
          </div>
        </div>
        <Pagination page={5} count={10} />
      </Widget>
      <Widget className='flex-wrap' col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Custom icons</div>
          <div className='text-sm font-bold'>
            <span>
              Use any component or text for the <code>prev</code> and <code>next</code> props
            </span>
          </div>
        </div>
        <Pagination
          className='mb-3'
          page={5}
          prev={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='15 18 9 12 15 6' />
            </svg>
          }
          next={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='9 18 15 12 9 6' />
            </svg>
          }
          count={10}
        />
        <Pagination
          className='mb-3'
          page={5}
          prev={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='11 17 6 12 11 7' />
              <polyline points='18 17 13 12 18 7' />
            </svg>
          }
          next={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='13 17 18 12 13 7' />
              <polyline points='6 17 11 12 6 7' />
            </svg>
          }
          count={10}
        />
        <Pagination
          className='mb-3'
          page={5}
          prev={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <line x1='19' y1='12' x2='5' y2='12' />
              <polyline points='12 19 5 12 12 5' />
            </svg>
          }
          next={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <line x1='5' y1='12' x2='19' y2='12' />
              <polyline points='12 5 19 12 12 19' />
            </svg>
          }
          count={10}
        />
      </Widget>
      <Widget col className='flex-wrap'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>First and last pages</div>
          <div className='text-sm font-bold'>
            <span>
              Use any component or text for the <code>first</code> and <code>last</code> props
            </span>
          </div>
        </div>
        <Pagination
          page={5}
          first={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='11 17 6 12 11 7' />
              <polyline points='18 17 13 12 18 7' />
            </svg>
          }
          last={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='13 17 18 12 13 7' />
              <polyline points='6 17 11 12 6 7' />
            </svg>
          }
          prev={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='15 18 9 12 15 6' />
            </svg>
          }
          next={
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-current'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'>
              <polyline points='9 18 15 12 9 6' />
            </svg>
          }
          count={10}
        />
      </Widget>
    </div>
  );
};

export default Paginations;
