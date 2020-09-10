import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ICodeStructureComponent, ICodeStructure } from './types'

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
  },
  importantTxt: {
    backgroundColor: '#f5f5f5',
    fontWeight: 600,
    padding: '0.2rem',
    width: 'fit-content'
  },
  grayBackground: {
    backgroundColor: '#f5f5f5'
  }
});

const CodeStructureComponent = ({ importantFolders, importantFiles }: ICodeStructureComponent) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textOpacity}>CODE STRUCTURE</div>
      <div className={classes.textHeader}>File and folder code structure</div>
      <div className={classes.content}>
        D-board uses the default <a href=''>Next.js</a> file and folder code structure. For more information on
                 the project and to familiarize yourself with the file and folder structure used in a  <a href=''>Next.js</a> application,please go to the Next.js website.
      </div>
      <div className={classes.content}>
        <div className={classes.textOpacity}>NAMING CONVENTIONS</div>
        <div className={classes.textHeader}>File and folder definitions and naming conventions used in the template</div>
        <div className={classes.content}>
          All pages are located in the src/pages folder. There are no restrictions on where you put your pages, so feel free to modify this naming convention.<br /><br />
          All components and widgets are located in thesrc/components folder.<br /><br />
          All layouts and structural views are located in thesrc/layouts folder.<br /><br />
          CSS files are located in thesrc/css folder.<br /><br />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.textOpacity}>FOLDERS</div>
        <div className={classes.textHeader}>Important folders in the template</div>
      </div>
      <div className={classes.content}>
        <ul className={classes.marginLeftTop}>
          {importantFolders.map((folder: ICodeStructure, i: number) =>

            <li key={i} className={classes.marginBottom}>
              <div className={classes.marginBottom}>
                <div className={classes.importantTxt}>{folder.path}</div>
              </div>
              {folder.desc}
            </li>
          )}
        </ul>
      </div>
      <div className={classes.content}>
        <div className={classes.textOpacity}>FILES</div>
        <div className={classes.textHeader}>Important files in the template</div>
      </div>
      <div className={classes.content}>
        <ul className={classes.marginLeftTop}>
          {importantFiles.map((folder: ICodeStructure, i: number) =>

            <li key={i} className={classes.marginBottom}>
              <div className={classes.marginBottom}>
                <div className={classes.importantTxt}>{folder.path}</div>
              </div>
              {folder.desc}
            </li>
          )}
        </ul>
      </div>
      <div className={classes.content}>
        <div className={classes.textOpacity}>FOLDER TREE</div>
        <div className={classes.textHeader}>All folders</div>
      </div>
      <div className={classes.content}>
        <pre className={classes.grayBackground}>
          ├── public<br />
          │&nbsp;&nbsp; ├── assets<br />
          │&nbsp;&nbsp; │&nbsp;&nbsp; └── faces<br />
          │&nbsp;&nbsp; ├── icons<br />
          │&nbsp;&nbsp; ├── images<br />
          │&nbsp;&nbsp; │&nbsp;&nbsp; └── products<br />
          │&nbsp;&nbsp; ├── logos<br />
          │&nbsp;&nbsp; ├── pages<br />
          │&nbsp;&nbsp; │&nbsp;&nbsp; └── error-page<br />
          │&nbsp;&nbsp; └── screenshots<br />
          └── src<br />
          &nbsp;&nbsp;  ├── components<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── alerts<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── backdrop<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── badges<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── breadcrumbs<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── buttons<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── charts<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── chat<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── circle<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── coming-soon<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── dashboard<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── datatable<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── datepicker<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── documentation<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── drag-and-drop<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── dropdowns<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── dropzone<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── e-commerce<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── faq<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── flag<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── forms<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── hotkeys<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── inbox<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── kanban<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── landing<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── left-sidebar-1<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── lists<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── loader<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── login-1<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── login-2<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── login-3<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── maps<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── modals<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── navbar-1<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── notifications<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── pagination<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── popovers<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── pricing-tables<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── progress-bars<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── recharts<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── right-sidebar-1<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── sample-forms<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── section-title<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── sliders<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── social-feed<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── star-rating<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── steps<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── switch<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── tabs<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── tasks<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── text-editor<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── timelines<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── todo<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── tooltips<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── user-widgets<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── widget<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; └── widgets<br />
          &nbsp;&nbsp;  ├── css<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── components<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── layouts<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; └── palettes<br />
          &nbsp;&nbsp;  ├── functions<br />
          &nbsp;&nbsp;  ├── json<br />
          &nbsp;&nbsp;  ├── layouts<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── centered<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── centered-form<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; ├── empty<br />
          &nbsp;&nbsp;  │&nbsp;&nbsp; └── layout-1<br />
          &nbsp;&nbsp;  ├── pages<br />
          &nbsp;&nbsp;  └── reducers<br />
        </pre>
      </div>
    </div>

  );
}

export default CodeStructureComponent