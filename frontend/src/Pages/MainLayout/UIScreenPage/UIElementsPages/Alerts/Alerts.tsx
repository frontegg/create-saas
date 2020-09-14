import * as React from 'react';
import './Alerts.scss';
import Widget from '../../../Widget';
import Alert from '../../../../../Components/Alert';
import { Row, Col } from 'reactstrap';

const Alerts:React.FC = () => {
    return <div className="Alerts">
        <Widget>
            <Col>
                <Row>
                    <Alert open color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <Row>
                    <Alert open outlined color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open outlined color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open outlined color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <Row>
                    <Alert open raised color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open raised color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open raised color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <Row>
                    <Alert open borderLeft color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open borderLeft color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert open borderLeft color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
    </div>
}

export default Alerts;