import React from 'react';
import Sliders from '@material-ui/core/Slider';
import './Slider.scss';

type SliderProps = {
  sliderType: string;
  header: string;
  description: string | JSX.Element;
  color?: string;
  colorSlider?: string | JSX.Element;
};

const Slider: React.FC<SliderProps> = ({ header, description, color, sliderType, colorSlider }) => {
  let val;

  if (sliderType === 'RangeSlider') {
    val = [Math.trunc(Math.random() * 50), Math.trunc(Math.random() * 50)];
  } else {
    val = Math.trunc(Math.random() * 50);
  }

  const [value, setValue] = React.useState<number | number[]>(val);
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  const style = {
    color,
  };

  return (
    <div className='content_slider'>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      <div>{colorSlider}</div>
      <div>
        <Sliders
          style={style}
          value={value}
          onChange={handleChange}
          // valueLabelDisplay="auto"
          aria-labelledby='range-slider'
        />
      </div>
    </div>
  );
};

export default Slider;
