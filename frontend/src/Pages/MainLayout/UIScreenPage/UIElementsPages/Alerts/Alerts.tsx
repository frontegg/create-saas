import * as React from 'react';
import './Alerts.scss';
import Widget from '../../../Widget';
import Alert, {RelativeAlert} from '../../../../../Components/Alert';
import { Row, Col } from 'reactstrap';

const Alerts:React.FC = () => {
    return <div className="Alerts">
        <Widget>
            <Col>
                <Row>
                    <Alert notification_key="primary" open color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="danger" open color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="warning" open color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <Row>
                    <Alert notification_key="outline_primary" open outlined color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="outline_danger" open outlined color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="outline_warning" open outlined color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <Row>
                    <Alert notification_key="raised_primary" open raised color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="raised_danger" open raised color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="raised_warning" open raised color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <Row>
                    <Alert notification_key="borderLeft_primary" open borderLeft color="primary"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="borderLeft_danger" open borderLeft color="danger"> I'm alert!</Alert>
                </Row>
                <Row>
                    <Alert notification_key="borderLeft_warning" open borderLeft color="warning"> I'm alert!</Alert>
                </Row>
            </Col>
        </Widget>
    </div>
}

export default Alerts;