import React from 'react';
import Widget from '../../../Widget';
import { ProgressBar, ProgressLine, ProgressBarWithValue } from '../../../../../Components/ProgressBar';
import { Col } from 'reactstrap';

const ProgressBars: React.FC = () => {
  return (
    <div className='relative'>
      <div className='text-xl font-bold mb-3'>Progress Bars</div>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Default progress bars</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;ProgressBar /&gt;</code> component for simple progress bars
            </span>
          </div>
        </div>
        <Col>
          <ProgressBar value={32} />
          <ProgressBar value={52} />
          <ProgressBar value={82} />
        </Col>
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Progress lines</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;ProgressLine /&gt;</code> component for simple progress bars with{' '}
              <code>colorClass="bg-color"</code> prop
            </span>
          </div>
        </div>
        <Col>
          <ProgressLine colorClass='bg-primary' value={32} />
          <ProgressLine colorClass='bg-success' value={52} />
          <ProgressLine colorClass='bg-danger' value={82} />
        </Col>
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Progress bars with text</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;ProgressBarWithValue /&gt;</code> component for progress bars with text inside
            </span>
          </div>
        </div>
        <Col>
          <ProgressBarWithValue colorClass='bg-primary' value={32} />
          <ProgressBarWithValue colorClass='bg-success' value={52} />
          <ProgressBarWithValue colorClass='bg-danger' value={82} />
        </Col>
      </Widget>
    </div>
  );
};

export default ProgressBars;
