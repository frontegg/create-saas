import React from 'react';
import Switch from '../../../Components/Switch';

const SwitchPage: React.FC = () => {
  const switches = [
    {
      label: 'API Access',
      textLabel: 'Enable access',
      trackColor: '#90caf9',
      sliderColor: '#2196f3',
      name: 'checkedA',
      check: false,
    },
    {
      label: 'API Access 2',
      textLabel: 'Enable access',
      trackColor: '#90caf9',
      sliderColor: '#2196f3',
      name: 'checkedB',
      check: true,
    },
  ];

  const colorSwitches = [
    {
      label: 'red',
      textLabel: 'Sample label',
      trackColor: '#ef9a9a',
      sliderColor: '#f44336',
      name: 'checkedA',
      check: true,
    },
    {
      label: 'pink',
      textLabel: 'Sample label',
      trackColor: '#f48fb1',
      sliderColor: '#e91e63',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'purple',
      textLabel: 'Sample label',
      trackColor: '#ce93d8',
      sliderColor: '#9c27b0',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'deep-purple',
      textLabel: 'Sample label',
      trackColor: '#b39ddb',
      sliderColor: '#673ab7',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'indigo',
      textLabel: 'Sample label',
      trackColor: '#9fa8da',
      sliderColor: '#3f51b5',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'blue',
      textLabel: 'Sample label',
      trackColor: '#90caf9',
      sliderColor: '#2196f3',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'light-blue',
      textLabel: 'Sample label',
      trackColor: '#81d4fa',
      sliderColor: '#03a9f4',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'cyan',
      textLabel: 'Sample label',
      trackColor: '#80deea',
      sliderColor: '#00bcd4',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'teal',
      textLabel: 'Sample label',
      trackColor: '#80cbc4',
      sliderColor: '#009688',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'green',
      textLabel: 'Sample label',
      trackColor: '#a5d6a7',
      sliderColor: '#4caf50',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'light-green',
      textLabel: 'Sample label',
      trackColor: '#c5e1a5',
      sliderColor: '#8bc34a',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'lime',
      textLabel: 'Sample label',
      trackColor: '#e6ee9c',
      sliderColor: '#cddc39',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'yellow',
      textLabel: 'Sample label',
      trackColor: '#fff59d',
      sliderColor: '#ffeb3b',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'amber',
      textLabel: 'Sample label',
      trackColor: '#ffe082',
      sliderColor: '#ffc107',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'orange',
      textLabel: 'Sample label',
      trackColor: '#ffcc80',
      sliderColor: '#ff9800',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'deep-orange',
      textLabel: 'Sample label',
      trackColor: '#ffab91',
      sliderColor: '#ff5722',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'brown',
      textLabel: 'Sample label',
      trackColor: '#bcaaa4',
      sliderColor: '#795548',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'grey',
      textLabel: 'Sample label',
      trackColor: '#eeeeee',
      sliderColor: '#9e9e9e',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'blue-grey',
      textLabel: 'Sample label',
      trackColor: '#b0bec5',
      sliderColor: '#607d8b',
      name: 'checkedB',
      check: true,
    },
  ];

  return (
    <div className='container page'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Switches</div>
      </div>
      <div className='main-switches'>
        <div className='switches'>
          <div className='content-switch'>
            <div>
              <div className='header'>Default switches</div>
              <div className='description'>
                <span>
                  Use the <code>&lt;Switch /&gt;</code> component for simple switches
                </span>
              </div>
            </div>
            <div className='cont flex wrap'>
              {switches.map((item, index) => {
                return (
                  <Switch
                    key={index}
                    label={item.label}
                    textLabel={item.textLabel}
                    trackColor={item.trackColor}
                    sliderColor={item.sliderColor}
                    name={item.name}
                    check={item.check}
                  />
                );
              })}
            </div>
          </div>
          <div className='content-switch'>
            <div>
              <div className='header'>Switch colors</div>
              <div className='description'>
                <span>
                  Use the <code>&lt;Switch /&gt;</code> component with the <code>color</code> prop to change the{' '}
                  <code>Switch</code> color
                </span>
              </div>
            </div>
            <div className='cont flex wrap'>
              {colorSwitches.map((item, index) => {
                return (
                  <Switch
                    key={index}
                    label={item.label}
                    textLabel={item.textLabel}
                    trackColor={item.trackColor}
                    sliderColor={item.sliderColor}
                    name={item.name}
                    check={item.check}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchPage;
