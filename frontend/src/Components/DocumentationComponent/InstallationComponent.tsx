import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
  marginLeft: {
    marginLeft: '1rem'
  },
  content: {
    marginTop: '2rem'
  },
  textHeader: {
    fontSize: '1.30rem',
    fontWeight: 700
  }
});

const InstallationComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textOpacity}>INSTALLATION INSTRUCTIONS</div>
      <div className={classes.textHeader} >FRONTEGG installation instructions</div>
      <div className={classes.content}>
        <div className="">
          <b>FRONTEGG</b> is an advanced, responsive admin template built with <a href=''> React</a>,<a href=''> Redux </a>,<a href=''> Next.js </a>,<a href=''> Material ui</a> and <a href=''> Tailwind CSS</a>.<br />
          <br />
          It includes 2 different layouts, 2 background, 2 navbar and left sidebar color styles, 100+ components in every layout and lots of widgets and custom made reusable components to help you kickstart your next React project or application.
          <br />
          <br />
          <br />
          To install, first make sure <code> node </code>,<code>npm</code>  and <code>yarn</code> are installed in your system.
           If they are not installed, you can get <code> node</code> and <code> npm</code> <a href=''>here</a> and <code>yarn</code> <a href=''> here</a>.
           <br />
          <br />
          <br />
          To check if they are installed correctly, run the following commands, which should print at least the following versions.
            <br />
          <ol className={classes.marginLeft}>
            <li>
              <code> node -v </code> v10.16.1
              </li>
            <li>
              <code> npm -v </code> 6.14.3
              </li>
            <li>
              <code> yarn -v </code> 1.22.4
              </li>
          </ol>
          <br />
          <br />
          <b> FRONTEGG</b> is 100% ready to use. Just unzip the included files and run the following commands:
          <br />
          <ol className={classes.marginLeft}>
            <li>
              <code> yarn install </code> to install all the required dependencies
              </li>
            <li>
              <code> yarn dev </code> to run the development server
              </li>
            <li>
              Open <code> http://localhost:3000 </code>
            </li>
          </ol>
          <br />
          <br />
          To build and run a production ready bundle, run the following commands:
          <ol className={classes.marginLeft}>
            <li>
              <code> yarn build </code>
            </li>
            <li>
              <code> yarn start </code>to preview the generated files
              </li>
            <li>
              To optimize the css file sizes, we recommend you uncomment the  <code> purge </code>
              option available in the <code> tailwind.config.js </code>  file at <code> line 3 </code>.This will decrease the css file size by around 90%.
            </li>
          </ol>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.textOpacity}>TEMPLATE STRUCTURE</div>
        <Typography variant="h6" >Structural elements available in the template</Typography>
        <br />
        <br />
        The template includes the following structural elements:
      <br />
        <ul className={classes.marginLeft}>
          <li>
            Navbar
      </li>
          <li>
            Left sidebar
      </li>
          <li>
            Right sidebar
      </li>
          <li>
            Main content section
      </li>
        </ul>
      </div>
    </div>

  );
}

export default InstallationComponent