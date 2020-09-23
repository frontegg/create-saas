import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Badge, ListItemText, ListItemIcon, ListItem, List, ListSubheader, Button } from '@material-ui/core';

import { ISidebarCategory } from './types';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LabelIcon from '@material-ui/icons/Label';

import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginRight: '2rem',
    },
    margin: {
      margin: '5%',
      width: '90%',
    },
  }),
);

const ListItemIcons: React.FC<any> = ({ label }) => {
  switch (label) {
    case 'Inbox':
      return <InboxIcon />;
    case 'Sent':
      return <MailIcon />;
    case 'Important':
      return <NotificationImportantIcon />;
    case 'Drafts':
      return <DraftsIcon />;
    case 'Tags':
      return <LocalOfferIcon />;
    case 'Trash':
      return <DeleteIcon />;
    default:
      return <InboxIcon />;
  }
};

const SidebarCategory = (props: ISidebarCategory) => {
  const {
    itemsList: { buttons, categories, labels },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant='contained' size='large' color='primary' className={classes.margin}>
        Compose Email
      </Button>
      <List component='nav' aria-label='main mailbox folders'>
        {buttons.map((el: any, index: number) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <ListItemIcons label={el.label} />
            </ListItemIcon>
            <ListItemText primary={el.label} />
            <Badge color='secondary' badgeContent={el.badge} />
          </ListItem>
        ))}
      </List>
      <List
        component='nav'
        aria-label='secondary mailbox folders'
        subheader={<ListSubheader>CATEGORIES</ListSubheader>}>
        {categories.map((el: string, index: number) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <DonutLargeIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary={el} />
          </ListItem>
        ))}
      </List>
      <List component='nav' aria-label='secondary mailbox folders' subheader={<ListSubheader>LABELS</ListSubheader>}>
        {labels.map((el: string, index: number) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <LabelIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary={el} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarCategory;
