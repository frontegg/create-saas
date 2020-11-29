import React from 'react';
import Widget from '../../../Widget';
import { List } from '../../../../../Components/List';
import Image from '../../../../../Components/Image';
import { Col } from 'reactstrap';
import { Icon } from '../../../../../Components/Icon';

const img = <Image src='/images/profile.jpeg' className='mr-3 h-8 rounded-circle shadow-outline-blue-300' />;

const Lists: React.FC = () => {
  return (
    <div className='relative'>
      <div className='text-xl font-bold mb-3'>Lists</div>
      <Widget className='flex-wrap'>
        <Col xs={12}>
          <div className='mb-3'>
            <div className='text-sm font-light text-grey-500'>Single line lists</div>
            <div className='text-sm font-bold'>
              <span>Use the following examples as starting points for your single list components</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <List className='w-100 mb-2' right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
          <List className='w-100 mb-2' right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
          <List className='w-100 mb-2' right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
          <List className='w-100 mb-2' right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
        </Col>
        <Col xs={12} md={6}>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm'>Voluptas repellendus est alias ut.</div>
          </List>
        </Col>
      </Widget>
      <Widget className='flex-wrap'>
        <Col xs={12}>
          <div className='mb-3'>
            <div className='text-sm font-light text-grey-500'>Double line lists</div>
            <div className='text-sm font-bold'>
              <span>Use the following examples as starting points for your double list components</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <List className='w-100' left={img} right={2}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
          <List className='w-100' left={img} right={2}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
          <List className='w-100' left={img} right={2}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
          <List className='w-100' left={img} right={2}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
        </Col>
        <Col xs={12} md={6}>
          <List className='w-100' left='AB' right='2 days ago'>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
          <List className='w-100' left='AB' right='2 days ago'>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
          <List className='w-100' left='CD' right='2 days ago'>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
          <List className='w-100' left='WV' right='2 days ago'>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm'>Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
          </List>
        </Col>
      </Widget>
      <Widget className='flex-wrap'>
        <Col xs={12}>
          <div className='mb-3'>
            <div className='text-sm font-light text-grey-500'>Multi line lists</div>
            <div className='text-sm font-bold'>
              <span>Use the following examples as starting points for your multi line list components</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm text-grey-500'>
              Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.
            </div>
            <div className='d-flex flex-row text-grey-500 align-items-center justify-content-start'>
              <Icon type='box' />
              <div className='text-grey-300 ml-2'>a few seconds ago</div>
            </div>
          </List>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm text-grey-500'>
              Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.
            </div>
            <div className='d-flex flex-row text-grey-500 align-items-center justify-content-start'>
              <Icon type='box' />
              <div className='text-grey-300 ml-2'>a few seconds ago</div>
            </div>
          </List>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm text-grey-500'>
              Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.
            </div>
            <div className='d-flex flex-row text-grey-500 align-items-center justify-content-start'>
              <Icon type='box' />
              <div className='text-grey-300 ml-2'>a few seconds ago</div>
            </div>
          </List>
          <List className='w-100' left={img} right={1}>
            <div className='text-sm font-bold'>Voluptas repellendus est alias ut.</div>
            <div className='text-sm text-grey-500'>
              Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.
            </div>
            <div className='d-flex flex-row text-grey-500 align-items-center justify-content-start'>
              <Icon type='box' />
              <div className='text-grey-300 ml-2'>a few seconds ago</div>
            </div>
          </List>
        </Col>
      </Widget>
    </div>
  );
};

export default Lists;
