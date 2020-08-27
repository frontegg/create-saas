import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import SampleFormPage from './SampleFormPage';
import DefaultFormPage from './DefaultFormPage';
import SliderPage from './SliderPage';
import NavBar from '../../Components/NavBar';
import Datatable from './DatatablePage'

const MainLayout: React.FC = () => {

    return (
        <div className="mainLayout">
            <Sidebar/>
            <div className="main">
                <NavBar/>
                <div className="p-4">
                    <Switch>
                      <Route path='/forms/sample-forms' component={SampleFormPage} />
                      <Route path='/forms/default-forms' component={DefaultFormPage} />
                      <Route path='/forms/sliders' component={SliderPage} />
                      <Route path='/tables/datatable' component={Datatable} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;