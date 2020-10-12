import React from 'react';
import Slider from '../../../Components/Slider';

const SliderPage: React.FC = () => {
  const defaultSlider = [
    {
      header: 'Default slider',
      description: (
        <span>
          Use the <code>DefaultSlider</code> component for a simple slider
        </span>
      ),
      color: 'blue',
    },
  ];

  const rangeSlider = [
    {
      sliderType: 'RangeSlider',
      header: 'Range slider',
      description: (
        <span>
          Use the <code>RangeSlider</code> component for range sliders
        </span>
      ),
      color: 'blue',
    },
  ];

  const sliderColors = [
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>red color</code> to change the slider style
        </span>
      ),
      color: 'red',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>pink color</code> to change the slider style
        </span>
      ),
      color: 'pink',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>purple color</code> to change the slider style
        </span>
      ),
      color: 'purple',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>indigo color</code> to change the slider style
        </span>
      ),
      color: 'indigo',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>blue color</code> to change the slider style
        </span>
      ),
      color: 'blue',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>light-blue color</code> to change the slider style
        </span>
      ),
      color: 'light-blue',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>cyan color</code> to change the slider style
        </span>
      ),
      color: 'cyan',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>teal color</code> to change the slider style
        </span>
      ),
      color: 'teal',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>green color</code> to change the slider style
        </span>
      ),
      color: 'green',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>lime color</code> to change the slider style
        </span>
      ),
      color: 'lime',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>yellow color</code> to change the slider style
        </span>
      ),
      color: 'yellow',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>orange color</code> to change the slider style
        </span>
      ),
      color: 'orange',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>brown color</code> to change the slider style
        </span>
      ),
      color: 'brown',
    },
    {
      header: 'Range slider',
      description: (
        <span>
          Use the <code>grey color</code> to change the slider style
        </span>
      ),
      color: 'grey',
    },
  ];

  return (
    <div className='container page'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Sliders</div>
      </div>
      <div className='main'>
        <div className='slider'>
          {defaultSlider.map((item, index) => {
            return (
              <Slider
                key={index}
                description={item.description}
                header={item.header}
                value={Math.trunc(Math.random() * 50)}
                color={item.color}
              />
            );
          })}
        </div>
        <div className='slider'>
          {rangeSlider.map((item, index) => {
            return (
              <Slider
                key={index}
                description={item.description}
                header={item.header}
                value={[Math.trunc(Math.random() * 50), Math.trunc(Math.random() * 50)]}
                color={item.color}
              />
            );
          })}
        </div>
        <div className='slider'>
          {sliderColors.map((item, index) => {
            return (
              <Slider
                key={index}
                description={item.description}
                header={item.header}
                value={Math.trunc(Math.random() * 50)}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
