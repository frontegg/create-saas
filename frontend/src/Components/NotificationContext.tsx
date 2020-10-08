import React from 'react';

type NotificationType = {
  key: string;
  open?: boolean;
  color?: string;
  text?: string;
  position?: string;
  outlined?: boolean;
  raised?: boolean;
  className?: string;
};

type NotificationObjectType = {
  notifications: { [key: string]: NotificationType };
};

export type NotificationContextType = NotificationObjectType & {
  addNotification: (notification: NotificationType) => void;
  deleteNotification: (key: string) => void;
};

const NotificationContext = React.createContext<NotificationContextType>({
  notifications: {},
  addNotification: () => {
    return;
  },
  deleteNotification: () => {
    return;
  },
});

const NotificationContextProvider: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const [state, setState] = React.useState<NotificationObjectType>({
    notifications: {},
  });

  const addNotification = (notification: NotificationType) => {
    const { notifications } = state;
    notifications[notification.key as string] = notification;
    setState({ notifications });
  };

  const deleteNotification = (key: string) => {
    const notifications = state.notifications;
    delete notifications[key];
    setState({ notifications });
  };

  const contextValue = {
    ...state,
    addNotification,
    deleteNotification,
  };

  return <NotificationContext.Provider value={contextValue as NotificationContextType} {...props} />;
};

export { NotificationContext, NotificationContextProvider };
