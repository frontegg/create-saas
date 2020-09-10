import * as React from 'react';
import './Notifications.scss';
import Widget from '../../../Widget';
import { Col, Row } from 'reactstrap';
import Button from '../../../../../Components/Button';
import NotificationContext from '../../../NotificationContext';

const Notifications:React.FC = () => {
    const context = React.useContext(NotificationContext);
    return <div className="Notifications">
        <Widget>
            <Col>
                <Row>
                            <Button onClick={() => { context &&
                                context.setNotification!({
                                    open: true,
                                    text: "I'm alert",
                                    className:" position-relative border-0"
                                })
                            }}>
                                top
                            </Button>
                            <Button onClick={() => {context &&
                                context.setNotification!({
                                    open: true,
                                    text: "I'm alert",
                                    className:"  position-fixed fixed-top"
                                })
                            }}>
                                fixed top
                            </Button>
                </Row>
            </Col>
        </Widget>
    </div>
}

export default Notifications;