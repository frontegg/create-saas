import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Avatar, Slider } from '@material-ui/core';
import ProgressBar from '../ProgressBar';
import { IProjectStatus } from './type';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    content: {
      width: '100%',
      marginLeft: '1rem'
    },
    avatarBorder: {
      boxShadow: '0 0 0 3px rgba(66,153,225,.5)'
    }
  })
);

const ProjectStatusComponent = ({ title, desc, img, value }: IProjectStatus) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Avatar className={classes.avatarBorder} alt="Remy Sharp" src={img} />
      <div className={classes.content}>
        <div className='font-weight-bold'>{title}</div>
        <div >{desc}</div>
        <ProgressBar value={value} />
      </div>
    </Paper>
  )
}

export default ProjectStatusComponent