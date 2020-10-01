import React from 'react';
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

export const ProgressLine: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { value, color, colorClass = '' } = props;
  return (
    <div className='w-100'>
      <div
        className={`progress-bar my-3 h-1 ${colorClass}`}
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      />
    </div>
  );
};

export const ProgressBarWithValue: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { value, color, colorClass = '' } = props;
  return (
    <div className='w-100'>
      <div
        className={`progress-bar mb-5 ${colorClass}`}
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}>
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
