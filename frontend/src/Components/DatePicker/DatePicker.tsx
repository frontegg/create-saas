import React from 'react';
import DatePickers from 'react-datepicker';
import './DatePicker.scss';

type DatePickerProps = {
  header: string;
  description: React.ReactNode;
  inline?: boolean;
};

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const { header, description, inline = false } = props;
  const [startDate, setStartDate] = React.useState<Date | [Date, Date] | null>(null);
  return (
    <div className='content-datepicker'>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      {startDate && <div>{startDate.toString()}</div>}
      <div>
        <DatePickers
          selected={(startDate as Date) || new Date()}
          onChange={(date: Date) => setStartDate(date)}
          inline={inline}
        />
      </div>
    </div>
  );
};

export default DatePicker;
