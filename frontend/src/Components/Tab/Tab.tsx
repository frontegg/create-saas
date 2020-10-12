import React from 'react';
import './Tab.scss';
import { Nav, TabContent, TabPane, Row, Col } from 'reactstrap';
import { TabItem } from './TabItem';
import classNames from 'classnames';

type TabType = {
  tabId: string;
  label: React.ReactNode;
  active?: boolean;
  content?: React.ReactNode;
};

interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  activeTabId?: string;
  activeClass?: string;
  navClass?: string;
  tabContentClass?: string;
  verticalIcons?: boolean;
  pills?: boolean;
  tabs: TabType[];
}

export const VerticalTabs: React.FC<TabsProps> = (props) => {
  const {
    tabs,
    navClass = '',
    tabContentClass = '',
    activeClass = '',
    activeTabId = '1',
    pills,
    verticalIcons = true,
  } = props;
  const [activeTab, setActiveTab] = React.useState(activeTabId);

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className='tab d-flex flex-row'>
      <Nav
        vertical
        pills={pills}
        tabs
        className={classNames({ 'border-0 m-0 p-0 bg-white': activeClass, 'border-0': pills })}>
        {tabs.map((tab: TabType, index: number) => {
          const { label, tabId } = tab;
          const klassName = verticalIcons ? 'text-center' : 'd-flex align-items-center justify-content-between';
          return (
            <TabItem
              key={index}
              tabId={tabId}
              activeClass={activeClass}
              className={navClass}
              activeTab={activeTab}
              toggle={toggle}>
              <div className={klassName}>{label}</div>
            </TabItem>
          );
        })}
      </Nav>
      <TabContent className={`ml-1 ${tabContentClass}`} activeTab={activeTab}>
        {tabs.map((tab: TabType, index: number) => {
          const { tabId, content } = tab;
          return (
            <TabPane key={index} tabId={tabId}>
              <Row>
                <Col sm='12'>{content}</Col>
              </Row>
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};

export const HorizontalTabs: React.FC<TabsProps> = (props) => {
  const { tabs, navClass = '', activeClass = '', activeTabId = '1', pills, verticalIcons = true } = props;
  const [activeTab, setActiveTab] = React.useState(activeTabId);

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className='tab'>
      <Nav pills={pills} tabs className={classNames({ 'border-0 m-0 p-0 bg-white': activeClass, 'border-0': pills })}>
        {tabs.map((tab: TabType, index: number) => {
          const { label, tabId } = tab;
          const klassName = verticalIcons ? 'text-center' : 'd-flex align-items-center justify-content-between';
          return (
            <TabItem
              key={index}
              tabId={tabId}
              activeClass={activeClass}
              className={navClass}
              activeTab={activeTab}
              toggle={toggle}>
              <div className={klassName}>{label}</div>
            </TabItem>
          );
        })}
      </Nav>
      <TabContent className='mt-3' activeTab={activeTab}>
        {tabs.map((tab: TabType, index: number) => {
          const { content, tabId } = tab;
          return (
            <TabPane key={index} tabId={tabId}>
              <Row>
                <Col sm='12'>{content}</Col>
              </Row>
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};

export const UnderlinedTabs: React.FC<TabsProps> = (props) => {
  return (
    <HorizontalTabs {...props} navClass='btn border-0 rounded-0' activeClass={`${props.activeClass} underlined`} />
  );
};

export const IconTabs: React.FC<TabsProps> = (props) => {
  return <HorizontalTabs {...props} verticalIcons={false} pills />;
};
