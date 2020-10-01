import React from 'react';

import DatePickers from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

type DatePickerProps = {
  DatePickerType?: string;
  header: string;
  description: string | JSX.Element;
};

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const { header, description, DatePickerType } = props;
  const [startDate, setStartDate] = React.useState<Date | [Date, Date] | null>(null);
  return (
    <div className='content_datapicker'>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      <div>{startDate?.toString()}</div>
      <div>
        <DatePickers
          selected={(startDate as Date) || new Date()}
          onChange={(date) => setStartDate(date)}
          inline={DatePickerType === 'InlineDatepicker'}
        />
      </div>
    </div>
  );
};

export default DatePicker;
