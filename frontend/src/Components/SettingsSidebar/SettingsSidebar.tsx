import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { HuePicker } from 'react-color';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  header: {
    backgroundColor: '#1976d2',
    textAlign: 'center',
    height: '4rem',
    fontSize: '1.2rem',
    color: 'white',
    fontWeight: 600,
    paddingTop: '1.2rem',
  },
});

type SettingsSidebarProps = {
  open: boolean;
  toggle: (open: boolean) => void;
  palletType: string;
  handleThemeChange: (value: 'light' | 'dark' | 'navbar' | 'sidebar') => void;
  settings: { label: string; state: any }[];
  handleChangeNavbar: (value: string, param: string, theme: string) => void;
};

const SettingsSidebar = (props: SettingsSidebarProps) => {
  const { open, toggle, palletType, settings, handleChangeNavbar, handleThemeChange } = props;
  const [styles, setStyles] = React.useState({
    background: '#fff',
    txt: '#000',
    search: '#fff',
    textSidebar: '#000',
    backgroundSidebar: '#fff',
    activeTab: '#2196f3',
    openSidebar: false,
    openNavbar: false,
  });
  const { background, openNavbar, txt, search, activeTab, openSidebar, backgroundSidebar, textSidebar } = styles;
  const classes = useStyles();

  return (
    <Drawer anchor={'right'} open={open} onClose={() => toggle(false)}>
      <div className={classes.header}>SETTINGS</div>
      <List className={classes.list}>
        {[
          { text: 'Dark background', id: 'dark' },
          { text: 'Light background', id: 'light' },
          { text: 'Dark navbar', id: 'navbar' },
          { text: 'Dark sidebar', id: 'sidebar' },
        ].map(({ id, text }: any) => (
          <ListItem button disabled={palletType === id} key={text} onClick={() => handleThemeChange(id)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {settings.map(({ state: itemState, label }: any) => {
          const [state, setState] = itemState;
          return (
            <ListItem key={label}>
              <ListItemText primary={label} />
              <Switch
                checked={state}
                onChange={() => setState(!state)}
                color='primary'
                name='checkedB'
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItem>
          );
        })}
        <ListItem
          button
          onClick={() => setStyles((prevState: any) => ({ ...prevState, openNavbar: !prevState.openNavbar }))}>
          <ListItemText primary='Custom Navbar' />
          {openNavbar ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openNavbar} timeout='auto' unmountOnExit>
          <ListItem>Background navigation</ListItem>
          <ListItem>
            <HuePicker
              color={background}
              onChangeComplete={({ hex }) => {
                handleChangeNavbar(hex, '--custom-nav-bg', 'customNavbar');
                setStyles((prevState: any) => ({ ...prevState, background: hex }));
              }}
            />
          </ListItem>
          <ListItem>Text navigation</ListItem>
          <ListItem>
            <HuePicker
              color={txt}
              onChangeComplete={({ hex }) => {
                handleChangeNavbar(hex, '--custom-nav-txt', 'customNavbar');
                setStyles((prevState: any) => ({ ...prevState, txt: hex }));
              }}
            />
          </ListItem>
          <ListItem>Search navigation panel</ListItem>
          <ListItem>
            <HuePicker
              color={search}
              onChangeComplete={({ hex }) => {
                handleChangeNavbar(hex, '--custom-nav-search', 'customNavbar');
                setStyles((prevState: any) => ({ ...prevState, search: hex }));
              }}
            />
          </ListItem>
        </Collapse>

        <ListItem
          button
          onClick={() => setStyles((prevState: any) => ({ ...prevState, openSidebar: !prevState.openSidebar }))}>
          <ListItemText primary='Custom Sidebar' />
          {openSidebar ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openSidebar} timeout='auto' unmountOnExit>
          <ListItem>Text sidebar</ListItem>
          <ListItem>
            <HuePicker
              color={textSidebar}
              onChangeComplete={({ hex }) => {
                handleChangeNavbar(hex, '--custom-sidebar-txt', 'customSidebar');
                setStyles((prevState: any) => ({ ...prevState, textSidebar: hex }));
              }}
            />
          </ListItem>
          <ListItem>Background sidebar</ListItem>
          <ListItem>
            <HuePicker
              color={backgroundSidebar}
              onChangeComplete={({ hex }) => {
                handleChangeNavbar(hex, '--custom-sidebar-bg', 'customSidebar');
                setStyles((prevState: any) => ({ ...prevState, backgroundSidebar: hex }));
              }}
            />
          </ListItem>
          <ListItem>Active tab sidebar</ListItem>
          <ListItem>
            <HuePicker
              color={activeTab}
              onChangeComplete={({ hex }) => {
                handleChangeNavbar(hex, '--custom-sidebar-active-tab', 'customSidebar');
                setStyles((prevState: any) => ({ ...prevState, activeTab: hex }));
              }}
            />
          </ListItem>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SettingsSidebar;
