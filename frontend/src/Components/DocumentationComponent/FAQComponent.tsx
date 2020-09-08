import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  importantTxt: {
    backgroundColor: '#f5f5f5',
    fontWeight: 600,
    padding: '0.2rem',
    width: 'fit-content'
  },
  bigTxt: {
    fontWeight: 600,
    color: 'black',
    fontSize: '1.1rem'
  },
  grayBackground: {
    backgroundColor: '#f5f5f5'
  }
});

const FAQComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textOpacity}>CUSTOMIZATION</div>
      <div className={classes.textHeader}>Frequently asked questions</div>
      <div className={classes.content}>
        <ul className={classes.marginLeftTop}>
          <li className={classes.marginBottom}>
            <div className={classes.marginBottom}>
              <div className={classes.bigTxt}>How do I open the template?</div>
            </div>
            First, make sure the <code>create-next-app</code> package is installed. For more information go to <a href=''>this url</a>.
            Then you need to run <code>yarn install</code> to install the template followed by <code>yarn dev</code> to start the development server
            </li>
          <li className={classes.marginBottom}>
            <div className={classes.marginBottom}>
              <div className={classes.bigTxt}>I need an empty page to start developing. Where can I find one?</div>
            </div>
            Go to the <span className={classes.importantTxt}>src/pages/empty-page.js</span> file
            </li>
          <li className={classes.marginBottom}>
            <div className={classes.marginBottom}>
              <div className={classes.bigTxt}>How do I add a new page and/or route?</div>
            </div>
            FRoutes are handled automatically by <span className={classes.importantTxt}>Next.js</span>. To add a new page just add it to the <span className={classes.importantTxt}>src/pages</span> folder.
            </li>
          <li className={classes.marginBottom}>
            <div className={classes.marginBottom}>
              <div className={classes.bigTxt}>How do I set a default and/or global page layout?</div>
            </div>
            FRoutes are handled automatically by <span className={classes.importantTxt}>Next.js</span>. To add a new page just add it to the <span className={classes.importantTxt}>src/pages</span> folder.
            </li>
          <li className={classes.marginBottom}>
            <div className={classes.marginBottom}>
              <div className={classes.bigTxt}>Where can I find the colors available in the template?</div>
            </div>
            FRoutes are handled automatically by <span className={classes.importantTxt}>Next.js</span>. To add a new page just add it to the <span className={classes.importantTxt}>src/pages</span> folder.
            </li>
          <li className={classes.marginBottom}>
            <div className={classes.marginBottom}>
              <div className={classes.bigTxt}>How do I add a css file to the template?</div>
            </div>
            FRoutes are handled automatically by <span className={classes.importantTxt}>Next.js</span>. To add a new page just add it to the <span className={classes.importantTxt}>src/pages</span> folder.
            </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQComponent