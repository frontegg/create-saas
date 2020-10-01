import React from 'react';
import Slider from '../../../Components/Slider';

const SliderPage: React.FC = () => {
  const defaultSlider = [
    {
      sliderType: 'DefaultSlider',
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
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'red',
      colorSlider: <code>.slider-red</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'pink',
      colorSlider: <code>.slider-pink</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'purple',
      colorSlider: <code>.slider-purple</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'deep-purple',
      colorSlider: <code>.slider-deep-purple</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'indigo',
      colorSlider: <code>.slider-indigo</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'blue',
      colorSlider: <code>.slider-blue</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'light-blue',
      colorSlider: <code>.slider-light-blue</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'cyan',
      colorSlider: <code>.slider-cyan</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'teal',
      colorSlider: <code>.slider-teal</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'green',
      colorSlider: <code>.slider-green</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'light-green',
      colorSlider: <code>.slider-light-green</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'lime',
      colorSlider: <code>.slider-lime</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'yellow',
      colorSlider: <code>.slider-yellow</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'amber',
      colorSlider: <code>.slider-amber</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'orange',
      colorSlider: <code>.slider-orange</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'deep-orange',
      colorSlider: <code>.slider-deep-orange</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'brown',
      colorSlider: <code>.slider-brown</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'grey',
      colorSlider: <code>.slider-grey</code>,
    },
    {
      sliderType: 'DefaultSlider',
      header: 'Range slider',
      description: 'Use the following classNames to change the slider styles',
      color: 'blue-grey',
      colorSlider: <code>.slider-blue-grey</code>,
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
                sliderType={item.sliderType}
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
                sliderType={item.sliderType}
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
                sliderType={item.sliderType}
                color={item.color}
                colorSlider={item.colorSlider}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
