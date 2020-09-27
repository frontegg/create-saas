import React from 'react';
import './Buttons.scss';
import Widget from '../../../Widget';
import Button, { OutlineButton, CircleButton } from '../../../../../Components/Button';
import { FlatButton, RaisedButton } from '../../../../../Components/Button/Button';
import { ButtonGroup, Row } from 'reactstrap';

const FlatOnHoverStyle = {
  backgroundColor: '#e5f5f5',
  color: '#2525c5',
};
const Buttons: React.FC = () => {
  return (
    <div className='Buttons'>
      <div className='text-xl font-bold'>Buttons</div>
      <Widget col className='w-100'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Buttons</div>
          <div className='text-sm font-bold'>
            <span>Default button styles</span>
          </div>
        </div>
        <Row className='w-100 m-0'>
          <Button color='primary' className='rounded-0 mr-3'>
            Button
          </Button>
          <Button color='primary' className='rounded mr-3'>
            Button
          </Button>
          <CircleButton color='primary' className='w-8 h-8 mr-3'>
            1
          </CircleButton>
        </Row>
      </Widget>
      <Widget col className='w-100'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Outlined buttons</div>
          <div className='text-sm font-bold'>
            <span>Outlined button styles</span>
          </div>
        </div>
        <Row className='m-0'>
          <Button
            color='primary'
            className='rounded-0 mr-3 focus:shadow-none'
            activeClassName='border-dark bg-dark text-white'
            hoverClassName='bg-warning border-warning text-muted'
            focusClassName='shadow-none'>
            Button
          </Button>
          <Button
            color='primary'
            activeClassName='border-dark bg-dark text-white'
            hoverClassName='bg-warning border-warning text-muted'
            focusClassName='shadow-none'
            className='rounded mr-3 focus:shadow-none'>
            Button
          </Button>
          <CircleButton
            color='primary'
            activeClassName='border-dark bg-dark text-color-light'
            hoverClassName='bg-warning border-warning text-muted'
            focusClassName='shadow-none'
            className='w-8 h-8 mr-3 focus:shadow-none'>
            1
          </CircleButton>
        </Row>
      </Widget>
      <Widget col className='w-100'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Outlined buttons</div>
          <div className='text-sm font-bold'>
            <span>Outlined button styles</span>
          </div>
        </div>
        <Row className='m-0'>
          <OutlineButton color='primary' className='rounded-0 mr-3'>
            Button
          </OutlineButton>
          <OutlineButton color='primary' className='rounded mr-3'>
            Button
          </OutlineButton>
          <CircleButton outline color='primary' className='w-8 h-8 mr-3'>
            1
          </CircleButton>
        </Row>
      </Widget>
      <Widget col className='w-100'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Flat buttons</div>
          <div className='text-sm font-bold'>
            <span>Flat button styles</span>
          </div>
        </div>
        <Row className='m-0'>
          <FlatButton onHoverStyle={FlatOnHoverStyle} className='rounded-0 mr-3'>
            Button
          </FlatButton>
          <FlatButton onHoverStyle={FlatOnHoverStyle} className='rounded mr-3'>
            Button
          </FlatButton>
          <CircleButton outline onHoverStyle={FlatOnHoverStyle} className='border-0 w-8 h-8 mr-3'>
            1
          </CircleButton>
        </Row>
      </Widget>
      <Widget col className='w-100'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Raised buttons</div>
          <div className='text-sm font-bold'>
            <span>Raised button styles</span>
          </div>
        </div>
        <Row className='m-0'>
          <RaisedButton outline onHoverStyle={FlatOnHoverStyle} color='primary' className='rounded-0 mr-3'>
            Button
          </RaisedButton>
          <RaisedButton outline onHoverStyle={FlatOnHoverStyle} color='primary' className='rounded mr-3'>
            Button
          </RaisedButton>
          <CircleButton
            outline
            onHoverStyle={FlatOnHoverStyle}
            color='primary'
            className='border-0 shadow w-8 h-8 mr-3'>
            1
          </CircleButton>
        </Row>
      </Widget>
      <Widget col className='w-100 flex-wrap'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Button groups</div>
          <div className='text-sm font-bold'>
            <span>Button group sizes</span>
          </div>
        </div>
        <Row className='m-0'>
          <ButtonGroup className='mb-3 mr-3'>
            <OutlineButton color='primary'>Left</OutlineButton>
            <OutlineButton color='primary'>Center</OutlineButton>
            <OutlineButton color='primary'>Right</OutlineButton>
          </ButtonGroup>
          <ButtonGroup className='mb-3 mr-3'>
            <Button color='primary'>Left</Button>
            <Button color='primary'>Center</Button>
            <Button color='primary'>Right</Button>
          </ButtonGroup>
          <ButtonGroup className='shadow mb-3 mr-3'>
            <FlatButton onHoverStyle={FlatOnHoverStyle} color='primary'>
              Left
            </FlatButton>
            <FlatButton onHoverStyle={FlatOnHoverStyle} color='primary'>
              Center
            </FlatButton>
            <FlatButton onHoverStyle={FlatOnHoverStyle} color='primary'>
              Right
            </FlatButton>
          </ButtonGroup>
        </Row>
      </Widget>
    </div>
  );
};

export default Buttons;
