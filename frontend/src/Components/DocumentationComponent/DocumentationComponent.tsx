import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import InstallationComponent from './InstallationComponent'
import ChangeLogComponent from './ChangeLogComponent'
import CodeStructureComponent from './CodeStructureComponent'
import FAQComponent from './FAQComponent'
import CreditsComponent from './CreditsComponent'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'white',

  },
  activeTab: {
    borderBottom: 'solid 2px #007bff',
    color: 'black',
    cursor: 'pointer',
    fontWeight: 700,
    padding: '1rem'
  },
  tab: {
    cursor: 'pointer',
    color: 'black',
    fontWeight: 700,
    padding: '1rem'
  }

});

const credits = [
  {
    href: 'https://reactjs.org/',
    name: 'React',
    desc: 'A JavaScript library for building user interfaces'
  },
  {
    href: 'https://reactjs.org/',
    name: 'Redux',
    desc: 'A Predictable State Container for JS Apps'
  },
  {
    href: 'https://reactjs.org/',
    name: 'React Redux',
    desc: 'Official React bindings for Redux'
  },
  {
    href: 'https://reactjs.org/',
    name: 'Google fonts',
    desc: 'Making the web more beautiful, fast, and open through great typography'
  },
  {
    href: 'https://reactjs.org/',
    name: 'React',
    desc: 'A JavaScript library for building user interfaces'
  },
  {
    href: 'https://reactjs.org/',
    name: 'Redux',
    desc: 'A Predictable State Container for JS Apps'
  },
  {
    href: 'https://reactjs.org/',
    name: 'React Redux',
    desc: 'Official React bindings for Redux'
  },
  {
    href: 'https://reactjs.org/',
    name: 'Google fonts',
    desc: 'Making the web more beautiful, fast, and open through great typography'
  }
]

const importantFolders = [
  {
    path: 'src/components',
    desc: 'Includes all the components ands widgets included in the template'
  },
  {
    path: 'src/css',
    desc: 'Includes CSS files'
  },
  {
    path: 'src/layouts',
    desc: 'Includes all layouts and structural views'
  },
  {
    path: 'src/css/layouts',
    desc: 'Includes CSS for all the included layouts'
  },
  {
    path: 'src/css/components',
    desc: 'Includes CSS for all the included components'
  },
  {
    path: 'src/functions',
    desc: 'Includes helpers and functions used in the template'
  },
  {
    path: 'src/json',
    desc: 'Includes sample json files with data used in some views and components'
  },
  {
    path: 'src/reducers',
    desc: 'Includes redux reducers used in the app'
  },
  {
    path: 'src/reducers/navigation',
    desc: ' Includes menus and navigation files that are used in the left sidebar and top navigation components'
  },
  {
    path: 'src/pages',
    desc: 'Includes all pages and sample views'
  },
  {
    path: 'public',
    desc: 'Includes all the static assets and content used in the template'
  }
]

const importantFiles = [
  {
    path: 'src/reducers/index.js',
    desc: 'Redux config and global store'
  },
  {
    path: 'tailwind.config.js',
    desc: 'Tailwind CSS default configuration'
  },
  {
    path: 'src/pages/index.js',
    desc: 'Template index file'
  },
  {
    path: 'src/pages/_app.js',
    desc: 'Next.js custom App file. All CSS files are imported here'
  },
  {
    path: 'src/pages/_document.js',
    desc: 'Next.js custom Document file. Custom HTML meta tags are defined here'
  },
]

const tabs = [
  'INSTALLATION',
  // 'CODE STRUCTURE',
  'FAQ',
  'CREDITS',
  'LOGS'
]

const DocumentationComponent = (props: any) => {
  const [activeTab, setActiveTab] = useState(tabs[1]);
  const classes = useStyles();

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  }



  return (
    <div className={classes.root}>
      <Nav >
        {tabs.map((tab: string) =>
          <NavItem key={tab}>
            <NavLink
              className={activeTab === tab ? classes.activeTab : classes.tab}
              onClick={() => { toggle(tab); }}
            >
              {tab}
            </NavLink>
          </NavItem>
        )}
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="INSTALLATION">
          <InstallationComponent />
        </TabPane>
        <TabPane tabId="LOGS">
          <ChangeLogComponent data={{ date: 'Jul 25, 2020', status: 'RELEASE', update: ['Initial release', 'Published template at this demo url'] }} />
        </TabPane>
        {/* <TabPane tabId="CODE STRUCTURE">
          <CodeStructureComponent importantFiles={importantFiles} importantFolders={importantFolders} />
        </TabPane> */}
        <TabPane tabId="FAQ">
          <FAQComponent />
        </TabPane>
        <TabPane tabId="CREDITS">
          <CreditsComponent credits={credits} />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default DocumentationComponent