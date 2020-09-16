import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { stateType } from '../../Components/SettingsButton/types';
import { HuePicker } from 'react-color';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


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
    paddingTop: '1.2rem'
  }
})


const SettingsSidebar = ({ state, toggleDrawer, palletType, settings, handleChangeNavbar, handleThemeChange }:
  {
    state: boolean,
    toggleDrawer: (open: boolean) => void,
    palletType: string,
    handleThemeChange: (value: 'light' | 'dark' | 'navbar' | 'sidebar') => void,
    settings: Array<{ label: string, state: stateType<boolean> }>,
    handleChangeNavbar: (value: string, param: string, theme: string) => void
  }) => {
  const [color, setColor] = React.useState({
    background: '#fff',
    txt: '#000',
    search: '#fff',
    textSidebar: '#000',
    backgroundSidebar: '#fff',
    activeTab: '#2196f3',
    openSidebar: false,
    openNavbar: false
  })
  const classes = useStyles()

  return (
    <Drawer anchor={'right'} open={state} onClose={() => toggleDrawer(false)} >
      <div className={classes.header}>SETTINGS</div>
      <List className={classes.list}>
        {[
          { text: 'Dark background', id: 'dark' },
          { text: 'Light background', id: 'light' },
          { text: 'Dark navbar', id: 'navbar' },
          { text: 'Dark sidebar', id: 'sidebar' }
        ].map((el: any) => (
          <ListItem button disabled={palletType === el.id} key={el.text} onClick={() => handleThemeChange(el.id)}>
            <ListItemText primary={el.text} />
          </ListItem>
        ))}
        {settings.map((item: any) => {
          const [state, setState] = item.state;
          return (
            <ListItem>
              <ListItemText primary={item.label} />
              <Switch
                checked={state}
                onChange={() => setState(!state)}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItem>
          )
        })}
        <ListItem button onClick={() => setColor((prevState: any) => ({ ...prevState, openNavbar: !prevState.openNavbar }))}>
          <ListItemText primary="Custom Navbar" />
          {color.openNavbar ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={color.openNavbar} timeout="auto" unmountOnExit>
          <ListItem>
            Background navigation
                </ListItem>
          <ListItem>
            <HuePicker
              color={color.background}
              onChangeComplete={(color) => (
                handleChangeNavbar(color.hex, '--custom-nav-bg', 'customNavbar'),
                setColor((prevState: any) => ({ ...prevState, background: color.hex }))
              )} />
          </ListItem>
          <ListItem>
            Text navigation
                </ListItem>
          <ListItem>
            <HuePicker
              color={color.txt}
              onChangeComplete={(color) => (
                handleChangeNavbar(color.hex, '--custom-nav-txt', 'customNavbar'),
                setColor((prevState: any) => ({ ...prevState, txt: color.hex }))
              )} />
          </ListItem>
          <ListItem>
            Search navigation panel
                </ListItem>
          <ListItem>
            <HuePicker
              color={color.search}
              onChangeComplete={(color) => (
                handleChangeNavbar(color.hex, '--custom-nav-search', 'customNavbar'),
                setColor((prevState: any) => ({ ...prevState, search: color.hex }))
              )} />
          </ListItem>
        </Collapse>

        <ListItem button onClick={() => setColor((prevState: any) => ({ ...prevState, openSidebar: !prevState.openSidebar }))}>
          <ListItemText primary="Custom Sidebar" />
          {color.openSidebar ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={color.openSidebar} timeout="auto" unmountOnExit>

          <ListItem>
            Text sidebar
                </ListItem>
          <ListItem>
            <HuePicker
              color={color.textSidebar}
              onChangeComplete={(color) => (
                handleChangeNavbar(color.hex, '--custom-sidebar-txt', 'customSidebar'),
                setColor((prevState: any) => ({ ...prevState, textSidebar: color.hex }))
              )} />
          </ListItem>
          <ListItem>
            Background sidebar
                </ListItem>
          <ListItem>
            <HuePicker
              color={color.backgroundSidebar}
              onChangeComplete={(color) => (
                handleChangeNavbar(color.hex, '--custom-sidebar-bg', 'customSidebar'),
                setColor((prevState: any) => ({ ...prevState, backgroundSidebar: color.hex }))
              )} />
          </ListItem>
          <ListItem>
            Active tab sidebar
                </ListItem>
          <ListItem>
            <HuePicker
              color={color.activeTab}
              onChangeComplete={(color) => (
                handleChangeNavbar(color.hex, '--custom-sidebar-active-tab', 'customSidebar'),
                setColor((prevState: any) => ({ ...prevState, activeTab: color.hex }))
              )} />
          </ListItem>
        </Collapse>
      </List>
    </Drawer>
  )
}

export default SettingsSidebar