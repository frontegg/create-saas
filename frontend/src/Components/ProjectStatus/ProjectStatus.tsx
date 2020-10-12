import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Avatar } from '@material-ui/core';
import { ProgressBar } from '../ProgressBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    content: {
      width: '100%',
      marginLeft: '1rem',
    },
    avatarBorder: {
      boxShadow: '0 0 0 3px rgba(66,153,225,.5)',
    },
  }),
);

export type ProjectStatusProps = {
  title: string;
  description: string;
  img: string;
  alt?: string;
  value: number;
};

const ProjectStatus = (props: ProjectStatusProps) => {
  const { title, description, img, alt = '', value } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Avatar className={classes.avatarBorder} alt={alt} src={img} />
      <div className={classes.content}>
        <div className='font-weight-bold'>{title}</div>
        <div>{description}</div>
        <ProgressBar value={value} />
      </div>
    </Paper>
  );
};

export { ProjectStatus };
