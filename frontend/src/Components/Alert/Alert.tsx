import * as React from 'react';
import './Alert.scss';
import { Alert as A } from 'reactstrap';
import NotificationContext, { NotificationContextProvider, NotificationContextType } from '../../Pages/MainLayout/NotificationContext';

type Props = {
    notification_key: string,
    open?: boolean,
    raised?: boolean,
    borderLeft?: boolean,
    outlined?: boolean,
    color?: string
} & React.HTMLAttributes<HTMLElement>

const Alert: React.FC<Props> = (
    {
        notification_key,
        open,
        raised,
        borderLeft,
        outlined,
        className = "",
        style = {},
        children,
        color = "light"
    }
) => {
    const context = React.useContext<NotificationContextType>(NotificationContext);

    const onDismiss = (event: React.MouseEvent<any, MouseEvent>) => {
        context.deleteNotification(notification_key);
    }
    raised && (className += `shadow border-0 text-${color} raised`);
    outlined && (className += `text-${color} border border-${color} outlined`);
    borderLeft && (className += `rounded-0 shadow-sm border-top-0 border-right-0 border-bottom-0 border-left border-${color} alert-border-left `);
    return <A color={color} className={`Alert w-100 ${className}`} isOpen={open} toggle={onDismiss} style={{ ...style }}>
        {children}
    </A>
}

export const TopAlert = (props: Props) => {
    const context = React.useContext<NotificationContextType>(NotificationContext);
    return context.addNotification({
        ...props,
        key: props.notification_key,
        position: "top"
    })
}
export const FixedTopAlert = (props: Props) => {
    const context = React.useContext<NotificationContextType>(NotificationContext);
    return context.addNotification({
        ...props,
        key: props.notification_key,
        position: "fixed-top"
    }) as unknown as JSX.Element
}  
export const FixedBottomAlert = (props: Props) => {
    const context = React.useContext<NotificationContextType>(NotificationContext);
    return context.addNotification({
        ...props,
        key: props.notification_key,
        position: "fixed-bottom"
    }) as unknown as JSX.Element
}  
export const FixedMarginBottomAlert = (props: Props) => {
    const context = React.useContext<NotificationContextType>(NotificationContext);
    return context.addNotification({
        ...props,
        className: `${props.className} m-2 w-auto`,
        key: props.notification_key,
        position: "fixed-bottom"
    }) as unknown as JSX.Element
}

export const RelativeAlert = (props: Props) => {
    const context = React.useContext<NotificationContextType>(NotificationContext);

    return context.addNotification({
        ...props,
        className: `${props.className} `,
        key: props.notification_key,
        position: "relative"
    })

}

export default Alert;