import React from 'react';
import DatePicker from '../../../Components/DatePicker';

const DatePickerPage: React.FC = () => {
  const InlineDatepicker = [
    {
      DatePickerType: 'InlineDatepicker',
      header: 'Inline date picker',
      description: (
        <span>
          Use the <code> &lt;InlineDatepicker /&gt;</code> component to display a datepicker
        </span>
      ),
    },
  ];

  const Datepicker = [
    {
      DatePickerType: 'Datepicker',
      header: 'Inline date picker',
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
        <div className='datepiker'>
          {InlineDatepicker.map((item, index) => {
            return (
              <DatePicker
                key={index}
                description={item.description}
                header={item.header}
                DatePickerType={item.DatePickerType}
              />
            );
          })}
        </div>
        <div className='datepiker'>
          {Datepicker.map((item, index) => {
            return (
              <DatePicker
                key={index}
                description={item.description}
                header={item.header}
                DatePickerType={item.DatePickerType}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatePickerPage;
