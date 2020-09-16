import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { IActivitiesComponent } from './type';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex'
    },
    badge: {
      backgroundColor: '#2196f3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: 'white',
      height: '25px',
      width: '25px'
    },
    content: {
      margin: '0  0 1rem 1rem'
    },
    line: {
      backgroundColor: '#eee',
      width: '4px',
      height: '80%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px'
    }
  })
);

const ActivitiesComponent = ({ title, desc, value, status }: IActivitiesComponent) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <div>
        <div className={classes.badge}>{value}</div>
        <div className={classes.line} />
      </div>
      <div className={classes.content}>
        <div className="font-weight-bold">{title}</div>
        <div>{desc}<br />{status}</div>
      </div>
    </Paper>
  )
}

export default ActivitiesComponent