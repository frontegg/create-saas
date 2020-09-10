import * as React from 'react';
import { Input } from 'reactstrap';
import './NavBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../ProfileImage';
import Drawer from '@material-ui/core/Drawer';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelSwitch from '../../Components/Switch';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';


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
});

const NavBar = ({ className, handleThemeChange, palletType, settings }: any) => {
    const [state, setState] = React.useState(false);
    const classes = useStyles();
    const toggleDrawer = (open: boolean) => {
        setState(open);
    };

    return (
        <div className={`NavBar ${className}`}>
            <div className="logo d-none d-md-flex">
                <a className="d-flex flex-row align-items-center justify-content-start" href="/">
                    <img src="/images/logo.png" alt="" />
                    <span>Frontegg</span>
                </a>
            </div>
            <label htmlFor="collapsing" className="ml-4">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </label>
            <svg className="search-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <Input className="search-field" type="text" placeholder="Search..." />
            <ProfileImage image="/images/profile.jpeg" />
            <IconButton color="primary" onClick={() => toggleDrawer(true)}>
                <SettingsIcon fontSize="inherit" />
            </IconButton>
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
                                <LabelSwitch
                                    className="w-100 p-2"
                                    label=""
                                    text_label={item.label}
                                    name=""
                                    track_color="rgb(144, 202, 249)"
                                    slider_color="rgb(33, 150, 243)"
                                    check={state}
                                    value={state}
                                    onChange={() => setState(!state)} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </div>
    )
}

export default NavBar