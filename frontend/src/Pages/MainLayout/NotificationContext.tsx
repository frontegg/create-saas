import * as React from 'react';

interface NotificationObject {
    key: string,
    open?: boolean,
    color?: string,
    text?: string,
    position?: string
    outlined?: boolean,
    raised?: boolean,
    borderLeft?: boolean,
    className?: string,
}
interface NotificationQueueObject {
    notifications: { [key: string]: NotificationObject },
}
export type NotificationContextType = NotificationQueueObject & {
    addNotification: (notif: NotificationObject) => void
    deleteNotification: (key: string) => void
}
const NotificationContext = React.createContext<NotificationContextType>(
    {
        notifications: {},
        addNotification: (notif) => {},
        deleteNotification: (key) => {}
    })
const NotificationContextProvider: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {

    const [state, setState] = React.useState<NotificationQueueObject>({
        notifications: {}
    });
    const addNotification = (notif: NotificationObject) => {
        let duplState = state.notifications;
        duplState[notif.key as string] = notif
        setState({
            notifications: duplState,
        })
    };
    const deleteNotification = (key: string) => {
        let duplState = state.notifications;
        delete duplState[key]
        setState({
            notifications: duplState
        })
    };
    const contextValue = {
        ...state,
        addNotification: addNotification,
        deleteNotification: deleteNotification
    }
    return <NotificationContext.Provider value={contextValue as NotificationContextType}>{children}</NotificationContext.Provider>;

};

export { NotificationContextProvider };
export default NotificationContext;