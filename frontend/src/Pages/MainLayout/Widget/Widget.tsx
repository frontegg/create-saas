import * as React from 'react';
import './Widget.scss';

type Props = {
    label?: string,
    value?: string,
    icon?: JSX.Element
}

const Widget: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({label, value, icon, className="", children}) => {
    return <div className={`widget d-flex ${className}`}>
        <div className="d-flex flex-column">
            <div className="label">
                {label}
            </div>
            <div className="value">
                {value}
            </div>
        </div>
        <div className="icon">
            {icon}
        </div>
        {children}
    </div>
}
export default Widget;