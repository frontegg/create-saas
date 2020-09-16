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
import LineChartComponent from '../../Components/Charts/LineChart';
import PieChartComponent from '../../Components/Charts/PieChart';
import BarChartComponent from '../../Components/Charts/BarChart';
import ScatterChartComponent from '../../Components/Charts/ScatterChart';
import Buttons from './UIScreenPage/UIElementsPages/Buttons';
import Paginations from './UIScreenPage/UIElementsPages/Paginations';
import Images from './UIScreenPage/UIElementsPages/Images';
import Lists from './UIScreenPage/UIElementsPages/Lists';
import ProgressBars from './UIScreenPage/UIElementsPages/ProgressBars';
import Alerts from './UIScreenPage/UIElementsPages/Alerts';
import Alert from '../../Components/Alert';
import NotificationContext,{NotificationContextProvider, NotificationContextType} from './NotificationContext';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Notifications from './UIScreenPage/UIElementsPages/Notifications';
import Tabs from './UIScreenPage/UIElementsPages/Tabs';
import Typography from './UIScreenPage/UIElementsPages/Typography';
import BreadcrumbsPage from './UIScreenPage/UIElementsPages/Breadcrumbs';



const MainLayout: React.FC = () => {

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        console.log(width, height)
        return {
            width,
            height
        };
    }


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

    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
    const handleResize = () => {
        // setWindowDimensions(getWindowDimensions());
    }


    const [hovered, hoverExpand] = React.useState<boolean>(false);

    const handleFixeHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (collapsed)

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

    const context = React.useContext<NotificationContextType>(NotificationContext);
    React.useEffect(() => {
        if (windowDimensions.width < 768)
            collapse(true);
        else collapse(false);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
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
        document.getElementById('root')?.classList.add(`theme-light`)
    }, [])

    const handleThemeChange = (value: 'light' | 'dark' | 'navbar' | 'sidebar') => {
        setPalletType(value)
        document.getElementById('root')!.className = ''
        document.getElementById('root')?.classList.add(`theme-${value}`)
    };

    const handleChangeNavbar = (value: string, param: string, theme: string) => {
        document.getElementById('root')?.classList.add(`theme-${theme}`)
        const app: HTMLElement | null = document.querySelector('.app')
        app?.style.setProperty(param, value)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="position-fixed fixed-bottom">
            {context && 
                            Object.entries(context.notifications).map(([key, value]) => {
                            if (value.position === "fixed-bottom") return <Alert 
                                    notification_key={key}
                                    {...value}
                                    className={` position-realtive ${value.className}`} 
                                    style={{zIndex: 1000}}>
                                    {value.text}
                                </Alert>
                            })
                }
            </div>
            <div className="position-fixed fixed-top">
            {context && 
                            Object.entries(context.notifications).map(([key, value]) => {
                            if (value.position === "fixed-top") return <Alert 
                                    notification_key={key}
                                    {...value}
                                    className={` position-realtive ${value.className}`} 
                                    style={{zIndex: 1000}}>
                                    {value.text}
                                </Alert>
                            })
                }
            </div>
            <NotificationContainer/>
            <div className={`mainLayout ${scrolled ? "scrolled" : "onTop"} ${fixedSidebar ? "fixedSidebar" : ""} ${fixedNavbar ? "fixedNavbar" : ""}`}>
                <NavBar
                    handleChangeNavbar={handleChangeNavbar}
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
                    {context &&
                        Object.entries(context.notifications).map(([key, value]) => {
                            if (value.position === "top") return <Alert
                                notification_key={key}
                                {...value}
                                // raised={value.raised}
                                // outlined={value.outlined}
                                // borderLeft={value.borderLeft}
                                // className={` position-realtive ${value.className}`} 
                                // open={value.open} 
                                style={{ zIndex: 1000 }}>
                                {value.text}
                            </Alert>
                        })
                    }
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
                            <Route path='/doc' component={DocumentationPage} />
                            <Route path='/terms' component={TermsPage} />
                            <Route path='/pricing' component={PricingPage} />
                            <Route path="/ui-elements" render={(props) =>
                                <UIScreenPage>
                                    <Switch>
                                        <Route path="/ui-elements/alerts" component={Alerts} />
                                        <Route path="/ui-elements/badges" component={Badges} />
                                        <Route path="/ui-elements/buttons" component={Buttons} />
                                        <Route path="/ui-elements/dropdowns" component={Dropdowns} />
                                        <Route path="/ui-elements/pagination" component={Paginations} />
                                        <Route path="/ui-elements/images" component={Images} />
                                        <Route path="/ui-elements/lists" component={Lists} />
                                        <Route path="/ui-elements/progress-bar" component={ProgressBars} />
                                        <Route path="/ui-elements/notifications" component={Notifications} />
                                        <Route path="/ui-elements/tabs" component={Tabs} />
                                        <Route path="/ui-elements/typography" component={Typography} />
                                        <Route path="/ui-elements/breadcrumbs" component={BreadcrumbsPage} />
                                    </Switch>
                                </UIScreenPage>
                            } />
                            <Route path="/charts" render={(props) =>
                                <UIScreenPage>
                                    <Switch>
                                        <Route path="/charts/line-charts" component={LineChartComponent} />
                                        <Route path="/charts/scatter-charts" component={ScatterChartComponent} />
                                        <Route path="/charts/pie-charts" component={PieChartComponent} />
                                        <Route path="/charts/bar-charts" component={BarChartComponent} />
                                    </Switch>
                                </UIScreenPage>
                            } />
                        </Switch>
                    </div>
                </div>
                <SettingsButton settings={switches} />
                <input type="checkbox" id="collapsing" className="d-none" onChange={handleCollapse} checked={collapsed} />
                <input type="checkbox" id="fixsidebar" className="d-none" onChange={handleFixSidebar} checked={fixedSidebar} />
                <input type="checkbox" id="fixnavbar" className="d-none" onChange={handlesFixNavbar} checked={fixedNavbar} />
            </div>
        </ThemeProvider>
    )
}

export default MainLayout;