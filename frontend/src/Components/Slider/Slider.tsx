import React from 'react';
import MaterialUISlider from '@material-ui/core/Slider';
import './Slider.scss';

type SliderProps = {
  header: string;
  value: number | number[];
  description: string | React.ReactElement;
  color?: string;
};

const Slider: React.FC<SliderProps> = (props) => {
  const { header, description, color } = props;
  const [value, setValue] = React.useState<number | number[]>(props.value);
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  const style = {
    color,
  };

  return (
    <div className='content-slider'>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      <div>
        <MaterialUISlider style={style} value={value} onChange={handleChange} aria-labelledby='range-slider' />
      </div>
    </div>
  );
};

export default Slider;
