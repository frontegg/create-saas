import React from 'react';
import Widget from '../../../Widget';
import { Alert } from '../../../../../Components/Alert';
import { Row, Col } from 'reactstrap';

const Alerts: React.FC = () => {
  return (
    <div className='relative'>
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
            <Alert notificationKey='outlinePrimary' outlined color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='outlineDanger' outlined color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='outlineWarning' outlined color='warning'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
        </Col>
      </Widget>
      <Widget>
        <Col>
          <Row>
            <Alert notificationKey='raisedPrimary' raised color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='raisedDanger' raised color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='raisedWarning' raised color='warning'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
        </Col>
      </Widget>
      <Widget>
        <Col>
          <Row>
            <Alert notificationKey='borderLeftPrimary' borderLeft color='primary'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='borderLeftDanger' borderLeft color='danger'>
              {' '}
              I'm alert!
            </Alert>
          </Row>
          <Row>
            <Alert notificationKey='borderLeftWarning' borderLeft color='warning'>
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
