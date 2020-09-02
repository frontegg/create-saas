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
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BsGearFill } from "react-icons/bs";
import LabelSwitch from '../../Components/Switch';
import Dashboard from './Dashboard';

const MainLayout: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [fixedSidebar, setFixSidebar] = React.useState<boolean>(true);
    const handleFixSidebar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFixSidebar(!fixedSidebar);
        console.log(fixedSidebar);
    }
    const [fixedNavbar, setFixNavbar] = React.useState<boolean>(false);
    const handlesFixNavbar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFixNavbar(!fixedNavbar);
        console.log(fixedNavbar);
    }
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
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/forms/sample-forms' component={SampleFormPage} />
                        <Route path='/forms/default-forms' component={DefaultFormPage} />
                        <Route path='/forms/sliders' component={SliderPage} />
                        <Route path='/forms/datepicker' component={DatePickerPage} />
                        <Route path='/forms/switches' component={SwitchPage} />
                    </Switch>
                </div>
            </div>
            <Dropdown className="settings position-fixed pl-2 d-none d-md-block" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="btn-dropdown-settings">
                        <BsGearFill/>
                </DropdownToggle>
                <DropdownMenu>
                    <div>
                        <label htmlFor="fixnavbar" onClick={(e) => { console.log(e)}}>
                            abc
                            {/* <LabelSwitch label="" text_label="fix status bar" name="" track_color="rgb(144, 202, 249)" slider_color="rgb(33, 150, 243)" check={fixedNavbar} /> */}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="fixsidebar" onClick={(e) => { console.log(e.currentTarget.isConnected)}}>
                            def
                            {/* <LabelSwitch label="" text_label="fix sidebar" name="" track_color="rgb(144, 202, 249)" slider_color="rgb(33, 150, 243)" check={fixedSidebar} /> */}
                        </label>
                    </div>
                </DropdownMenu>
            </Dropdown>
            <input type="checkbox" id="collapsing" className="d-none" onChange={handleCollapse} checked={collapsed}/>
            <input type="checkbox" id="fixsidebar" className="d-none" onChange={handleFixSidebar} checked={fixedSidebar}/>
            <input type="checkbox" id="fixnavbar" className="d-none" onChange={handlesFixNavbar} checked={fixedNavbar}/>
        </div>
    )
}

export default MainLayout;