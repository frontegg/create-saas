import React from 'react';
import { Alert as ReactstrapAlert } from 'reactstrap';
import { NotificationContext, NotificationContextType } from '../NotificationContext';
import './Alert.scss';

interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  notificationKey: string;
  isOpen?: boolean;
  raised?: boolean;
  borderLeft?: boolean;
  outlined?: boolean;
  color?: string;
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { notificationKey, isOpen, className = '', style = {}, children, color = 'light' } = props;
  const context = React.useContext<NotificationContextType>(NotificationContext);

  const onDismiss = () => {
    context.deleteNotification(notificationKey);
  };

  return (
    <ReactstrapAlert
      color={color}
      className={`alert w-100 ${className}`}
      isOpen={isOpen}
      toggle={onDismiss}
      style={{ ...style }}>
      {children}
    </ReactstrapAlert>
  );
};

const TopAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return context.addNotification({ ...props, key: props.notificationKey, position: 'top' });
};

const FixedTopAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return context.addNotification({ ...props, key: props.notificationKey, position: 'fixed-top' });
};

const FixedBottomAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return context.addNotification({ ...props, key: props.notificationKey, position: 'fixed-bottom' });
};

const RelativeAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return context.addNotification({ ...props, key: props.notificationKey, position: 'relative' });
};

export { Alert, TopAlert, FixedTopAlert, FixedBottomAlert, RelativeAlert };
