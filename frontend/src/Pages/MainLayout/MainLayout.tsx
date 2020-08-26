import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';
import NavBar from '../../Components/NavBar';
import { Switch, Route } from 'react-router-dom';

const MainLayout: React.FC = () => {
    const [collapsed, collapse] = React.useState<boolean>(false);
    return (
        <div className="mainLayout">
            <Sidebar/>
            <div className="main">
                <NavBar/>
                <div className="p-4">
                    <Switch>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;