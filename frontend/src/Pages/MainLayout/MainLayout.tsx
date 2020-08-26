import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import SampleFormPage from './SampleFormPage';
import DefaultFormPage from './DefaultFormPage';
import SliderPage from './SliderPage';

const MainLayout: React.FC = () => {

    // const [collapsed, collapse] = React.useState<boolean>(false);
    return (
        <div className="mainLayout">
            <Sidebar/>
            <div className="main">
                <Switch>
                    <Route path='/sampleforms' component={SampleFormPage} />
                    <Route path='/defaultforms' component={DefaultFormPage} />
                    <Route path='/sliders' component={SliderPage} />
                </Switch>
            </div>
        </div>
    )
}

export default MainLayout;