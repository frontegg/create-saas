import React from 'react';
import { Icon } from '../../../../../Components/Icon';
import Pagination from '../../../../../Components/Pagination';
import Widget from '../../../Widget';

const Paginations: React.FC = () => {
  return (
    <div className='relative'>
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
          prev={<Icon type='left-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          next={<Icon type='right-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          count={10}
        />
        <Pagination
          className='mb-3'
          page={5}
          prev={<Icon type='double-left-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          next={<Icon type='double-right-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          count={10}
        />
        <Pagination
          className='mb-3'
          page={5}
          prev={<Icon type='left-arrow-2' className='stroke-current' style={{ width: '16', height: '16' }} />}
          next={<Icon type='right-arrow-2' className='stroke-current' style={{ width: '16', height: '16' }} />}
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
          first={<Icon type='double-left-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          last={<Icon type='double-right-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          prev={<Icon type='left-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          next={<Icon type='right-arrow' className='stroke-current' style={{ width: '16', height: '16' }} />}
          count={10}
        />
      </Widget>
    </div>
  );
};

export default Paginations;
