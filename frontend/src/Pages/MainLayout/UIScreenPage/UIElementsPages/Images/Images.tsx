import React from 'react';
import Widget from '../../../Widget';
import { Row, Col } from 'reactstrap';

const Images: React.FC = () => {
  const colors = ['grey', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
  return (
    <div className='relative'>
      <div className='text-xl font-bold mb-3'>Images</div>
      <Widget col className='flex-wrap'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Rounded images</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>.rounded</code> class for rounded images
            </span>
          </div>
        </div>
        <Row>
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-8 rounded' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-16 rounded' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-20 rounded' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-24 rounded' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-32 rounded' />
        </Row>
      </Widget>
      <Widget col className='flex-wrap'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Circular images</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>.rounded-circle</code> class for circular images
            </span>
          </div>
        </div>
        <Row>
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-8 rounded-circle' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-16 rounded-circle' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-20 rounded-circle' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-24 rounded-circle' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-32 rounded-circle' />
        </Row>
      </Widget>
      <Widget col className='flex-wrap'>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Raised images</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>.shadow</code> class for raised images
            </span>
          </div>
        </div>
        <Row>
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-8  rounded-circle shadow' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-16 rounded-circle shadow' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-20 rounded-circle shadow' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-24 rounded-circle shadow' />
          <img src='/images/profile.jpeg' alt='' className='mx-3 h-32 rounded-circle shadow' />
        </Row>
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Bordered images</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>.shadow-outline-color</code> classNames to add an inner border to your images
            </span>
          </div>
        </div>
        <Col className='w-full'>
          {colors.map((value, index) => {
            const array = [];
            for (let i = 3; i < 10; i++) {
              array.push(
                <img
                  key={i}
                  src='/images/profile.jpeg'
                  alt=''
                  className={`mx-3 h-8 rounded-circle shadow-outline-${value}-${i}00`}
                />,
              );
            }
            return (
              <Row key={'row' + index} className='justify-content-start h-16'>
                {array}
              </Row>
            );
          })}
        </Col>
      </Widget>
    </div>
  );
};

export default Images;
