import React from 'react';
import './Alerts.scss';
import Widget from '../../../Widget';
import { Alert } from '../../../../../Components/Alert';
import { Row, Col } from 'reactstrap';

const Alerts: React.FC = () => {
  return (
    <div className='Alerts'>
      <Widget>
        <Col>
          <Row>
            <Alert notificationKey='primary' color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='danger' color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='warning' color='warning'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
        </Col>
      </Widget>
      <Widget>
        <Col>
          <Row>
            <Alert notificationKey='outline_primary' outlined color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='outline_danger' outlined color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='outline_warning' outlined color='warning'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
        </Col>
      </Widget>
      <Widget>
        <Col>
          <Row>
            <Alert notificationKey='raised_primary' raised color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='raised_danger' raised color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='raised_warning' raised color='warning'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
        </Col>
      </Widget>
      <Widget>
        <Col>
          <Row>
            <Alert notificationKey='borderLeft_primary' borderLeft color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='borderLeft_danger' borderLeft color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='borderLeft_warning' borderLeft color='warning'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
        </Col>
      </Widget>
    </div>
  );
};

export default Alerts;
