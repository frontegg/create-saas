import React from 'react';
import { Dropdown } from '../../../../../Components/Dropdown';
import { Icon } from '../../../../../Components/Icon';
import Widget from '../../../Widget';

const DropdownMenu: React.FC = () => {
  return (
    <div className='d-flex flex-wrap text-center w-64'>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='home' />
        <span className='text-xs'>Home</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='user' />
        <span className='text-xs'>Account</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='comment' />
        <span className='text-xs'>Comments</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='settings' />
        <span className='text-xs'>Settings</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='maps' />
        <span className='text-xs'>Maps</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='twitter' />
        <span className='text-xs'>Twitter</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='facebook' />
        <span className='text-xs'>Facebook</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='instagram' />
        <span className='text-xs'>Instagram</span>
      </div>
      <div className='w-1/3 d-flex flex-column align-items-center justify-content-center h-20 space-y-1 dropdown-item'>
        <Icon type='linkedin' />
        <span className='text-xs'>LinkedIn</span>
      </div>
    </div>
  );
};
const Dropdowns: React.FC = () => {
  return (
    <div className='relative'>
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
          <Dropdown color='primary' className='w-25' label='Start dropleft' direction='left'>
            <DropdownMenu />
          </Dropdown>
          <Dropdown color='primary' className='w-25' label='End dropleft' direction='left' right>
            <DropdownMenu />
          </Dropdown>
        </div>
      </Widget>
      <Widget className='w-100 flex-column'>
        <div className='text-sm font-light text-gray-500'>Dropdowns</div>
        <div className='text-sm font-bold mb-3'>
          <span className='capitalize'>right position</span>
        </div>
        <div className='d-flex flex-row justify-content-evenly w-100'>
          <Dropdown color='primary' className='w-25' label='Start dropright' direction='right'>
            <DropdownMenu />
          </Dropdown>
          <Dropdown color='primary' className='w-25' label='End dropright' direction='right' right>
            <DropdownMenu />
          </Dropdown>
        </div>
      </Widget>
      <Widget className='w-100 flex-column'>
        <div className='text-sm font-light text-gray-500'>Dropdowns</div>
        <div className='text-sm font-bold mb-3'>
          <span className='capitalize'>top position</span>
        </div>
        <div className='d-flex flex-row justify-content-evenly w-100'>
          <Dropdown color='primary' className='w-25' label='Left dropup' direction='up'>
            <DropdownMenu />
          </Dropdown>
          <Dropdown color='primary' className='w-25' label='Right dropup' direction='up' right>
            <DropdownMenu />
          </Dropdown>
        </div>
      </Widget>
    </div>
  );
};

export default Dropdowns;
