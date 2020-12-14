import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
    },
    badge: {
      backgroundColor: '#2196f3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: 'white',
      height: '25px',
      width: '25px',
    },
    content: {
      margin: '0  0 1rem 1rem',
    },
    line: {
      backgroundColor: '#eee',
      width: '4px',
      height: '80%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
    },
  }),
);

interface ActivitiesProps {
  title: string;
  description: string;
  status: string;
  value: number;
}

const Activities = (props: ActivitiesProps): React.ReactElement => {
  const { title, description, value, status } = props;
  const { root, badge, line, content } = useStyles();
  return (
    <Paper elevation={0} className={root}>
      <div>
        <div className={badge}>{value}</div>
        <div className={line} />
      </div>
      <div className={content}>
        <div className='font-weight-bold'>{title}</div>
        <div>
          {description}
          <br />
          {status}
        </div>
      </div>
    </Paper>
  );
};

export default Activities;
