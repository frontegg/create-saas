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
import Datatable from './DatatablePage'
import FormStepsPage from './FormStepsPage';
import RegularTable from './RegularTablePage'
import SidebarCategoryTable from './SidebarCategoryTablePage'
import Dashboard from './Dashboard';
import SettingsButton from '../../Components/SettingsButton';
import PricingPage from './PricingPage'
import TermsPage from './TermsPage'
import DocumentationPage from './DocumentationPage'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { stateType } from '../../Components/SettingsButton/types';
import UIScreenPage from './UIScreenPage';
import Badges from './UIScreenPage/UIElementsPages/Badges';
import Dropdowns from './UIScreenPage/UIElementsPages/Dropdowns';

const MainLayout: React.FC = () => {
    const [fixedSidebar, setFixSidebar] = React.useState<boolean>(true);
    const handleFixSidebar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFixSidebar(!fixedSidebar);
    }

    const [fixedNavbar, setFixNavbar] = React.useState<boolean>(false);
    const handlesFixNavbar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFixNavbar(!fixedNavbar);
    }

    const [collapsed, collapse] = React.useState<boolean>(false);
    const handleCollapse = (event: React.ChangeEvent<HTMLInputElement>) => collapse(!collapsed);

    const [hovered, hoverExpand] = React.useState<boolean>(false);
    const handleFixeHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (fixedSidebar) {
            hoverExpand(!hovered);
        }
        if (!fixedSidebar) {
            hoverExpand(false);
        }
    }

    const [scrolled, setScrolled] = React.useState<boolean>(false);
    const handleScroll = (event: Event) => {
        if (window.pageYOffset == 0) {
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

    const switches = [
        {
            label: "Fix sidebar",
            state: [fixedSidebar, setFixSidebar] as stateType<boolean>
        },
        {
            label: "Fix navbar",
            state: [fixedNavbar, setFixNavbar] as stateType<boolean>
        }
    ]

    const [palletType, setPalletType] = React.useState<'light' | 'dark' | 'navbar' | 'sidebar'>('light');
    const palette = palletType === 'navbar' || palletType === 'sidebar' ? 'light' : palletType
    const darkTheme = createMuiTheme({
        palette: {
            type: palette,
            primary: {
                main: '#2196f3',
            }
        }
    });

    React.useEffect(() => {
        document.getElementById('root')!.className = ''
    }, [])

    const handleThemeChange = (value: 'light' | 'dark' | 'navbar' | 'sidebar') => {
        setPalletType(value)
        document.getElementById('root')!.className = ''
        document.getElementById('root')?.classList.add(`theme-${value}`)
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={`mainLayout ${scrolled ? "scrolled" : "onTop"} ${fixedSidebar ? "fixedSidebar" : ""} ${fixedNavbar ? "fixedNavbar" : ""}`}>
                <NavBar
                    settings={switches}
                    handleThemeChange={handleThemeChange}
                    palletType={palletType}
                    className={`${collapsed ?
                        hovered && fixedSidebar ? "expanded" : "collapsed"
                        : "expanded"} 
                    ${fixedNavbar ? "position-fixed" : "position-absolute"}`} />
                <Sidebar
                    className={`${collapsed ?
                        hovered && fixedSidebar ? "expanded" : "collapsed"
                        : "expanded"}`}
                    onMouseLeave={handleFixeHover}
                    onMouseEnter={handleFixeHover}
                />
                <div className="main" >
                    <div className="p-4 content">
                        <Switch>
                            <Route path='/tables/datatable' component={Datatable} />
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/forms/sample-forms' component={SampleFormPage} />
                            <Route path='/forms/default-forms' component={DefaultFormPage} />
                            <Route path='/forms/sliders' component={SliderPage} />
                            <Route path='/tables/datatable' component={Datatable} />
                            <Route path='/tables/regular' component={RegularTable} />
                            <Route path='/forms/datepicker' component={DatePickerPage} />
                            <Route path='/forms/switches' component={SwitchPage} />
                            <Route path='/forms/formsteps' component={FormStepsPage} />
                            <Route path='/tables/sidebar-category' component={SidebarCategoryTable} />
                            <Route path='/pricing' component={PricingPage} />
                            <Route path='/terms' component={TermsPage} />
                            <Route path='/doc' component={DocumentationPage} />
                            <Route path="/ui-elements" render={(props) =>
                                <UIScreenPage>
                                    <Switch>
                                        <Route path="/ui-elements/badges" component={Badges} />
                                        <Route path="/ui-elements/dropdowns" component={Dropdowns} />
                                    </Switch>
                                </UIScreenPage>
                            } />
                        </Switch>
                    </div>
                    <input type="checkbox" id="collapsing" className="d-none" onChange={handleCollapse} checked={collapsed} />
                    <input type="checkbox" id="fixsidebar" className="d-none" onChange={handleFixSidebar} checked={fixedSidebar} />
                    <input type="checkbox" id="fixnavbar" className="d-none" onChange={handlesFixNavbar} checked={fixedNavbar} />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MainLayout;