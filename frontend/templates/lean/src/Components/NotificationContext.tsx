import React from 'react';

interface INotification {
  key: string;
  open?: boolean;
  color?: string;
  text?: string;
  position?: string;
  outlined?: boolean;
  raised?: boolean;
  borderLeft?: boolean;
  className?: string;
}

interface INotificationsObject {
  notifications: { [key: string]: INotification };
}

export type NotificationContextType = INotificationsObject & {
  addNotification: (notification: INotification) => void;
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

const NotificationContextProvider: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  const [state, setState] = React.useState<INotificationsObject>({
    notifications: {},
  });

  const addNotification = (notification: INotification) => {
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

  return (
    <NotificationContext.Provider value={contextValue as NotificationContextType}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationContextProvider };
