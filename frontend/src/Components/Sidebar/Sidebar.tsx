import * as React from 'react';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
    const [collapsed, collapse] = React.useState<boolean>(false);
    return (
            <div className={`sideBar ${collapsed ? "collapsed" : ""}`} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => collapse(!collapsed)}>
                <div className="row">
                    <div className="icon"></div>
                    <div className="label"></div>
                </div>
            </div>
    )
}

export default Sidebar;