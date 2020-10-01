import React from 'react';
import DatePickers from 'react-datepicker';
import './DatePicker.scss';

type DatePickerProps = {
  type?: string;
  header: string;
  description: string | JSX.Element;
};

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const { header, description, type } = props;
  const [startDate, setStartDate] = React.useState<Date | [Date, Date] | null>(null);
  return (
    <div className='content-datepicker'>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      <div>{startDate?.toString()}</div>
      <div>
        <DatePickers
          selected={(startDate as Date) || new Date()}
          onChange={(date: Date) => setStartDate(date)}
          inline={type === 'InlineDatepicker'}
        />
      </div>
    </div>
  );
};

export default DatePicker;
