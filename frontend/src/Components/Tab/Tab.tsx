import React from 'react';
import './Tab.scss';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';

type TabItemProps = {
  activeClass?: string;
  activeTab: string;
  tabId: string;
  toggle: (tab: string) => void;
} & React.HTMLAttributes<HTMLElement>;

export const TabItem: React.FC<TabItemProps> = ({
  activeClass = '',
  activeTab,
  tabId,
  toggle,
  children,
  className = '',
}) => {
  return (
    <NavItem className={activeClass && ' border-0 m-0 p-0 bg-white'}>
      {activeClass ? (
        <div
          className={`${className} cursor-pointer ${activeTab === tabId ? `active ${activeClass}` : ''}`}
          onClick={() => {
            toggle(tabId);
          }}>
          {children}
        </div>
      ) : (
        <NavLink
          className={`${className} cursor-pointer ${activeTab === tabId ? `active` : ''}`}
          onClick={() => {
            toggle(tabId);
          }}>
          {children}
        </NavLink>
      )}
    </NavItem>
  );
};

type TabPanelProps = {
  activeTabId?: string;
  activeClass?: string;
  navClass?: string;
  tabContentClass?: string;
  onToggle?: (tab: string) => void;
  vertical?: boolean;
  verticalIcons?: boolean;
  pills?: boolean;
  tabs?: {
    tabId: string;
    active?: boolean;
    label: JSX.Element | string;
    content?: any;
  }[];
} & React.HTMLAttributes<HTMLElement>;

const DefaultTab: React.FC<TabPanelProps> = ({
  tabs,
  navClass,
  tabContentClass = '',
  activeClass,
  activeTabId = '1',
  onToggle,
  vertical,
  pills,
  verticalIcons = true,
}) => {
  const [activeTab, setActiveTab] = React.useState(activeTabId);

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  type TIProps = {
    tabId: string;
  } & React.HTMLAttributes<HTMLElement>;
  const TI = (props: TIProps) => (
    <TabItem {...props} activeClass={activeClass} className={navClass} activeTab={activeTab} toggle={toggle}>
      {props.children}
    </TabItem>
  );
  if (vertical)
    return (
      <div className='Tab d-flex flex-row'>
        <Nav
          vertical
          pills={pills}
          tabs
          className={`${pills ? 'border-0' : ''}  ${activeClass && ' border-0 m-0 p-0 bg-white'}`}>
          {tabs &&
            tabs.map((item, index) => {
              return (
                <TI key={index} {...item} tabId={item.tabId}>
                  {verticalIcons ? (
                    <div className='text-center'>{item.label}</div>
                  ) : (
                    <div className='d-flex align-items-center justify-content-between'>{item.label}</div>
                  )}
                </TI>
              );
            })}
          {!tabs && (
            <>
              <TI tabId='1'>Tab 1</TI>
              <TI tabId='2'>Tab 2</TI>
            </>
          )}
        </Nav>
        <TabContent className={`ml-1 ${tabContentClass}`} activeTab={activeTab}>
          {tabs &&
            tabs.map((item, index) => {
              return (
                <TabPane key={index} tabId={item.tabId}>
                  <Row>
                    <Col sm='12'>{item.content}</Col>
                  </Row>
                </TabPane>
              );
            })}
          {!tabs && (
            <>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId='2'>
                <Row>
                  <Col sm='12'>
                    <h4>Tab 2 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
            </>
          )}
        </TabContent>
      </div>
    );
  else
    return (
      <div className='Tab'>
        <Nav
          pills={pills}
          tabs
          className={`${pills ? 'border-0' : ''}  ${activeClass && ' border-0 m-0 p-0 bg-white'}`}>
          {tabs &&
            tabs.map((item, index) => {
              return (
                <TI key={index} {...item} tabId={item.tabId}>
                  {verticalIcons ? (
                    <div className='text-center'>{item.label}</div>
                  ) : (
                    <div className='d-flex align-items-center justify-content-between'>{item.label}</div>
                  )}
                </TI>
              );
            })}
          {!tabs && (
            <>
              <TI tabId='1'>Tab 1</TI>
              <TI tabId='2'>Tab 2</TI>
            </>
          )}
        </Nav>
        <TabContent className='mt-3' activeTab={activeTab}>
          {tabs &&
            tabs.map((item, index) => {
              return (
                <TabPane key={index} tabId={item.tabId}>
                  <Row>
                    <Col sm='12'>{item.content}</Col>
                  </Row>
                </TabPane>
              );
            })}
          {!tabs && (
            <>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId='2'>
                <Row>
                  <Col sm='12'>
                    <h4>Tab 2 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
            </>
          )}
        </TabContent>
      </div>
    );
};

export const VTabs: React.FC<TabPanelProps> = (props) => <DefaultTab {...props} vertical />;
export const UTabs: React.FC<TabPanelProps> = (props) => (
  <DefaultTab {...props} navClass='btn border-0 rounded-0' activeClass={`${props.activeClass} underlined`} />
);
export const ITabs: React.FC<TabPanelProps> = (props) => {
  return <DefaultTab {...props} verticalIcons={false} pills />;
};

export default DefaultTab;
