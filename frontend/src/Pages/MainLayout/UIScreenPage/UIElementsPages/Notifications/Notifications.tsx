import * as React from 'react';
import './Notifications.scss';
import Widget from '../../../Widget';
import { Col, Row } from 'reactstrap';
import Button from '../../../../../Components/Button';
import NotificationContext, {NotificationContextType} from '../../../NotificationContext';

const Notifications: React.FC = () => {
    const context = React.useContext<NotificationContextType>(NotificationContext);
    return <div className="Notifications">
        <Widget>
            <Col>
                <Row>
                    <Button onClick={() => {
                        context &&
                        context.addNotification!({
                        position: "top",
                        key: "key1",
                        open: true,
                        text: "I'm alert",
                        className:"position-relative border-0",
                        color: "primary"
                        })
                    }}>
                        top
                    </Button>
                    <Button onClick={() => {
                        context &&
                        context.addNotification({
                        position: "fixed-bottom",
                        key: "key2",
                        open: true,
                        text: "I'm alert",
                        className:"",
                        color: "danger"
                        })
                    }}>
                        fixed top
                    </Button>
                    <Button onClick={() => {
                        context &&
                        context.addNotification({
                        position: "fixed-bottom",
                        key: "key3",
                        open: true,
                        text: "I'm alert",
                        className:"m-0",
                        color: "danger"
                        })
                    }}>
                        fixed bottom
                    </Button>
                    <Button onClick={() => {
                        context &&
                        context.addNotification({
                        position: "fixed-bottom",
                        key: "key4",
                        open: true,
                        text: "I'm alert",
                        className:"w-auto m-3",
                        color: "danger"
                        })
                    }}>
                        fixed bottom padding
                    </Button>
                    <Button onClick={() => {
                        context &&
                        context.addNotification({
                        position: "fixed-top",
                        key: "key5",
                        open: true,
                        text: "I'm alert",
                        className:"w-auto m-3",
                        color: "primary"
                        })
                    }}>
                        fixed bottom padding
                    </Button>
                    <Button onClick={() => {
                        context &&
                        context.addNotification({
                        position: "fixed-top",
                        key: "key6",
                        open: true,
                        text: "I'm alert",
                        className:"w-auto m-3",
                        color: "success"
                        })
                    }}>
                        fixed bottom padding
                    </Button>
                    <Button onClick={() => {
                        context &&
                        context.addNotification({
                        position: "fixed-top",
                        key: "key7",
                        open: true,
                        text: "I'm alert",
                        className:"w-auto m-3",
                        color: "warning"
                        })
                    }}>
                        fixed bottom padding
                    </Button>
                </Row>
            </Col>
        </Widget>
    </div>
}

export default Notifications;