import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';
import NavBar from '../../Components/NavBar';

const MainLayout: React.FC = () => {
    const [collapsed, collapse] = React.useState<boolean>(false);
    return (
        <div className="mainLayout">
            <Sidebar/>
            <div className="main">
                <NavBar/>
            </div>
        </div>
    )
}

export default MainLayout;