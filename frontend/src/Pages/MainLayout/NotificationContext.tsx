import * as React from 'react';
import Notifications from './UIScreenPage/UIElementsPages/Notifications';

interface NotificationObject {
    open?: boolean,
    color?: string,
    text?: string,
    position?: string
    outlined?: boolean,
    raised?: boolean,
    borderLeft?: boolean,
    className?: string,
    setNotification?: (notif: Omit<NotificationObject, "setNotification">) => void
}
const NotificationContext = React.createContext<NotificationObject | null>(null);
const NotificationContextProvider: React.FC<React.HTMLAttributes<HTMLElement>> = ({children}) => {

    const [state, setState] = React.useState<NotificationObject>({
        open: undefined,
        color: undefined,
        text: undefined,
        position: undefined,
        outlined: undefined,
        raised: undefined,
        borderLeft: undefined,
        className: undefined
    });
    const setNotification = (notif: Omit<NotificationObject, "setNotification">) => {
        setState({
            ...notif,
            setNotification: setNotification
        })
    };
    React.useEffect(() => {
        setState({
            ...state,
            setNotification: setNotification
        })
      }, []);
    return <NotificationContext.Provider value={state}>{children}</NotificationContext.Provider>;

} ;

export {NotificationContextProvider};
export default NotificationContext;