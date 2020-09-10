import * as React from 'react';
import './Tab.scss';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import Tabs from '../../Pages/MainLayout/UIScreenPage/UIElementsPages/Tabs';
import { Divider } from '@material-ui/core';

type TabItemProps = {
    activeClass? :string,
    activeTab: string,
    tabId: string,
    toggle: (tab: string) => void,
} & React.HTMLAttributes<HTMLElement>
export const TabItem: React.FC<TabItemProps> = ({activeClass="",activeTab, tabId, toggle, children, className=""}) => {  
    return  <NavItem className={activeClass && " border-0 m-0 p-0 bg-white"}>
                {activeClass ? 
                <div className={`${className} ${activeTab === tabId && `active ${activeClass}`}`}
                onClick={() => { toggle(tabId); }}>
                    {children}
                </div>
                :
                <NavLink
                className={` ${activeTab === tabId && `active`}`}
                onClick={() => { toggle(tabId); }}
                >
                {children}
                </NavLink>}
            </NavItem>    
}
type TabPanelProps = {
    activeTabId?: string,
    activeClass? :string,
    navClass?:string,
    tabContentClass?:string
    onToggle?: (tab: string) => void,
    vertical?: boolean,
    pills?: boolean,
    tabs?: {
        tabId: string,
        active?: boolean,
        label: string,
        content?: any 
    }[]
} & React.HTMLAttributes<HTMLElement>

const Tab:React.FC<TabPanelProps> = ({tabs, navClass, tabContentClass="", activeClass, activeTabId = "1", onToggle, vertical, pills }) => {
    const [activeTab, setActiveTab] = React.useState(activeTabId);
    
    const toggle = (tab:string) => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    type TIProps = {
        tabId: string,
    } & React.HTMLAttributes<HTMLElement>
    const TI = (props: TIProps) => 
        <TabItem {...props} activeClass={activeClass} className={navClass} activeTab={activeTab} toggle={toggle}>
            {props.children}
        </TabItem>
    if(vertical)
    return <div className="Tab ">
                <Row>
                    <Col>
                        <Nav vertical pills={pills} tabs className={activeClass && " border-0 m-0 p-0 bg-white"}>
                            { tabs && tabs.map((item, index) => {
                                return <TI tabId={item.tabId}>
                                    {item.label}
                                </TI>
                            })
                            }
                            {
                                !tabs &&    <>
                                                <TI tabId="1">
                                                    Tab 1
                                                </TI>
                                                <TI tabId="2">
                                                    Tab 2
                                                </TI>
                                            </>
                            }

                        </Nav>
                    </Col>
                    <Col>
                        <TabContent className={`mt-3 ${tabContentClass}`} activeTab={activeTab}>
                            {tabs && tabs.map((item, index) => {
                                return  <TabPane tabId={item.tabId}>
                                            <Row>
                                                <Col sm="12">
                                                    {item.content}
                                                </Col>
                                            </Row>
                                        </TabPane>
                            })}
                            {!tabs && <>
                            <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 2 Contents</h4>
                                </Col>
                            </Row>
                            </TabPane>
                            </>}
                        </TabContent>
                    </Col>
                </Row>
            </div>
    else return <div className="Tab">
                    <Nav pills={pills} tabs className={activeClass && " border-0 m-0 p-0 bg-white"}>
                        { tabs && tabs.map((item, index) => {
                                return <TI tabId={item.tabId}>
                                    {item.label}
                                </TI>
                            })
                            }
                            {
                                !tabs &&    <>
                                                <TI tabId="1">
                                                    Tab 1
                                                </TI>
                                                <TI tabId="2">
                                                    Tab 2
                                                </TI>
                                            </>
                            }
                    </Nav>
                        <TabContent className="mt-3" activeTab={activeTab}>
                        {tabs && tabs.map((item, index) => {
                                return  <TabPane tabId={item.tabId}>
                                            <Row>
                                                <Col sm="12">
                                                    {item.content}
                                                </Col>
                                            </Row>
                                        </TabPane>
                            })}
                            {!tabs && <>
                            <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 2 Contents</h4>
                                </Col>
                            </Row>
                            </TabPane>
                            </>}
                        </TabContent>
                    </div>
}

export default Tab;