import React, { useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import classNames from 'classnames';
import { Alert } from '../../Components/Alert';
import Sidebar from '../../Components/Sidebar';
import NavBar from '../../Components/NavBar';
import LineChart from '../../Components/Charts/LineChart';
import PieChart from '../../Components/Charts/PieChart';
import BarChart from '../../Components/Charts/BarChart';
import ScatterChart from '../../Components/Charts/ScatterChart';
import { NotificationContext, NotificationContextType } from '../../Components/NotificationContext';

import DefaultFormPage from './FormPage';
import SliderPage from './SliderPage';
import DatePickerPage from './DatePickerPage';
import SwitchPage from './SwitchPage';
import Table from './TablePage';
import Dashboard from './Dashboard';
import UIScreenPage from './UIScreenPage';
import Badges from './UIScreenPage/UIElementsPages/Badges';
import Dropdowns from './UIScreenPage/UIElementsPages/Dropdowns';
import Buttons from './UIScreenPage/UIElementsPages/Buttons';
import Paginations from './UIScreenPage/UIElementsPages/Paginations';
import Images from './UIScreenPage/UIElementsPages/Images';
import Lists from './UIScreenPage/UIElementsPages/Lists';
import ProgressBars from './UIScreenPage/UIElementsPages/ProgressBars';
import Alerts from './UIScreenPage/UIElementsPages/Alerts';
import Notifications from './UIScreenPage/UIElementsPages/Notifications';
import Tabs from './UIScreenPage/UIElementsPages/Tabs';
import Typography from './UIScreenPage/UIElementsPages/Typography';
import BreadcrumbsPage from './UIScreenPage/UIElementsPages/Breadcrumbs';

import { useQuery, gql } from '@apollo/client';
import { ProtectedRoute, Profile } from '@frontegg/react-auth';
import { SSO } from '@frontegg/react-auth';
import * as Frontegg from '@frontegg/react';
import { MOCK_REQUESTS } from './mockRequests';

import 'react-notifications/lib/notifications.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './MainLayout.scss';

const REQUESTS = gql`
  query {
    requests {
      id
      tenantId
      url
      userAgent
      statusCode
      createdAt
    }
  }
`;

const TeamManagement = () => {
  return <Frontegg.Team />;
};

const Audits = () => {
  return <Frontegg.Audits />;
};

const Slack = () => {
  return <Frontegg.Slack rootDir={'/enterprise/slack'} />;
};

const Webhooks = () => {
  return <Frontegg.WebHooks rootDir={'/enterprise/webhooks'} />;
};

const Sso = () => {
  return <Frontegg.SsoConfiguration rootDir={'/enterprise/sso'} />;
};

const ProfilePage = () => {
  return <Profile.Page />;
};

const MainDashboard = () => {
  const { loading, error, data } = useQuery(REQUESTS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error(error);
  }

  const requests = data?.requests.length ? data.requests : MOCK_REQUESTS;

  return <Dashboard requests={requests} />;
};

const MainLayout: React.FC = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [fixedSidebar, setFixSidebar] = React.useState<boolean>(true);
  const handleFixSidebar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFixSidebar(!fixedSidebar);
  };

  const [fixedNavbar, setFixNavbar] = React.useState<boolean>(false);
  const handlesFixNavbar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFixNavbar(!fixedNavbar);
  };

  const [collapsed, collapse] = React.useState<boolean>(false);
  const handleCollapse = (event: React.ChangeEvent<HTMLInputElement>) => {
    collapse(!collapsed);
  };

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  const [hovered, hoverExpand] = React.useState<boolean>(false);

  const handleFixedHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (collapsed && fixedSidebar) {
      hoverExpand(!hovered);
    }
    if (!fixedSidebar) {
      hoverExpand(false);
    }
  };
  const context = React.useContext<NotificationContextType>(NotificationContext);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset === 0) {
      setScrolled(false);
    }
    if (window.pageYOffset > 0 && !scrolled) {
      setScrolled(true);
    }
  }, [scrolled]);

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  React.useEffect(() => {
    collapse(windowDimensions.width < 768);
  }, [windowDimensions]);

  const switches = [
    {
      label: 'Fix sidebar',
      state: [fixedSidebar, setFixSidebar],
    },
    {
      label: 'Fix navbar',
      state: [fixedNavbar, setFixNavbar],
    },
  ];

  const [palletType, setPalletType] = React.useState<'light' | 'dark' | 'navbar' | 'sidebar'>('light');
  const palette = palletType === 'navbar' || palletType === 'sidebar' ? 'light' : palletType;
  const darkTheme = createMuiTheme({
    palette: {
      type: palette,
      primary: {
        main: '#2196f3',
      },
    },
  });

  React.useEffect(() => {
    document.getElementById('root')?.classList.add('theme-light');
  }, []);

  const handleThemeChange = (value: 'light' | 'dark' | 'navbar' | 'sidebar') => {
    setPalletType(value);
    document.getElementById('root')!.className = '';
    document.getElementById('root')?.classList.add(`theme-${value}`);
  };

  const handleChangeNavbar = (value: string, param: string, theme: string) => {
    document.getElementById('root')?.classList.add(`theme-${theme}`);
    const app: HTMLElement | null = document.querySelector('.app');
    app?.style.setProperty(param, value);
  };

  const navBarClassName = !collapsed || (hovered && fixedSidebar) ? 'expanded' : 'collapsed';

  const sideBarClassName =
    !collapsed || (getWindowDimensions().width > 767 && hovered && fixedSidebar) ? 'expanded' : 'collapsed';

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='fixed fixed-bottom'>
        {Object.entries(context.notifications).map(([key, value]) => {
          if (value.position === 'fixed-bottom') {
            return (
              <Alert
                notificationKey={key}
                {...value}
                className={classNames('relative', value.className)}
                style={{ zIndex: 1000 }}>
                {value.text}
              </Alert>
            );
          }
          return null;
        })}
      </div>
      <div className='fixed fixed-top'>
        {Object.entries(context.notifications).map(([key, value]) => {
          if (value.position === 'fixed-top') {
            return (
              <Alert
                notificationKey={key}
                {...value}
                className={classNames('relative', value.className)}
                style={{ zIndex: 1000 }}>
                {value.text}
              </Alert>
            );
          }
          return null;
        })}
      </div>
      <NotificationContainer />
      <div
        className={classNames('main-layout', {
          scrolled,
          'on-top': !scrolled,
          'fixed-sidebar': fixedSidebar,
          'fixed-navbar': fixedNavbar,
        })}>
        <NavBar
          handleChangeNavbar={handleChangeNavbar}
          settings={switches}
          handleThemeChange={handleThemeChange}
          palletType={palletType}
          className={classNames(navBarClassName, {
            absolute: !fixedNavbar,
            fixed: fixedNavbar,
          })}
        />
        <Sidebar className={sideBarClassName} onMouseLeave={handleFixedHover} onMouseEnter={handleFixedHover} />
        <div className='main'>
          {Object.entries(context.notifications).map(([key, value]) => {
            if (value.position === 'top') {
              return (
                <Alert notificationKey={key} {...value} style={{ zIndex: 1000 }}>
                  {value.text}
                </Alert>
              );
            }
            return null;
          })}
          <div className='p-4 content'>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
              <ProtectedRoute path='/sso' component={SSO.Page} />
              <Route path='/dashboard' component={MainDashboard} />
              <Route path='/forms/example' component={DefaultFormPage} />
              <Route path='/forms/sliders' component={SliderPage} />
              <Route path='/forms/datepickers' component={DatePickerPage} />
              <Route path='/forms/switches' component={SwitchPage} />
              <Route path='/tables/example' component={Table} />
              <ProtectedRoute path='/enterprise/team' component={TeamManagement} />
              <ProtectedRoute path='/enterprise/audits' component={Audits} />
              <ProtectedRoute path='/enterprise/sso' component={Sso} />
              <ProtectedRoute path='/enterprise/slack' component={Slack} />
              <ProtectedRoute path='/enterprise/webhooks' component={Webhooks} />
              <ProtectedRoute path='/enterprise/profile' component={ProfilePage} />
              <Route
                path='/ui-elements'
                render={(props) => (
                  <UIScreenPage>
                    <Switch>
                      <Route path='/ui-elements/alerts' component={Alerts} />
                      <Route path='/ui-elements/badges' component={Badges} />
                      <Route path='/ui-elements/buttons' component={Buttons} />
                      <Route path='/ui-elements/dropdowns' component={Dropdowns} />
                      <Route path='/ui-elements/pagination' component={Paginations} />
                      <Route path='/ui-elements/images' component={Images} />
                      <Route path='/ui-elements/lists' component={Lists} />
                      <Route path='/ui-elements/progress-bar' component={ProgressBars} />
                      <Route path='/ui-elements/notifications' component={Notifications} />
                      <Route path='/ui-elements/tabs' component={Tabs} />
                      <Route path='/ui-elements/typography' component={Typography} />
                      <Route path='/ui-elements/breadcrumbs' component={BreadcrumbsPage} />
                    </Switch>
                  </UIScreenPage>
                )}
              />
              <Route
                path='/charts'
                render={(props) => (
                  <UIScreenPage>
                    <Switch>
                      <Route path='/charts/line-charts' component={LineChart} />
                      <Route path='/charts/scatter-charts' component={ScatterChart} />
                      <Route path='/charts/pie-charts' component={PieChart} />
                      <Route path='/charts/bar-charts' component={BarChart} />
                    </Switch>
                  </UIScreenPage>
                )}
              />
            </Switch>
          </div>
        </div>
        <input type='checkbox' id='collapsing' className='d-none' onChange={handleCollapse} checked={collapsed} />
        <input type='checkbox' id='fixsidebar' className='d-none' onChange={handleFixSidebar} checked={fixedSidebar} />
        <input type='checkbox' id='fixnavbar' className='d-none' onChange={handlesFixNavbar} checked={fixedNavbar} />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
