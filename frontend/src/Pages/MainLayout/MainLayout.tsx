import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';

const MainLayout: React.FC = () => {
    const [collapsed, collapse] = React.useState<boolean>(false);
    return (
        <div className="mainLayout">
            <Sidebar/>
            <div className="main">
                <label className="label-collapse" htmlFor="collapsing">
                </label>
            </div>
        </div>
    )
}

export default MainLayout;