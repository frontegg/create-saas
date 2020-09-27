import React from 'react';
import Switch from '../../../Components/Switch';

const SwitchPage: React.FC = () => {
  const SwitchPr = [
    {
      label: 'API Access',
      text_label: 'Enable access',
      track_color: '#90caf9',
      slider_color: '#2196f3',
      name: 'checkedA',
      check: false,
    },
    {
      label: 'API Access 2',
      text_label: 'Enable access',
      track_color: '#90caf9',
      slider_color: '#2196f3',
      name: 'checkedB',
      check: true,
    },
  ];

  const SwitchColor = [
    {
      label: 'red',
      text_label: 'Sample label',
      track_color: '#ef9a9a',
      slider_color: '#f44336',
      name: 'checkedA',
      check: true,
    },
    {
      label: 'pink',
      text_label: 'Sample label',
      track_color: '#f48fb1',
      slider_color: '#e91e63',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'purple',
      text_label: 'Sample label',
      track_color: '#ce93d8',
      slider_color: '#9c27b0',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'deep-purple',
      text_label: 'Sample label',
      track_color: '#b39ddb',
      slider_color: '#673ab7',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'indigo',
      text_label: 'Sample label',
      track_color: '#9fa8da',
      slider_color: '#3f51b5',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'blue',
      text_label: 'Sample label',
      track_color: '#90caf9',
      slider_color: '#2196f3',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'light-blue',
      text_label: 'Sample label',
      track_color: '#81d4fa',
      slider_color: '#03a9f4',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'cyan',
      text_label: 'Sample label',
      track_color: '#80deea',
      slider_color: '#00bcd4',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'teal',
      text_label: 'Sample label',
      track_color: '#80cbc4',
      slider_color: '#009688',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'green',
      text_label: 'Sample label',
      track_color: '#a5d6a7',
      slider_color: '#4caf50',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'light-green',
      text_label: 'Sample label',
      track_color: '#c5e1a5',
      slider_color: '#8bc34a',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'lime',
      text_label: 'Sample label',
      track_color: '#e6ee9c',
      slider_color: '#cddc39',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'yellow',
      text_label: 'Sample label',
      track_color: '#fff59d',
      slider_color: '#ffeb3b',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'amber',
      text_label: 'Sample label',
      track_color: '#ffe082',
      slider_color: '#ffc107',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'orange',
      text_label: 'Sample label',
      track_color: '#ffcc80',
      slider_color: '#ff9800',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'deep-orange',
      text_label: 'Sample label',
      track_color: '#ffab91',
      slider_color: '#ff5722',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'brown',
      text_label: 'Sample label',
      track_color: '#bcaaa4',
      slider_color: '#795548',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'grey',
      text_label: 'Sample label',
      track_color: '#eeeeee',
      slider_color: '#9e9e9e',
      name: 'checkedB',
      check: true,
    },
    {
      label: 'blue-grey',
      text_label: 'Sample label',
      track_color: '#b0bec5',
      slider_color: '#607d8b',
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
      <div className='main_switches'>
        <div className='switches'>
          <div className='content_switch'>
            <div>
              <div className='header'>Default switches</div>
              <div className='description'>
                <span>
                  Use the <code>&lt;Switch /&gt;</code> component for simple switches
                </span>
              </div>
            </div>
            <div className='cont flex wrap'>
              {SwitchPr.map((item, index) => {
                return (
                  <Switch
                    key={index}
                    label={item.label}
                    text_label={item.text_label}
                    track_color={item.track_color}
                    slider_color={item.slider_color}
                    name={item.name}
                    check={item.check}
                  />
                );
              })}
            </div>
          </div>
          <div className='content_switch'>
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
              {SwitchColor.map((item, index) => {
                return (
                  <Switch
                    key={index}
                    label={item.label}
                    text_label={item.text_label}
                    track_color={item.track_color}
                    slider_color={item.slider_color}
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
