import * as React from 'react';
import './Alert.scss';
import {Alert as A} from 'reactstrap';

type Props = {
        open?: boolean,
        raised?: boolean,
        borderLeft?: boolean,
        outlined?: boolean,
        color?: string
} & React.HTMLAttributes<HTMLElement>

const Alert:React.FC<Props> = (
    {
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
    const [visible, setVisible] = React.useState<boolean>(!!open);
    const onDismiss = () => setVisible(false);
    raised && (className+= `shadow border-0 text-${color} bg-white `);
    outlined && (className+= `bg-white text-${color} border border-${color} `);
    borderLeft && (className+= `rounded-0 shadow-sm bg-white border-top-0 border-right-0 border-bottom-0 border-left border-${color} alert-border-left `);
    return <A color={color} className={`Alert w-100 ${className}`} isOpen={visible} toggle={onDismiss} style={{...style}}>
            {children}
        </A>
}
export default Alert;