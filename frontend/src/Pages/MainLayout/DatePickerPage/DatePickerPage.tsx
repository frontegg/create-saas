import React from 'react';
import DatePicker from '../../../Components/DatePicker';

const DatePickerPage: React.FC = () => {
  const inlineDatepicker = [
    {
      header: 'Inline date picker',
      description: (
        <span>
          Use the <code> &lt;Datepicker inline/&gt;</code> component to display a datepicker
        </span>
      ),
    },
  ];

  const datepicker = [
    {
      header: 'Date picker',
      description: (
        <span>
          Use the <code> &lt;Datepicker /&gt;</code> component for an input that displays a date picker
        </span>
      ),
    },
  ];

  return (
    <div className='container page'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Date pickers</div>
      </div>
      <div className='main'>
        <div className='datepicker'>
          {inlineDatepicker.map((item, index) => {
            return <DatePicker inline key={index} {...item} />;
          })}
        </div>
        <div className='datepicker'>
          {datepicker.map((item, index) => {
            return <DatePicker key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DatePickerPage;
