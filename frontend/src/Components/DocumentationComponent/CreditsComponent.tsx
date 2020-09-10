import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ICredits, ICreditsComponent } from './types'

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
    marginBottom: '1rem'
  },
  boldTxt: {
    fontWeight: 600,
  },
  grayBackground: {
    backgroundColor: '#f5f5f5'
  }
});


const CreditsComponent = ({ credits }: ICreditsComponent) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textOpacity}>CREDITS</div>
      <div className={classes.textHeader}>Frameworks, scripts and dependencies used in the template</div>
      <div className={classes.content}>
        <ul className={classes.marginLeftTop}>
          {credits.map((el: ICredits, i: number) =>
            <li key={i} className={classes.marginBottom}>
              <div className={classes.marginBottom}>
                <a href={el.href} className={'credit-link'}>{el.name}</a>
              </div>
              {el.desc}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CreditsComponent