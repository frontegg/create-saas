import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { IChangeLogComponent } from './types'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '2rem 1rem'

  },
  textOpacity: {
    opacity: 0.5,
    fontSize: '0.7rem',
    fontWeight: 300
  },
  marginLeftTop: {
    marginLeft: '1rem',
    marginTop: '1rem'
  },
  content: {
    marginTop: '2rem'
  },
  status: {
    borderRadius: '.5rem',
    backgroundColor: '#4caf50',
    width: 'fit-content',
    color: 'white',
    padding: '0 0.5rem',
    fontWeight: 700,
    marginTop: '1rem'
  },
  textHeader: {
    fontSize: '1.30rem',
    fontWeight: 700
  },
  marginBottom: {
    marginBottom: '0.5rem'
  }
});

const ChangeLogComponent = ({ data }: { data: IChangeLogComponent }) => {
  const classes = useStyles();
  const { date, status, update } = data

  return (
    <div className={classes.root}>
      <div className={classes.textOpacity}>CHANGE LOG</div>
      <div className={classes.textHeader}>Latest updates</div>
      <div className={classes.content}>
        <Typography variant="h6" >{date}</Typography>
        <div className={classes.status}>{status}</div>
        <ul className={classes.marginLeftTop}>
          {update.map((el: string) =>
            <li key={el} className={classes.marginBottom}>{el}</li>
          )}
        </ul>
      </div>
    </div>

  );
}

export default ChangeLogComponent