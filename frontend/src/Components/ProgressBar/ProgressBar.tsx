import React from 'react';
import classNames from 'classnames';
import './ProgressBar.scss';

type ProgressBarProps = {
  value: number;
  colorClass?: string;
  color?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { value } = props;
  return (
    <div className='wrapper'>
      <div className='progress'>
        <div className='progress-bar' style={{ width: `${value}%` }} />
      </div>
      <div className='progress-txt'>{value}%</div>
    </div>
  );
};

const ProgressLine: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { value, color, colorClass = '' } = props;
  return (
    <div className='w-100'>
      <div
        className={classNames('progress-bar', 'my-3', 'h-1', colorClass)}
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      />
    </div>
  );
};

const ProgressBarWithValue: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { value, color, colorClass = '' } = props;
  return (
    <div className='w-100'>
      <div
        className={classNames('progress-bar', 'mb-5', colorClass)}
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}>
        {value}%
      </div>
    </div>
  );
};

export { ProgressBar, ProgressLine, ProgressBarWithValue };
