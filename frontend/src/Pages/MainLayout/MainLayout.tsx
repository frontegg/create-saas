import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import SampleFormPage from './SampleFormPage';
import DefaultFormPage from './DefaultFormPage';
import SliderPage from './SliderPage';
import DatePickerPage from './DatePickerPage';
import SwitchPage from './SwitchPage';
import NavBar from '../../Components/NavBar';

const MainLayout: React.FC = () => {
    const [fixedSidebar, setFixSidebar] = React.useState<boolean>(true);
    const handleFixSidebar = (event: React.ChangeEvent<HTMLInputElement>) => setFixSidebar(!fixedSidebar);
    const [fixedNavbar, setFixNavbar] = React.useState<boolean>(false);
    const handlesFixNavbar = (event: React.ChangeEvent<HTMLInputElement>) => setFixNavbar(!fixedNavbar);
    const [collapsed, collapse] = React.useState<boolean>(false);
    const handleCollapse = (event: React.ChangeEvent<HTMLInputElement>) => collapse(!collapsed);
    const [scrolled, setScrolled] = React.useState<boolean>(false);
    const handleScroll = (event: Event) => {
            if (window.pageYOffset == 0)
            {
                setScrolled(false);
            }
            if (window.pageYOffset > 0 && !scrolled) {
                setScrolled(true);
            }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`mainLayout ${scrolled ? "scrolled" : "onTop"} ${fixedSidebar ? "fixedSidebar" : ""} ${fixedNavbar ? "fixedNavbar" : ""}`}>
            <NavBar className={`${collapsed ? "collapsed" : "expanded"} ${fixedNavbar ? "position-fixed" : "position-absolute"}`}/>
            <Sidebar className={`${collapsed ? "collapsed" : "expanded"}`}/>
            <div className="main" >
                <div className="p-4 content">
                    <Switch>
                        <Route path='/forms/sample-forms' component={SampleFormPage} />
                        <Route path='/forms/default-forms' component={DefaultFormPage} />
                        <Route path='/forms/sliders' component={SliderPage} />
                        <Route path='/forms/datepicker' component={DatePickerPage} />
                        <Route path='/forms/switches' component={SwitchPage} />
                    </Switch>
                </div>
            </div>
            <div className="settings dropdown position-fixed">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <input type="checkbox" id="collapsing" className="d-none" onChange={handleCollapse} checked={collapsed}/>
            <input type="checkbox" id="fix_sidebar" className="d-none" onChange={handleFixSidebar} checked={fixedSidebar}/>
            <input type="checkbox" id="fix_navbar" className="d-none" onChange={handlesFixNavbar} checked={fixedNavbar}/>
        </div>
    )
}

export default MainLayout;