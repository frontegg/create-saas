import React from 'react';
import Widget from '../../../Widget';
import { Badge, CircularBadge } from '../../../../../Components/Badge';

const Badges: React.FC = () => {
  return (
    <div className='relative'>
      <div className='text-xl font-bold mb-3'>Badges</div>
      <Widget className='w-100 flex-column'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Default badges</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;Badge /&gt;</code> component for simple badges. Use the{' '}
              <code>&lt;CircularBadge /&gt;</code> component for circular badges. Use the <code>.rounded-0</code> class
              for no-rounded badges.
            </span>
          </div>
        </div>
        <div className='w-100 mb-3'>
          <Badge className='rounded-0 mr-3' size='large'>
            default
          </Badge>
          <Badge className='rounded-0 mr-3' size='medium'>
            default
          </Badge>
          <Badge className='rounded-0 mr-3' size='small'>
            default
          </Badge>
        </div>
        <div className='w-100 mb-3'>
          <Badge className='mr-3' size='large'>
            default
          </Badge>
          <Badge className='mr-3' size='medium'>
            default
          </Badge>
          <Badge className='mr-3' size='small'>
            default
          </Badge>
        </div>
        <div className='w-100 mb-3'>
          <CircularBadge className='mr-3' size='large'>
            1
          </CircularBadge>
          <CircularBadge className='mr-3' size='medium'>
            1
          </CircularBadge>
          <CircularBadge className='mr-3' size='small'>
            1
          </CircularBadge>
        </div>
      </Widget>
      <Widget className='w-100 flex-column'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Outlined badges</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>outlined</code> prop for outlined badges.
            </span>
          </div>
        </div>
        <div className='w-100 mb-3'>
          <Badge className='rounded-0 mr-3' outline size='large'>
            default
          </Badge>
          <Badge className='rounded-0 mr-3' outline size='medium'>
            default
          </Badge>
          <Badge className='rounded-0 mr-3' outline size='small'>
            default
          </Badge>
        </div>
        <div className='w-100 mb-3'>
          <Badge className='mr-3' outline size='large'>
            default
          </Badge>
          <Badge className='mr-3' outline size='medium'>
            default
          </Badge>
          <Badge className='mr-3' outline size='small'>
            default
          </Badge>
        </div>
        <div className='w-100 mb-3'>
          <CircularBadge className='mr-3' outline size='large'>
            1
          </CircularBadge>
          <CircularBadge className='mr-3' outline size='medium'>
            1
          </CircularBadge>
          <CircularBadge className='mr-3' outline size='small'>
            1
          </CircularBadge>
        </div>
      </Widget>
    </div>
  );
};

export default Badges;
